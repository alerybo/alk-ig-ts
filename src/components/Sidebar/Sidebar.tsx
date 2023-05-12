import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { ExploreOutlined } from "@mui/icons-material";

interface Link {
  name: string;
  icon: JSX.Element;
}

const links: Link[] = [
  { name: "Strona główna", icon: <ExploreOutlined /> },
  { name: "Szukaj", icon: <ExploreOutlined /> },
  { name: "Eksploruj", icon: <ExploreOutlined /> },
  { name: "Rolki", icon: <ExploreOutlined /> },
  { name: "Wiadomości", icon: <ExploreOutlined /> },
  { name: "Powiadomienia", icon: <ExploreOutlined /> },
  { name: "Utwórz", icon: <ExploreOutlined /> },
  { name: "Profil", icon: <ExploreOutlined /> },
];

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      // sx={{ display: { xs: "none", sm: "block" } }}
      PaperProps={{ sx: { width: 300, padding: "8px 12px 20px 12px" } }}
    >
      <Toolbar>
        <Typography variant="h6">Instagram</Typography>
      </Toolbar>
      <List>
        {links.map((link) => (
          <ListItem key={link.name} disablePadding>
            <ListItemButton
              sx={{
                p: "15px",
                borderRadius: 5,
                "&:hover": { backgroundColor: "#1b1b1b" },
              }}
            >
              {link.icon}
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{
                  fontSize: "22px",
                  m: "2px 0",
                  pl: "20px",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
