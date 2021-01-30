import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    principal: {
        width: '100%',
        padding: 20,
        border: `1px solid ${Colors.darkGrayOpac}`,
        textAlign: 'justify'
    },
    title: {
        width: '100%',
        height: 50,
        color: Colors.gray,
        '& h3': {
            '& span': {
                float: 'right'
            },
            '& i': {
                float: 'left'
            },
            height: '70%',
            borderBottom: `1px solid ${Colors.darkGrayOpac}`
        }
    },
    list: {
        width: '100%',
        height: '100%'
    }
}));

export default useStyles;