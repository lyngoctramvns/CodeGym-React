import './App.css';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import routers from './commons/routers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
            {
              routers.map(item =>{
                return <Route path={item.path} element={item.element} key={item.name}></Route>
              })
            }
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
