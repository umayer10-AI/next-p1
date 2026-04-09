"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const layout = ({children}) => {
    const p = usePathname()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {children}
                <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <Link className={p === '/product' ? 'btn btn-info' : 'btn'} href={'/product'}>Product</Link>
                <Link className={p === '/product/dashboard' ? "btn btn-info" : 'btn'} href={'/product/dashboard'}>Dashboard</Link>
                <Link className={p === '/product/profile' ? "btn btn-info" : 'btn'} href={'/product/profile'}>Profile</Link>
                </ul>
            </div>
        </div>
    );
};

export default layout;