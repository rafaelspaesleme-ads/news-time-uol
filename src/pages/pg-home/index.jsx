import React, {useEffect, useState} from "react";
import ContainerHome from "../../containers/container-home";
import {handleCovidFindGlobal} from "../../services/objects/Covid";
import {handleTNYTFindByScience, handleTNYTFindByTech} from "../../services/objects/NTimes";
import UolHeader from "../../components/uol-header";

export const Home = () => {
    const [casesTotalCovid, setCasesTotalCovid] = useState(0);
    const [casesNewsCovid, setCasesNewsCovid] = useState(0);
    const [casesDeathCovid, setCasesDeathCovid] = useState(0);
    const [casesRecoveredCovid, setCasesRecoveredCovid] = useState(0);
    const [countNewsTech, setCountNewsTech] = useState(0);
    const [countNewsScience, setCountNewsScience] = useState(0);

    useEffect(() => {
        handleResultCovid();
        handleCountNewsTechNtymes();
        handleCountNewsScienceNtymes();
    }, []);

    const handleResultCovid = () => {
        handleCovidFindGlobal()
            .then(response => {
                setCasesTotalCovid(response && response.TotalConfirmed);
                setCasesNewsCovid(response && response.NewConfirmed);
                setCasesDeathCovid(response && response.TotalDeaths);
                setCasesRecoveredCovid(response && response.TotalRecovered);
            })
    }

    const handleCountNewsTechNtymes = () => {
        handleTNYTFindByTech()
            .then(response => {
                setCountNewsTech(response && response.num_results)
            })
    }

    const handleCountNewsScienceNtymes = () => {
        handleTNYTFindByScience()
            .then(response => {
                setCountNewsScience(response.num_results)
            })
    }

    return (
        <>
            <UolHeader
                countNewsTech={countNewsTech}
                countNewsScience={countNewsScience}
                casesTotalCovid={casesTotalCovid}
                casesNewsCovid={casesNewsCovid}
                casesDeathCovid={casesDeathCovid}
                casesRecoveredCovid={casesRecoveredCovid}
            />
            <ContainerHome/>
        </>
    );
}

export default Home;