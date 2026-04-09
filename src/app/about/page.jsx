import UserCarts from '@/component/UserCarts';
import React from 'react';

export const metadata = {
  title: 'About',
  description: '...',
}

const About = async () => {

    const a = await fetch("https://jsonplaceholder.typicode.com/users")
    const b = await a.json()
    console.log(b)

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-10'>About page</h2>
            <div className='max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    b.map(v => <UserCarts key={v.id} p={v}></UserCarts>)
                }
            </div>
        </div>
    );
};

export default About;