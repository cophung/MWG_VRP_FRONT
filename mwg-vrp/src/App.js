import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Test from "./containers/Test";
import Layout from "./containers/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/test" component={Test} />
          <Route exact path="/" component={Layout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
