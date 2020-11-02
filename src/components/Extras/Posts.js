import React, { useState, useEffect } from "react";
import { makeStyles, Button, Modal, TextField } from "@material-ui/core"
import Feed from "./Feed";
import ImageUploader from 'react-images-upload';

const Ice = 'https://jela-website.s3.us-east-2.amazonaws.com/ice-1.jpg';
const Denver = 'https://jela-website.s3.us-east-2.amazonaws.com/Denver.jpg';
const Mendoza = 'https://jela-website.s3.us-east-2.amazonaws.com/Mendoza.jpg';

const generateKey = () => {
    return Math.random()*100
}

//sample to populate feed when opened
const example = {
    user: {
        username: 'jlaprade',
        avatar: Denver,
    },
    image: Mendoza,
    caption: ' View from my classroom in Mendoza',
    id: generateKey()
}

//sample to populate feed when opened
const example2 = {
    user: {
        username: 'antarctic123',
        avatar: Mendoza,
    },
    image: Ice,
    caption: ' Ice floating around in Antarctica',
    id: generateKey()
}

const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: "#d7e3f0",
        margin:'auto',
        width: '100%',
        paddingBottom: '5%',
        paddingTop: "2%"
    },
    postBar: {
        margin: 'auto',
        fontFamily: "Courier new",
        marginBottom: 10,
        columnCount: 2,
        backgroundColor: '#fff',
        height: 70,        
        boxShadow: '0px 0px 2px 0px black', 
        [theme.breakpoints.down('xs')]:{
            width: '100%'
        },
        [theme.breakpoints.up('sm')]:{
            width: '60%'
        },
        [theme.breakpoints.up('md')]:{
            width: '45%'
        },
    },
    postUser: {
        marginTop: '10%',
        marginLeft: '8%',
        marginRight: '5%',
        width: '95%'
    },
    postButton: {
        backgroundColor: "#25274b",
        color: 'white',
        marginTop: '8%',
        width: '95%',
    },
    popup: {
        position: 'relative',
        margin: 'auto',
        backgroundColor: "white",
        padding: '100px 5% 5% 5%',
        [theme.breakpoints.down('xs')]:{
            paddingTop: 20,
            marginTop: "25%",
            width: '100%',
         },
         [theme.breakpoints.up('sm')]:{
            marginTop: '10%',
            width: 350,
         },
         [theme.breakpoints.up('md')]:{
            marginTop: '5%',
            width: 350,
         },
    },
    modal: {
        boxSizing: 'content-box',
    },
    userInput: {
        width: "100%",
        marginLeft: '20%',
        [theme.breakpoints.down('xs')]:{
           marginTop: '-5%',
           marginLeft: '25%',
        },
        [theme.breakpoints.up('sm')]:{
            marginTop: '-40%',
            marginLeft: '20%',
        },
        [theme.breakpoints.up('md')]:{
            marginLeft: '10%',
         },
    },
    userCaption: {
        width:"100%",
        marginTop: '8%',
        [theme.breakpoints.down('xs')]:{
            marginLeft: '23%',
         },
         [theme.breakpoints.up('sm')]:{
             marginLeft: '15%',
         },
         [theme.breakpoints.up('md')]:{
            marginLeft: '6%',
         },
    },
    upload: {
        backgroundColor: '#25274b',
        color: "white",
        marginTop: '8%',
    },
    submit: {
        marginTop: '8%' ,
        size: 'small',
        [theme.breakpoints.down('xs')]:{
            marginLeft: '35%',
         },
         [theme.breakpoints.up('sm')]:{
             marginLeft: '30%',
         },
    },
    inputFile: {
        border: '1px solid gray',
        borderRadius: 10,
        marginTop: 10
    },
}));

const Posts = () => {
    const classes = useStyles();
    const [user, setUser] = useState('Welcome!');
    const [posts, setPosts] = useState([example, example2]);
    const [showModal, setShowModal] = useState(false);
    const [userTyped, setTyped] = useState("");
    const [captionTyped, setCaption] = useState("");
    const [pictures, setPictures] = useState([]);

    const generateKey = () => {
        return Math.random()*100
    }

    //opens modal
    const openModal = () => {
        setShowModal(true)
    }

    //closes post modal
    const closeModal = () => {
        setShowModal(false)
    }

    //sets username inside of modal
    const username = event => {
        setTyped(event.target.value)
    }

    //sets caption inside of modal
    const caption = event => {
        setCaption(` ${event.target.value}`)
    }

    //sets state for user post
    const onDrop = (picture) => {
        setPictures(URL.createObjectURL(picture[0]))
    }

    //post happens here
    const submitAll = () => {
        let username = userTyped;
        let caption = captionTyped;
        let otherPosts = posts
        //data object for post

        const newPost = {
            user: {
                username,
                avatar: Denver,
            },
            image: pictures,
            caption,
            id: generateKey()
        }
        //makes sure there is a caption and username to post
        if(caption.length > 1 && username.length > 1){
            setPosts([...otherPosts, newPost]);
            setUser(`Welcome, ${username}`)
            setShowModal(false)
        }
    }

    return (
        <div className={classes.main}>
            <div className={classes.postBar}>
                <div className={classes.postUser}>{user}</div>
                <Button className={classes.postButton} onClick={openModal}>Create a post</Button>
                <Modal
                    aria-labelledby="contained-modal-title-lg"
                    className={classes.modal}
                    open={showModal}
                    onClose={closeModal}
                >
                    <div className={classes.popup}>
                        <div className={classes.userInput}>
                            <TextField
                            id="standard-uncontrolled"
                            label="Username"
                            defaultValue=""
                            margin="normal"
                            onChange={username}
                            />
                        </div>
                        <div className={classes.userCaption}>
                            <TextField
                                id="filled-multiline-static"
                                label="Caption"
                                multiline
                                rows="4"
                                defaultValue=""
                                variant="filled"
                                onChange={caption}
                            />
                        </div>
                        <div>
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose image'
                                className={classes.inputFile}
                                onChange={onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                                maxFileSize={5242880}
                            />
                            <Button variant="contained" className={classes.submit} onClick={submitAll}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className={classes.posts}> 
                {
                    posts
                    .slice(0)
                    .reverse()
                    .map(post => (
                        <Feed
                            username={post.user.username}
                            avatar={post.user.avatar}
                            image={post.image}
                            caption={post.caption}
                            key={post.id}
                        />
                    ))
                } 
            </div>
        </div>
    );
  
}

export default Posts;
