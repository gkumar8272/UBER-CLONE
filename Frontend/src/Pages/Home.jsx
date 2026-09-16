import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Component/locationSearchPanel';
import ConfirmedRides from '../Component/ConfirmedRides';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setpanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmedRidesPanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [ConfirmedRidesPanel,setConfirmedRidesPanel] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [confirmedRidesPanel]);

    useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(confirmedRidesPanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(confirmedRidesPanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [vehiclePanel]);




  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsTrEoKKGa165V2lFf55Fuay38LeaOlroHgJ7_dqphw&s=10" alt="logo" />

      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img className='h-screen w-screen' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxxD1XgegOqPKSLtoT6ZbiDGGKB6OjgWatexyxlKxQ2JrN8xMcOicUTc&s=10" alt="" />
      </div>
      <div className=" flex flex-col bg-white flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5 ref={panelCloseRef} onClick={() => {
            setpanelOpen(false)
          }} className='absolute opacity-0 right-2 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setpanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => {
                setpanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white-500 h-0">
          <LocationSearchPanel setpanelOpen={setpanelOpen} setVehiclePanel={setVehiclePanel} />

        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10  pt-12'>
        <vehiclePanel setConfirmedRidesPanel={set} setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={confirmedRidesPanel} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 '>
       <confirmedRides/>
      </div>
    </div>
  )
}

export default Home