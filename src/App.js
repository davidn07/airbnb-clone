import "assets/stylesheet/App.scss";
//react router
import { Switch, Route } from "react-router-dom";
//local component
import Navbar from "components/Navbar";
import Home from "pages/Home";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
