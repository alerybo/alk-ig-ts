import CustomThemeProvider from "./shared/contexts/themeProvider";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore";
import Layout from "./shared/layout/Layout";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/explore", element: <Explore /> },
      ],
    },
  ]);

  return (
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  );
};

export default App;
