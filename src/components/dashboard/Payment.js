import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRecoilState, useSetRecoilState } from "recoil";
import { paymentsAtom, userState } from "../../recoil/atoms";
import { paymentService } from "../../services"
import { supabase } from "../../supabaseClient";
import {TABLES} from "../../constants/tables"
import { useModalContext } from "../../contexts/ModalProvider";

const PaymentCards = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useRecoilState(userState);
    const setPayments = useSetRecoilState(paymentsAtom)
    const { formState: { errors }, reset, register, handleSubmit } = useForm();
    const { setShowModal} = useModalContext();

    const onSubmit = useCallback(async (formData) => {
        setLoading(true);
        formData = {
            ...formData,
            amount: Number(formData.amount),
            reference: "coding bootcamp",
            fees: false,
            conversion: false,
            country: "CM",
            message: "Payment for coding bootcamp"
        }
        try {
            const feedback = await paymentService.collect(formData);
            if (feedback.success) {
                toast.success(feedback.message, { duration: 4000 });
                // save message to payments array
                const paymentsData = {
                    phoneNumber: formData.payer,
                    transaction_code: feedback.transaction.pk,
                    amount: feedback.transaction.amount,
                    user_id: user.id
                };

                // update user info and set payment true
                setUser({ ...user, hasPayed: true });
                const {data: userDataInfo, error: userDataErr} = await supabase.from(TABLES.USER_DATA).update({ hasPayed: true }).match({ code: user.id });
                if(userDataErr) {
                    console.log('user data error: ', userDataErr);
                }else {
                    console.log('user data infor: ', userDataInfo)
                }

                const { data: result, error: insertError } = await supabase.from('payments').insert(paymentsData);

                if (insertError) {
                    console.log('could not process payment record');
                    console.log(insertError.message);
                } else {
                    // save payment data in state
                    setPayments([paymentsData]);
                    toast.success("Payment content saved securely");
                    console.log('payment data: ', result);
                    reset();
                }
            }
        } catch (error) {
            console.log("error", error);
        }
        setLoading(false);
        setShowModal(false);
    }, []);

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="service" className="text-sm text-gray-500">Select service type</label>
                    <select id="service" name="service" className="py-2 text-sm font-light w-full rounded px-1 bg-blue-50 border border-blue-100" {...register('service', { required: true })}>
                        <option value="MTN">MTN</option>
                        <option value="ORANGE">Orange</option>
                    </select>
                </div>
                <div className="mb-3">
                    <p className="text-sm text-gray-500 mb-1">Select payment plan</p>
                    <div className="border border-blue-100 px-3 py-3 rounded-lg">
                        <label htmlFor="perMonth" className="flex items-center rounded-lg text-gray-600 bg-blue-50 border border-blue-100 p-2 cursor-pointer hover:bg-blue-500 hover:text-white mb-3">
                            <input type="radio" id="perMonth" name="amount" value={5} className="mr-3" {...register('amount')} checked />
                            <span>Per month (20,000 FCFA)</span>
                        </label>
                        <label htmlFor="complete" className="flex items-center rounded-lg text-gray-600 bg-blue-50 border border-blue-100 p-2 cursor-pointer hover:bg-blue-500 hover:text-white">
                            <input type="radio" id="complete" name="amount" value={50_000} className="mr-3" {...register('amount')} />
                            <span>Complete package (50,000 FCFA)</span>
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="payer" className="text-sm text-gray-500">Phone number</label>
                    <input type="text" id="payer"
                        name="payer"
                        placeholder="Enter your phone number"
                        className="py-2 text-sm font-light w-full rounded px-1 bg-blue-50 border border-blue-100"
                        {...register('payer', { required: true })}
                    />
                    {errors.payer && <span className="text-red-400 text-xs">Phone number is required</span>}
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white text-center rounded py-2 border-indigo-400 transition-all hover:bg-blue-500 font-semibold">{loading ? 'Processing payment' : 'Pay now'}</button>
            </form>
        </section>
    )
}

export default PaymentCards;
