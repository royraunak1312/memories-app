import React, {useEffect, useState} from "react";
import {AppBar, Container, Typography, Grow, Grid} from '@mui/material';
import {getPosts} from './actions/posts.js';
import memories from './images/memories.png'; 
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';
import {useDispatch} from 'react-redux';


const App = () => {


    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    const appBarStyle = {
        borderRadius: '15px',
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',   
        justifyContent: 'center',
        alignItems: 'center',
      };

      const imageStyle = {
        marginLeft: '15px',
      };

      const headingStyle = {
        color: 'rgba(0,183,255, 1)',
      };

    return <Container maxWidth="lg">
        <AppBar sx={appBarStyle} position="static" color="inherit">
            <Typography sx={headingStyle} variant="h2" align="center">Memories</Typography>
            <img sx={imageStyle} src={memories} alt="memories" height="60"/>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid> 
            </Container>
        </Grow>
    </Container>
}

export default App;

