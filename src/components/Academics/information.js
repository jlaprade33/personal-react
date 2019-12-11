import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core"

const styles = theme => ({
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
        minHeight: 500,
        width: '100%',
        margin: 'auto',
        backgroundColor: "#B5C4E2",
        display: 'inline-flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
    },
    leftTable: {
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
    rightTable: {
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
    descriptionLeft: {
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
    
})

class AcademicPage extends Component {
    render(){   
        const { classes } = this.props;
        const content = this.props.content;
        return (
            <div>
                {
                    content.slice(0)
                        .reverse()
                        .map(schools => (
                            <div className={ classes.left }>
                                <div className={ classes.descriptionLeft }> { schools.description } </div>
                                <div className={ classes.leftTable }>
                                    <p className={ classes.contents }>{ schools.title } </p>
                                    <p>{ schools.classes }</p>
                                </div>
                            </div> 
                        ))
                }
            </div>
        );
    }
}

AcademicPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AcademicPage);



// const content = content.map(content => {
//     count === 0%1 ?  (
//         <div className={ classes.style }>
//         <div className={ classes.descriptionLeft }> { content.description } </div>
//         <div className={ classes.leftTable }>
//             <p className={classes.contents}>{ content.title } </p>
//             <p>{ content.classes }</p>
//         </div>
//     </div>
//     ) :
//     (
//         <div className={ classes.right }>   
//             <div className={ classes.rightTable }>
//                 <p className={classes.contents}>{ content.title }</p>
//                 <p>{ content.classes }</p>
//             </div>
//             <div className={ classes.descriptionRight }> { content.description } </div>
//         </div>
//     )
//     count += 1;
// })
