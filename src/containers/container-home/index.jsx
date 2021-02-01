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

export const ContainerHome = ({copyright, typePrincipal, dailies, politics, arts, sports, techs, sciences, worlds}) => {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.home}>
                <div className={classes.rowTop}>
                    <UolMarquee
                        info={dailies}
                    />
                </div>
                <div className={classes.rowCenter}>
                    <div className={classes.columnLeft}>
                        <ListSecondaryHome
                            title="Política"
                            list={politics}
                            icon={<ApartmentIcon />}
                            multipleList={true}
                        />
                        <ListSecondaryHome
                            title="Artes"
                            list={arts}
                            icon={<BrushIcon/>}
                            multipleList={true}
                        />
                        <ListSecondaryHome
                            title="Esprotes"
                            list={sports}
                            icon={<SportsHandballIcon/>}
                            multipleList={true}
                        />
                    </div>
                    <div className={classes.columnCenter}>
                        <ListPrincipalHome
                            list={typePrincipal === "tech" ? techs : sciences}
                            typeList={typePrincipal}
                        />
                    </div>
                    <div className={classes.columnRight}>
                        <ListSecondaryHome
                            title="Mundo"
                            list={worlds}
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
    copyright: PropTypes.string,
    typePrincipal: PropTypes.oneOf(['tech','science']),
    dailies: PropTypes.array,
    politics: PropTypes.array,
    arts: PropTypes.array,
    sports: PropTypes.array,
    techs: PropTypes.array,
    sciences: PropTypes.array,
    worlds: PropTypes.array
};

ContainerHome.defaultProps = {
    copyright: 'https://github.com/rafaelspaesleme-ads',
    typePrincipal: 'tech',
    dailies: [],
    politics: [],
    arts: [],
    sports: [],
    techs: [],
    sciences: [],
    worlds: []
};

export default ContainerHome;