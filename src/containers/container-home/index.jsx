import React from "react";
import useStyles from "./styles";
import {Container} from "@material-ui/core";
import UolMarquee from "../../components/uol-marquee";

export const ContainerHome = () => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.home}>
                <div className={classes.rowTop}>
                    <UolMarquee/>
                </div>
                <div className={classes.rowCenter}>
                    <div className={classes.columnLeft}>
                        TESTE 1
                    </div>
                    <div className={classes.columnCenter}>
                        TESTE 2
                    </div>
                    <div className={classes.columnRight}>
                        TESTE 3
                    </div>
                </div>
                <div className={classes.rowBottom}>
                    FOOTER NEWS
                </div>
            </div>
        </Container>
    );
}

export default ContainerHome;