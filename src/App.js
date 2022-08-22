import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import GradientAreaChart from "./Charts/GradientAreaChart";

const App = () => {
  return (
    <div>
      <GradientAreaChart />
    </div>
  );
};

export default App;
