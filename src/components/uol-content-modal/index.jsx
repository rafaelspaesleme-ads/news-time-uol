import React from "react";
import {Box, IconButton} from "@material-ui/core";
import useStyles from "./styles";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import * as PropTypes from "prop-types";

export const UolContentModal = ({image, title, author, tags, description, url}) => {
    const classes = useStyles();

    return (
        <Box>
            <div className={classes.modal}>
                <div className={classes.rowTop}>
                    <div className={classes.columnLeft}>
                        <img src={image} alt={title}/>
                    </div>
                    <div className={classes.columnRight}>
                        <strong>{title}</strong>
                        <label>{author}</label>
                    </div>
                </div>
                <div className={classes.rowBottom}>
                    <p>
                        {description}
                    </p>
                    <div className={classes.areaTags}>
                        {
                            tags && tags.map((value, index) => (
                                <span onClick={() => window.open(`https://www.google.com/search?q=${value}`, '_blank')}
                                      key={index}>{value.split(' ')[0]}</span>
                            ))
                        }
                    </div>
                    <div className={classes.areaButton}>
                        <IconButton onClick={() => window.open(url, '_blank')}>
                            <OpenInNewIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </Box>
    );
}

UolContentModal.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    tags: PropTypes.array,
    description: PropTypes.string,
    url: PropTypes.string,
};

UolContentModal.defaultProps = {
    image: 'https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png',
    title: 'Untitled',
    author: 'Without author',
    tags: [],
    description: 'No comments',
    url: ''
};

export default UolContentModal;