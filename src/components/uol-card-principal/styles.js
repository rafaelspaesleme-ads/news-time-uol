import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "../../assets/styles/js/colors";

export const useStyles = makeStyles((theme) => ({
    card: {
        width: "100%",
        WebkitBoxShadow: `2px 2px 2px 2px ${Colors.darkGrayOpac}`,
        MozBoxShadow: `2px 2px 2px 2px ${Colors.darkGrayOpac}`,
        boxShadow: `2px 2px 2px 2px ${Colors.darkGrayOpac}`,
        border: `1px solid ${Colors.darkGrayOpac}`,
        marginBottom: 30,
        marginTop: 30
    },
    areaImg: {
        width: '100%',
        backgroundColor: Colors.gray,
        height: 300,
        padding: 30,
        '& img': {
            width: 'inherit',
            height: 300,
            WebkitBoxShadow: "0px 1px 5px 0px rgba(0,0,0,0.44)",
            MozBoxShadow: "0px 1px 5px 0px rgba(0,0,0,0.44)",
            boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.44)",
            border: `1px solid ${Colors.white}`
        }
    },
    areaText: {
        width: '100%',
        height: 200,
        textAlign: 'justify',
        padding: 30,
        marginTop: 20,
        '& label': {
            width: '100%',
            marginBottom: 5,
            color: Colors.gray
        },
        '& p': {
            marginTop: 15,
            color: Colors.grayLight
        }
    },
    actions: {
        width: '100%',
        textAlign: 'center',
    }
}));

export default useStyles;