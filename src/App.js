import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
