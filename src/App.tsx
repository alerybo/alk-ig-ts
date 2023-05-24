import CustomThemeProvider from "./shared/contexts/themeProvider";
import Sidebar from "./components/Navbar/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MobileNavbar from "./components/Navbar/MobileNavbar";

const App: React.FC = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <CustomThemeProvider>
      {smallScreen ? <MobileNavbar /> : <Sidebar />}
      <Box
        sx={{
          marginLeft: smallScreen ? 0 : largeScreen ? "320px" : "90px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Dashboard />
      </Box>
    </CustomThemeProvider>
  );
};

export default App;
