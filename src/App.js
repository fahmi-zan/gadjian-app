import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
// import Sidenav from './components/Sidenav';
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
      {/* <Sidenav /> */}
      <Header />
      <Content />
    </>
  );
}

export default App;
