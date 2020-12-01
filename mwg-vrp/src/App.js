import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Test from "./containers/Test";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/test" component={Test} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
