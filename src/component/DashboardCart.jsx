import Link from 'next/link';
import React from 'react';

const DashboardCart = ({p}) => {
    return (
        <div className='p-4 rounded-2xl border border-green-600 space-y-2 overflow-hidden'>
            <h2 className='text-lg font-semibold text-yellow-400'>{p.name}</h2>
            <h2 className='text-lg font-semibold text-green-500'>{p.email}</h2>
            {/* <h2 className='font-semibold'>{p.body}</h2> */}
            <Link href={`/product/dashboard/${p.id}`}><button className='btn btn-primary'>Info</button></Link>
        </div>
    );
};

export default DashboardCart;