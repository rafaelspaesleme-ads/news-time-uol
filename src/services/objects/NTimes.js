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