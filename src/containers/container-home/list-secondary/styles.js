import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    secundary: {
        width: '100%',
        textAlign: 'left',
        paddingTop: 30
    },
    title: {
        width: '100%',
        '& label': {
            fontSize: 18,
            color: Colors.darkGray
        },
        paddingBottom: 20
    },
    list: {
        width: '100%',
        paddingBottom: 5,
        borderBottom: `1px solid ${Colors.black}`,
    }
}));

export default useStyles;