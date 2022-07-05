import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Items from './components/items/Items';

import ItemForm from './components/items/ItemForm';
import ShowItem from './components/items/ShowItem';
import Footer from './components/shared/Footer';


const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
         {/* <Route path='/items' element={<Items />} /> */}
        <Route path='/ShowItem' element={<ShowItem />} /> 
        
        <Route path='/:id/updateItem' element={<ItemForm />} />

         <Route path='/' element={<ProtectedRoute />}>
         
          <Route path='/items' element={<Items />} />
          {/* <Route path='/items/:id' element={<Item />} /> */}
          {/* <Route path='/:id/updateItem' element={<ItemForm />} /> */}
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Nomatch />} />
      </Routes>
    </FetchUser>
    <Footer />
  </>
)

export default App;