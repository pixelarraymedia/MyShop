import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';



// React V6
// <Route path='cart' element={CartScreen }> 
//<Route path=':id' element={CartScreen } />
// </Route>


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/order/" element={<OrderScreen />}>
              <Route path=":id" element={<OrderScreen />} />
            </Route>

            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/login" element={<LoginScreen />} exact />
            <Route path="/register" element={<RegisterScreen />} exact />
            <Route path="/profile" element={<ProfileScreen />} exact />

            <Route path="/product" element={<ProductScreen />}>
              <Route path=":id" element={<ProductScreen />} />
            </Route>
            <Route path="/cart" element={<CartScreen />}>
              <Route path=":id?" element={<CartScreen />} />
            </Route>

            <Route path="/admin" element={<UserListScreen />}>
              <Route path="userlist" element={<UserListScreen />} />
            </Route>

            <Route path="/admin/user" element={<UserEditScreen />}>
              <Route path=":id/edit" element={<UserEditScreen />} />
            </Route>

            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} />

            <Route path="/admin/product" element={<ProductEditScreen />}>
              <Route path=":id/edit" element={<ProductEditScreen />} />
            </Route>

            <Route path="/search/:keyword" element={<HomeScreen />} />
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
