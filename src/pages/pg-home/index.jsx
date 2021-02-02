import React, {useEffect, useState} from "react";
import ContainerHome from "../../containers/container-home";
import {handleCovidFindGlobal} from "../../services/objects/Covid";
import {
    handleTNYTFindByDaily, handleTNYTFindByPolitics,
    handleTNYTFindByScience, handleTNYTFindBySports,
    handleTNYTFindByTech,
    handleTNYTFindByWorld
} from "../../services/objects/NTimes";
import UolHeader from "../../components/uol-header";
import UolFooter from "../../components/uol-footer";
import {ConvertDesktopInMobile} from "../../utils/functions/Convertions";
import UolMobileNotification from "../../components/uol-mobile-notification";
import {Contacts} from "../../utils/constants/names/Contacts";

export const Home = () => {

    const [casesTotalCovid, setCasesTotalCovid] = useState(0);
    const [casesNewsCovid, setCasesNewsCovid] = useState(0);
    const [casesDeathCovid, setCasesDeathCovid] = useState(0);
    const [casesRecoveredCovid, setCasesRecoveredCovid] = useState(0);
    const [countNewsTech, setCountNewsTech] = useState(0);
    const [countNewsScience, setCountNewsScience] = useState(0);
    const [copyright, setCopyright] = useState('');
    const [activePrincipal, setActivePrincipal] = useState('tech');
    const [sciences, setSciences] = useState([]);
    const [techs, setTechs] = useState([]);
    const [dailies, setDailies] = useState([]);
    const [worlds, setWorlds] = useState([]);
    const [sports, setSports] = useState([]);
    const [politics, setPolitics] = useState([]);
    const [screen, setScreen] = useState(null);

    useEffect(() => {
        handleResultCovid();
        handleCountNewsTechNtymes();
        handleCountNewsScienceNtymes();
        handleScience();
        handleTech();
        handleDaily();
        handleWorld();
        handleSports();
        handlePolitics();
        setScreen(ConvertDesktopInMobile());
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
                setCountNewsTech(response && response.num_results);
            })
    }

    const handleCountNewsScienceNtymes = () => {
        handleTNYTFindByScience()
            .then(response => {
                setCopyright(response && response.copyright);
                setCountNewsScience(response && response.num_results);
            })
    }

    const handleScience = () => {
        handleTNYTFindByScience()
            .then(response => {
                setSciences(response && response.results);
            })
    }

    const handleTech = () => {
        handleTNYTFindByTech()
            .then(response => {
                setTechs(response && response.results);
            })
    }

    const handleDaily = () => {
        handleTNYTFindByDaily()
            .then(response => {
                setDailies(response && response.results.splice(0, 7));
            })
    }

    const handleWorld = () => {
        handleTNYTFindByWorld()
            .then(response => {
                setWorlds(response && response.results);
            })
    }

    const handleSports = () => {
        handleTNYTFindBySports()
            .then(response => {
                setSports(response && response.results);
            })
    }

    const handlePolitics = () => {
        handleTNYTFindByPolitics()
            .then(response => {
                setPolitics(response && response.results);
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
                onClickScience={() => setActivePrincipal("science")}
                onClickTech={() => setActivePrincipal("tech")}
                screen={screen}
            />
            <ContainerHome
                copyright={copyright}
                typePrincipal={activePrincipal}
                dailies={dailies}
                politics={politics}
                sciences={sciences}
                sports={sports}
                techs={techs}
                worlds={worlds}
                screen={screen}
            />
            {
                screen !== "desktop"
                    ? (
                        <UolMobileNotification
                            casesNewsCovid={casesNewsCovid}
                            casesTotalCovid={casesTotalCovid}
                            casesDeathCovid={casesDeathCovid}
                            casesRecoveredCovid={casesDeathCovid}
                        />
                    )
                    : ''
            }
            <UolFooter
                idDocs={Contacts.ID_DOCS}
                urlUsernameGithub={Contacts.URL_USER_GITHUB}
                urlUsernameInstagram={Contacts.URL_USER_INSTAGRAM}
                urlUsernameLinkedin={Contacts.URL_USER_LINKEDIN}
                nameDev={Contacts.NAME_DEV}
            />
        </>
    );
}

export default Home;