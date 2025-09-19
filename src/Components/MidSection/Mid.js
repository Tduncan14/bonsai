import React from 'react';
import './Mid.css';
import Card from '../CardG/Card';


const list1 = ["Unlimited clients", "Proposals", "Contracts", "Invoicing & Payments", "Client CRM", "Project Management", "Task & Time Tracking", "iOs,Android,Chrome, & Mac Apps"]
const list2 = ["Everything in Workflow, plus..", "workflow automations", "White-labelled client experience", "Client form and questionaires", "Subcontracting(client-mode)", "Calendly integration", "Client portal", "Priority support"]



const Mid = () => {








    return (
        <div className="midContent">

            <div className="titleMid">
                <h1> Plans & Pricing</h1>



                <div className="monthlyTitle">

                    <h3> 2 MONTHS FREE</h3>

                    <div className="monthlyB">
                        <h2>MONTHLY</h2>

                        <div className="">
                            <button>pvsoso</button>
                        </div>


                        <h2>YEARLY</h2>
                    </div>

                </div>
            </div>

            {/* cardsSection  */}

            <div className="cards">
                <Card title="Workflow" price="19" items={list1} />
                <Card title="Workflow Plus" price="29" items={list2} />


            </div>

            {/* second part of  */}

            <div className="lowerMid">

                <h1 className="lowshOne"> Super charge your work with add-ons</h1>


                <div className="lowCard">

                    <div className="cardOne">

                        <div className="cardPara">
                            <div>
                                <h2>Collaborators </h2>

                                <p>Invite other users to specific projects for limited access and functionality</p>

                            </div>

                            <div className="paraMonthly">
                                <h1>Free</h1>
                            </div>



                        </div>



                        <div className="cardPara">
                            <div>
                                <h2>Collaborators </h2>

                                <p>Invite other users to specific projects for limited access and functionality</p>

                            </div>

                            <div className="paraMoney">
                                <h1>$9</h1>

                                <h3> /MONTH</h3>

                            </div>



                        </div>


                        <div className="cardPara">
                            <div>
                                <h2>Collaborators </h2>

                                <p>Invite other users to specific projects for limited access and functionality</p>

                            </div>

                            <div className="paraMoney">
                                <h1>$10</h1>

                                <h3> /MONTH</h3>
                            </div>



                        </div>


                    </div>
                </div>





            </div>

        </div>
    )




}




export default Mid;