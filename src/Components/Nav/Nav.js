import React from "react";
import './Nav.css'




const Nav = () => {




    return (
        <div className="header">

            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-topology-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M7.5 7.5l3 3" /><path d="M7.5 16.5l3 -3" /><path d="M13.5 13.5l3 3" /><path d="M16.5 7.5l-3 3" /></svg>

                <h1 className="logoText"> bonsai </h1>
            </div>


            <div className="middleNav">
                <ul>
                    <li><select>
                        <option>Product</option>
                        <option>Details</option>
                        <option>Sales</option>
                        <option>About us</option>

                    </select></li>
                    <li>
                        <li><select>
                            <option>Templates</option>
                            <option>Details</option>
                            <option>Sales</option>
                            <option>About us</option>

                        </select></li>
                    </li>

                    <li>Pricing</li>


                    <li>Reviews</li>

                </ul>

            </div>

            <div className="buttons">

                <button className="login"> LOG IN</button>

                <button className="start">START FREE</button>

            </div>


        </div>



    )
}


export default Nav