
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Catalog from "./components/catalog/Catalog";
import Users from "./components/users-catalog/Users";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Create from "./components/create/Create";
import IdeaDetails from "./components/idea-details/IdeaDetails";
import UserProfile from "./components/user-profile/UserProfile";


function App() {

    return (
        
        <>
            <Header />
            <Home />
            <About />
            <Catalog />
            <Users />
            <Register />
            <Login />
            <Create />
            <IdeaDetails />
            <UserProfile />
            <Footer />
        </>
    );

}

export default App;
