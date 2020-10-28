import React, { useState } from 'react';
import { makeStyles, Fab } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const Mendoza = 'https://jela-website.s3.us-east-2.amazonaws.com/Mendoza.jpg'
const Denver = 'https://jela-website.s3.us-east-2.amazonaws.com/Denver.jpg'

const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: "#d7e3f5",
        margin:'auto',
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
    post: {
        borderRadius: 3,
        border: "1px solid #e6e6e6",
        backgroundColor: "#fff",
        marginBottom: 20,
        margin: 'auto',
        width: '100%'
      },
      postImage: {
        display: "block",
        width: "100%",
      },
      user: {
        display: "flex",
        padding: 16,
        alignItems: "center",
      },
      userAvatar: {
        width: 30,
        height: 30
      },
      avatar: {
        width: "100%",
        height: "100%",
        borderRadius: "50%"
      },
      caption: {
        padding: "16px 16px",
      },
      name: {
        paddingLeft: 20
      },
      username: {
        marginLeft: 12,
        fontLamily: 'PT Sans',
        fontWeight: "bold"
      }
}));

const Feed = ({username, avatar, image, caption}) => {
    const classes = useStyles();
      
    return (
        <div className={classes.main}>
            <article className={classes.post}>
                <header>
                    <div className={classes.user}>
                        <div className={classes.userAvatar}>
                            <img className={classes.avatar} src={avatar ? avatar: Denver} alt="posted"/>
                        </div>
                        <div className={classes.username}>
                            <span>{username ? username: "jlaprade"}</span>
                        </div>
                    </div>
                </header>
                <div>
                    <img className={classes.postImage} src={image ? image: Mendoza} alt="pic"/>
                </div>
                <div className={classes.caption}>
                    <Fab aria-label="like">
                        <FavoriteIcon />
                    </Fab>
                    <strong className={classes.name}>
                        {username ? username: "jlaprade"}
                    </strong>
                    {caption ? caption: ' aint not rest for the wicked'}
                </div>
            </article>
        </div>
    )
};

export default Feed;
