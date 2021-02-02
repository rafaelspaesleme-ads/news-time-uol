import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    alert: {
        float: 'right',
        right: 20,
        fontSize: 10,
    },
    box: {
        backgroundColor: Colors.white,
        width: 200,
        marginBottom: 5,
        borderRadius: 5,
        zIndex: 1300,
        position: 'fixed',
        right: 20,
        top: window.innerHeight < 620 ? 480 : 560,
        border: `1px solid ${Colors.red}`,
        padding: 5,
        '& div': {
            '& label': {
                marginRight: 2
            },
            '& span': {
                color: Colors.red
            }
        },
        WebkitBoxShadow: "0px 0px 5px 5px rgba(0,0,0,0.19)",
        MozBoxShadow: "0px 0px 5px 5px rgba(0,0,0,0.19)",
        boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.19)"
    },
    casesRecovered: {
        '& span': {
            color: `${Colors.green} !important`
        }
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    floatingBtn: {
        fontSize: 10,
        zIndex: 1300,
        position: 'fixed',
        right: 20,
        top: window.innerHeight < 620 ? 550 : 630,
        '& span': {
            '& svg': {
                margin: 0
            },
            '& label': {
                marginLeft: 3
            }
        }
    }
}));

export default useStyles;