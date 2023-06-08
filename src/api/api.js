import axios from 'axios';

const URL = 'http://localhost:3000';

export const getRoomsInfo = () => {
    return axios.get(`${URL}/rooms`).then((res) => res.data);
};

export const getRoomInfo = (category) => {
    return axios.get(`${URL}/rooms/${category}`).then((res) => res.data); 
};
