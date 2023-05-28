import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, IconButton, Avatar } from "@mui/material";
import ExploreOutlined from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";
import MovieOutlined from "@mui/icons-material/MovieOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import SearchBar from "./SearchBar";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/logo.png";

interface Link {
  name: string;
  icon: JSX.Element;
  route: string;
}

const links: Link[] = [
  { name: "Strona główna", icon: <HomeOutlined />, route: "/" },
  { name: "Eksploruj", icon: <ExploreOutlined />, route: "explore" },
  { name: "Rolki", icon: <MovieOutlined />, route: "/" },
  { name: "Wiadomości", icon: <SendOutlined />, route: "/" },
  { name: "Utwórz", icon: <AddBoxOutlined />, route: "/" },
  {
    name: "Profil",
    icon: <Avatar sx={{ width: 35, height: 35 }} />,
    route: "/",
  },
];

const StyledToolbar = styled(Toolbar)({
  flexGrow: 1,
  display: "flex",
  justifyContent: "space-around",
});

const MobileNavbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" aria-label="home">
            <Link to={"/"}>
              <img src={logo} />
            </Link>
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
        <StyledToolbar>
          {links.map((link) => (
            <IconButton
              key={link.name}
              component={Link}
              to={link.route}
              style={{ color: "white" }}
            >
              {link.icon}
            </IconButton>
          ))}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default MobileNavbar;
