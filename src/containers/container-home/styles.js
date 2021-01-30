import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    home: {
        width: '100%',
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: `${Colors.white}`,
        padding: 20,
        display: 'grid',
        textAlign: 'center'
    },
    rowTop: {
        width: '100%',
        marginBottom: 30,
        paddingBottom: 30,
        borderBottom: `1px solid ${Colors.black}`
    },
    rowCenter: {
        width: '100%',
        height: '100%'
    },
    rowBottom: {
        marginTop: 30,
        paddingTop: 30,
        width: '100%',
        borderTop: `1px solid ${Colors.black}`,
        '& label': {
            color: Colors.gray
        },
        '& span': {
            color: Colors.grayLight2
        },
        fontSize: 14
    },
    columnLeft: {
        width: '25%',
        float: 'left',
        height: '100%',
        borderRight: `1px solid ${Colors.black}`
    },
    columnCenter: {
        width: '50%',
        float: 'left',
        height: '100%',
    },
    columnRight: {
        width: '25%',
        float: 'left',
        height: '100%',
        borderLeft: `1px solid ${Colors.black}`
    }
}));

export default useStyles;