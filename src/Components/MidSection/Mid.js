import React from 'react';
import './Mid.css';
import Card from '../CardG/Card';


const list1 = ["Unlimited clients", "Proposals", "Contracts", "Invoicing & Payments", "Client CRM", "Project Management", "Task & Time Tracking", "iOs,Android,Chrome, & Mac Apps"]
const list2 = ["Everything in Workflow, plus..", "workflow automations", "White-labelled client experience", "Client form and questionaires", "Subcontracting(client-mode)", "Calendly integration", "Client portal", "Priority support"]



const Mid = () => {








    return (
        <div className="midContent">

            <div className="titleMid">
                <h1 className="plansMe"> Plans & Pricing</h1>



                <div className="monthlyTitle">

                    <h3> 2 MONTHS FREE</h3>

                    <div className="monthlyB">
                        <h2>MONTHLY</h2>

                        <div className="toggleButton">
                            <label className="switch">
                                <input type="checkbox" />

                                <span class="slider round"></span>
                            </label>
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
                                <h2>Partners </h2>

                                <p>Invite other users to full account access and company management</p>

                            </div>

                            <div className="paraMoney">
                                <h1>$9</h1>

                                <h3> /MONTH</h3>

                            </div>



                        </div>


                        <div className="cardPara">
                            <div>
                                <h2>Bonsai Tax </h2>

                                <p>Track expenses, identify write-offs, and estimate quarterly taxes easily</p>


                                <div className="learnMore">
                                    <h5>LEARN MORE  </h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                                </div>
                            </div>

                            <div className="paraMoney">
                                <h1>$10</h1>

                                <h3> /MONTH</h3>
                            </div>



                        </div>


                    </div>
                </div>


                <div className="businessBanner">

                    <div className="businessTeal">
                        <h1>It's <span className="tealMe">your</span> business</h1>
                        <h1>We're here to help it grow.</h1>
                    </div>


                    <button> START FREE</button>


                </div>


                <div className="questionsAsk">
                    <h1 className="ask">Frequently Asked Questions</h1>


                    <div className="policyask">
                        <p>How does the 14 day free trial work?</p>
                        <p>Can I change plans anytime?</p>
                        <p>How do i pause my Bonsai subscription?</p>
                        <p>What is your refund policy?</p>
                    </div>





                </div>





            </div>

        </div>
    )




}




export default Mid;