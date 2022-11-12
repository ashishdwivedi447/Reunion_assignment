import React from 'react'
import { CiHome } from "react-icons/ci"
import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div>
            <div id={styles.navbarcontainer}>
                <div className={styles.navbarbox}>
                    <div className={styles.companylogo}>
                        <div>
                            <CiHome />
                        </div>
                        <div className={styles.homename}>Estatery</div>
                    </div>
                    <div>
                        <Link to={"/" }className={styles.dynamic}>Rent</Link>
                    </div>
                    <div>Buy</div>
                    <div>Sell</div>
                    <div className={styles.manageproperty}>
                        <div>Manage Property</div>
                        <IoIosArrowDown />
                    </div>
                    <div className={styles.resources}>
                        <div>Resources</div>
                        <IoIosArrowDown />
                    </div>
                    <div>
                        <Link to={"/addproperty"} className={styles.dynamic}>AddProperty</Link>
                    </div>
                    <div>
                        <Link to={"/favorite" }className={styles.dynamic}>Favorite</Link>
                    </div>
                </div>
                <div className={styles.navbarbutton}>
                    <button>Login</button>
                    <button>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar