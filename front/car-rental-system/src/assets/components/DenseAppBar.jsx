import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import logo2 from "./logo2.png";

export default function DenseAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Funções para abrir e fechar o Drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const pages = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Available Cars",
      link: "/available-cars",
    },
    {
      label: "Contracts",
      link: "/contracts",
    },
  ];

  // Conteúdo do Drawer
  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map(({ label, link }, index) => (
          <ListItem button key={label}>
            <Link to={link}>{label}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#cb2220" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="#115293"
            aria-label="menu"
            sx={{ mr: 2, padding: "25px" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logo2}
            alt="Logo"
            style={{ width: "10%", margin: "10px" }}
          />
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </Box>
  );
}
