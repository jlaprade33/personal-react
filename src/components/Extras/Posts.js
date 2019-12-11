import React, { Component } from "react";
import { withStyles, Button, Modal, TextField } from "@material-ui/core"
import Feed from "./Feed";
import PropTypes from 'prop-types';
import Mendoza from "../MainPage/Mendoza.jpg"
import Denver from "../MainPage/Denver.jpg"
import ImageUploader from 'react-images-upload'
import Ice from '../MainPage/ice.jpg'

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
    caption: ' there is no place like home',
    id: generateKey()
}

//sample to populate feed when opened
const example2 = {
    user: {
        username: 'antarctic123',
        avatar: Mendoza,
    },
    image: Ice,
    caption: ' Ice ice baby',
    id: generateKey()
}

const styles = theme => ({
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
})

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: [example, example2],
            user: "",
            showModal: false,
            userTyped: "",
            captionTyped: "",
            pictures: []
        };
    }

    //set post bar at top to greeting
    componentDidMount() {
        let user = this.state.user
        if(user.length < 1){
            this.setState({ user: "Welcome! " });
        }
    }

    generateKey = () => {
        return Math.random()*100
    }

    //opens modal
    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    //closes post modal
    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    //sets username inside of modal
    username = event => {
       this.setState({
           userTyped: event.target.value
       })
    }

    //sets caption inside of modal
    caption = event => {
        this.setState({
            captionTyped: ` ${event.target.value}`
        })
    }

    //sets state for user post
    onDrop = (picture) => {
        this.setState({
            pictures: URL.createObjectURL(picture[0])
        });
    }

    //post happens here
    submitAll = () => {
        let username = this.state.userTyped;
        let caption = this.state.captionTyped;
        let otherPosts = this.state.posts
        //data object for post
        const newPost = {
            user: {
                username,
                avatar: Denver,
            },
            image: this.state.pictures,
            caption,
            id: generateKey()
        }
        //makes sure there is a caption and username to post
        if(caption.length > 1 && username.length > 1){
            this.setState({
                posts: [...otherPosts, newPost],
                user: `Welcome, ${username}`,
                showModal: false
            })
        }
    }

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.main}>
            <div className={classes.postBar}>
                <div className={classes.postUser}>{this.state.user}</div>
                <Button className={classes.postButton} onClick={this.openModal}>Create a post</Button>
                <Modal
                    aria-labelledby="contained-modal-title-lg"
                    className={classes.modal}
                    open={this.state.showModal}
                    onClose={this.closeModal}
                >
                    <div className={classes.popup}>
                        <div className={classes.userInput}>
                            <TextField
                            id="standard-uncontrolled"
                            label="Username"
                            defaultValue=""
                            margin="normal"
                            onChange={this.username}
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
                                onChange={this.caption}
                            />
                        </div>
                        <div>
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose image'
                                className={classes.inputFile}
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                            />
                            <Button variant="contained" className={classes.submit} onClick={this.submitAll}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className={classes.posts}> 
                {
                    this.state.posts
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
}

Posts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Posts);
