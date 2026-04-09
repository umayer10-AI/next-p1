import React from 'react';
import axios from "axios"

const page = async ({params}) => {

    const {id} = await params
    const a = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
    const b = a.data

    return (
        <div className='p-4 rounded-2xl border border-green-600 space-y-5 overflow-hidden'>
            <h2 className='text-lg font-semibold text-yellow-400'>{b.name}</h2>
            <h2 className='text-lg font-semibold text-green-500'>{b.email}</h2>
            <h2 className='font-semibold'>{b.body}</h2>
        </div>
    );
};

export default page;