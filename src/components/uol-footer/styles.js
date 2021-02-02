import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `2px solid ${Colors.grayLight}`,
        backgroundColor: Colors.gray,
        textAlign: 'center',
        color: `${Colors.white}`,
        fontSize: 14,
    },
    rowTop: {
        paddingBottom: 10,
        borderBottom: `1px solid ${Colors.grayLight}`,
        transition: '0.2s',
        '&:hover': {
            '& span': {
                cursor: 'pointer',
                color: Colors.darkGrayOpac,
                transition: '0.2s'
            }
        }
    },
    rowCenter: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.grayLight2,
        borderBottom: `1px solid ${Colors.grayLight}`,
        '& button': {
            '& span': {
                '& svg': {
                    color: Colors.white
                }
            }
        }
    },
    rowBottom: {
        paddingTop: 10,
        transition: '0.2s',
        '&:hover': {
            '& span': {
                cursor: 'pointer',
                color: Colors.darkGrayOpac,
                transition: '0.2s'
            }
        }
    }
}));

export default useStyles;