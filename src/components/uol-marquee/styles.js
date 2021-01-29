import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    marquee: {
        width: '100%',
        whiteSpace: 'nowrap',
        padding: 10,
        backgroundColor:  `${Colors.gray}`,
    }
}));

export default useStyles;