import Header from "./components/Header/Header.js";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Layout(props) {
  return (
    <>
    <Header></Header>
      <main className="container mt-5">
        <Route {...props} />
      </main>
    </>
  )
}

export default Layout;
