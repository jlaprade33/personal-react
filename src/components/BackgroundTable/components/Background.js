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
    border: '1px solid orange',
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
    width: 0
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

  updateContent = (inputArray) => {
    console.log("content", inputArray)
    this.setState({
      title: inputArray.title,
      content: inputArray.display
    })
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
            backgroundInfo.map((tableContent, index) => {
              return (
                  <div  key={index} className={classes.buttonContainer}>
                    <div className={classes.buttons} onClick={() => this.updateContent(backgroundInfo[index])}>{ tableContent.title }</div>
                  </div>
              )
            })
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
