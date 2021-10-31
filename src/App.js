import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/Admin/AddService/AddService';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageAllServices from './Pages/Admin/ManageAllServices/ManageAllServices';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
       <Switch>
       <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/home">
           <Home></Home>
        </Route>
        <PrivateRoute path='/placeOrder/:id'>
          <PlaceOrder></PlaceOrder>
         </PrivateRoute>
         <PrivateRoute path='/myOrder'>
          <MyOrder></MyOrder>
         </PrivateRoute>
         <PrivateRoute path='/addService'>
          <AddService></AddService>
         </PrivateRoute>
         <PrivateRoute path='/manageAllService'>
          <ManageAllServices></ManageAllServices>
         </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
      
    </div>
  );
}

export default App;
