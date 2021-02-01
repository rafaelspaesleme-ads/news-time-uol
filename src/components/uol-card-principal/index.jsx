import React, {useState} from "react";
import * as PropTypes from "prop-types";
import useStyles from "./styles";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Box, Divider, IconButton} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import UolContentModal from "../uol-content-modal";
import Slide from "@material-ui/core/Slide";

export const UolCardPrincipal = ({value}) => {
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
        <>
            <div className={classes.card}>
                <Box component="center">
                    <div className={classes.areaImg}>
                        <img src={value.multimedia && value.multimedia[4].url} alt={value.short_url}/>
                    </div>
                </Box>
                <div className={classes.areaText}>
                    <label>
                        {value.title}
                    </label>
                    <Divider/>
                    <p>
                        {value.abstract}
                    </p>
                </div>
                <div className={classes.actions}>
                    <Divider/>
                    <IconButton onClick={handleClickOpen}>
                        <VisibilityIcon/>
                    </IconButton>
                </div>
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
                        <UolContentModal
                            url={value.url}
                            image={value.multimedia && value.multimedia[1].url}
                            title={value.title}
                            description={value.abstract}
                            author={value.byline}
                            tags={value.des_facet}
                        />
                    </div>
                </Dialog>
            </Box>
        </>
    );
}

UolCardPrincipal.propTypes = {
    value: PropTypes.object,
}

UolCardPrincipal.defaultProps = {
    value: null,
}


export default UolCardPrincipal;