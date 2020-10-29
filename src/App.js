import React, { Component } from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Academics from './components/Academics/components/Academics';
import Contact from './components/Contact/Contact';
import Podcasts from './components/Extras/Podcasts';
import Posts from './components/Extras/Posts';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const styles = {
  header: {
    backgroundColor: "#25274b",
    position: 'static',
  },
  buttons: {
    color: "white",
  },
}

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <HelmetProvider>
        <HashRouter>
          <Helmet id='test'>
            <meta property='og:title' content={'Jeff LaPrade'} />
            <meta property='og:description' content={'My personal website'} />
          </Helmet>
            <AppBar className={classes.header}>
              <Toolbar>
                <Link to='/' style={{textDecoration: 'none', color: 'white'}}><Button className={classes.buttons}>Home</Button></Link>
                <Link to='/academics' style={{textDecoration: 'none', color: 'white'}}><Button className={classes.buttons}>Academics</Button></Link>
                <Link to='/feed' style={{textDecoration: 'none', color: 'white'}}><Button className={classes.buttons}>Test-Feed</Button></Link>
                {/* <Link to='/contact' style={{textDecoration: 'none', color: 'white'}}><Button className={classes.buttons}>Contact</Button></Link> */}
              </Toolbar>
            </AppBar>
          <div>
          <Route path='/' exact render={() => 
            <MainPage /> }
          />
          <Route path='/academics' render={() => 
            <Academics /> }
          />
          <Route path='/podcasts' render={() => 
            <Podcasts /> }
          />
          <Route path='/feed' render={() => 
            <Posts /> }
          />
          {/* <Route path='/contact' render={() => 
            <Contact /> }
          /> */}
        </div>
        </HashRouter>
      </HelmetProvider>
    )
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
