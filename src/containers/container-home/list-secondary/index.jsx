import React, {useState} from "react";
import {Box, Container, Divider} from "@material-ui/core";
import useStyles from "./styles";
import * as PropTypes from "prop-types";
import BlurOnIcon from '@material-ui/icons/BlurOn';
import UolCardSecondary from "../../../components/uol-card-secondary";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export const ListSecondaryHome = ({icon, list, title, multipleList}) => {
    const classes = useStyles();
    const [drop, setDrop] = useState(true);

    const DropDown = () => {

        return <ArrowDropDownIcon/>
    }

    const DropUp = () => {

        return <ArrowDropUpIcon/>
    }

    const Drop = () => {
        if (multipleList) {
            if (drop) {
                return <DropDown/>
            } else {
                return <DropUp/>
            }
        } else {
            return '';
        }
    }

    return (
        <Container>
            <div className={classes.secundary}>
                <div
                    onClick={() => {
                        setDrop(!drop);
                    }}
                    className={classes.title}
                    style={multipleList ? {cursor: 'pointer'} : null}
                >
                    <label>
                        {icon} <i>{title}</i> <span>{Drop()}</span>
                    </label>
                </div>
                <div className={classes.list} style={multipleList ? {display: drop ? null : 'none'} : null}>
                    {
                        list.length > 0
                            ? list.map((value, index) => (
                                <div key={index}>
                                    <UolCardSecondary
                                        title={value.title}
                                        description={value.abstract}
                                    />
                                    <Divider/>
                                </div>
                            ))
                            : (
                                <Box component="center">
                                    <p>There is no news about {title}</p>
                                </Box>
                            )
                    }
                </div>
                {drop ? '' : <Divider/>}
            </div>
        </Container>
    );
};

ListSecondaryHome.propTypes = {
    icon: PropTypes.any,
    list: PropTypes.array,
    title: PropTypes.string,
    multipleList: PropTypes.bool
};

ListSecondaryHome.defaultProps = {
    icon: <BlurOnIcon/>,
    list: [],
    title: 'Untitled',
    multipleList: false
};

export default ListSecondaryHome;