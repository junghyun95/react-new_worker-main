import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Test from "./pages/test/Test";
import Home from "./pages/home/Home";
import Copy from "./pages/copy/Copy";
import AppCSS from "./App.module.css";


function App() {
  return (

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={ <Layout /> }>
    //       <Route index element={ <Main/>} />


    //       <Route path="test" element={ <Test /> } />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <div className={ AppCSS.container } >

      <Layout />
      <Routes>
        <Route index element={ <Main/>} />
        <Route path="test/Test" element={ <Test /> } />
        <Route path="home/Home" element={ <Home /> } />
        <Route path="copy/Copy" element={ <Copy /> } />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
