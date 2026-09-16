import React from "react"

const locationSearchPanel = (props) => {
  console.log(props);

  // sample array for location
  const locations = [
    " 24B, Near Kapoor's cafe, sheriyans Coding School, Bhopal",
    "22B, Near Malholtra's cafe, sheriyans Coding School, Bhopal",
    "20B, Near Singhania's cafe, sheriyans Coding School, Bhopal",
    "120B, Near Kumar's cafe, sheriyans Coding School, Bhopal"
  ]
  return (
    <div>
        {/* This is just a Sample data */}
        {
          location.map(function(elem,idx){
            return <div key={idx} onClick={()=>{
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }} className="flex gap-4 active:border-2 p-3 border-grey-50 active:border-black rounded-xl items-center my-2 justify Start">
          <h2 className="bg-[#eee] h-8 w-12 flex items-center jsutify center rounded-full"><i className="ri-map-pin-fill "></i></h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
         })
        }   
    </div>
  )
}

export default locationSearchPanel