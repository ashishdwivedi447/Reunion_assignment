import React, { useEffect, useState } from 'react'
import styles from "./Rent.module.css"
import { getdata } from '../Redux/action'
import { useDispatch } from 'react-redux'
import ShowRentData from './ShowRentData'

const Rent = () => {

    const [location, setLocation] = useState();
    const [date, setDate] = useState();
    const [min, setMin] = useState();
    const [property, setProperty] = useState();
    const [filterData, setFilterData] = useState([])
    const [nameSearch, setSearchName] = useState()

    const dispatch = useDispatch();

    if (!min == "") {
        var array = min.split(",")
            .map((item) => `${item}`);

        console.log(array[0], array[1])
    }

    const handleclick = () => {


        if (!location == "" || !min == "" || !date == "" || !property == "") {


            if (!location == "" && !date == "" && !min == "" && !property == "") {
                var alldata = filterData.filter((el) => {

                    return location == el.location && date >= el.date && array[0] <= el.price &&
                        array[1] >= el.price && property == el.property

                })
                setFilterData(alldata)

            }
            else if (!location == "" && !date == "" && !min == "") {
                var loDaMindata = filterData.filter((el) => {

                    return location == el.location && date >= el.date && array[0] <= el.price &&
                        array[1] >= el.price

                })
                setFilterData(loDaMindata)

            }
            else if (!location == "" && !date == "" && !property == "") {
                var loDaPondata = filterData.filter((el) => {

                    return location == el.location && date >= el.date && property == el.property

                })
                setFilterData(loDaPondata)

            }
            else if (!min == "" && !date == "" && !property == "") {
                var MiDaPondata = filterData.filter((el) => {

                    return array[0] <= el.price && array[1] >= el.price && date >= el.date && array[0] <= el.price &&
                        property == el.property

                })
                setFilterData(MiDaPondata)

            }

            else if (!location == "" && !date == "") {
                var locationDateData = filterData.filter((el) => {
                    return location == el.location && date >= el.date

                })
                setFilterData(locationDateData)
            }
            else if (!location == "" && !min == "") {
                var locationMindata = filterData.filter((el) => {

                    return location == el.location && array[0] <= el.price && array[1] >= el.price

                })
                setFilterData(locationMindata)
            }

            else if (!date == "" && !min == "") {
                var dateMindata = filterData.filter((el) => {
                    return date >= el.date && array[0] <= el.price && array[1] >= el.price

                })
                setFilterData(dateMindata)
            }
            else if (!property == "" && !min == "") {
                var PoMidata = filterData.filter((el) => {
                    return property == el.property && array[0] <= el.price && array[1] >= el.price

                })
                setFilterData(PoMidata)
            }
            else if (!property == "" && !date == "") {
                var PoDadata = filterData.filter((el) => {
                    return property == el.property && date >= el.date

                })
                setFilterData(PoDadata)
            }
            else if (!property == "" && !location == "") {
                var PoLodata = filterData.filter((el) => {
                    return property == el.property && location == el.location

                })
                setFilterData(PoLodata)
            }
            else if (!location == "") {
                var selectdata = filterData.filter((el) => {
                    if (!location == "") {

                        return location == el.location
                    }
                })
                setFilterData(selectdata)
            }

            else if (!min == "") {

                var priceData = filterData.filter((el) => {

                    return array[0] <= el.price && array[1] >= el.price


                })


                setFilterData(priceData)
            }

            else if (!date == "") {

                var Datedata = filterData.filter((el) => {

                    return date >= el.date


                })
                setFilterData(Datedata)
            }
            else if (!property == "") {
                var propertyData = filterData.filter((el) => {


                    return property == el.property


                })
                setFilterData(propertyData)
            }


        }



    }

    console.log(filterData, 'out')

    const handleReset = () => {
        window.location.reload();
    }

    useEffect(() => {
        dispatch(getdata())
            .then((res) => {

                setFilterData(res.payload)
            })
    }, [nameSearch == ''])

    const searchByName = (e) => {
        setSearchName(e.target.value)
        let searchData = filterData.filter((el) => {
            return el.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setFilterData(searchData);
    }


    return (
        <div>

            <div className={styles.rentupper}>
                <div >
                    Search Properties to be Rent
                </div>
                <div>
                    <input type="text" onChange={searchByName} placeholder='Search Property' />
                </div>
            </div>
            <div className={styles.rentmiddle}>
                <div>
                    <div>Location</div>
                    <select name="" id="" onClick={(e) => setLocation(e.target.value)}>
                        <option value="">Select location</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Rewa">Rewa</option>
                        <option value="Jabalpur">Jabalpur</option>
                    </select>
                </div>
                <div>
                    <div> Move-in Date</div>
                    <input type="date" onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <div>Price</div>
                    <select name="" id="" onChange={(e) => setMin(e.target.value)} >
                        <option value="">Min</option>
                        <option value="300,600">$300-$600</option>
                        <option value="600,900">$600-$900</option>
                        <option value="900,1200">$900-$1200</option>
                        <option value="1200,1500">$1200-$1500</option>
                        <option value="1500,3000">$1500-$3000</option>
                        <option value="3000,3500">$3000-$3500</option>

                    </select>

                </div>
                <div>
                    <div>Property Types</div>
                    <select name="" id="" onChange={(e) => setProperty(e.target.value)}>
                        <option value=""> Select Property Types</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Bungalow">Bungalow</option>
                        <option value="Villa">Villa</option>
                        <option value="Duplex">Duplex house</option>
                    </select>
                </div>
                <button className={styles.reset} onClick={handleReset}>Reset Filter</button>
                <div>
                    <button className={styles.searchbutton} onClick={handleclick}>Search</button>
                </div>
            </div>

            <div>
                <ShowRentData data={filterData} />
            </div>


        </div>
    )
}

export default Rent