import React from 'react';
import axios from "axios"
import DashboardCart from '@/component/DashboardCart';

const page = async () => {

    const a = await axios.get("https://jsonplaceholder.typicode.com/comments")
    const b = a.data

    return (
        <div className='max-w-[90%] mx-auto'>
            <h2 className='text-3xl font-bold text-center my-10'>Dashboard page</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    b.map(v => <DashboardCart key={v.id} p={v}></DashboardCart>)
                }
            </div>
        </div>
    );
};

export default page;