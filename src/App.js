import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import NavBar from "./components/ui/navbar/navbar";
import Opportunities from "./components/pages/opportunities/opportunities";
import Courses from "./components/pages/courses/courses";

import "bootstrap/dist/js/bootstrap.bundle.min";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ToastContainer />
      <div>
        <Switch>
          <Route path="/opportunities" component={Opportunities} />

          <Route exact path="/" component={Courses} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
