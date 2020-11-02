import React, { useState, useLayoutEffect } from 'react';
import { makeStyles } from "@material-ui/core"
import PropTypes from 'prop-types';
import backgroundInfo from '../information'

const useStyles = makeStyles(theme => ({
  tableContainer: {
    width: '80%',
    display: 'table',
    margin: 'auto',
    padding: '10px 0 10px 0',
    marginBottom: '3%',
    minHeight: 450,
    [theme.breakpoints.down('sm')]:{
      width: '95%',
    },
    [theme.breakpoints.up('md')]:{
        width: '80%',
    }
  },
  contentContainer: {
    display:'inline-flex',
    [theme.breakpoints.down('sm')]:{
      width: '100%',
    },
    [theme.breakpoints.up('md')]:{
      width: '90%',
    }
  },
  contentTitle: {
    width: '90%',
    fontSize: 28,
    margin: 'auto',
    textAlign: 'left',
    fontWeight: 600,
    color: '#696969',
    marginBottom: '4%',
  },
  contentDescription: {
    width: '90%',
    display: 'table-flex',
    margin: 'auto',
    textAlign: 'left',
    fontSize: 22,
    fontWeight: 400,
    color: '#696969',
    minHeight: 110,
    paddingBottom: 20
  },
  contentDescriptionLarge: {
    width: '90%',
    display: 'table-flex',
    margin: 'auto',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 400,
    color: '#696969',
    minHeight: 110,
    paddingBottom: 20
  },
  contentDescriptionOuter: {
    width: '90%',
    display: 'table-flex',
    margin: 'auto',
    textAlign: 'left',
    fontSize: 22,
    fontWeight: 400,
    color: '#696969',
    minHeight: 350,
    paddingBottom: 20
  },
  buttonContainer: {
    width: '90%',
    display:'table-flex',
    borderTop: '2px solid #696969'
  },
  buttonContainer: {
    width: '90%',
    display:'table-flex',
    borderTop: '2px solid #696969'
  },
  carousel: {
    columnCount: 3,
    width: '90%',
    display:'table-flex',
    borderTop: '2px solid #696969'
  },
  buttons: {
    width: "fit-content",
    display: 'table-flex',
    margin: 'auto',
    cursor: 'pointer',
    textAlign: 'center',
    minHeight: 50,
    paddingTop: 10
  },
  buttonUnderline: {
    width: "fit-content",
    display: 'table-flex',
    margin: 'auto',
    textAlign: 'center',
    minHeight: 50,
    cursor: 'pointer',
    paddingTop: 10,
    borderBottom: '3px solid #25274b'
  },
  oneButton: {
    width: "fit-content",
    display: 'inline-flex',
    margin: 'auto',
    textAlign: 'center',
    minHeight: 40,
    margin: '10px 20px 0 20px',
    borderBottom: '3px solid #25274b'
  },
  innerContent: {
    width: "100%"
  },
  displayTitle: {
    fontSize: 20,
    fontWeight: 600,
    color: '#696969',
  }
}));

const Background = () => {
  const classes = useStyles();
  const [title, setTitle] = useState(backgroundInfo[0].title);
  const [width, setWidth] = useState(0);
  const [globalIndex, setIndex] = useState(0);
  const [content, setContent] = useState(backgroundInfo[0].display);

  useLayoutEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth)
  })

  const updateContent = (index, inputArray) => {
    setTitle(inputArray.title)
    setContent(inputArray.display)
    setIndex(index)
  }

  const scroll = (side, array) => {
    let currentIndex = globalIndex
    if(side === 'left'){
      globalIndex > 0 ? updateContent(currentIndex - 1, array[currentIndex - 1]) : updateContent(currentIndex, array[currentIndex])
    }
    else {
      globalIndex < 3 ? updateContent(currentIndex + 1, array[currentIndex + 1]) : updateContent(currentIndex, array[currentIndex])
    }
  }

  return (
    <div className={classes.tableContainer}>
      <h2 className={classes.contentTitle}>{ title }</h2>
      <div className={classes.contentDescriptionOuter}>
      { 
        content.length > 1 ? (
          <div>
          {
            content.map((descriptions, index) => {
              if(typeof descriptions === 'object'){
                return (
                  <div key={index} className={classes.innerContent}>
                    <h3 className={classes.displayTitle}>{ descriptions.title }</h3>
                    { descriptions.display ? <p className={classes.contentDescriptionLarge}>{ descriptions.display }</p> : null}
                  </div>
                )
              }
              else {
                return (
                  <div key={index} className={classes.innerContent}>
                    <p className={classes.contentDescription}>{ descriptions }</p>
                  </div>
                )
              }
              })
            
              
          }
        </div> ) : content[0]
      }
      </div>
      <div className={classes.contentContainer}>
        {
          width > 923 ? (
          backgroundInfo.map((tableContent, index) => {
            return (
              <div  key={index} className={classes.buttonContainer}>
                <div className={globalIndex === index ? classes.buttonUnderline : classes.buttons} onClick={() => updateContent(index, backgroundInfo[index])}>{ tableContent.title }</div>
              </div>
            )
          })
          ) : (
            <div className={classes.buttonContainer}>
              <svg onClick={()=> scroll('left', backgroundInfo) } xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/> </svg> 
              <p className={classes.oneButton}>{ backgroundInfo[globalIndex].title }</p>
              <svg onClick={()=> scroll('right', backgroundInfo) } xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </div>
          )
        }
    </div>
  </div>
  )
  
};

export default Background;
