import React from 'react';
import Post from './Post/Post.js';
import { Grid, CircularProgress } from '@mui/material';

import { useSelector } from 'react-redux';

const Posts = ({setCurrentId}) => {

    const gridStyles = {
        display: 'flex',
        alignItems: 'center',
      };

    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        !posts.length?<CircularProgress />:(
            <Grid sx={gridStyles} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;
