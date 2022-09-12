import React, { useCallback, useEffect } from 'react';
import { DashboardContainer, DashboardTabs, RequestPayment } from '../../components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { paymentsAtom, userState } from '../../recoil/atoms';
import { supabase } from '../../supabaseClient';
import { ROUTES } from '../../routes';
import { useNavigate } from 'react-router';

const DashboardPage = () => {
    const [user, setUser] = useRecoilState(userState);
    const setPayments = useSetRecoilState(paymentsAtom)
    const navigate = useNavigate();

    const getUserData = useCallback(async () => {
        const { data, error } = await supabase.from('user_data').select().match({ code: user.id });
        if (error) {
            console.log('error: ', error);
            navigate(ROUTES.HOME);
        }
        if (data) {
            setUser({
                ...user,
                firstName: data?.firstName,
                lastName: data?.lastName,
                hasPayed: true
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


    const getUserPayments = async () => {
        const { error, data } = await supabase.from('payments').select();
        if (data) {
            console.log("payments: ", data);
            setPayments(data);
        }
        if (error) {
            console.log("payments error: ", error);
        }
    }

    useEffect(() => {
        if (!user) {
            navigate(ROUTES.LOGIN)
        }
        getUserData();
        getUserPayments();
    }, []);

    return (
        <DashboardContainer>
            <div className='w-full max-w-7xl mx-auto rounded-lg p-6 bg-gradient-to-r from-blue-200 via-indigo-100 my-8'>
                <h3 className='flex justify-between items-center'>
                    <span>Hello <span>{user.email}</span></span>
                    <button onClick={logout} className='px-3 py-2 rounded outline-none bg-indigo-500 text-white text-center text-sm'>logout</button>
                </h3>
            </div>

            {
                user.hasPayed ?
                    <DashboardTabs /> :
                    <RequestPayment />
            }
        </DashboardContainer>
    )
}
export default DashboardPage;
