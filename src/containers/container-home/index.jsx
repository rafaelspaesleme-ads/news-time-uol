import React from "react";
import useStyles from "./styles";
import {Container} from "@material-ui/core";
import UolMarquee from "../../components/uol-marquee";
import ListPrincipalHome from "./list-principal";
import ListSecondaryHome from "./list-secondary";
import ApartmentIcon from '@material-ui/icons/Apartment';
import BrushIcon from '@material-ui/icons/Brush';
import PublicIcon from '@material-ui/icons/Public';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import * as PropTypes from "prop-types";

export const ContainerHome = ({copyright}) => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.home}>
                <div className={classes.rowTop}>
                    <UolMarquee/>
                </div>
                <div className={classes.rowCenter}>
                    <div className={classes.columnLeft}>
                        <ListSecondaryHome
                            title="Cotidiano"
                            icon={<ApartmentIcon />}
                        />
                        <ListSecondaryHome
                            title="Artes"
                            icon={<BrushIcon/>}
                        />
                        <ListSecondaryHome
                            title="Esprotes"
                            icon={<SportsHandballIcon/>}
                        />
                    </div>
                    <div className={classes.columnCenter}>
                        <ListPrincipalHome />
                    </div>
                    <div className={classes.columnRight}>
                        <ListSecondaryHome
                            title="Mundo"
                            icon={<PublicIcon/>}
                        />
                    </div>
                </div>
                <div className={classes.rowBottom}>
                    <label>Direitos & Fonte:</label> <span>{copyright}</span>
                </div>
            </div>
        </Container>
    );
}

ContainerHome.propTypes = {
    copyright: PropTypes.string
};

ContainerHome.defaultProps = {
    copyright: 'https://github.com/rafaelspaesleme-ads'
};

export default ContainerHome;