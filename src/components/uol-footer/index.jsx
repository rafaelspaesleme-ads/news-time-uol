import React from "react";
import useStyles from "./styles";
import * as PropTypes from "prop-types";
import {IconButton} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const UolFooter = ({idDocs, urlUsernameGithub, urlUsernameInstagram, urlUsernameLinkedin, nameDev}) => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.rowTop}>
                Project Documentation: <span onClick={() => window.open(`https://gist.github.com/${urlUsernameGithub}/${idDocs}`, '_blank')}>Readme.md</span>
            </div>
            <div className={classes.rowCenter}>
                Dev contacts:
                <IconButton onClick={() => window.open(`https://github.com/${urlUsernameGithub}`, '_blank')}>
                    <GitHubIcon />
                </IconButton>
                <IconButton onClick={() => window.open(`https://instagram.com/${urlUsernameInstagram}`, '_blank')}>
                    <InstagramIcon />
                </IconButton>
                <IconButton onClick={() => window.open(`https://www.linkedin.com/in/${urlUsernameLinkedin}`, '_blank')}>
                    <LinkedInIcon />
                </IconButton>
            </div>
            <div className={classes.rowBottom}>
                Developed by: <span onClick={() => window.open(`https://github.com/${urlUsernameGithub}`, '_blank')}>{nameDev}</span>
            </div>
        </footer>
    );
}

UolFooter.propTypes = {
    idDocs: PropTypes.string,
    urlUsernameGithub: PropTypes.string,
    urlUsernameInstagram: PropTypes.string,
    urlUsernameLinkedin: PropTypes.string,
    nameDev: PropTypes.string,
}

UolFooter.defaultProps = {
    idDocs: '',
    urlUsernameGithub: '',
    urlUsernameInstagram: '',
    urlUsernameLinkedin: '',
    nameDev: '',
}

export default UolFooter;