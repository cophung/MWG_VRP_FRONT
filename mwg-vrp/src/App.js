import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Test from "./containers/Test";
import Header from "./containers/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/test" component={Test} />
          <Route exact path="/" component={Header} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
