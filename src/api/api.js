import axios from 'axios';

const URL = 'http://localhost:3000';

export const getCourseInfo = () => {
    return axios.get(`${URL}/courses`).then((res) => res.data);
};
