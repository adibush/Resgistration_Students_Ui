import React from "react";
import RegisteredStudent from "./RegisteredStudent";
import './RegisteredStudentList.css';

function RegisteredStudentList (props) {

    if(props.registeredStudents.length === 0) {
        return <h2 className="registrations-list__fallback">No Students Registered</h2>
    }

    return(
        <ul className="registrations-list">
            {props.registeredStudents.map((student) => (
                <RegisteredStudent
                    key={student.id}
                    studentName={student.studentName}
                    course={props.course}
                />))
            }
        </ul>
    )
}

export default RegisteredStudentList;