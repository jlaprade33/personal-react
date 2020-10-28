import React from 'react';
import { makeStyles } from "@material-ui/core"
import 'bootstrap/dist/css/bootstrap.min.css';
import AcademicPage from '../information'

const content = [
    {
        id: "Denver",
        description: "In 2017, I received my first degree in Finance through the University of Denver I began working immediately after graduation for a niche consulting firm in Denver, but eventually, after teaching myself some coding on the side, I came to the conclusion that I would like to gain some technical skills and enrolled in a computer science program through CU Boulder.",
        title: "University of Denver",
        classes: [
            "Major: Finance",
            "Minor: Spanish",
            "GPA: 3.61",
            "Completed Coursework:",
            "-Business Analytics and Information",
            "-Financial Statements" ,
            "-Accounting" ,
            "-Marketing" ,
            "-Management"
        ],
        key: 4
    },
    {
        id: "Mendoza",
        description: "During my 2015-2016 academic year at the University of Denver, I studied abroad through animmersive Spanish program in Mendoza, Argentina. Through this program,I was able to take classes at local schools, assimilate into the culture, and gain a proficiency Spanish (of the Argentinian dialect).",
        title: "Universidad de Congreso",
        classes: [
            "Completed Coursework:",
            "-Psychology",
            "-Ecology", 
            "-Financial Mathematics",
            "-Argentine Literature"
        ],
        key: 3
    },
    {
        id: "CU1",
        description: "After resigning from my position as an Analyst, I enrolled in the Data Structures and Discrete Structures courses at Boulder through the continuing education system in the Fall of 2017. I skipped the intro to programming course, without having taken prior programming classes, so I could jump into these courses and get the ball rolling. Shortly after enrolling, I found the Post-Bacc Bachelor's degree option outlined below, that was going to begin the following semester. After completing Data and Discrete Structures, the courses transferred into the Post-Bacc Program I finished in December of 2018. ",
        title: "University of Colorado Boulder",
        classes: [
            "Completed Coursework:",
            "-Data Structures",
            "-Discrete Structures" 
        ],
        key: 2
    },
    {
        id: "CU2",
        description: "After finishing up my continuing education classes, I enrolled directly into a Computer Science Post-Bacc program to earn a Bachelor's Degree after one full year of classes. From  Jan 2018-Dec 2018, I completed the required courses for the degree, with my graduation pending a relevant internship experience. From May-July 2019, I worked as a Application Developer Intern on the Front-end team for Zayo Group in Boulder. From this experience, I gained a proficiency in JavaScript, HTML, CSS, and React.js by running lead on creating a Front-end React app. I quickly learned how to use React,  along with Express to communicate with a backend microservice, and after working on the project, I was hired full time to work as a Jr. Application Developer on the Front-end team.",
        title: "University of Colorado Boulder",
        classes: [
            "Completed Coursework:",
            "-Introduction to Programming",
            "-Information Visualization",
            "-Data Science Algorithms",
            "-Algorithms",
            "-Computer System",
            "-Principles of Programming Languages",
            "-Data Systems",
            "-Cognitive Science",
            "-Data Mining",
        ],
        key: 1
    },
]

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
