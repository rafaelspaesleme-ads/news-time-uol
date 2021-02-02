import React from "react";
import {Box, Container, Divider} from "@material-ui/core";
import * as PropTypes from "prop-types";
import useStyles from "./styles";
import UolCardPrincipal from "../../../components/uol-card-principal";
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import {ConvertDesktopInMobile} from "../../../utils/functions/Convertions";
import UolCardMobile from "../../../components/uol-card-mobile";

export const ListPrincipalHome = ({list, typeList, screen}) => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.principal}>
                <div className={classes.title}>
                    <h3>
                        {
                            typeList === 'tech'
                                ? (
                                    <>
                                        <i>{'Tech'}</i><span><ImportantDevicesIcon/></span>
                                    </>
                                )
                                : (
                                    <>
                                        <i>{'Sciense'}</i><span><EmojiObjectsIcon/></span>
                                    </>
                                )
                        }
                    </h3>
                </div>
                <div className={classes.list}>
                    {
                        list.length > 0 ?
                            list.map((value, index) => (
                                <div key={index}>
                                    {screen === "desktop" ? <UolCardPrincipal value={value} /> : <UolCardMobile value={value} />}
                                    <Divider/>
                                </div>
                            ))
                            : (
                                <>
                                    <Box component={'center'}>
                                        <h5>There is no news about {typeList === 'tech' ? 'Tech' : 'Science'}</h5>
                                    </Box>
                                </>
                            )
                    }
                </div>
            </div>
        </Container>
    );
}

ListPrincipalHome.propTypes = {
    list: PropTypes.array,
    typeList: PropTypes.oneOf(['tech', 'science']),
    screen: PropTypes.oneOf(['desktop', 'smartphone', 'tablet'])
};

ListPrincipalHome.defaultProps = {
    list: [],
    typeList: 'tech',
    screen: ConvertDesktopInMobile()
};

export default ListPrincipalHome;