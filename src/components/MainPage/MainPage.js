import React, { Component } from 'react';
import { withStyles, Button } from "@material-ui/core"
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boulder from "./Boulder.jpg"
import Mendoza from "./Mendoza.jpg"
import Denver from "./Denver.jpg"
import { Link } from 'react-router-dom';

const styles = theme => ({
    main: {
        width: '100%',
        fontFamily: "Courier new",
    },
    intro: {
        minHeight: 450,
        display: 'table',
        width: '100%',
        margin: 'auto',
        backgroundColor: "#d7e3f5",
    },
    name: {
        width: '100%',
        minHeight: 100,
        textAlign: 'center',
        fontSize: 42,
        fontWeight: 500,
        paddingTop: '10%',
        color: 'black'
    },
    background: {
        width: '100%',
        minHeight: 200,
        textAlign: 'center',
        fontSize: 18,
        paddingLeft: 33,
        paddingRight: 33,
        fontWeight: 500,
        color: 'black'
    },
    academics: {
        minHeight: 300,
        width: '100%',
        margin: 'auto',
        paddingBottom: '3%',
        backgroundColor: "#25274b",
        display: 'table-flex',
    },
    schools: {
        minHeight: 200,
        display:'inline-flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
        columnCount: 3,
        marginTop: '3%',
        [theme.breakpoints.down('xs')]:{
            width: '100%',
        },
        [theme.breakpoints.up('sm')]:{
            width: '65%',
            marginLeft: '17%',
        },
        [theme.breakpoints.up('md')]:{
            width: '30%',
            marginLeft: '2.5%',
        },
    },
    photos: {
        width: '100%',
        zIndex: 10,
        position: 'relative',
        boxShadow: '2px 2px 2px 0px black',
        [theme.breakpoints.down('xs')]:{
            maxHeight: 250,
        },
        [theme.breakpoints.up('sm')]:{
            maxHeight: 500,
        },
    },
    rowTitle: {
        width: 'fit-content',
        minWidth: '80%',
        height: '20%',
        margin: 'auto',
        paddingTop: '2%',
        fontSize: 50,
        fontWeight: 500,
    },
    titleText: {
        fontSize: 50,
        fontWeight: 500,
        color: 'white',
        textAlign: 'center',
        width: '100%',
    },
    extras: {
        minHeight: 400,
        width: '100%',
        margin: 'auto',
        paddingBottom: '8%',
        backgroundColor: "#d7e3f5",
        display:'inline-flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
    },
    extraDivs: {
        minHeight: 250,
        display:'inline-flex',
        fontFamily: "Courier new",
        flexFlow: 'row',
        flexWrap: 'wrap',
        margin: 'auto',
        boxShadow: '2px 2px 2px 0px gray',
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 20,
        padding: '4% 2% 2% 2%', 
        backgroundColor: "#B5C4E2",      
        [theme.breakpoints.down('xs')]:{
            width: '100%',
            marginBottom: '4%'
        },
        [theme.breakpoints.up('sm')]:{
            width: '65%',
            marginLeft: '17%',
            marginBottom: '4%'
        },
        [theme.breakpoints.up('md')]:{
            width: '90%',
            marginLeft: '14%'
        },
    },
    extrasText: {
        fontSize: 50,
        fontWeight: 500,
        color: 'black',
        textAlign: 'center',
        width: '100%',
    },
    innerDivs: {
        display: 'table',
        color: "white",
        position: 'absolute',
        height: 50,
        zIndex: 1000,
        margin: "auto",
        paddingTop: 10,
        border: '1px solid white',
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
        textAlign : 'center',
        transition: '.5s ease',
        [theme.breakpoints.down('xs')]:{
            width: '75%',
            marginBottom: '4%',
            marginLeft: '15%',
            marginTop: '20%'
        },
        [theme.breakpoints.up('sm')]:{
            width: '45%',
            marginLeft: '11%',
            marginTop: '20%'
        },
        [theme.breakpoints.up('md')]:{
            width: '25%',
            marginLeft: '3%',
            marginTop: '8%',
            paddingBottom: 10
        },
    },
    link: {
        [theme.breakpoints.down('sm')]:{
            width: '100%',
        },
        [theme.breakpoints.up('md')]:{
            width: '45%',
        },
    }
})

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            hoverMendoza: false,
            hoverBoulder: false,
            hoverDenver: false,
        }
    }

    mouseOver = (input) => {
        if(input ==='boulder'){
            this.setState({hoverBoulder: true})
        }
        else if(input ==='mendoza'){
            this.setState({hoverMendoza: true})
        }
        if(input ==='denver'){
            this.setState({hoverDenver: true})
        }
    }

    mouseOut = (input) => {
        if(input ==='boulder'){
            this.setState({hoverBoulder: false})
        }
        else if(input ==='mendoza'){
            this.setState({hoverMendoza: false})
        }
        if(input ==='denver'){
            this.setState({hoverDenver: false})
        }
    }


    render() {
      const { classes } = this.props;
        return (
            <div className={classes.main}>
                <div className={classes.body}> 
                    <div className={classes.intro}>
                        <p className={classes.name}>Jeff LaPrade</p>
                        <p className={classes.background}>I am a Developer with experience working in JavaScript, HTML, CSS, 
                            and more specifically building apps using React and Express. Take a look at my code (this is just a quick sample of what I can do), 
                            education background, work experience, favorite podcasts, and more...
                        </p>
                    </div>
                    <Link to='/academics' style={{textDecoration: 'none', color:"black"}}>
                        <div className={classes.academics}>  
                            <div className={classes.rowTitle}>
                                <div className={classes.titleText} >Academics</div>
                            </div>
                            <div className={classes.schools} onMouseOver={() => {this.mouseOver('boulder')}} onMouseOut={() => {this.mouseOut('boulder')}}>
                                { this.state.hoverBoulder ? (<div className={classes.innerDivs}>University of Colorado Boulder</div>) : null }
                                <img className={classes.photos} src={Boulder} alt="logo"/>
                            </div>
                            <div className={classes.schools} onMouseOver={() => {this.mouseOver('denver')}} onMouseOut={() => {this.mouseOut('denver')}}>
                                { this.state.hoverDenver ? (<div className={classes.innerDivs}>University of Denver</div>) : null }
                                <img className={classes.photos} src={Denver} alt="logo"/>
                            </div>
                            <div className={classes.schools} onMouseOver={() => {this.mouseOver('mendoza')}} onMouseOut={() => {this.mouseOut('mendoza')}}>
                                { this.state.hoverMendoza ? (<div className={classes.innerDivs}>Universidad de Congreso</div>) : null }
                                <img className={classes.photos} src={Mendoza} alt="logo"/>
                            </div> 
                        </div>
                    </Link>
                    <div>
                        <div className={classes.extras}>
                            <div className={classes.rowTitle}>
                                <div className={classes.extrasText} >Extras</div>
                            </div>
                            <Link className={classes.link} to='/podcasts' style={{textDecoration: 'none', color:"black"}}><Button className={classes.extraDivs}>Check out my favorite podcasts...</Button></Link>
                            <Link className={classes.link} to='/feed' style={{textDecoration: 'none', color:"black"}}><Button className={classes.extraDivs}>Try out this feed demo... </Button></Link>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
};

MainPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(MainPage);
