import React from "react";
import useStyles from "./styles";
import * as PropTypes from "prop-types";
import {IconButton} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const UolFooter = ({onClickDocs, onClickGithub, onClickInstagram, onClickLinkedin, nameDev}) => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.rowTop}>
                Documentação do Projeto: <span onClick={onClickDocs}>Readme.md</span>
            </div>
            <div className={classes.rowCenter}>
                Contatos do desenvolvedor:
                <IconButton onClick={onClickGithub}>
                    <GitHubIcon />
                </IconButton>
                <IconButton onClick={onClickInstagram}>
                    <InstagramIcon />
                </IconButton>
                <IconButton onClick={onClickLinkedin}>
                    <LinkedInIcon />
                </IconButton>
            </div>
            <div className={classes.rowBottom}>
                Desenvolvido por: <span onClick={onClickGithub}>{nameDev}</span>
            </div>
        </footer>
    );
}

UolFooter.propTypes = {
    onClickDocs: PropTypes.func,
    onClickGithub: PropTypes.func,
    onClickInstagram: PropTypes.func,
    onClickLinkedin: PropTypes.func,
    nameDev: PropTypes.string,
}

UolFooter.defaultProps = {
    onClickDocs: null,
    onClickGithub: null,
    onClickInstagram: null,
    onClickLinkedin: null,
    nameDev: '@rafaelspaesleme-ads',
}

export default UolFooter;