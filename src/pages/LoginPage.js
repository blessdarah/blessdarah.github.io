import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AppShell } from "../components"
import { ROUTES } from "../routes";
import { supabase } from "../supabaseClient";
import { loadingState, userState } from "../recoil/atoms"
import toast from "react-hot-toast";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const setAppUser = useSetRecoilState(userState);
    const {message} = useParams();
    const [loading, setLoading] = useRecoilState(loadingState);
    const navigate = useNavigate();
    
    if(message) {
        toast("Please confirm your email address before loggin in");
    }

    const login = async (data) => {
        setLoading(true);
        let { user, error } = await supabase.auth.signIn({
            email: data.email,
            password: data.password
        });

        if (error) {
            setLoading(false);
            setErrorMessage(error.message);
            return;
        }

        if (user) {
            setErrorMessage('');
            const { data, error } = await supabase.from('user_data').select().match({ code: user.id });
            if (error) {
                setErrorMessage(error.message);
                return;
            }

            if (data) {
                const appUser = {
                    ...user,
                    firstName: data.firstName,
                    lastName: data.lastName
                };

                setAppUser(appUser);
                setLoading(false);
                navigate(ROUTES.ADMIN.DASHBOARD);
            }
            setErrorMessage('cannot find user information...');
        }
    }

    return (
        <AppShell>
            <section className="py-20 bg-gray-50">
                <div className="px-10 mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="max-w-sm mb-16 lg:mb-0 lg:max-w-2xl lg:w-1/2 lg:px-4">
                            <a className="inline-block mb-6 text-3xl font-bold leading-none" href="#">
                                <svg className="w-auto h-12" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" className="ccustom" fill="#68DBFF"></path> <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" className="ccompli1" fill="#FF7917"></path> <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" className="ccompli2" fill="#5D2C02"></path> </svg>
                            </a>

                            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl">Login to access your dashboard </h2>
                            <p className="mb-8 leading-loose text-gray-500">Learning requires dedication! We're glad you're always hungry for more. Get in now and start writing some code.</p>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
                                <div className="overflow-hidden text-center bg-white rounded-md shadow-sm">
                                    <div className="px-6 py-8">
                                        <form onSubmit={handleSubmit(login)}>
                                            {
                                                errorMessage &&
                                                <div className="border border-red-300 bg-red-100 text-red-400 text-xs p-2 rounded mb-2">
                                                    {errorMessage}
                                                </div>
                                            }
                                            <div className="mb-6">
                                                <span className="text-sm text-gray-300">Fill out your info below to</span>
                                                <h4 className="text-2xl font-semibold text-gray-700">Login to your account</h4>
                                            </div>
                                            <input className="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="email" placeholder="Email address" {...register('email', { required: true })} />
                                            {errors.email && <span className="text-xs text-red-400 block">errors.email.?message</span>}

                                            <input className="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="password" placeholder="Enter your password" {...register('password', { required: true })} />
                                            {errors.password && <span className="text-xs text-red-400 block">errors.password.?message</span>}

                                            <button className="w-full py-3 mb-4 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-500" type="submit" disabled={loading}>{loading ? 'Please wait...' : 'Login'}</button>
                                        </form>
                                        <p className="text-xs text-gray-400">
                                            <span>Don't have an account? </span>
                                            <Link className="text-indigo-500" to={ROUTES.SIGN_UP}>Sign up</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppShell>
    )
}

export default LoginPage;
