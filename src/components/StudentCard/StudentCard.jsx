import React from "react";
import "./StudentCard.css";

const studentData = [
    {
        firstName: "Adam",
        lastName: "Smith",
        dob: "21/09/1998",
        id: "cse-0005",
        department: "CSE",
        blood: "A+",
        image: "./src/assets/male-avatar.jpg",
    },
    {
        firstName: "Emily",
        lastName: "Jones",
        dob: "01/02/1999",
        id: "cse-0007",
        department: "CSE",
        blood: "B+",
        image: "./src/assets/female-avatar.jpg",
    },
    {
        firstName: "Abigail",
        lastName: "Brown",
        dob: "21/12/1997",
        id: "cse-0012",
        department: "CSE",
        blood: "B-",
        image: "./src/assets/female-avatar.jpg",
    },
    {
        firstName: "Ethan",
        lastName: "Miller",
        dob: "14/04/1998",
        id: "eee-0005",
        department: "EEE",
        blood: "AB+",
        image: "./src/assets/male-avatar.jpg",
    },
    {
        firstName: "John",
        lastName: "Williams",
        dob: "19/03/1998",
        id: "eee-0008",
        department: "EEE",
        blood: "A-",
        image: "./src/assets/male-avatar.jpg",
    },
    {
        firstName: "Emma",
        lastName: "Smith",
        dob: "11/02/1999",
        id: "swe-0003",
        blood: "AB-",
        department: "SWE",
        image: "./src/assets/female-avatar.jpg",
    },
    {
        firstName: "James",
        lastName: "Brown",
        dob: "27/10/1998",
        id: "swe-0011",
        department: "SWE",
        blood: "B+",
        image: "./src/assets/male-avatar.jpg",
    },
    {
        firstName: "Jessica",
        lastName: "Jones",
        dob: "21/11/1998",
        id: "swe-0020",
        department: "SWE",
        blood: "O+",
        image: "./src/assets/female-avatar.jpg",
    },
    {
        firstName: "Lily",
        lastName: "Brown",
        dob: "21/05/1997",
        id: "cee-004",
        department: "CEE",
        blood: "A+",
        image: "./src/assets/female-avatar.jpg",
    },
    {
        firstName: "Noah",
        lastName: "Miller",
        dob: "03/07/1998",
        id: "cee-009",
        department: "CEE",
        blood: "B-",
        image: "./src/assets/male-avatar.jpg",
    },
];

function StudentCardContainer() {
    return (
        <div className="card-container">
            {studentData.map((student) => (
                <StudentCard info={student} key={student.id} />
            ))}
        </div>
    );
}

function StudentCard({ info }) {
    const { firstName, lastName, department, id, dob, blood, image } = info;
    return (
        <div className="card">
            <img className="shape shape__top" src="./src/assets/shape-top.png" alt="shape" />
            <div className="card__body">
                <div className="card__logo">
                    <h1>Institute Name</h1>
                </div>
                <div className="card__img">
                    <img src={image} alt="profile-image" />
                </div>
                <div className="card__title">
                    <h2>
                        {firstName} {lastName}
                    </h2>
                    <h3>{department}</h3>
                </div>
                <div className="card__info">
                    <div className="card__id">
                        <h5>ID :</h5>
                        <p>{id}</p>
                    </div>
                    <div className="card__dob">
                        <h5>DOB :</h5>
                        <p>{dob}</p>
                    </div>
                    <div className="card__blood">
                        <h5>Blood Group :</h5>
                        <p>{blood}</p>
                    </div>
                </div>
            </div>
            <img className="shape shape__bottom" src="./src/assets/shape-bottom.png" alt="shape" />
        </div>
    );
}

export default StudentCardContainer;
