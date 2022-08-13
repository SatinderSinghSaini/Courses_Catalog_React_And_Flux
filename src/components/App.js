import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import {Route, Routes} from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = function(){
    
    return  (<div className="container-fluid">
        <ToastContainer autoClose={3000} hideProgressBar/>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/courses" element={<CoursesPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/course/:slug" element={<ManageCoursePage />} />
            <Route path="/course" element={<ManageCoursePage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>);
}

export default App;