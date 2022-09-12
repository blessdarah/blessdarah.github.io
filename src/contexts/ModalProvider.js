const { createContext, useContext, useState } = require("react");
import { Dialog } from '@headlessui/react'

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [showModalDescription, setShowModalDescription] = useState(true);
    const [modalTitle, setModalTitle] = useState("Modal title");
    const [modalDescription, setModalDescription] = useState("Modal Description");
    const [modalContent, setModalContent] = useState(<p>Modal content</p>);

    const values = {
        showModal, setShowModal,
        showModalDescription, setShowModalDescription,
        modalTitle, setModalTitle,
        modalDescription, setModalDescription,
        modalContent, setModalContent
    }
    return (
        <>
            <ModalContext.Provider value={values}>
                <Dialog open={showModal} onClose={() => setShowModal(false)} className='relative z-50'>
                    <div className='w-full fixed inset-0 flex items-center justify-center p-4'>
                        <Dialog.Panel className="mx-auto max-w-6xl w-2/5 rounded bg-white border border-zinc-100">
                            <div className='relative px-3 py-2 border-b border-zinc-100'>
                                <Dialog.Title className="font-semibold">{modalTitle}</Dialog.Title>
                                {
                                    showModalDescription &&
                                    <Dialog.Description className='text-sm font-normal text-gray-400'>
                                        {modalDescription}
                                    </Dialog.Description>
                                }
                                <span className='absolute right-2 top-4 cursor-pointer text-gray-400' onClick={() => setShowModal(false)}>&times; close</span>
                            </div>

                            <div className='p-3'>
                                {modalContent}
                            </div>
                        </Dialog.Panel>
                    </div>
                </Dialog>
                {children}
            </ModalContext.Provider>
        </>
    )
}

export const useModalContext = () => useContext(ModalContext);
