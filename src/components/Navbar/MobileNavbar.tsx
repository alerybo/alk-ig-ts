import { Box, AppBar, Toolbar, IconButton, Avatar } from "@mui/material";
import {
  ExploreOutlined,
  FavoriteBorderOutlined,
  Search,
  AddBoxOutlined,
  MovieOutlined,
  HomeOutlined,
  SendOutlined,
  Menu,
  Instagram,
} from "@mui/icons-material";
import SearchBar from "./SearchBar";
import logo from "../../assets/logo.png";

interface Link {
  name: string;
  icon: JSX.Element;
}

const links: Link[] = [
  { name: "Strona główna", icon: <HomeOutlined /> },
  { name: "Eksploruj", icon: <ExploreOutlined /> },
  { name: "Rolki", icon: <MovieOutlined /> },
  { name: "Wiadomości", icon: <SendOutlined /> },
  { name: "Utwórz", icon: <AddBoxOutlined /> },
  { name: "Profil", icon: <Avatar sx={{ width: 35, height: 35 }} /> },
];

const MobileNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" aria-label="home">
            <img src={logo} />
          </IconButton>
          <Box display="flex" marginLeft="auto">
            <SearchBar />
            <IconButton aria-label="notifications">
              <FavoriteBorderOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{ flexGrow: 1, display: "flex", justifyContent: "space-around" }}
        >
          {links.map((link) => (
            <IconButton>{link.icon}</IconButton>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileNavbar;
