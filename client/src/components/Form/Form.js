import React, {useState, useEffect}from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts.js';
import { useSelector } from 'react-redux';



const Form = ({currentId, setCurrentId}) => {

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const paperStyle = {
        padding: "20px",
        margin: "5px"
      };
    const formStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      };
    const fileInputStyle = {
        width: "97%",
        margin: '10px 0'
      };
    const buttonStyle = {
        marginBottom: "10px"
      };


      const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
      });


      const dispatch = useDispatch();

      useEffect(() => {
        if (post) setPostData(post)
      }, [post]);

      const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId){
            dispatch(updatePost(currentId, postData));
            clear();
        }
        else{
            dispatch(createPost(postData));
            clear();
        }
      }

      const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: "",
            title: "",
            message: "",
            tags: "",
            selectedFile: ""
          });
      }

    return <Paper sx={paperStyle}>
        <form autoComplete='off' noValidate style={formStyle} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(event) => {
                setPostData({
                    ...postData,
                    creator: event.target.value
                })
            }}
        />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event) => {
                setPostData({
                    ...postData,
                    title: event.target.value
                })
            }}
        />
        <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event) => {
                setPostData({
                    ...postData,
                    message: event.target.value
                })
            }}
        />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => {
                setPostData({
                    ...postData,
                    tags: event.target.value.split(',')
                })
            }}
        />
        <div style={fileInputStyle}>
            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({
                ...postData,
                selectedFile: base64
            })}
        />
        </div>
        <Button style={buttonStyle} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
        <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>
        </form>
    </Paper>
}

export default Form; 
