import React from "react";
import useStyles from "./styles";
import {Container} from "@material-ui/core";
import UolMarquee from "../../components/uol-marquee";
import ListPrincipalHome from "./list-principal";
import ListSecondaryHome from "./list-secondary";
import ApartmentIcon from '@material-ui/icons/Apartment';
import PublicIcon from '@material-ui/icons/Public';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import * as PropTypes from "prop-types";
import {ConvertDesktopInMobile} from "../../utils/functions/Convertions";

export const ContainerHome = ({copyright, typePrincipal, dailies, politics, sports, techs, sciences, worlds, screen}) => {
    const classes = useStyles();

    const ViewDesktopLeft = () => {

        return (
            <div className={classes.columnLeft}>
                <ListSecondaryHome
                    title="Politics"
                    list={politics}
                    icon={<ApartmentIcon/>}
                    multipleList={true}
                />
                <ListSecondaryHome
                    title="Sports"
                    list={sports}
                    icon={<SportsHandballIcon/>}
                    multipleList={true}
                />
            </div>
        )
    }

    const ViewDesktopRight = () => {

        return (
            <div className={classes.columnRight}>
                <ListSecondaryHome
                    title="World"
                    list={worlds}
                    icon={<PublicIcon/>}
                />
            </div>
        )
    }

    const ViewMarqueeDesktop = () => {

        return (
            <div className={screen === "desktop" ? classes.rowTop : classes.rowTopMobile}>
                <UolMarquee
                    info={dailies}
                />
            </div>
        )
    }

    return (
        <Container className={screen !== "desktop" ? classes.root : null}>
            {screen !== "desktop" ? <ViewMarqueeDesktop/> : ''}
            <div className={screen === "desktop" ? classes.home : classes.homeMobile}>
                {screen === "desktop" ? <ViewMarqueeDesktop/> : ''}
                <div className={classes.rowCenter}>
                    {screen === "desktop" ? <ViewDesktopLeft/> : ''}
                    <div className={screen === "desktop" ? classes.columnCenter : classes.columnCenterMobile}>
                        <ListPrincipalHome
                            list={typePrincipal === "tech" ? techs : sciences}
                            typeList={typePrincipal}
                        />
                    </div>
                    {screen === "desktop" ? <ViewDesktopRight/> : ''}
                </div>
                <div className={classes.rowBottom}>
                    <label>Rights & Source:</label> <span>{copyright}</span>
                </div>
            </div>
        </Container>
    );
}

ContainerHome.propTypes = {
    copyright: PropTypes.string,
    typePrincipal: PropTypes.oneOf(['tech', 'science']),
    dailies: PropTypes.array,
    politics: PropTypes.array,
    sports: PropTypes.array,
    techs: PropTypes.array,
    sciences: PropTypes.array,
    worlds: PropTypes.array,
    screen: PropTypes.oneOf(["desktop", "smartphone", "tablet"])
};

ContainerHome.defaultProps = {
    copyright: 'https://github.com/rafaelspaesleme-ads',
    typePrincipal: 'tech',
    dailies: [],
    politics: [],
    sports: [],
    techs: [],
    sciences: [],
    worlds: [],
    screen: ConvertDesktopInMobile()
};

export default ContainerHome;