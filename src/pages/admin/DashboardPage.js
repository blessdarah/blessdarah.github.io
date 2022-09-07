import React, { useCallback, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DashboardContainer, PaymentCards } from '../../components';
import { Tab } from '@headlessui/react';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';
import { supabase } from '../../supabaseClient';
import { ROUTES } from '../../routes';
import { useNavigate } from 'react-router';
import { useModalContext } from '../../contexts/ModalProvider';

const DashboardPage = () => {
    const [user, setUser] = useRecoilState(userState);
    const { setShowModal, setModalContent } = useModalContext();
    const navigate = useNavigate();
    const getUserData = useCallback(async () => {
        const { data, error } = await supabase.from('user_data').select().match({ code: user.id });
        if (error) {
            console.log('error: ', error);
            navigate(ROUTES.HOME);
        }
        if (data) {
            console.log('test data', data);
            const match = data.find(item => item.code = user.id);
            setUser({
                ...user,
                firstName: match?.firstName,
                lastName: match?.lastName
            });
            console.log('user: ', user);
        }
    });

    const logout = useCallback(async () => {
        const { error } = await supabase.auth.signOut();
        setUser(null);
        if (error) {
            throw error;
        }
        navigate(ROUTES.HOME);
    });

    const loadModal = () => {
        setModalContent(<PaymentCards />);
        setShowModal(true);
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <DashboardContainer>
            <div className='w-full max-w-7xl mx-auto rounded-lg p-6 bg-gradient-to-r from-blue-200 via-indigo-100 my-8'>
                <h3 className='flex justify-between items-center'>
                    <span>Hello <span>{user.email}</span></span>
                    <button onClick={logout} className='px-3 py-2 rounded outline-none bg-indigo-500 text-white text-center text-sm'>logout</button>
                </h3>

                <button onClick={loadModal} className='px-3 py-2 rounded outline-none bg-indigo-500 text-white text-center text-sm'>pay now</button>
            </div>
            <div>
                <a href="https://s.htr.cm/j142" target="_blank">Pay now</a>
            </div>
            <section className='w-full max-w-7xl mx-auto'>
                <Tab.Group>
                    <Tab.List>
                        <Tab className={({ selected }) => `px-3 py-2 border-b border-b-2 ${selected ? 'border-indigo-500' : 'border-transparent'}`}>
                            <i className='bx bx-note'></i>
                            Notes
                        </Tab>
                        <Tab className={({ selected }) => `px-3 py-2 border-b border-b-2 ${selected ? 'border-indigo-500' : 'border-transparent'}`}>
                            <i className='bx bx-note'></i>
                            Resources
                        </Tab>
                        <Tab className={({ selected }) => `px-3 py-2 border-b border-b-2 ${selected ? 'border-indigo-500' : 'border-transparent'}`}>
                            Videos
                        </Tab>
                        <Tab className={({ selected }) => `px-3 py-2 border-b border-b-2 ${selected ? 'border-indigo-500' : 'border-transparent'}`}>
                            Payment history
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className='bg-gray-50 px-4 py-3'>
                        <Tab.Panel>notes</Tab.Panel>
                        <Tab.Panel>resources will be here</Tab.Panel>
                        <Tab.Panel>video links will be here</Tab.Panel>
                        <Tab.Panel>Payment history</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </section>
        </DashboardContainer>
    )
}
export default DashboardPage;
