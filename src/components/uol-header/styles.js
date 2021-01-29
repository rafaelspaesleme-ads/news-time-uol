import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    columnLeft: {
        float: 'left',
        width: '20%',
        height: '-webkit-fill-available',
        display: 'grid',
        fontSize: 10,
        textAlign: 'left',
        alignItems: 'center',
        paddingLeft: 20,
        alignContent: 'center',
        borderRight: `1px dotted ${Colors.darkGrayOpac}`
    },
    columnCenter: {
        float: 'left',
        width: '60%',
        textAlign: 'center',
        height: '100%',
        display: 'grid',
        rowTop: {
            width: '100%'
        },
        rowBottom: {
            width: '100%',
        }
    },
    columnRight: {
        float: 'left',
        width: '20%',
        textAlign: 'right',
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        paddingRight: 20,
        alignContent: 'center',
        fontSize: 14,
        borderLeft: `1px dotted ${Colors.darkGrayOpac}`
    },
    labelLeft: {
        float: 'left',
        cursor: 'pointer',
        borderTop: `1px dotted ${Colors.darkGrayOpac}`,
        paddingLeft: 10,
        paddingRight: 10,
        transition: '0.4s',
        '&:hover': {
            backgroundColor: Colors.darkGrayOpac,
            opacity: 0.8,
            transition: '0.4s',
        },
        width: '50%'
    },
    labelRight: {
        float: 'right',
        cursor: 'pointer',
        borderTop: `1px dotted ${Colors.darkGrayOpac}`,
        paddingLeft: 10,
        paddingRight: 10,
        transition: '0.4s',
        '&:hover': {
            backgroundColor: Colors.darkGrayOpac,
            opacity: 0.8,
            transition: '0.4s'
        },
        width: '50%'
    },
    span: {
        display: 'grid',
        fontSize: 10
    },
    labelCountNews: {
        color: `${Colors.purple}`
    }
}));

export default useStyles;