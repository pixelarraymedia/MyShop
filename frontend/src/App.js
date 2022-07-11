import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'
// React V6
// <Route path='cart' element={CartScreen }> 
//<Route path=':id' element={CartScreen } />
// </Route>
const App = () => {
  return (
    <Router>

      <Header />
        <main className='py-3'>
           <Container>


               <Routes>

                   <Route path='/' element={<HomeScreen />} exact />
                   <Route path='/product/:id' element={<ProductScreen />} />

                   
                   <Route path='/cart' element={<CartScreen /> } > 
                   
                         <Route path=':id' element={<CartScreen /> } />

                      </Route>
               </Routes>

            </Container>

        </main>
    <Footer />
    </Router>
  );
}

export default App;
