import React from 'react';

import './RegisteredStudentFilter.css';

const RegisteredStudentFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    const filterOptions = props.courses.map(course => {
        return <option key={course.id} value={course.name}>{course.displayName}</option>
    })


    return (
        <div className='registrations-filter'>
            <div className='registrations-filter__control'>
                <label>Filter by Course Name</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {filterOptions}
                </select>
            </div>
        </div>
    );
};

export default RegisteredStudentFilter;