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
import logo from "../../assets/logo.png";

interface Link {
  name: string;
  icon: JSX.Element;
}

const links: Link[] = [
  { name: "Strona główna", icon: <HomeOutlined /> },
  { name: "Szukaj", icon: <Search /> },
  { name: "Eksploruj", icon: <ExploreOutlined /> },
  { name: "Rolki", icon: <MovieOutlined /> },
  { name: "Wiadomości", icon: <SendOutlined /> },
  { name: "Powiadomienia", icon: <FavoriteBorderOutlined /> },
  { name: "Utwórz", icon: <AddBoxOutlined /> },
  { name: "Profil", icon: <Avatar sx={{ width: 35, height: 35 }} /> },
];

const Sidebar: React.FC = () => {
  const theme = useTheme();
  // const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "xl"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { width: `${largeScreen ? "320px" : "auto"}` } }}
    >
      <Toolbar sx={{ padding: "16px" }} disableGutters>
        {largeScreen ? <img src={logo} /> : <Instagram />}
      </Toolbar>
      <List>
        {links.map((link) => (
          <ListItem key={link.name} disablePadding>
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
