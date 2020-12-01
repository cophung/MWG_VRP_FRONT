import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setDefaultOptions } from "esri-loader";

import "./App.css";
import Test from "./containers/Test";
import Layout from "./containers/Layout";

setDefaultOptions({ css: true });

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
