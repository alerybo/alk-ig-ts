import CustomThemeProvider from "./shared/contexts/themeProvider";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <Sidebar />
      <Dashboard />
    </CustomThemeProvider>
  );
};

export default App;
