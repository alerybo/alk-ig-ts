import Sidebar from "./components/Sidebar/Sidebar";
import CustomThemeProvider from "./shared/contexts/themeProvider";

const App: React.FC = () => {
  return (
    <CustomThemeProvider>

      <Sidebar />

    </CustomThemeProvider>
  );
};

export default App;
