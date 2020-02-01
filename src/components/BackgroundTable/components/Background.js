import React, { Component } from 'react';
import { withStyles } from "@material-ui/core"
import PropTypes from 'prop-types';
import backgroundInfo from '../information'

const styles = theme => ({
  tableContainer: {
    width: '80%',
    display: 'table',
    margin: 'auto',
    padding: '10px 0 10px 0',
    marginBottom: '3%',
    minHeight: 350,
    [theme.breakpoints.down('sm')]:{
      width: '95%',
    },
    [theme.breakpoints.up('md')]:{
        width: '80%',
    }
  },
  contentContainer: {
    display:'inline-flex',
    width: '90%',
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
    paddingTop: 10,
    borderBottom: '3px solid #25274b'
  },
  oneButton: {
    width: "fit-content",
    display: 'inline-flex',
    margin: 'auto',
    textAlign: 'center',
    minHeight: 40,
    margin: '10px 40px 0 40px',
    borderBottom: '3px solid #25274b'
  },
  innerContent: {
    width: "100%"
  },
  displayTitle: {
    fontSize: 24,
    fontWeight: 600,
    color: '#696969',
  }
})

class Background extends Component {
  state = {
    title: 'My background',
    content: ['Check out my a quick summary of my background by clicking through this table'],
    width: 0,
    index: 0
  }

  componentDidMount(){
    this.updateWindowWidth()
    window.addEventListener('resize', this.updateWindowWidth)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowWidth)
  }

  updateWindowWidth = () => {
    this.setState({ width: window.innerWidth})
  }

  updateContent = (index, inputArray) => {
    console.log("content", inputArray)
    this.setState({
      title: inputArray.title,
      content: inputArray.display,
      index
    })
  }

  scroll = (side, array) => {
    let currentIndex = this.state.index
    if(side === 'left'){
      this.state.index > 0 ? this.updateContent(currentIndex - 1, array[currentIndex - 1]) : this.updateContent(currentIndex, array[currentIndex])
    }
    else {
      this.state.index < 3 ? this.updateContent(currentIndex + 1, array[currentIndex + 1]) : this.updateContent(currentIndex, array[currentIndex])
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.tableContainer}>
        <h2 className={classes.contentTitle}>{ this.state.title }</h2>
        <div className={classes.contentDescription}>
        { 
          this.state.content.length > 1 ? (
            <div>
            {
              this.state.content.map((descriptions, index) => {
                if(typeof descriptions === 'object'){
                  console.log('descriptions', descriptions, typeof descriptions)
                  return (
                    <div key={index} className={classes.innerContent}>
                      <h3 className={classes.displayTitle}>{ descriptions.title }</h3>
                      <p className={classes.contentDescription}>{ descriptions.display }</p>
                    </div>
                  )
                }
                else {
                  console.log('descriptions', descriptions)
                  return (
                    <div key={index} className={classes.innerContent}>
                      <p className={classes.contentDescription}>{ descriptions }</p>
                    </div>
                  )
                }
                })
              
               
            }
          </div> ) : this.state.content[0]
        }
        </div>
        <div className={classes.contentContainer}>
          {
            this.state.width > 923 ? (
            backgroundInfo.map((tableContent, index) => {
              return (
                <div  key={index} className={classes.buttonContainer}>
                  <div className={this.state.index === index ? classes.buttonUnderline : classes.buttons} onClick={() => this.updateContent(index, backgroundInfo[index])}>{ tableContent.title }</div>
                </div>
              )
            })
            ) : (
              <div className={classes.buttonContainer}>
                <svg onClick={()=> this.scroll('left', backgroundInfo) } xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/> </svg> 
                <p className={classes.oneButton}>{ backgroundInfo[this.state.index].title }</p>
                <svg onClick={()=> this.scroll('right', backgroundInfo) } xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
              </div>
            )
          }
      </div>
    </div>
    )
  }
}

Background.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Background);
