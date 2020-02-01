import React, { Component } from 'react';
import { withStyles, Button } from "@material-ui/core"
import PropTypes from 'prop-types';
import backgroundInfo from '../information'

const styles = theme => ({
  tableContainer: {
    width: '80%',
    display: 'table'
  }
})

class Background extends Component {
  state = {
    title: '',
    content: ''
}

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.tableContainer}>
        {
          backgroundInfo.map((tableContent, index) => {
            
          })
        }
      </div>
    )
  }
}

Background.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Background);
