import React, {useEffect, useState} from "react";
import useStyles from "./styles";
import {
    ConvertDateNowInText,
    ConvertDesktopInMobile
} from "../../utils/functions/Convertions";
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
                    {ConvertDateNowInText()}
                </strong>
                {
                    stateResultNews
                        ? (
                            <label className={classes.labelCountNews}>
                                ...and {countNewsTech} technology news.
                            </label>
                        )
                        : (
                            <label className={classes.labelCountNews}>
                                Today we have {countNewsScience} news about science...
                            </label>
                        )
                }
            </div>
        )
    }

    const ViewDesktopRight = () => {

        return (
            <div className={classes.columnRight}>
                <strong>Coronavirus Alert in the World</strong>
                <span className={classes.span}>
                    <span><strong>Total cases:</strong> <label
                        style={{color: Colors.red}}>{casesTotalCovid}</label></span>
                    <span><strong>New cases:</strong> <label
                        style={{color: Colors.red}}>{casesNewsCovid}</label></span>
                    <span><strong>Dead:</strong> <label style={{color: Colors.red}}>{casesDeathCovid}</label></span>
                    <span><strong>Recovered:</strong> <label
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