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
    schools: {
        fontSize: 32,
    },
    denver: {
        paddingBottom: '4%',
        display: 'inline-flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
        width: '100%',
        paddingTop: '4%',
        backgroundColor: "#d7e3f5",
    },
    contEd: {
        paddingTop: '2%',
        paddingBottom: '2%',
        display: 'inline-flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
        minHeight: 450,
        width: '100%',
        margin: 'auto',
        backgroundColor: "#d7e3f5",
    },
    boulder: {
        padding: '3% 2% 3% 2%',
        minHeight: 500,
        width: '100%',
        margin: 'auto',
        backgroundColor: "#B5C4E2",
        display: 'inline-flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
    },
    mendoza: {
        paddingTop: '4%',
        minHeight: 450,
        width: '100%',
        margin: 'auto',
        paddingBottom: '4%',
        backgroundColor: "#B5C4E2",
        display: 'table-flex',
    },
    denverTable: {
        padding: '3% 2% 2% 3%',
        minHeight: 300,
        float: 'right',
        display: 'table',
        border: '2px solid black',
        [theme.breakpoints.down('xs')]:{
            width: '87%',
            margin: 'auto'
        },
        [theme.breakpoints.up('sm')]:{
            width: '45%',
            marginLeft: '4%',
        },
    },
    boulderTable: {
        padding: '2% 2% 2% 3%', 
        float: 'left',
        display: 'table-flex',
        border: '2px solid black',
        [theme.breakpoints.down('xs')]:{
            width: '90%',
            margin: 'auto',
            marginBottom: '2%',
        },
        [theme.breakpoints.up('sm')]:{
            width: '45%',
        },
    },
    contEdTable: {
        marginLeft: '4%',
        padding: '2% 2% 2% 3%',
        height: 250,
        float: 'left',
        border: '2px solid black',
        display: 'table',
        [theme.breakpoints.down('xs')]:{
            width: '80%',
            margin:'auto'
        },
        [theme.breakpoints.up('sm')]:{
            width: '45%',
        },
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
    descriptionDenver: {
        float: 'left',
        marginLeft: '5%',
        paddingBottom: '4%',
        [theme.breakpoints.down('xs')]:{
            width: '80%',
            margin: 'auto',
            marginTop: '7%',
        },
        [theme.breakpoints.up('sm')]:{
            width: '40%',
            marginTop: '6%',
        },
    },
    descriptionRight: {
        float: 'right',
        marginRight: '2%',
        [theme.breakpoints.down('xs')]:{
            width: '80%',
            margin: 'auto',
        },
        [theme.breakpoints.up('sm')]:{
            width: '45%',
            marginLeft: '5%'
        },
    },
    descriptionContEd: {
        float: 'left',
        width: '40%',
        marginLeft: '5%',
        marginTop: '2%',
        paddingBottom: '4%',
        [theme.breakpoints.down('xs')]:{
            width: '80%'
        },
        [theme.breakpoints.up('sm')]:{
            width: '40%'
        },
    }
    
})

class Academics extends Component {
  render() {
      const { classes } = this.props;
        return (
            <div className={classes.main}>
                <div className={classes.body}> 
                    <div className={classes.denver}>
                        <div className={classes.descriptionDenver}>In 2017, I received my first degree in Finance through the University of Denver. 
                            I began working immediately after graduation for a niche consulting firm in Denver, 
                            but eventually, after teaching myself some coding on the side, I came to the conclusion 
                            that I would like to gain some technical skills and enrolled in a computer science program through CU Boulder.
                        </div>
                        <div className={classes.denverTable}>
                            <p className={classes.schools}>University of Denver</p>
                            <p>Major: Finance <br></br> Minor: Spanish <br></br>GPA: 3.61 <br></br> Related Coursework: <br></br>
                                -Business Analytics and Information <br></br>
                                -Financial Statements <br></br>
                                -Accounting <br></br>
                                -Marketing <br></br>
                                -Management</p>
                        </div>
                    </div>
                    <div className={classes.mendoza}>  
                        <div className={classes.mendozaTable}>
                            <p className={classes.schools}>Universidad de Congreso</p>
                            <p>-Psychology <br></br>
                                -Ecology <br></br> 
                                -Financial Mathematics <br></br>
                                -Argentine Literature 
                            </p>
                        </div>
                        <div className={classes.descriptionMendoza}>
                            During my 2015-2016 academic year at the University of Denver, I studied abroad through an
                            immersive Spanish program in Mendoza, Argentina. Through this program,
                            I was able to take classes at local schools, assimilate into the culture, 
                            and gain a fluency Spanish (of the Argentinian dialect).
                        </div>
                    </div >
                    <div className={classes.contEd}>
                        <div className={classes.descriptionContEd}>After resigning from my position as an Analyst, I enrolled in the Data
                            Structures and Discrete Structures courses at Boulder through the continuing education system
                            in the Fall of 2017.<br></br><br></br>
                            I skipped the intro to programming course, without having taken prior
                            programming classes, so I could jump into these courses and get the ball rolling.
                            Shortly after enrolling, I found the Post-Bacc Bachelor's degree option outlined below,
                            that was going to begin the following semester. After completing Data and Discrete Structures,
                            the courses transferred into the Post-Bacc Program I finished in December of 2018. 
                          
                        </div>
                        <div className={classes.contEdTable}>
                            <p className={classes.schools}>University of Colorado Boulder</p>
                            <p>-Data Structures <br></br>
                                -Discrete Structures <br></br>
                            </p>
                        </div>       
                    </div>
                    <div className={classes.boulder}>   
                        <div className={classes.boulderTable}>
                            <p className={classes.schools}>University of Colorado Boulder</p>
                            <p>
                                Completed Coursework: <br></br>
                                -Introduction to Programming <br></br>
                                -Information Visualization <br></br>
                                -Data Science Algorithms <br></br>
                                -Algorithms <br></br>
                                -Computer Systems<br></br> 
                                -Principles of Programming Languages <br></br>
                                -Data Systems <br></br>
                                -Cognitive Science <br></br>
                                -Data Mining <br></br>
                            </p>
                        </div>
                        <div className={classes.descriptionRight}>After finishing up my continuing education classes, I enrolled
                            directly into a Computer Science Post-Bacc program to earn a Bachelor's Degree after one full year of classes. From 
                            Jan 2018-Dec 2018, I completed the required courses for the degree, with my graduation pending a relevant internship experience. <br></br> <br></br>
                            From May-July 2019, I worked as a Application Developer Intern on the Front-end team for Zayo Group in Boulder. From this experience, I gained
                            a proficiency in JavaScript, HTML, CSS, and React.js by running lead on creating a Front-end React app. I quickly learned how to use React, 
                            along with Express to communicate with a backend microservice, and after working on the project, I was hired full time to work as a Jr. Application
                            Developer on the Front-end team.
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
};

Academics.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Academics);
