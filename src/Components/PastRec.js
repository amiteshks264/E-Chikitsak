import React from 'react';
import "../Styles/PastRec.css";
import Card from "./Card";

export default function PastDataCards() {
    return (
        <div className="page-cntr">
            <div className="header">
                <h1 className="headname my-3">
                    E-CHIKITSAK
                </h1>
            </div>
            <div className="container">
                <h2 className="page-heading my-3">
                    MEDICAL REPORT
                </h2>
                <div className="details">
                    Name : Harshit Singh <br />
                    Gender: Male <br />
                    Contact Number: 9204539875 <br/>
                </div>
                <div className="cards-container my-3">
                    <Card
                        status="Scheduled"
                        drName="Dr. Jenny Wilson"
                        date="15-12-2023"
                        details="Anticipate your upcoming treatment with the specialist—a scheduled intervention promising relief. Trust the expert team, as they ensure a positive and successful outcome."
                    />
                    <Card
                        status="Completed"
                        drName="Dr. Jacob Jones"
                        date="04-08-2023"
                        details="The treatment was successful and the patient has been adviced to take rest and eat healthy food."
                    />
                    <Card
                        status="Completed"
                        drName="Dr. Jacob Jones"
                        date="04-08-2023"
                        details="The treatment was successful and the patient has been adviced to take rest and eat healthy food."
                    />
                    <Card
                        status="Completed"
                        drName="Dr. Jacob Jones"
                        date="04-08-2023"
                        details="The treatment was successful and the patient has been adviced to take rest and eat healthy food."
                    />
                    <Card
                        status="Completed"
                        drName="Dr. Jacob Jones"
                        date="04-08-2023"
                        details="The treatment was successful and the patient has been adviced to take rest and eat healthy food."
                    />
                </div>
            </div>
        </div>
    )
}
