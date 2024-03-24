import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Landing from './components/MainScreen';
import MiApi from './components/MiApi';
import Footer from './components/footer';

const App = () => {
    const [setRecipes] = useState([]);

    return (
        <div>
            <NavBar />
            <Landing />
            <MiApi setRecipes={setRecipes} />
            <Footer />
        </div>
    );
};

export default App;