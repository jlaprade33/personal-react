import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core"

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
        name: 'Y Combinator',
        link: "https://blog.ycombinator.com/category/podcast/",
        episodes: [
            '#3 - The Technical Advisor of Silicon Valley on HBO',
            "#4 - Elon Musk on How to Build the Future", 
            "#35 - The Technical Challenges of Measuring Gravitational Waves"
        ],
        description: 'Y Combinator interviews not just tech startups, but also leaders in various industries such as Elon Musk, Mark Zuckerburg, among others.'
    },
    {
        name: 'The Genius Life',
        link: "https://www.maxlugavere.com/podcast-1", 
        episodes: [
            '6: The Crazy Link Between Diabetes and Alzheimers',
            '7: Why You Probably Need to Eat More Salt | James DiNicolantoni',
            '10: How to Become a World-Changing Innovator | Melissa Schilling',
            '15: Healing Traumatic Brain Injury with Food | Calvin Balaster'
        ],
        description: 'Max Lugavere, the author of Genius Foods, interviews scientists and health nuts on his quest to find ways to improve mental performance and health through nutrition and the foods we eat.'
    }
];

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
