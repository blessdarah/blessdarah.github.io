import React from "react";
import { useRecoilValue } from "recoil";
import { paymentsAtom } from "../../recoil/atoms";

const PaymentsTable = () => {
    const payments = useRecoilValue(paymentsAtom)
    return (
        <>
            {
                payments && payments.length > 0 ?
                    <>
                        <table className="table-auto text-sm w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Amount</th>
                                    <th>Number</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((payment, id) => (
                                        <tr>
                                            <td>{id + 1}</td>
                                            <td>{payment.amount}</td>
                                            <td>{payment.phoneNumber ?? 'None'}</td>
                                            <td>{new Date(payment.created_at).toDateString()}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </>
                    :
                    <p>No transactions</p>
            }
        </>
    )
}
export default PaymentsTable
