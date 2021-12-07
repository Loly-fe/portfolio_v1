import React, {useState} from 'react'
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) =>({
  link: {
      textDecoration: 'none',
      color: '#6E7C7C',
      fontSize: '20px',
      '&:hover': {
          backgroundColor: '#DED9C4',
          color: 'white',
          borderBottom: '1px solid white',
      }
  },
  icon: 'white',
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} anchor='right'>
                <List>
                    <ListItem onClick={()=>setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/home" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>  
                    <Divider/>
                   
                    <ListItem onClick={()=>setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/link" className={classes.link}>Link</Link>
                        </ListItemText>
                    </ListItem>  
                    <Divider/>

                    <ListItem onClick={()=>setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about" className={classes.link}>About</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider/>

                    <ListItem onClick={()=>setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>Contact Us</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider/>

                    <ListItem onClick={()=>setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/faq" className={classes.link}>FAQs</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider/>
                       
                    
                    <ListItem onClick={()=>setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/portfolio" className={classes.link}>Portfolio</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider/>
                    
                </List>
            </Drawer>
            <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </>
    )
}

export default DrawerComponent
