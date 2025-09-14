import React from 'react';





const Card = ({ title, items }) => {
    return (
        <div className="Card">

            <div className="titleName">
                <h1>$<span>{title}</span> / Month</h1>
            </div>

            <div className='lists'>

                {
                    items.length > 0
                        ? (
                            <div>
                                {items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </div>
                        )
                        : (
                            ""
                        )
                }
            </div>



        </div>
    );
};



export default Card