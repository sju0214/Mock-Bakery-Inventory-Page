// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import completed pages
import HomePage from './pages/HomePage'
import TopicsPage from './pages/TopicsPage'
import BakedGoodsPage from './pages/BakedGoodsPage';
import AddBakedGoodPageForm from './pages/AddBakedGoodPageForm';
import EditBakedGoodPageForm from './pages/EditBakedGoodPageForm';

// Define the function that renders the content in Routes, using State.
function App() {

  const [bakedGood, setBakedGoodToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Seongyeong Ju</h1>
            <p>Portfolio Project for Web Development</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/topics" element={<TopicsPage/>} />
                    <Route path="/bakedgoods" element={<BakedGoodsPage setBakedGood={setBakedGoodToEdit}/>} />
                    <Route path="/create" element={<AddBakedGoodPageForm />} />   
                    <Route path="/update" element={<EditBakedGoodPageForm bakedGoodToEdit={bakedGood} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Seongyeong Ju</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;