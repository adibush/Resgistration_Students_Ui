import React from 'react';
import './CourseDate.css';

function CourseDate(props) {
    const dateSplit = props.date.split("-");
    const month = dateSplit[1].toLocaleString('en-US', { month: 'long' });
    const day = dateSplit[2].toLocaleString('en-US', { day: '2-digit' });
    const year = dateSplit[0];

    return (
        <div className="registration-date">
            <div>{day} / {month} / {year}</div>
        </div>
    );
}

export default CourseDate;