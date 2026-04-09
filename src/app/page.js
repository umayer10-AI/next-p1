import { Roboto } from 'next/font/google';
import React from 'react';

const roboto = Roboto({
  weight: ['400','900'],
  subsets: ['latin'],
})

const page = () => {
  
  return (
    <div className={roboto.className}>
      <h2 className='text-3xl font-bold text-center my-25'>Home page</h2>
    </div>
  );
};

export default page;