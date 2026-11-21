import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BookForm from './pages/BookForm';
import BookDetail from './pages/BookDetail';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/new' element={<BookForm />} />
        <Route path='/books/:id' element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
