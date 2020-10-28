import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const podcastInfo = [
    {
        name: 'The Tim Ferriss Show',
        link: 'https://tim.blog/podcast/',
        episodes: [
            'Sam Kass on Trials by Fire and Cooking for the Obamas',
            'The Iceman, Wim Hof',
            'The Tattooed Heretic of Wine and Whiskey',
            'The Athlete (and Artist) Who Cheats Death, Jimmy Chin',
            'Thinking about Extra Dimensions with Physicist Lisa Randall',
            'Meet Scorpion, The Real-Life Santa Claus with an IGQ of 197'
        ],
        description: 'Tim Ferriss is known as being one of the best podcast interviewers with his ability to not only find people at the top of their industry (which ranges from successful startup founder, to professional fixer, to astrophysicists) but dissect how they got to where they are and find out what really makes these people unique.'
    },
    {
        name: 'How I Built This',
        link: "https://www.npr.org/podcasts/510313/how-i-built-this",
        episodes: [
            "Lyft: John Zimmer", 
            "Airbnb: Joe Gebbia ", 
            "Samuel Adams: Jim Koch", 
            "Southwest Airlines: Herb Kelleher", 
            "Patagonia: Yvon Chouinard", 
            "Real Estate Mogul: Barbara Corcoran", 							
            "Toms: Blake Mycoskie"
        ],
        description: "Stories from company founders on how they got started and found success. Guy Raz does a great job of interviewing these entrepreneurs, who oftentimes start their businesses on accident or as a side product of doing something they love."
    },
    {
        name: 'Y Combinator'
    },
    {
        name: 'The Genius Life'
    }
];

const useStyles = makeStyles(theme => ({
    main: {
        minHeight: 600,
        width: '100%',
        margin: 'auto',
        fontFamily: "Helvetica Neue",
    },
    name: {
        width: '100%',
        minHeight: 80,
        textAlign: 'center',
        fontSize: 42,
        fontWeight: 500,
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
    tim: {
        display:'inline-flex',
        boxShadow: '2px 2px 2px 0px gray',
        flexFlow: 'row',
        flexWrap: 'wrap',
        borderRadius: 20,
        marginBottom: '2%',
        marginTop: '2%',
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
    yComb: {
        display:'inline-flex',
        boxShadow: '2px 2px 2px 0px gray',
        flexFlow: 'row',
        flexWrap: 'wrap',
        borderRadius: 20,
        marginBottom: '2%',
        backgroundColor: "#d7e3f5",
        minHeight: 300,
        [theme.breakpoints.down('xs')]:{
            width: '100%'
        },
        [theme.breakpoints.up('sm')]:{
            width: '70%',
            marginLeft: '15%',
        },
    },
    built: {
        borderRadius: 20,
        boxShadow: '2px 2px 2px 0px gray',
        marginBottom: '2%',
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
    
    genius: {
        borderRadius: 20,
        boxShadow: '2px 2px 2px 0px gray',
        marginBottom: '2%',
        backgroundColor: "#25274b",
        minHeight: 300,
        display: 'table',
        color: 'white',

        [theme.breakpoints.down('xs')]:{
            width: '100%',
            marginLeft: 0
        },
        [theme.breakpoints.up('sm')]:{
            width: '70%',
            marginLeft: '18%'
        },
    },
    left: {
        width: '45%',
        marginLeft: '4%',
        marginBottom: '4%',
        float: 'left',
        fontSize: 14,
    },
    right: {
        width: '45%',
        marginLeft: '4%',
        marginBottom: '4%',
        float: 'right',
        fontSize: 14,
    }
}));

const Podcasts = () => {
    const classes = useStyles();

    return (
            <div className={classes.main}>
                <div className={classes.body} class="pulse"> 
                
                    <div className={classes.tim} onClick={()=> window.location = podcastInfo[0].link}>
                        <p className={classes.name}>{podcastInfo[0].name}</p>
                        <p className={classes.left}>
                            #84 Sam Kass on Trials by Fire and Cooking for the Obamas<br></br>
                            #102 "The Iceman" Wim Hof  <br></br>
                            #110 The Tattooed Heretic of Wine and Whiskey<br></br> 
                            #114 The Athlete (and Artist) Who Cheats Death, Jimmy Chin<br></br> 
                            #115 Thinking about Extra Dimensions with Physicist Lisa Randall<br></br> 
                            #139 Meet "Scorpion" The Real-Life Santa Claus with an IGQ of 197<br></br> 
                        </p>
                        <p className={classes.right}>
                            {podcastInfo[0].description}
                        </p>
                    </div>

                    <div className={classes.built} onClick={()=> window.location = podcastInfo[0].link}>
                        <p className={classes.name}> {podcastInfo[1].name}</p>
                        <p className={classes.left}>
                            Lyft: John Zimmer<br></br> 
                            Airbnb: Joe Gebbia <br></br> 
                            Samuel Adams: Jim Koch<br></br> 
                            Southwest Airlines: Herb Kelleher<br></br> 
                            Patagonia: Yvon Chouinard<br></br> 
                            Real Estate Mogul: Barbara Corcoran<br></br> 							
                            Toms: Blake Mycoskie
                        </p>
                        <p className={classes.right}>
                        {podcastInfo[1].description}
                        </p>
                    </div>
                
                  
                   
                    <a href="https://blog.ycombinator.com/category/podcast/" style={{textDecoration: 'none', color: 'black'}}>
                        <div className={classes.yComb}>
                            <p className={classes.name}>Y Combinator</p>
                            <p className={classes.left}>
                                #3 - The Technical Advisor of Silicon Valley on HBO<br></br>
                                #4 - Elon Musk on How to Build the Future <br></br>
                                #35 - The Technical Challenges of Measuring Gravitational Waves
                            </p>
                            <p className={classes.right}>
                                Y Combinator interviews not just tech startups, but also leaders in various industries
                                such as Elon Musk, Mark Zuckerburg, among others.
                            </p> 
                        </div>
                    </a>
                    <a href="https://www.maxlugavere.com/podcast-1" style={{textDecoration: 'none', color: 'black'}}>
                        <div className={classes.genius}>  
                            <p className={classes.name}>The Genius Life</p>
                            <p className={classes.left}>
                                6: The Crazy Link Between Diabetes and Alzheimer's <br></br> 
                                7: Why You Probably Need to Eat More Salt | James DiNicolantonio<br></br> 
                                10: How to Become a World-Changing Innovator | Melissa Schilling <br></br> 
                                15: Healing Traumatic Brain Injury with Food | Calvin Balaster
                            </p>
                            <p className={classes.right}>
                                Max Lugavere, the author of Genius Foods, interviews scientists and health
                                nuts on his quest to find ways to improve mental performance and health through
                                nutrition and the foods we eat.
                            </p>
                        </div>
                    </a>
                </div> 
            </div>
        )
};

export default Podcasts;
