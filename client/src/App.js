import { Route, Routes, Navigate, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";
import NotFound from "./screens/NotFound";
import NavBar from "./layout/NavBar";
import ContactUs from "./screens/ContactUs";
import MoviesPage from "./screens/Movies";
import SingleMovie from "./screens/SingleMovie";
import WatchPage from "./screens/WatchPage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Trending from "./screens/Trending";
import Profile from "./screens/dashboard/Profile";
import Aos from "aos";
import Password from "./screens/dashboard/Password";
import FavoritesMovie from "./screens/dashboard/FavoritesMovie";
import MovieList from "./screens/dashboard/admin/MovieList";
import Dashboard from "./screens/dashboard/admin/Dashboard";
import Categories from "./screens/dashboard/admin/Categories";
import Users from "./screens/dashboard/admin/Users";
import AddMovie from "./screens/dashboard/admin/AddMovie";
import ScrollOnTop from "./ScrollOnTop";
import DrawerContext, { SidebarContext } from "./context/DrawerContext";
function App() {
  Aos.init();

  return (
    <DrawerContext>
      <ScrollOnTop>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/browser-movies" element={<MoviesPage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<Password />} />
          <Route path="/favorites" element={<FavoritesMovie />} />
          <Route path="/moviesList" element={<MovieList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollOnTop>
    </DrawerContext>
  );
}

export default App;
