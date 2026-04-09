import Link from 'next/link';
import React from 'react';

const UserCarts = ({p}) => {
    return (
        <div className="card bg-base-100 card-xs shadow-sm">
            <div className="card-body p-4">
                <h2 className="card-title">{p.name}</h2>
                <h2 className='font-bold text-lg text-green-500'>{p.email}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="justify-end card-actions">
                <Link href={`/about/${p.id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default UserCarts;