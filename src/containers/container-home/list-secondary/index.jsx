import React from "react";
import {Container, Divider} from "@material-ui/core";
import useStyles from "./styles";
import * as PropTypes from "prop-types";
import BlurOnIcon from '@material-ui/icons/BlurOn';
import UolCardSecondary from "../../../components/uol-card-secondary";

export const ListSecondaryHome = ({icon, title}) => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.secundary}>
                <div className={classes.title}>
                    <label>
                        {icon} <i>{title}</i>
                    </label>
                </div>
                <div className={classes.list}>
                    <UolCardSecondary />
                    <Divider/>
                    <UolCardSecondary />
                    <Divider/>
                    <UolCardSecondary />
                    <Divider/>
                    <UolCardSecondary />
                    <Divider/>
                </div>
            </div>
        </Container>
    );
};

ListSecondaryHome.propTypes = {
    icon: PropTypes.any,
    title: PropTypes.string
};

ListSecondaryHome.defaultProps = {
    icon: <BlurOnIcon/>,
    title: 'Sem titulo'
};

export default ListSecondaryHome;