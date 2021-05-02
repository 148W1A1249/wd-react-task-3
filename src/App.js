import Sidebar from "./sidebar";
import Topbar from "./topbar";
import "./sb-admin-2.css";
import Dashboard from "./dashboard";
import Footer from "./footer";

function App() {
  return (
    <>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div className="container-fluid">
            <Dashboard></Dashboard>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>      
    </>
     );
}

export default App;
