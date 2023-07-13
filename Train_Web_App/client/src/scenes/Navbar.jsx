import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-blue-500 p-3 ">
            <ul className="flex justify-center items-center gap-4 text-white font-semibold text-xl">
                <li onClick={() => { navigate("/") }} className="cursor-pointer">Home</li>
                <li onClick={() => { navigate("/gettrains") }} className="cursor-pointer">Get Trains</li>
                <li onClick={() => { navigate("/findtrain") }} className="cursor-pointer">Find Train</li>
            </ul>
        </div>
    )
}

export default Navbar