import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../assets/styles/js/colors";
import red from "@material-ui/core/colors/red";

export const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: '100%',
        marginBottom: 20,
        marginTop: 20,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    tags: {
        margin: 5
    }
}));

export default useStyles;