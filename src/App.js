import React, {useState, useEffect} from 'react';
import Registrations from "./components/studentRegistrations/Registrations";
import NewStudent from './components/newStudent/NewStudent';
import { getAllStudents, getAllCourses, createNewRegisteredStudent } from './services/api';
import normalizeCourseName from './utils/courseUtils';

const App = () => {

    const [registeredStudents, setRegisteredStudents] = useState([]);
    const [availableCourses, setAvailableCourses] = useState();

    useEffect(() => {
        getAllCourses().then(
            res => {
                const courses = res.data.map(course => {
                    const courseName = normalizeCourseName(course.name);
                    return ({...course, displayName: courseName})
                });
                getAllStudents().then(
                    res => {
                        const students = res.data.map(student => {
                            const studentName = student.firstName + " " + student.lastName;
                            return ({...student, studentName: studentName})
                        });
                        setAvailableCourses(courses);
                        setRegisteredStudents(students);
                    })
            }
        );
    }, []);

    const addStudentHandler = (registeredStudent) => {
        const studentNameSplit = registeredStudent.studentName.split(" ");
        const studentFirstName = studentNameSplit[0];
        const studentLastName = studentNameSplit[1] ? studentNameSplit[1] : studentNameSplit[0]
        const studentCourse = availableCourses.find(course => {
            return course.id === registeredStudent.courseId;
        });
        const studentToCreate = {
            firstName: studentFirstName,
            lastName: studentLastName,
            courseId: studentCourse.id
        };
        createNewRegisteredStudent(studentToCreate).then(res => {
            console.log("Successfully create new registered student with id: " + res.data)
        }).catch(err =>
            console.log('Got an error when create new registered student: ', err));
        setRegisteredStudents((prevStudents) => {
            return [registeredStudent, ...prevStudents];
        });
    }

    return (
        <div>
            {!availableCourses ? "Loading..." :
                <div>
                    <NewStudent onAddStudent={addStudentHandler} courses={availableCourses}/>
                    <Registrations registeredStudents={registeredStudents} courses={availableCourses}/>
                </div>
            }
        </div>
    );
}

export default App;
