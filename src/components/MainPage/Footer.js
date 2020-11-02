import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
    LinkedinShareButton,
    LinkedinIcon,
    EmailIcon
} from 'react-share';

const urls = {
    email: 'mailto:jeffrey.laprade@gmail.com',
    linkedIn: 'www.linkedin.com/in/lapradejeff',
    github: 'https://github.com/jlaprade33/personal-react/tree/dev/'
}
const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 80,
        background: '#25274b'
    },
    socialContainer: {
        width: '90%',
        margin: 'auto',
    },
    shareButton: {
        margin: 20
    }
}));

const Footer = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.socialContainer}>
                <LinkedinShareButton
                    url={urls.linkedIn}
                    className={classes.shareButton}
                >
                    <LinkedinIcon
                        size={40}
                        round={true}
                        />
                </ LinkedinShareButton>
                <a href={urls.email}>
                    <EmailIcon
                        size={40}
                        round={true}
                    />
                </a>
            </div>
        </div>
    )
};

export default Footer;