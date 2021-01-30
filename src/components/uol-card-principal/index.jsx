import React from "react";
import * as PropTypes from "prop-types";
import useStyles from "./styles";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Box, Divider, IconButton} from "@material-ui/core";

export const UolCardPrincipal = ({image, title, description, onClick}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.card}>
                <Box component="center">
                    <div className={classes.areaImg}>
                        <img src={image} alt={title}/>
                    </div>
                </Box>
                <div className={classes.areaText}>
                    <label>
                        {title}
                    </label>
                    <Divider/>
                    <p>
                        {description}
                    </p>
                </div>
                <div className={classes.actions}>
                    <Divider/>
                    <IconButton onClick={onClick}>
                        <VisibilityIcon/>
                    </IconButton>
                </div>
            </div>
        </>
    );
}

UolCardPrincipal.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func
}

UolCardPrincipal.defaultProps = {
    image: 'https://static01.nyt.com/images/2021/01/29/business/29musk-1/29musk-1-mediumThreeByTwo210.jpg',
    title: 'Não há notícia',
    description: 'Lorem ipsum bibendum torquent potenti cursus ante dolor id integer proin, aliquam ut fusce tincidunt donec ultricies hac dictumst neque.',
    onClick: null
}


export default UolCardPrincipal;