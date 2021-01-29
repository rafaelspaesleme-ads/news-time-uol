import axios from 'axios';

const BASE_URL_CORONAVIRUS = "https://api.covid19api.com/";

const apiCovid = axios.create({
    baseURL: BASE_URL_CORONAVIRUS
})

export default apiCovid;