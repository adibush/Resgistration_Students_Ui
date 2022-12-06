import React, { useState } from 'react';
import './Registrations.css'

import RegisteredStudentFilter from './RegisteredStudentFilter';
import RegisteredStudentChart from './RegisteredStudentChart';
import RegisteredStudentList from './RegisteredStudentList';


function Registrations(props){

    const [filteredCourse, setFilteredCourse] = useState(props.courses[0].name);

    const filterChangeHandler = selectedCourse => {
        setFilteredCourse(selectedCourse);
    };

    const filteredCourseObject = props.courses.find(course => {
        return course.name.toString() === filteredCourse.toString();
    })

    const filteredRegisteredStudents = props.registeredStudents.filter(student => {
        return student.courseId === filteredCourseObject.id;
    });

    return (
        <div>
            <div className='registrations card'>
                <RegisteredStudentChart registeredStudents={props.registeredStudents} courses={props.courses}/>
                <RegisteredStudentFilter
                    selected={filteredCourse}
                    courses={props.courses}
                    onChangeFilter={filterChangeHandler}
                />
                <RegisteredStudentList course={filteredCourseObject} registeredStudents={filteredRegisteredStudents}/>
            </div>
        </div>
    );
};


export default Registrations