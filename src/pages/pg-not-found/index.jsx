import React from "react";
import {Box, Button} from "@material-ui/core";

export const NotFound = () => {

    return (
        <Box component="center">
            <Box>
                <img src="https://image.freepik.com/free-vector/404-error-page-found-design-template-website_114341-22.jpg" alt="not-found-page"/>
            </Box>
            <Box>
                <Button onClick={() => window.open("/", "_self")} color="secondary">Pagina inicial</Button>
            </Box>
        </Box>
    );
}

export default NotFound;