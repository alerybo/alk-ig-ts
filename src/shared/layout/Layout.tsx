import Sidebar from "./Navbar/Sidebar";
import MobileNavbar from "./Navbar/MobileNavbar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const StyledBox = styled(Box)({
  marginTop: "60px",
  display: "flex",
  justifyContent: "center",
});

const Layout: React.FC = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <>
      {smallScreen ? <MobileNavbar /> : <Sidebar />}
      <StyledBox ml={smallScreen ? 0 : largeScreen ? "320px" : "90px"}>
        <Outlet />
      </StyledBox>
    </>
  );
};

export default Layout;
