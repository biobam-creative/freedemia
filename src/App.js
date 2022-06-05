import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import NavBar from "./components/ui/navbar/navbar";
import Opportunities from "./components/pages/opportunities/opportunities";
import Courses from "./components/pages/courses/courses";
// import InfiniteScroll from "./components/pages/infiniteScroll";
import PdfSplit from "./components/pages/pdfSplit/pdfSplit";
import PdfMerge from "./components/pages/pdfMerge/pdfMerge";
import Download from "./components/pages/download/download";

import "bootstrap/dist/js/bootstrap.bundle.min";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <BootstrapNav /> */}
      <ToastContainer />
      <div>
        <Switch>
          <Route path="/pdfSplit" component={PdfSplit} />
          <Route path="/pdfMerge" component={PdfMerge} />
          <Route path="/courses" component={Courses} />
          <Route path="/opportunities" component={Opportunities} />
          <Route path="/download" component={Download} />
          <Route exact path="/courses" component={Courses} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
