import React from "react";
import {Box, Container, Divider} from "@material-ui/core";
import * as PropTypes from "prop-types";
import useStyles from "./styles";
import UolCardPrincipal from "../../../components/uol-card-principal";
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

export const ListPrincipalHome = ({list, typeList}) => {
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
                                        <i>{'Tecnologia'}</i><span><ImportantDevicesIcon/></span>
                                    </>
                                )
                                : (
                                    <>
                                        <i>{'Ciências'}</i><span><EmojiObjectsIcon/></span>
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
                                    <UolCardPrincipal
                                        key={index}
                                        value={value}
                                    />
                                    <Divider/>
                                </div>
                            ))
                            : (
                                <>
                                    <Box component={'center'}>
                                        <h5>Não há noticias sobre {typeList === 'tech' ? 'Tecnologia' : 'Ciência'}</h5>
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
    typeList: PropTypes.oneOf(['tech', 'science'])
};

ListPrincipalHome.defaultProps = {
    list: [],
    typeList: 'tech'
};

export default ListPrincipalHome;