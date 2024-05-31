import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Cart = ({ watchTime }) => {

    const [time, setTime] = useState("")

    const handleComplete = (time) => {
        toast(time);
    }

    useEffect(() => {
        const watchTimeLocalStorage = localStorage.getItem('Watch Time');
        setTime(watchTimeLocalStorage || "")
    }, [watchTime])
    // console.log(watchTime)
    return (
        <div className='border h-1/3 p-7 bg-teal-50  border-red-400 rounded text-center'>
            <h1 className='text-xl font-bold'>Cart container</h1>
            <p>Total watch time</p>
            <input readOnly className='text-center border-2
             border-red-500' type="text" value={time} disabled />
            <button onClick={() => handleComplete(time)} className='btn btn-info mt-5 w-3/4'>Complete</button>

        </div>
    );
};

export default Cart;