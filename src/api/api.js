import axios from 'axios';

const URL = 'http://localhost:3000';

export const getRoomsInfo = () => {
    return axios.get(`${URL}/rooms`).then((res) => res.data);
};
