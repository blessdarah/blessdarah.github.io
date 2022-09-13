import React, { useCallback, useEffect, useState } from 'react';
import { DashboardContainer, DashboardTabs, RequestPayment } from '../../components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { paymentsAtom, userState } from '../../recoil/atoms';
import { supabase } from '../../supabaseClient';
import { ROUTES } from '../../routes';
import { useNavigate } from 'react-router';

const DashboardPage = () => {
    const [user, setUser] = useRecoilState(userState);
    const [loading, setLoading] = useState(false);
    const setPayments = useSetRecoilState(paymentsAtom)
    const navigate = useNavigate();

    const getUserData = useCallback(async () => {
        const { data, error } = await supabase.from('user_data').select().match({ code: user.id });
        console.log('data: ', data);
        if (error) {
            console.log('error: ', error);
            navigate(ROUTES.HOME);
        }
        if (data) {
            const userData = {
                ...user,
                firstName: data.at(0)?.firstName,
                lastName: data.at(0)?.lastName,
                hasPayed: data.at(0).hasPayed
            }
            setUser(userData);
            console.log('user: ', userData);
        }
    });

    const logout = useCallback(async () => {
        setLoading(true);
        const { error } = await supabase.auth.signOut();
        setUser(null);
        if (error) {
            throw error;
        }
        setLoading(false);
        navigate(ROUTES.HOME);
    });


    const getUserPayments = useCallback(async () => {
        const { error, data } = await supabase.from('payments').select().match({ user_id: user.id });
        if (data) {
            console.log("payments: ", data);
            setPayments(data);
        }
        if (error) {
            console.log("payments error: ", error);
        }
    }, [])

    useEffect(() => {
        getUserData();
        getUserPayments();
    }, []);

    return (
        <DashboardContainer>
            <div className='w-full max-w-7xl mx-auto rounded-lg p-6 bg-gradient-to-r from-blue-200 via-indigo-100 my-8'>
                <h3 className='flex justify-between items-center'>
                    <span>Hello <span>{user.email}</span></span>
                    <button onClick={logout} className='px-3 py-2 rounded outline-none bg-indigo-500 text-white text-center text-sm' disabled={loading}>{loading ? 'loading...' : 'Logout'}</button>
                </h3>
            </div>

            {
                user && user.hasPayed ?
                    <DashboardTabs /> :
                    <RequestPayment />
            }
        </DashboardContainer>
    )
}
export default DashboardPage;
