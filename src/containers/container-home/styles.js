import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0
    },
    home: {
        width: '100%',
        marginTop: 150,
        marginBottom: 30,
        backgroundColor: `${Colors.white}`,
        padding: 20,
        display: 'grid',
        textAlign: 'center'
    },
    homeMobile: {
        width: '100%',
        marginTop: 160,
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
    rowTopMobile: {
        width: '100%',
        position: 'absolute',
        top: 100,
        margin: 0,
        float: 'left',
        left: 0,
        '& .marquee': {
            width: '100%'
        }
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
    columnCenterMobile: {
        marginTop: 20,
        width: '100%',
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