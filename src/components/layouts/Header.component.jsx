import { useStyles } from "../../styles/lib/header.styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <AppBar position="fixed">
            <Toolbar>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                  Tribr
               </Typography>
               <Link to={"/"}>Home</Link>
               <Link to={"/About"}>About</Link>
               <Link to={"/Contact"}>Contact</Link>
               <Link className={classes.Link} to={"/Login"}>
                  {" "}
                  <Button color="inherit">Get Started</Button>
               </Link>
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default Header;
