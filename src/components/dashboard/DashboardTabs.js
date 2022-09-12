import React from "react";
import { Tab } from '@headlessui/react';
import PaymentsTable from "./PaymentsTable";

const DashboardTabs = () => {
    return (
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
                    <Tab.Panel>
                        <PaymentsTable/>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </section>
    )
}

export default DashboardTabs;
