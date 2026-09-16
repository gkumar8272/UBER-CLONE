import React from 'react'

const ConfirmedRides = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center absolute top-0 w-[93%]' onClick={() => {
                setVehiclePanel(false)
            }}><i className=" text-xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-3xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9iY2Q4ZmRmOC0yYjM0LTUyZGUtYmM3Zi1mNDFmMDgwNTliY2MucG5n" alt="" />
                <div className='w-full'>
                    <div className='flex items-center gap-5'>
                        <i class="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>India Gate, Delhi</p>
                        </div>
                    </div>
                    <div>
                        <i class="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>India Gate, Delhi</p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
            </div>



        </div>
    )
}

export default ConfirmedRides