import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";

import SearchBar from "./SearchBar";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/logo.png";
import { MOBILE_NAVBAR_LINKS } from "../../../constants";

interface Link {
  name: string;
  icon: JSX.Element;
  route: string;
}

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
          {MOBILE_NAVBAR_LINKS.map((link) => (
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
