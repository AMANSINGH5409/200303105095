import React from 'react'

const FindTrain = () => {
  return (
    <div className="w-full flex justify-center items-center mt-5">
      {/* Login Card */}
      <div className="md:min-w-[450px] min-w-[300px] border-2 border-black border-opacity-50 rounded-lg">
        <div className="w-full flex justify-center items-center border-b-black border-2 border-opacity-30">
          <h1 className="font-bold text-3xl">Find Train By No.</h1>
        </div>

        {/* inputs */}
        <div className="w-full p-2 border-b-2 border-b-black border-opacity-50">

          <div className="w-full flex gap-3 p-2 justify-between items-center">
            <h1>Train No : </h1>
            <input type="number" placeholder="Enter Train No." className="flex-1 md:max-w-[250px] max-w-[200px] outline-none pl-2 font-semibold text-blue-600 border-2 border-opacity-40 border-blue-900 rounded-lg p-1 " />
          </div>
        </div>

        <div className="w-full p-4 flex justify-center items-center">
          <button className="px-2 min-w-[150px] py-2 rounded-lg font-semibold text-lg text-white bg-blue-500">Login</button>
        </div>

      </div>
    </div>)
}

export default FindTrain