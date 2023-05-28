import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DefaultLayout from "./Views/DefaultLayout/DefaultLayout";
import routes from "./routes"

function App() {
  return (
    <div className="App" >
      <DefaultLayout/>
    </div>
  );
}

export default App;
