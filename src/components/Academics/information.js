import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    schools: {
        fontSize: 32,
    },
    left: {
        paddingBottom: '4%',
        display: 'inline-flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
        width: '100%',
        paddingTop: '4%',
        backgroundColor: "#d7e3f5",
    },
    right: {
        padding: '3% 2% 3% 2%',
        display: 'inline-flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
        width: '100%',
        paddingTop: '4%',
        backgroundColor: "#B5C4E2",

    },
    leftTable: {
        padding: '3% 2% 2% 3%',
        minHeight: 300,
        display: 'table',
        border: '2px solid black',
        marginBottom: '2%',
        [theme.breakpoints.down('xs')]:{
            width: '87%',
            margin: 'auto'
        },
        [theme.breakpoints.up('sm')]:{
            width: '45%',
            marginLeft: '4%',
            marginTop: '4%'
        },
    },
    rightTable: {
        padding: '3% 2% 2% 3%', 
        display: 'table',
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
    descriptionLeft: {
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
    innerPs: {
       marginBottom: 0
    }
}));

const AcademicPage = ({content}) => {
    const classes = useStyles();
    let mapCount = 0;

    const mapCounter = () => {
        mapCount += 1
    }

    return (
        <div>
            {
                content.map((schools, index) => (
                    mapCount%2 === 0 ? (
                            <div key={index} className={ classes.left }>
                                <div className={ classes.descriptionLeft }> { schools.description } </div>
                                <div className={ classes.leftTable }>
                                    <p className={classes.schools}>{ schools.title } </p>
                                        { 
                                            (schools.classes).map(courses => <p className={classes.innerPs}>{ courses }</p> )
                                        }
                                </div>
                                { mapCounter() } 
                            </div>
                        ) : 
                        (
                            <div key={index} className={ classes.right }>   
                                <div className={ classes.rightTable }>
                                    <p className={classes.schools}>{ schools.title }</p>
                                        { 
                                            (schools.classes).map(courses => <p className={classes.innerPs}>{ courses }</p> )
                                        }
                                </div>
                                <div className={ classes.descriptionRight }> { schools.description } </div>
                                { mapCounter() }
                            </div>
                        )
                    )
                )   
            }
        </div>
    );
}

export default AcademicPage;