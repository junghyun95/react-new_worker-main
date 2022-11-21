import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import LayoutCSS from "./Layout.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import SubSidebar from "../components/sidebar/SubSidebar";
import Main from "../pages/Main";



function Layout() {

    return (
        //         // <>
        //         //     <div className={ LayoutCSS.LayoutDiv}>
        //         //         <Header/>
        //         //         <Navbar/>
        //         //         <Footer/>
        //         //     </div>
        //         //     <main>
        //         //         <Outlet/>
        //         //     </main>
        //         // </>

            
        <>
            <div className={LayoutCSS.LayoutDiv} >

                <Sidebar />
                <SubSidebar />
            
                <main className={LayoutCSS.main}>
                    <Outlet />
                </main> 
            </div>
        </>

        

        
    );
}

export default Layout;