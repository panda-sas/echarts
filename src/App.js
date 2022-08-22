import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import GradientAreaChart from "./Charts/GradientAreaChart";
import PieChart from "./Charts/PieChart";
import SharedDatasetChart from "./Charts/SharedDatasetChart";

const App = () => {
  return (
    <div>
      <div>
        <PieChart />
      </div>


    </div>
  );
};

export default App;
