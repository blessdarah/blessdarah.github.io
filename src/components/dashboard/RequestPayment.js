import React from "react";
import { useModalContext } from '../../contexts/ModalProvider';
import { PaymentCards } from '../../components';

const RequestPayment = () => {
    const { setShowModal, setModalContent } = useModalContext();
    const loadModal = () => {
        setModalContent(<PaymentCards />);
        setShowModal(true);
    }

    return (
        <div className="w-full max-w-4xl mx-auto text-center p-4 rounded-lg bg-red-50 border border-dashed">
            <h3 className="text-2xl text-gray-800 font-semibold my-3 text-center">Attention</h3>
            <p className="text-gray-500 text-center">You are required to pay before proceeding</p>
            <button onClick={loadModal} className='px-3 py-2 rounded outline-none bg-indigo-500 text-white text-center text-sm'>pay now</button>
        </div>
    )
}
export default RequestPayment
