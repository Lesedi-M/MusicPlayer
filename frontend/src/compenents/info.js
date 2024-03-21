import React, {useState, useEffect }from "react";
import { Grid, Button, Typography, IconButton } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from "react-router-dom";

const pages = {
    JOIN: 'pages.join',
    CREATE: 'pages.create',
};

export default function Info(props){

    const [page, setPage] = useState(pages.JOIN); 
    
    function joinInfo(){
        return  <Grid container spacing={1}>
            <Grid item xs={12} align="center">
            <Typography component="h5" variant="h5">Join Room:</Typography>
                <Typography variant="body1">
                    Get a room code from a friend and insert into the text field to join the live room.
                </Typography>
                </Grid>
        </Grid>;
    }

    function createInfo(){
        return <Grid container spacing={1}>
        <Grid item xs={12} align="center">
        <Typography component="h5" variant="h5">Create A Room:</Typography>
            <Typography variant="body1">
               This will require you to have a spotify account. Upon creating a room you'll get a code that you can share with your friends, and they'll have control options depending on the settings you chose when you created the room. These settings can be alted at anytime buy just clicking on the settings button.
            </Typography>
            </Grid>
    </Grid>;
    }

    
    return (  
    <Grid container spacing={1}>
        <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
                What is House Party?
            </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <Typography variant="body1">
                {page === pages.JOIN ? joinInfo(): createInfo()}
            </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <IconButton onClick={()=>{page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE)}}>
            {page === pages.CREATE ?( <NavigateBeforeIcon/> ): (<NavigateNextIcon/>)}
            </IconButton>
        </Grid>
        <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/" component={Link}>
                Back   
            </Button>   
        </Grid>
    </Grid>
    );
}

