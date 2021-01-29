import axios from 'axios';

const BASE_URL_TNYT = "https://api.nytimes.com/";

const apiTimes = axios.create({
    baseURL: BASE_URL_TNYT
})

export default apiTimes;