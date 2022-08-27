import React from 'react';
import { DashboardContainer } from '../../components';
import { Tab } from '@headlessui/react';

const DashboardPage = () => {
    return (
        <DashboardContainer>
            <div className='w-full max-w-7xl mx-auto rounded-lg shadow p-6 bg-gradient-to-br from-teal-600 via-green-500 to-indigo-100 my-8'>
                <h3>Hello <span>username</span></h3>
            </div>
            <section className='w-full max-w-7xl mx-auto'>
                <Tab.Group>
                    <Tab.List>
                        <Tab className={({ selected }) => `px-3 py-2 border-b border-b-2 ${selected ? 'border-indigo-500' : 'border-transparent'}`}>
                            Notes
                        </Tab>
                        <Tab className={({ selected }) => `px-3 py-2 border-b border-b-2 ${selected ? 'border-indigo-500' : 'border-transparent'}`}>Resources</Tab>
                        <Tab className={({ selected }) => `px-3 py-2 border-b border-b-2 ${selected ? 'border-indigo-500' : 'border-transparent'}`}>Videos</Tab>
                        <Tab className={({ selected }) => `px-3 py-2 border-b border-b-2 ${selected ? 'border-indigo-500' : 'border-transparent'}`}>Payment history</Tab>
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
