import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import ExploreOutlined from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import Search from "@mui/icons-material/Search";
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";
import MovieOutlined from "@mui/icons-material/MovieOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Menu from "@mui/icons-material/Menu";
import Instagram from "@mui/icons-material/Instagram";
import logo from "../../../assets/logo.png";

interface Link {
  name: string;
  icon: JSX.Element;
  route: string;
}

const StyledAvatar = styled(Avatar)({ width: 35, height: 35 });

const StyledListItemButton = styled(ListItemButton)({
  padding: "16px",
  borderRadius: 5,
  "&:hover": { backgroundColor: "#1b1b1b" },
});

const links: Link[] = [
  { name: "Strona główna", icon: <HomeOutlined />, route: "/" },
  { name: "Szukaj", icon: <Search />, route: "/" },
  { name: "Eksploruj", icon: <ExploreOutlined />, route: "explore" },
  { name: "Rolki", icon: <MovieOutlined />, route: "/" },
  { name: "Wiadomości", icon: <SendOutlined />, route: "/" },
  { name: "Powiadomienia", icon: <FavoriteBorderOutlined />, route: "/" },
  { name: "Utwórz", icon: <AddBoxOutlined />, route: "/" },
  {
    name: "Profil",
    icon: <StyledAvatar />,
    route: "/",
  },
];

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { width: `${largeScreen ? "320px" : "auto"}` } }}
    >
      <Toolbar sx={{ padding: "16px" }} disableGutters>
        <Link to={"/"} style={{ color: "white" }}>
          {largeScreen ? <img src={logo} /> : <Instagram />}
        </Link>
      </Toolbar>
      <List>
        {links.map((link) => (
          <ListItem
            key={link.name}
            component={Link}
            to={link.route}
            style={{ color: "white" }}
            disablePadding
          >
            <StyledListItemButton>
              {link.icon}
              {largeScreen && (
                <ListItemText
                  primary={link.name}
                  primaryTypographyProps={{
                    fontSize: "21px",
                    m: "2px 0",
                    pl: "20px",
                  }}
                />
              )}
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
      <List style={{ marginTop: `auto` }}>
        <ListItem disablePadding>
          <StyledListItemButton>
            <Menu />
            {largeScreen && (
              <ListItemText
                primary="Więcej"
                primaryTypographyProps={{
                  fontSize: "22px",
                  m: "2px 0",
                  pl: "20px",
                }}
              />
            )}
          </StyledListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
