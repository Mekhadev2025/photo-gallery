import React from 'react'
import {AiFillPlusCircle} from "react-icons/ai"
import "../index.css"
import axios from "axios"


const handleChange=(event)=>{
    event.preventDefault();

    const formData =new FormData();
    formData.append("photo",event.target.files[0])


    axios.post("http://localhost:5000/api/save",formData)
        .then((res)=>{
            console.log(res.data);

        })
        .catch((err)=>{
            console.log(err)
        })
}



const Button = () => {
  return (
    <label className='button' htmlFor="file_picker">
     <AiFillPlusCircle/>
     <input 
        hidden type="file" 
        name="file_picker" 
        id="file_picker"
         onChange={(e)=>handleChange(e)}
         ></input>
    </label>
  )
}

export default Button