import Sidebar from "./Navbar/Sidebar";
import MobileNavbar from "./Navbar/MobileNavbar";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <>
      {smallScreen ? <MobileNavbar /> : <Sidebar />}
      <Box
        sx={{
          marginLeft: smallScreen ? 0 : largeScreen ? "320px" : "90px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
