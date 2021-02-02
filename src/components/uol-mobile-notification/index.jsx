import React, {useState} from "react";
import Fab from "@material-ui/core/Fab";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import useStyles from "./styles";
import * as PropTypes from "prop-types";

export const UolMobileNotification = ({casesTotalCovid, casesNewsCovid, casesDeathCovid, casesRecoveredCovid}) => {
    const classes = useStyles();
    const [actionCovid, setActionCovid] = useState(false);

    return (

        <div style={casesTotalCovid > 0 ? null : {display: 'none'}} className={classes.alert}>
            <div className={classes.box} style={!actionCovid ? {display: 'none'} : null}>
                <div>
                    <label>Total Cases:</label>
                    <span>{casesTotalCovid}</span>
                </div>
                <div>
                    <label>New Cases:</label>
                    <span>{casesNewsCovid}</span>
                </div>
                <div>
                    <label>Deaths:</label>
                    <span>{casesDeathCovid}</span>
                </div>
                <div className={classes.casesRecovered}>
                    <label>Recoveries:</label>
                    <span>{casesRecoveredCovid}</span>
                </div>
            </div>
            <div className={classes.floatingBtn}>
                <Fab onClick={() => setActionCovid(!actionCovid)} color="secondary" variant="extended">
                    <NotificationImportantIcon className={classes.extendedIcon}/>
                    {actionCovid ? (<label>Covid Alert</label>) : null}
                </Fab>
            </div>
        </div>
    )
}


UolMobileNotification.propTypes = {
    casesTotalCovid: PropTypes.number,
    casesNewsCovid: PropTypes.number,
    casesDeathCovid: PropTypes.number,
    casesRecoveredCovid: PropTypes.number
};

UolMobileNotification.defaultProps = {
    casesTotalCovid: 0,
    casesNewsCovid: 0,
    casesDeathCovid: 0,
    casesRecoveredCovid: 0
};

export default UolMobileNotification;