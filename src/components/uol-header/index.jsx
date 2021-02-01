import React, {useEffect, useState} from "react";
import useStyles from "./styles";
import {ConvertDateNowInPtBrCustom, ConvertDesktopInMobile} from "../../utils/functions/Convertions";
import {Colors} from "../../assets/styles/js/colors";
import * as PropTypes from "prop-types";

export const UolHeader = ({
                              onClickTech,
                              onClickScience,
                              countNewsTech,
                              countNewsScience,
                              casesTotalCovid,
                              casesNewsCovid,
                              casesDeathCovid,
                              casesRecoveredCovid,
                              screen
                          }) => {

    const classes = useStyles();
    const [stateResultNews, setStateResultNews] = useState(false);

    useEffect(() => {
        setTimeout(() => setStateResultNews(!stateResultNews), 5000)
    }, [stateResultNews]);

    const ViewDesktopLeft = () => {

        return (
            <div className={classes.columnLeft}>
                <strong>
                    {ConvertDateNowInPtBrCustom()}
                </strong>
                {
                    stateResultNews
                        ? (
                            <label className={classes.labelCountNews}>
                                ...e {countNewsTech} noticias sobre tecnologia.
                            </label>
                        )
                        : (
                            <label className={classes.labelCountNews}>
                                Hoje temos {countNewsScience} noticias sobre ciências...
                            </label>
                        )
                }
            </div>
        )
    }

    const ViewDesktopRight = () => {

        return (
            <div className={classes.columnRight}>
                <strong>Alerta de Coronavirus no Mundo</strong>
                <span className={classes.span}>
                    <span><strong>Total de casos:</strong> <label
                        style={{color: Colors.red}}>{casesTotalCovid}</label></span>
                    <span><strong>Novos casos:</strong> <label
                        style={{color: Colors.red}}>{casesNewsCovid}</label></span>
                    <span><strong>Mortos:</strong> <label style={{color: Colors.red}}>{casesDeathCovid}</label></span>
                    <span><strong>Recuperados:</strong> <label
                        style={{color: Colors.green}}>{casesRecoveredCovid}</label></span>
                </span>
            </div>
        )
    }

    return (
        <header>
            {screen === "desktop" ? <ViewDesktopLeft/> : ""}
            <div className={screen === "desktop" ? classes.columnCenter : classes.columnCenterMobile}>
                <div className={screen === "desktop" ? classes.rowTop : classes.rowTopMobile}>
                    <h1>News Time - UOL</h1>
                </div>
                <div className={screen === "desktop" ? classes.rowBottom : classes.rowBottomMobile}>
                    <label onClick={onClickTech} className={classes.labelLeft}>Tech</label>
                    <label onClick={onClickScience} className={classes.labelRight}>Science</label>
                </div>
            </div>
            {screen === "desktop" ? <ViewDesktopRight /> : ""}
        </header>
    );
}


UolHeader.propTypes = {
    onClickTech: PropTypes.func,
    onClickScience: PropTypes.func,
    countNewsTech: PropTypes.number,
    countNewsScience: PropTypes.number,
    casesTotalCovid: PropTypes.number,
    casesNewsCovid: PropTypes.number,
    casesDeathCovid: PropTypes.number,
    casesRecoveredCovid: PropTypes.number,
    screen: PropTypes.oneOf(["desktop", "smartphone", "tablet"])
};

UolHeader.defaultProps = {
    onClickTech: null,
    onClickScience: null,
    countNewsTech: 0,
    countNewsScience: 0,
    casesTotalCovid: 0,
    casesNewsCovid: 0,
    casesDeathCovid: 0,
    casesRecoveredCovid: 0,
    screen: ConvertDesktopInMobile()
};

export default UolHeader;