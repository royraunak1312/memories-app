import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../../actions/posts.js';

const Post = ({post, setCurrentId}) => {

    const cardStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      };
    const mediaStyles = {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      };
    const overlayStyles = {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
      };
    const overlay2Styles = {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
      };
    const detailsStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      };
    const titleStyles = {
        padding: '0 16px',
      };
    const cardActionsStyles = {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      };

    const dispatch = useDispatch();

    return <Card sx={cardStyles}>
            <CardMedia sx={mediaStyles} image={post.selectedFile} title={post.title}/>
            <div style={overlayStyles}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div style={overlay2Styles}>
                <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div style={detailsStyles}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => {
                    return `#${tag} `;
                })}</Typography>
            </div>
            <Typography style={titleStyles} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography  variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions style={cardActionsStyles}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp; 
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    &nbsp;Delete
                </Button>
            </CardActions>
        </Card>
}

export default Post;
