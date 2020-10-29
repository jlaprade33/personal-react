import React, { useState } from 'react';
import { makeStyles, Button } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Background from  '../BackgroundTable/components/Background';
import schoolInfo from './data';

const useStyles = makeStyles(theme => ({
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
        fontSize: 48,
        fontWeight: 400,
        padding: '6% 0 3% 0',
        color: '#696969'
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
            maxHeight: 260,
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
        boxShadow: '2px 1px 0px gray',
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 10,
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
        paddingBottom: 40,
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
}));

const MainPage = () => {
    const classes = useStyles();

    const [hoverMendoza, setMendoza] = useState(false)
    const [hoverBoulder, setBoulder] = useState(false)
    const [hoverDenver, setDenver] = useState(false)

    const hoverAction = (input, val) => {
        switch(input){
            case 'Boulder':
                setBoulder(val);
                break;
            case 'Denver':
                setDenver(val);
                break;
            case 'Mendoza':
                setMendoza(val);
                break;

        }
    }

    return (
        <div className={classes.main}>
            <div className={classes.body}> 
                <div className={classes.intro}>
                    <p className={classes.name}>Jeff LaPrade</p>
                    <div className={classes.background}>
                        <Background />
                    </div>
                </div>
                <Link to='/academics' style={{textDecoration: 'none', color:"black"}}>
                    <div className={classes.academics}>  
                        <div className={classes.rowTitle}>
                            <div className={classes.titleText} >Academics</div>
                        </div>
                        {
                            schoolInfo.map((location, index) => {
                                let hoverImage = location.city === 'Boulder' ? hoverBoulder : location.city === 'Denver' ? hoverDenver : hoverMendoza;
                                return(
                                    <div 
                                        key={index} 
                                        className={classes.schools} 
                                        onMouseOver={() => {hoverAction(location.city, true)}} 
                                        onMouseLeave={() => {hoverAction(location.city, false)}}
                                    >
                                        { hoverImage ? (<div className={classes.innerDivs}>{location.title}</div>) : null }
                                    <img className={classes.photos} src={location.image} alt={location.city}/>
                                </div>
                                )
                            })
                        }    
                    </div>
                </Link>
                <div>
                    <div className={classes.extras}>
                        <div className={classes.rowTitle}>
                            <div className={classes.extrasText} >Extras</div>
                        </div>
                        <Link className={classes.link} to='/podcasts' style={{textDecoration: 'none', color:"black"}}><Button className={classes.extraDivs}>Check out my favorite podcasts...</Button></Link>
                        <a className={classes.link} href='https://github.com/jlaprade33/personal-react/tree/dev' style={{textDecoration: 'none', color:"black"}}><Button className={classes.extraDivs}>Check out the repo for this website... </Button></a>
                    </div>
                </div>
            </div> 
        </div>
    )
};

export default MainPage;