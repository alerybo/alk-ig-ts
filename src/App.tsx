import CustomThemeProvider from "./shared/contexts/themeProvider";
import Sidebar from "./components/Navbar/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Explore from "./pages/Explore";

const App: React.FC = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/explore", element: <Explore /> },
  ]);

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
        <RouterProvider router={router} />
      </Box>
    </CustomThemeProvider>
  );
};

export default App;
