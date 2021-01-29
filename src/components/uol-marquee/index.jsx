import React from "react";
import useStyles from "./styles";
import * as PropTypes from "prop-types";
import Marquee from 'marquee-react-dwyer';

export const UolMarquee = ({info, sequencyRandom}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.marquee}>
                <Marquee
                    Size={'h5'}
                    NumberOfOptions={info.count}
                    Index0={info.data[0].value}
                    Index1={info.data[1].value}
                    Index2={info.data[2].value}
                    Index3={info.data[3].value}
                    Index4={info.data[4].value}
                    Index5={info.data[5].value}
                    Index6={info.data[6].value}
                    TimeToCross={'10000'}
                    TimeToChange={'2000'}
                    IsRandom={sequencyRandom}
                    Color={'yellow'}
                />
            </div>
        </>
    );
}


UolMarquee.propTypes = {
    info: PropTypes.object,
    sequencyRandom: PropTypes.bool
};

UolMarquee.defaultProps = {
    info: {
        count: 7,
        data: [
            {value: 'Não'},
            {value: 'há'},
            {value: 'noticias'},
            {value: 'do'},
            {value: 'dia'},
            {value: 'no'},
            {value: 'momento...'}
        ]
    },
    sequencyRandom: false
};

export default UolMarquee;