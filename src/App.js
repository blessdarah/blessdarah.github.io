import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import { BlogDetailPage, BlogPage, BootcampPage, DashboardPage, HomePage, LoginPage, ServicePage, SignUpPage } from './pages'

const App = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.BOOTCAMP} element={<BootcampPage />} />
            <Route path={ROUTES.SERVICES} element={<ServicePage />} />
            <Route exact path={ROUTES.BLOG_SHOW} element={<BlogDetailPage />} />
            <Route exact  path={ROUTES.BLOG} element={<BlogPage />} />

            {/* Admin routes */}
            <Route exact  path={ROUTES.ADMIN.DASHBOARD} element={<DashboardPage />} />
        </Routes>
    )
}
export default App;
