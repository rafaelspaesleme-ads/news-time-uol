import apiTimes from "../apis/ApiTimes";
import {ENDPOINTS_TNYT} from "../Endpoints";
import {getToken} from "../auths/AuthNTimes";

export const handleTNYTFindByTech = async () => await apiTimes.get(ENDPOINTS_TNYT.TECH(getToken()))
    .then(response => {
        return response.data;
    })
    .catch(reason => {
        console.log(reason.toLocaleString());
    });

export const handleTNYTFindByScience = async () => await apiTimes.get(ENDPOINTS_TNYT.SCIENCE(getToken()))
    .then(response => {
        return response.data;
    })
    .catch(reason => {
        console.log(reason.toLocaleString());
    });

export const handleTNYTFindByWorld = async () => await apiTimes.get(ENDPOINTS_TNYT.WORLD(getToken()))
    .then(response => {
        return response.data;
    })
    .catch(reason => {
        console.log(reason.toLocaleString());
    });

export const handleTNYTFindByDaily = async () => await apiTimes.get(ENDPOINTS_TNYT.DAILY(getToken()))
    .then(response => {
        return response.data;
    })
    .catch(reason => {
        console.log(reason.toLocaleString());
    });

export const handleTNYTFindBySports = async () => await apiTimes.get(ENDPOINTS_TNYT.SPORTS(getToken()))
    .then(response => {
        return response.data;
    })
    .catch(reason => {
        console.log(reason.toLocaleString());
    });

export const handleTNYTFindByPolitics = async () => await apiTimes.get(ENDPOINTS_TNYT.POLITICS(getToken()))
    .then(response => {
        return response.data;
    })
    .catch(reason => {
        console.log(reason.toLocaleString());
    });