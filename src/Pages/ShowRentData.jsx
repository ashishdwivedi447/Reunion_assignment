import React from 'react'
import styles from './Rent.module.css'
import {MdFavoriteBorder} from "react-icons/md"
import {FaBed} from "react-icons/fa"
import {BiBath} from "react-icons/bi";
import {BsTextareaResize} from "react-icons/bs"
function ShowRentData(props) {

    // console.log(props.data.length === 0)
    if (props.data.length === 0) {
        return <h1 className={styles.notFound}>Data not found</h1>
    }
    return (
        <div className={styles.showBox}>
            {
                props.data?.map((item) => (
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
    )
}

export default ShowRentData
