import React, { useState } from 'react'
import { register } from '../controllers/appControllers'

const Register = () => {
  // const [user, setUser] = useState({});
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [rollNo, setRollNo] = useState(0);
  const [accessCode, setAccessCode] = useState('');

  const sendData = async () => {
    // console.log(user);
    await register({ companyName, ownerEmail, ownerName, rollNo, accessCode })
  }

  return (
    <div className="w-full flex justify-center items-center mt-5">
      {/* Login Card */}
      <div className="md:min-w-[450px] min-w-[300px] border-2 border-black border-opacity-50 rounded-lg">
        <div className="w-full flex justify-center items-center border-b-black border-2 border-opacity-30">
          <h1 className="font-bold text-3xl">Register</h1>
        </div>

        {/* inputs */}
        <div className="w-full p-2 border-b-2 border-b-black border-opacity-50">

          <div className="w-full flex gap-3 p-2 justify-between items-center">
            <h1>Company Name : </h1>
            <input type="text" placeholder="Enter Company Name" onChange={(e) => setCompanyName(e.target.value)} className="flex-1 md:max-w-[250px] max-w-[200px] outline-none pl-2 font-semibold text-blue-600 border-2 border-opacity-40 border-blue-900 rounded-lg p-1 " />
          </div>
          <div className="w-full flex gap-3 p-2 justify-between items-center">
            <h1>Owner Name : </h1>
            <input type="text" placeholder="Enter Owner Name" className="flex-1 outline-none pl-2 md:max-w-[250px] max-w-[200px] font-semibold text-blue-600 border-2 border-opacity-40 border-blue-900 rounded-lg p-1 "
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>
          <div className="w-full flex gap-3 p-2 justify-between items-center">
            <h1>Owner Email : </h1>
            <input type="email" placeholder="Enter Owner Email" className="flex-1 outline-none pl-2 md:max-w-[250px] max-w-[200px] font-semibold text-blue-600 border-2 border-opacity-40 border-blue-900 rounded-lg p-1 "
              onChange={(e) => setOwnerEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex gap-3 p-2 justify-between items-center">
            <h1>Roll No : </h1>
            <input type="number" placeholder="Enter Roll No." className="flex-1 outline-none pl-2 md:max-w-[250px] max-w-[200px] font-semibold text-blue-600 border-2 border-opacity-40 border-blue-900 rounded-lg p-1 "
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>
          <div className="w-full flex gap-3 p-2 justify-between items-center">
            <h1>Access Code : </h1>
            <input type="text" placeholder="Enter Roll No." className="flex-1 outline-none pl-2 md:max-w-[250px] max-w-[200px] font-semibold text-blue-600 border-2 border-opacity-40 border-blue-900 rounded-lg p-1 "
              onChange={(e) => setAccessCode(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full p-4 flex justify-center items-center">
          <button className="px-2 min-w-[150px] py-2 rounded-lg font-semibold text-lg text-white bg-blue-500"
            onClick={() => {
              console.log("hi");
              sendData()
            }}
          >Login</button>
        </div>

      </div>
    </div>
  )
}

export default Register