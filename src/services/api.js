import {axiosInstance as axios} from '../services/axiosInstance'

const GET_ALL_COURSES = () => `course/all`;
const CREATE_NEW_REGISTERED_STUDENT = () => `student/create`;
const GET_ALL_STUDENTS = () => `student/all`;


export const getAllCourses = () => {
    return axios.get(GET_ALL_COURSES());
};

export const createNewRegisteredStudent = (studentBody) => {
    return axios.post(CREATE_NEW_REGISTERED_STUDENT(), studentBody);
}

export const getAllStudents = () => {
    return axios.get(GET_ALL_STUDENTS());
};