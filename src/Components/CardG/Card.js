import React from 'react';
import './Card.css'





const Card = ({ title, price, items }) => {
    return (
        <div className="Card">

            <h1 className="title">{title}</h1>

            <div className="titleName">
                <h1>$<span className="priceoo">{price}</span> / MONTH</h1>
            </div>
            <hr />

            <div className='lists'>

                {
                    items.length > 0
                        ? (
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> {item}</li>
                                ))}
                            </ul>
                        )
                        : (
                            ""
                        )
                }

            </div>




            <button className="startFree">START FREE</button>



        </div>
    );
};



export default Card