import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar/Navbar";
import AddUser from "./Pages/AddUser/AddUser";
import Error from "./Pages/Error";
import SignIn from "./Pages/SignIn/SignIn";
import UpdateUser from "./Pages/UpdateUser/UpdateUser";
import UserList from "./Pages/UserList/UserList";
import PrivateRoute from "./Router/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/signin" element={<SignIn />} />

        <Route element={<PrivateRoute />}>
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser/:id" element={<UpdateUser />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
