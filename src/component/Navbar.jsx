import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import DrawerComponent from "./DrawerComponent";
  
  const useStyles = makeStyles((theme) =>({
      navLink: {
        marginLeft: theme.spacing(5),
        display: 'flex',
      },
      logo: {
          flexGrow: 1,
          cusor: 'pointer'
      },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        marginLeft: theme.spacing(5),
        '&:hover': {
            backgroundColor: '#DED9C4',
            color: 'white',
            borderBottom: '1px solid white',
        },
    },
  }));
  export default function Navbar() {
      const classes = useStyles();
      const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
      return (
          <AppBar position = "static">
              <CssBaseline/>
              <Toolbar style={{backgroundColor: "#D0CAB2"}}> 
                    <Typography variant="h4" className={classes.logo}>
                      myPortfolio
                    </Typography>
                    {isMobile ? <DrawerComponent style= {{color: "#D0CAB2"}} /> : 
                      <div className={classes.navLink}>
                        <Link to="/home" className={classes.link}>Home</Link>
                        <Link to="/about" className={classes.link}>About</Link>
                        {/* <Link to="/resume" className={classes.link}>Resume</Link> */}
                        <Link to="/myworks" className={classes.link}>Myworks</Link>
                        <Link to="/contact" className={classes.link}>Contact</Link>
                      </div>
                    }
              </Toolbar>
          </AppBar>
      );
  }