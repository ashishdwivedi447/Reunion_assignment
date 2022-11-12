import React, { useState } from 'react'
import styles from "./Addproperty.module.css"
import axios from "axios";

const Addproperty = () => {
    const [url,setUrl]=useState("");
    const [date,setDate]=useState("");
    const [price,setPrice]=useState("");
    const [name,setName]=useState("");
    const [location,setLocation]=useState("");
    const [address,setAddress]=useState("");
    const [beds,setBeds]=useState("");
    const [bathrooms,setBathrooms]=useState("");
    const [area,setArea]=useState("");
    const [property,setProperty]=useState("");

    const handleClick=()=>{
      
        const payload={
            image_url:url,
            date:date,
            price:price,
            name:name,
            location:location,
            address:address,
            noofbeds:beds,
            noofbathroom:bathrooms,
            property:property,
        }
       // console.log(payload);
       axios.post("https://ashishreunion.herokuapp.com/favorites",payload)
       .then((res)=>console.log(res));

    }
  return (
    <div>
   <div className={styles.addproperty}>
    <h3>AddProperty</h3>
    <input type="text"  placeholder='Enter Image url' onChange={(e)=>setUrl(e.target.value)}/>
    <input type="text"  placeholder='Enter Date' onChange={(e)=>setDate(e.target.value)} />
    <input type="text"   placeholder='Enter Price' onChange={(e)=>setPrice(e.target.value)}/>
    <input type="text"   placeholder='Enter Name of Property' onChange={(e)=>setName(e.target.value)}/>
    <input type="text"   placeholder='Enter Location' onChange={(e)=>setLocation(e.target.value)}/>
    <input type="text"   placeholder='Enter Address' onChange={(e)=>setAddress(e.target.value)}/>
    <input type="text"   placeholder='Enter No of Beds' onChange={(e)=>setBeds(e.target.value)}/>
    <input type="text"  placeholder='Enter No of Bathrooms' onChange={(e)=>setBathrooms(e.target.value)}/>
    <input type="text"   placeholder='Enter Area' onChange={(e)=>setArea(e.target.value)}/>
    <input type="text"   placeholder='Enter Property Type' onChange={(e)=>setProperty(e.target.value)}/>
    <button onClick={handleClick}>Submit</button>
   </div>
    </div>
  )
}

export default Addproperty