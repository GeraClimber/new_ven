import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';




export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar
                  position = "fixed"
                  style = {{
                      backgroundColor:'#2f2f2f',
                      boxShadow: 'none',
                      padding: '10px 0px'
                  }}
                >
                    <Toolbar>
                      <div className="header_logo">
                          <div className="font_righteous header_logo_venue">The Venue</div>
                          <div className="header_logo_title">Musical Events</div>
                      </div>
                      <IconButton 
                        edge="start" 
                        style={{ marginLeft: 2}} 
                        color="inherit" 
                        aria-label="Menu"
                        onClick={()=> console.log("clicked")}
                      >
                          <MenuIcon />
                      </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
