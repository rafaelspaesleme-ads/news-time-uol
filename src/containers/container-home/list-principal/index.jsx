import React, {useState} from "react";
import {Box, Container, Divider} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import * as PropTypes from "prop-types";
import useStyles from "./styles";
import UolCardPrincipal from "../../../components/uol-card-principal";
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Slide from "@material-ui/core/Slide";
import UolContentModal from "../../../components/uol-content-modal";

export const ListPrincipalHome = ({list, typeList}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        window.location.reload();
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

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
                    <UolCardPrincipal
                        onClick={handleClickOpen}
                    />
                    <Divider/>
                    <UolCardPrincipal/>
                    <Divider/>
                    <UolCardPrincipal/>
                    <Divider/>
                    <UolCardPrincipal/>
                    <Divider/>
                    <UolCardPrincipal/>
                    <Divider/>
                </div>
                <Box as="center">
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <div>
                            <UolContentModal />
                        </div>
                    </Dialog>
                </Box>
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