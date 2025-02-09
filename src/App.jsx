import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile";
import { Friends } from "./components/Friends";
import { Shop } from "./components/Shop";
import { Settings } from "./components/Settings";


function App(props) {
  //console.log(props);
  return (
    <div className="container-fluid pl-5 pr-5 mt-5">
      <div className="row">
        <div className="col-sm-4">
          <div className="nav flex-column nav-pills">
            <NavLink to="/" className="nav-link">
              Главная
            </NavLink>
            <NavLink to="profile" className="nav-link">
              Профиль
            </NavLink>
            <NavLink to="friends" className="nav-link">
              Друзья
            </NavLink>
            <NavLink to="shop" className="nav-link">
              Магазин
            </NavLink>
            <NavLink to="settings" className="nav-link">
              Настройки
            </NavLink>
          </div>
        </div>
        <div className="col-sm-8">
          <Routes>
            <Route path="/" element={<h2>Главная страница, выберите из меню слева</h2>}/>
            <Route path="/profile/*" element={<Profile function={props.functions.key_getUser} />}/>
            <Route path="/friends" element={<Friends function={props.functions.key_getUsers}/>}/>
            <Route path="/shop" element={<Shop />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
