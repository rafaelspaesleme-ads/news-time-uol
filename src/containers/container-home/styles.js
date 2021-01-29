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
        marginBottom: 10
    },
    rowCenter: {
        width: '100%',
        height: '100%'
    },
    rowBottom: {
        marginTop: 10,
        width: '100%',
    },
    columnLeft: {
        width: '15%',
        float: 'left',
        height: '100%'
    },
    columnCenter: {
        width: '70%',
        float: 'left',
        height: '100%'
    },
    columnRight: {
        width: '15%',
        float: 'left',
        height: '100%'
    }
}));

export default useStyles;