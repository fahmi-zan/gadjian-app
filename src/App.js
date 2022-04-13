import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Sidenav from './components/Sidenav';
import Header from "./components/Header";
import Content from "./components/Content";
import { useDispatch } from 'react-redux'
import allStore from './store/actions';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allStore.getPost())
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidenav />
        <div className='grid grid-rows-1 mx-auto'>
          <Header />
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
