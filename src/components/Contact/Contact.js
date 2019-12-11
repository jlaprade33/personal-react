import React, { Component } from 'react';
import { withStyles } from "@material-ui/core"
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = theme => ({
    main: {
        minHeight: 600,
        width: '100%',
        margin: 'auto',
        fontFamily: "Courier new",
    },
    mendozaTable: {
        padding: '2% 2% 2% 3%',
        height: 250,
        margin: 'auto',
        display: 'table',
        border: '2px solid black',
        [theme.breakpoints.down('xs')]:{
            width: '80%'
        },
        [theme.breakpoints.up('sm')]:{
            width: '40%', 
        },
    },
    descriptionMendoza: {
        padding: '4% 2% 2% 2%',
        width: '65%',            
        margin: 'auto',
        [theme.breakpoints.down('xs')]:{
            width: '80%',
        },
        [theme.breakpoints.up('sm')]:{
            width: '65%',
        },
    },
    
})

class Contact extends Component {
  render() {
      const { classes } = this.props;
        return (
            <div className={classes.main}>
                STUFF
            </div>
        )
    }
};

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Contact);
