import apiCovid from "../apis/ApiCovid";
import {ENPOINTS_COVID} from "../Endpoints";

export const handleCovidFindGlobal = async () =>
    await apiCovid.get(ENPOINTS_COVID.GLOBAL)
        .then(response => {
            return response && response.data && response.data.Global;
        })
        .catch(reason => {
            console.log(reason.toLocaleString());
        });

export const handleCovidFindByCountryCasesByDay = async (country, dateFrom, dateTo) =>
    await apiCovid.get(ENPOINTS_COVID.COUNTRIES_BY_DAY(country, dateFrom, dateTo))
        .then(response => {
            return response;
        })
        .catch(reason => {
            console.log(reason.toLocaleString());
        });