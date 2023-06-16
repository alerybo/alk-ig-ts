import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import Menu from "@mui/icons-material/Menu";
import Instagram from "@mui/icons-material/Instagram";
import logo from "../../../assets/logo.png";
import { SIDEBAR_LINKS } from "../../../constants";

const StyledListItemButton = styled(ListItemButton)({
  padding: "8px",
  borderRadius: 5,
  "&:hover": { backgroundColor: "#1b1b1b" },
});

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
        {SIDEBAR_LINKS.map((link) => (
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
