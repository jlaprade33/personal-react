import React, { Component } from 'react';
import { withStyles, Button } from "@material-ui/core"
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = theme => ({
    main: {
        minHeight: 600,
        width: '100%',
        margin: 'auto',
        fontFamily: "Courier new",
        backgroundColor: "#d7e3f5",
        paddingTop: 50
    },
    content: {
        padding: '30px 10px 10px 10px',
        boxShadow: '0.5px 0.5px 0.5px 0px',
        margin: 'auto',
        width: '60%',
        borderRadius: 5,
        backgroundColor: "#B5C4E2"
    },
    title: {
        margin: 'auto',
        textAlign: 'center',
        width: '100%'
    },
    submitButton: {
        color: "#B5C4E2",
        backgroundColor: "#25274b",
        textAlign: 'center',
        fontFamily: "Courier new",
        margin: 'auto',
        fontWeight: 'bold'
    },
    buttonDiv: {
        margin: 'auto',
        width: 'fit-content'
    }
    
})

class Contact extends Component {
    constructor() {
        super();
        this.state = { 
            emailAddress: "",
            name: "",
            message: ""
        }
    };

    sendEmail = async() => {
        console.log('email sent!')
        await fetch('sendEmail', {
            method: 'POST',
            body: JSON.stringify({ info:'test' }),
            headers: { 'Content-Type': 'application/json'}
        })
    };

  render() {
      const { classes } = this.props;
        return (
            <div className={classes.main}>
                <div className={classes.content}>
                    <h4 className={classes.title}>Contact me!</h4><br></br>
                    <div className={classes.buttonDiv}>
                        <Button className={classes.submitButton} onClick={this.sendEmail}>Send Email</Button>
                    </div>
                </div>
            </div>
        )
    }
};

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Contact);
