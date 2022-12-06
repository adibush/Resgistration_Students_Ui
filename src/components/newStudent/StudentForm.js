import React, {useState} from "react";
import './StudentForm.css';

function StudentForm(props){

    const [enteredStudentName, setEnteredStudentName] = useState('');
    const [enteredCourse, setEnteredCourse] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const studentNameChangeHandler = (event) => {
        setEnteredStudentName(event.target.value);
    };

    const courseChangeHandler = (event) => {
        var enteredCourse = event.target.value
        setEnteredCourse(enteredCourse);
        const selectedCourse = props.courses.find(course => {
            return course.name.toString() === enteredCourse.toString();
        });
        setEnteredDate(selectedCourse.startDate);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const selectedCourseObject = props.courses.find(course => {
            return course.name.toString() === enteredCourse.toString();
        })

        const registeredStudentData = {
            studentName: enteredStudentName,
            courseId: selectedCourseObject.id,
            date: enteredDate
        }
        props.onSaveRegisteredStudentData(registeredStudentData);

        setEnteredStudentName('');
        setEnteredCourse('');
        setEnteredDate('');
    }

    const courseOptions = props.courses.map(course => {
        return <option key={course.id} value={course.name}>{course.displayName}</option>
    })

    return (
        <form onSubmit = {submitHandler}>
            <div className="new-registration__contorls">

                <div className="new-registration__control">
                    <label>Student Name</label>
                    <input type="text"
                           value={enteredStudentName}
                           onChange={studentNameChangeHandler}
                           required>
                    </input>
                </div>

                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select className="course-selection" onChange={courseChangeHandler} defaultValue={''} required>
                        <option value='' disabled>Please Choose A Course</option>
                        {courseOptions}
                    </select>
                </div>

                <div className="new-registration__control">
                    <label>Course Start Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} disabled/>
                </div>
            </div>
            <br></br>
            <div className='new-registration__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Register Student</button>
            </div>
        </form>
    );
}

export default StudentForm;