import React from 'react';
import { useSelector } from 'react-redux'; // 게시물을 가져오는?
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import Post from './Post/Post';

const Posts = ({ setCurrentId } )=> {
    const posts = useSelector((state) => state.posts); // 게시물을 가져오는?
    const classes = useStyles();

    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing ={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}

            </Grid>
        )
    );
}


export default Posts;

