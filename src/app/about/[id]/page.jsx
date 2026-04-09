import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const a = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const b = await a.json()
    // console.log(id)

    return (
        <div className='max-w-[90%] mx-auto border p-4 rounded-2xl my-10 text-center'>
            <h2 className='text-lg font-bold'>{b.name}</h2>
            <h2 className='text-lg font-bold text-green-400'>{b.username}</h2>
            <h2 className='text-lg font-bold'>{b.email}</h2>
            <h2 className='text-lg font-bold text-yellow-400'>{b.address.zipcode}</h2>
            <h2 className='text-lg font-bold text-red-600'>{b.phone}</h2>
        </div>
    );
};

export default page;