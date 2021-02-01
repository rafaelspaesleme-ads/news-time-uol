import React from "react";
import useStyles from "./styles";
import * as PropTypes from "prop-types";
import Marquee from 'marquee-react-dwyer';

export const UolMarquee = ({info, sequencyRandom}) => {
    const classes = useStyles();

    return (
        <>{
            info.length > 0
                ? (
                    <div className={classes.marquee}>
                        {console.log('info', info)}
                        <Marquee
                            Size={'h5'}
                            NumberOfOptions={info.length}
                            Index0={info[0].title}
                            Index1={info[1].title}
                            Index2={info[2].title}
                            Index3={info[3].title}
                            Index4={info[4].title}
                            Index5={info[5].title}
                            Index6={info[6].title}
                            TimeToCross={'10000'}
                            TimeToChange={'2000'}
                            IsRandom={sequencyRandom}
                            Color={'yellow'}
                        />
                    </div>
                )
                : ('')
        }
        </>
    );
}


UolMarquee.propTypes = {
    info: PropTypes.array,
    sequencyRandom: PropTypes.bool
};

UolMarquee.defaultProps = {
    info: [],
    sequencyRandom: false
};

export default UolMarquee;