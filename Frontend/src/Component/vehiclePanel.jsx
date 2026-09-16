import React from 'react'

const vehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center absolute top-0 w-[93%]' onClick={() => {
                setVehiclePanel(false)
            }}><i className=" text-xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-3xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClickc={()=>{
                props.setConfirmedRidesPanel(true)
            }}lassName='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between'>
                <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9iY2Q4ZmRmOC0yYjM0LTUyZGUtYmM3Zi1mNDFmMDgwNTliY2MucG5n" alt="" />
                <div className=' ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberGo<span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>193.20rs</h2>
            </div>

            <div onClickc={()=>{
                props.setConfirmedRidesPanel(true)
            }} className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between'>
                <img className='h-10' src="https://img.autocarpro.in/autocarpro/4d3ef0c9-c75e-46a3-af25-fab216e0bfe8_Untitled.jpg?w=750&h=490&q=75&c=1" alt="" />
                <div className='-ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto<span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>65rs</h2>
            </div>

            <div onClickc={()=>{
                props.setConfirmedRidesPanel(true)
            }} className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between'>
                <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mYzEwMWZmOC04MWExLTQ2YzMtOTk1YS02N2I0YmJkMmYyYmYuanBn" alt="auto" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Auto<span><i className="ri-user-3-fill"></i>2</span></h4>
                    <h5 className='font-medium text-sm'>5 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>118.68rs</h2>
            </div>
        </div>
    )
}

export default vehiclecomponent