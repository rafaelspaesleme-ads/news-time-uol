import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    card: {
        width: '100%',
        display: 'grid',
        '& label': {
            fontSize: 14,
            color: Colors.gray
        },
        '& p': {
            fontSize: 12,
            color: Colors.grayLight2,
            textAlign: 'justify'
        },
        padding: 10,
        border: `1px solid ${Colors.darkGrayOpac}`,
        marginBottom: 5,
        marginTop: 5
    }
}));

export default useStyles;