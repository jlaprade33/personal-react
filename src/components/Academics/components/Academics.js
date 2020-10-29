import React from 'react';
import { makeStyles } from "@material-ui/core"
import 'bootstrap/dist/css/bootstrap.min.css';
import AcademicPage from '../information'
import content from '../data';

const useStyles = makeStyles(theme => ({
    main: {
        minHeight: 600,
        width: '100%',
        margin: 'auto',
        fontFamily: "Courier new",
    },
}));

const Academics = () => {
    const classes = useStyles();
        return (
            <div className={classes.main}>
                <AcademicPage content={content} /> 
            </div>
        )
  };
  
export default Academics;
