import React from 'react';
import { makeStyles } from "@material-ui/core"
import podcastInfo from './data';

const useStyles = makeStyles(theme => ({
    main: {
        minHeight: 600,
        width: '100%',
        margin: 'auto',
        fontFamily: "Helvetica Neue",
        background: '#bec7cf',
    },
    body: {
        padding: '2% 0 4% 0',
        width: '80%',
        margin: 'auto'
    },
    name: {
        width: '100%',
        minHeight: 80,
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 500,
        paddingTop: 20
    },
    background: {
        width: '100%',
        minHeight: 200,
        textAlign: 'center',
        fontSize: 18,
        paddingLeft: 33,
        paddingRight: 33,
        fontWeight: 500,
        color: 'black',
        padding: 0
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
    episodes: {
        margin: 0
    },
    boxLeft: {
        display:'inline-flex',
        boxShadow: '2px 2px 2px 0px gray',
        flexFlow: 'row',
        flexWrap: 'wrap',
        borderRadius: 20,
        margin: '2% 0 0 0',
        backgroundColor: "#d7e3f5",
        minHeight: 300,
        [theme.breakpoints.down('xs')]:{
            width: '100%',
        },
        [theme.breakpoints.up('sm')]:{
            width: '90%',
            marginLeft: '5%',
        },
    },
    boxRight: {
        borderRadius: 20,
        boxShadow: '2px 2px 2px 0px gray',
        margin: '2% 0 0 0',
        paddingRight: 10,
        backgroundColor: "#25274b",
        minHeight: 300,
        color: 'white',
        display: 'table',
        [theme.breakpoints.down('xs')]:{
            width: '100%',
            marginLeft: 0
        },
        [theme.breakpoints.up('sm')]:{
            width: '90%',
            marginLeft: '8%'
        },
    },
    left: {
        width: '45%',
        marginLeft: '8%',
        marginBottom: '4%',
        float: 'left',
        fontSize: 14,
    },
    right: {
        width: '35%',
        margin: '0% 4%',
        float: 'right',
        fontSize: 14,
    }
}));

const Podcasts = () => {
    const classes = useStyles();
    let count = 0;
    return (
        <div className={classes.main}>
            <div className={classes.body}> 
            { 
                podcastInfo.map((podcast, index) => {
                    count += 1;
                    return count%2 === 0  ? (
                        <div key={index} className={classes.boxLeft} onClick={()=> window.location = podcastInfo[index].link}>
                            <p className={classes.name}>{podcastInfo[index].name}</p>
                            <p className={classes.left}>
                                {
                                    podcast.episodes.map((item, i) => {
                                        return (<p className={classes.episodes}>{item}</p>)
                                    })
                                }
                            </p>
                            <p className={classes.right}>
                                {podcastInfo[index].description}
                            </p>
                        </div>
                    ) :
                    (
                        <div key={index} className={classes.boxRight} onClick={()=> window.location = podcastInfo[index].link}>
                            <p className={classes.name}> {podcastInfo[index].name}</p>
                            <p className={classes.left}>
                                {
                                    podcast.episodes.map((item, i) => {
                                        return (<p className={classes.episodes}>{item}</p>)
                                    })
                                }
                            </p>
                            <p className={classes.right}>
                            {podcastInfo[1].description}
                            </p>
                        </div>
                    )
                })
            }
            </div> 
        </div>
    )
};

export default Podcasts;
