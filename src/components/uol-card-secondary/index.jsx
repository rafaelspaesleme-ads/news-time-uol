import React from "react";
import * as PropTypes from "prop-types";
import useStyles from "./styles";

export const UolCardSecondary = ({title, description}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.card}>
                <label>
                    {title}
                </label>
                <p>
                    {description}
                </p>
            </div>
        </>
    );
}

UolCardSecondary.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

UolCardSecondary.defaultProps = {
    title: 'There is no news',
    description: 'No comments',
}

export default UolCardSecondary;