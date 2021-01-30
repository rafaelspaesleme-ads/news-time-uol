import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    modal: {
        padding: 30
    },
    rowTop: {
        width: '100%'
    },
    columnLeft: {
        float: 'left',
        width: '20%'
    },
    columnRight: {
        float: 'right',
        width: '80%',
        display: 'grid',
        textAlign: 'justify',
        marginBottom: 35,
        '& strong': {
            width: '100%',
            color: Colors.gray,
            alignSelf: 'end'
        },
        '& label': {
            width: '100%',
            color: Colors.grayLight2,
            fontSize: 12
        }
    },
    rowBottom: {
        width: '100%',
        '& p': {
            padding: 20,
            display: 'inline-flex',
            textAlign: 'justify'
        }
    },
    areaTags: {
        width: '100%',
        textAlign: 'justify',
        fontSize: 12,
        padding: 20,
        '& span': {
            backgroundColor: Colors.purple,
            marginRight: 10,
            padding: 5,
            color: Colors.white,
            WebkitBoxShadow: "1px 1px 3px 0px rgba(0,0,0,0.44)",
            MozBoxShadow: "1px 1px 3px 0px rgba(0,0,0,0.44)",
            boxShadow: "1px 1px 3px 0px rgba(0,0,0,0.44)",
            cursor: 'pointer',
            transition: '0.2s',
            '&:hover': {
                transition: '0.2s',
                backgroundColor: Colors.purpleLight,

            }
        }
    },
    areaButton: {
        borderTop: `1px solid ${Colors.darkGrayOpac}`,
        width: '100%',
        paddingTop: 10,
        '& button': {
            float: 'right'
        },
        height: 40
    }
}));

export default useStyles;