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
            color: Colors.darkGray,
            cursor: 'pointer'
        },
        paddingBottom: 20,
        '& span': {
            float: 'right',
            cursor: 'pointer'
        }
    },
    list: {
        width: '100%',
        paddingBottom: 5,
        borderBottom: `1px solid ${Colors.black}`,
        '& p': {
            fontSize: 10,
            color: Colors.darkGray
        }
    }
}));

export default useStyles;