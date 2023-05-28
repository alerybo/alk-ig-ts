import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
import logo from "../../../assets/logo.png";

interface Link {
  name: string;
  icon: JSX.Element;
  route: string;
}

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
    icon: <Avatar sx={{ width: 35, height: 35 }} />,
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
            <ListItemButton
              sx={{
                p: "16px",
                borderRadius: 5,
                "&:hover": { backgroundColor: "#1b1b1b" },
              }}
            >
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
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List style={{ marginTop: `auto` }}>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              p: "15px",
              borderRadius: 5,
              "&:hover": { backgroundColor: "#1b1b1b" },
            }}
          >
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
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
