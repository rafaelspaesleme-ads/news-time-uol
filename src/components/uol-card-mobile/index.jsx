import React, {useState} from "react";
import * as PropTypes from "prop-types";
import useStyles from "./styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import clsx from "clsx";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ConvertDateInText} from "../../utils/functions/Convertions";
import {Chip} from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export const UolCardMobile = ({value}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={value.multimedia && value.multimedia[1].url}
                            className={classes.avatar}/>
                }
                title={value.title}
                subheader={ConvertDateInText(value.published_date)}
            />
            <CardMedia
                className={classes.media}
                image={value.multimedia && value.multimedia[2].url}
                title={value.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {value.byline}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => window.open(value.url, '_blank')} aria-label="access url">
                    <OpenInNewIcon/>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        {value.abstract}
                    </Typography>
                    <Typography component="center" paragraph>
                        {
                            value['des_facet'] && value['des_facet'].map((item, index) => (
                                <Chip
                                    className={classes.tags}
                                    key={index}
                                    avatar={<Avatar>{item[0]}</Avatar>}
                                    label={item.split(' ')[0]}
                                    color={index % 2 ? 'primary' : 'secondary'}
                                    onClick={() => window.open(`https://www.google.com/search?q=${item}`, '_blank')}
                                />
                            ))
                        }
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

UolCardMobile.propType = {
    value: PropTypes.object
}

UolCardMobile.defaultProps = {
    value: null
}

export default UolCardMobile;