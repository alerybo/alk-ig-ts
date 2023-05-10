import { Sidebar } from "react-pro-sidebar";
import CustomThemeProvider from "./shared/contexts/themeProvider";

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <Sidebar />
      <div>Hi</div>
    </CustomThemeProvider>
  );
};

export default App;
