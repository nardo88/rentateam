import './scss/style.scss';
import React from 'react';

import Header from './components/Header/Header';
import MainContainer from './components/Main/Main';
import NavigationContainer from './components/Navigation/Navigation';
import CategoryesContainer from './components/Categoryes/Categoryes';
import Footer from './components/Footer/Footer';
import store from './store/store';
import { Provider } from 'react-redux';




const App = () =>{
    return (
    
      <>
        <Provider store={store}>
          <Header />
          <MainContainer />
          <NavigationContainer />
          <CategoryesContainer />
          <Footer />
        </Provider>
      </>
    )
  }
  


export default App;
