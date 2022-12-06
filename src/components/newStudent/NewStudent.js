import React, { useState } from 'react';

import StudentForm from './StudentForm';
import './NewStudent.css';

const NewStudent = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveRegisteredStudentDataHandler = (enteredRegisteredStudentData) => {
        const registeredStudentData = {
            ...enteredRegisteredStudentData,
            id: Math.random().toString(),
        };
        props.onAddStudent(registeredStudentData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-registration'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Register Student</button>
            )}
            {isEditing && (
                <StudentForm
                    courses = {props.courses}
                    onSaveRegisteredStudentData={saveRegisteredStudentDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewStudent;