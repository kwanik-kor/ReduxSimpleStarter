import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBimS54EI4UTX0u-X9gzh0lPehKw0AVLAs';

// Create a new component. This component should porduce some HTML
// 'const' came out from 'ES6'
//  => const means constant and this is the final value
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// "React! Plz take this components that I just made put it into DOM!"s
ReactDOM.render(<App />, document.querySelector('.container'));