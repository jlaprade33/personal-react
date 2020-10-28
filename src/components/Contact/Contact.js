import React, { Component } from 'react';
import { withStyles, Button, TextField } from "@material-ui/core"
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = theme => ({
    main: {
        minHeight: 800,
        width: '100%',
        margin: 'auto',
        fontFamily: "Courier new",
        backgroundColor: "#d7e3f5",
        paddingTop: 50,
    },
    content: {
        padding: '30px 10px 10px 10px',
        boxShadow: '0.5px 0.5px 0.5px 0px',
        margin: 'auto',
        width: '60%',
        minWidth: 300,
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
        fontWeight: 'bold',
        marginBottom: '5%'
    },
    buttonDiv: {
        margin: 'auto',
        width: 'fit-content'
    },
    userInput: {
        width: 'fit-content',
        margin: 'auto'
    },
    email: {
        minWidth: 150,
        width: '70%',
    },
    subject: {
        marginBottom: '8%',
        width: "100%"
    },
    comments: {
        width:"100%",
        marginBottom: "10%",
        [theme.breakpoints.down('xs')]:{
            width: 200,
        },
        [theme.breakpoints.up('sm')]:{
        width: 300,
        },
        [theme.breakpoints.up('md')]:{
        width: 400,
        },
    },
    
})

class Contact extends Component {
    constructor() {
        super();
        this.state = { 
            email: "",
            name: "",
            message: "",
            subject: ""
        }
    };

    //sets username inside of modal
    email = event => {
        this.setState({
            email: event.target.value
        })
     }

     subject = event => {
        this.setState({
            subject: event.target.value
        })
     }

     message = event => {
        this.setState({
            message: event.target.value
        })
     }
 
    sendEmail = async() => {
        console.log('email sent!')

        let message = {
            from: this.state.email, 
            to: 'jlaprade01@yahoo.com',        
            subject: this.state.subject, 
            text: this.state.message
        }

        fetch('users/sendEmail', {
            method: 'POST',
            body: JSON.stringify({ info: message }),
            headers: { 'Content-Type': 'application/json'}
        })
        
    };

  render() {
      const { classes } = this.props;
        return (
            <div className={classes.main}>
                <div className={classes.content}>
                    <h4 className={classes.title}>Contact me!</h4><br></br>
                    <div className={classes.userInput}>
                        <div >
                            <TextField
                            id="standard-uncontrolled"
                            label="email"
                            defaultValue=""
                            margin="normal"
                            onChange={this.email}
                            className={classes.email}
                            />
                        </div>
                        <div className={classes.subject}>
                            <TextField
                            id="standard-uncontrolled"
                            label="subject"
                            defaultValue=""
                            margin="normal"
                            onChange={this.subject}
                            className={classes.subject}
                            />
                        </div>
                        <div>
                            <TextField
                                id="filled-multiline-static"
                                label="Comments"
                                multiline
                                rows="4"
                                defaultValue=""
                                variant="filled"
                                onChange={this.message}
                                className={classes.comments}
                            />
                        </div>
                    </div>
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
