import React, { Component } from 'react';
import { withStyles } from "@material-ui/core"
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Mendoza from "../MainPage/Mendoza.jpg"
import Denver from "../MainPage/Denver.jpg"

const example = {
    user: {
        username: 'jlaprade',
        avatar: Denver,
    },
    image: Mendoza,
    caption: ' aint no rest for the wicked',
    id: generateKey()
}

const example2 = {
    user: {
        username: 'example',
        avatar: Mendoza,
    },
    image: Denver,
    caption: ' the universe is shaped exactly like the earth',
    id: generateKey()
}

const styles = theme => ({
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
        marginBottom: 60,
        margin: 'auto',
        width: '100%'
      },
      
})

class DataIn extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { classes } = this.props;
        const username = this.props.username;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;
        return (
            <div className={classes.main}>
                
        </div>
        )
    }
};

DataIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataIn);
