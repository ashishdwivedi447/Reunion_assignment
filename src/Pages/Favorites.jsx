import React, { useEffect, useState } from 'react'
import axios from "axios";
import styles from "./Favorites.module.css";
import {MdFavoriteBorder} from "react-icons/md"
import {FaBed} from "react-icons/fa"
import {BiBath} from "react-icons/bi";
import {BsTextareaResize} from "react-icons/bs"

const Favorites = () => {

    const [data,setData]=useState([]);

    const getData=()=>{
        axios.get("https://ashishreunion.herokuapp.com/favorites")
        .then((res)=>setData(res.data))
    }

    useEffect(()=>{
getData();
    },[])
    console.log(data);
  return (
    <div>
        <h3 className={styles.favoriteheading}>favoutites Page</h3>
        <div className={styles.showBox}>
        {
                data?.map((item) => (
                    <div key={item.id}>
                        <div >
                            <img src={item.image_url} alt=""  className={styles.boximage}/>
                        </div>
                        <div className={styles.priceicon}>
                            <div>${item.price}/month</div>
                            <MdFavoriteBorder/>
                        </div>
                     
                        <div className={styles.housename}>{item.name}</div>
                        <div className={styles.address}>{item.address}</div>
                   <div className={styles.icons}>
                    <div className={styles.individualicons}>
                    <FaBed/>
                        <div>{item.noofbeds}</div>
                       
                    </div>
                    <div className={styles.individualicons}>
                    <BiBath/>
                        <div>{item.noofbathroom}</div>
                       
                    </div>
                    <div className={styles.individualicons}>
                    <BsTextareaResize/>
                        <div>{item.area}</div>
                       
                    </div>
                   </div>
                    </div>
                ))
            }
            </div>
    </div>
  )
}

export default Favorites