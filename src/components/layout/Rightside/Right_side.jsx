import React from 'react'
import './Right_side.css';
import right_side from "../../../assets/photo/right_side.png"
const Right_side = () => {
  return (
    <div className="flex items-center justify-end object-cover w-full h-full">
      <div className="h-auto ">
        <img src={right_side} alt="Description of the image" className= " right_pic"/>
      </div>
    </div>
  )
}

export default Right_side