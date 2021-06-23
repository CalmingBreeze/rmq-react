import React, { useState, useEffect } from 'react';

import QUOTES from './data/quotes';

import './App.css';

//use stateHook in react function to get the job done without having to declare a class

function App() {
    const getRandomQuoteIndex = () => Math.floor(Math.random() * QUOTES.length);

    const [quoteIndex, invokeQuoteAtIndex] = useState(getRandomQuoteIndex);

    function updateQuote(){
        invokeQuoteAtIndex(getRandomQuoteIndex);
    }

    //debug purpose on limit test cases
    //like 6 or 19
    // function forceQuote(index) {
    //     invokeQuoteAtIndex(index);
    // }

    return (
        <div className="App">
            <div id="quote-block">
                <div id="text">
                <span className="material-icons-round invertX quote-icon-magnify">format_quote</span>
                    {QUOTES[quoteIndex][0]}&nbsp;<span className="material-icons-round">format_quote</span>
                </div>
                <div id="author">{QUOTES[quoteIndex][1]}</div>
            </div>
            <button id="enlighter" onClick={() => updateQuote()}>
                Enlight me <span className="material-icons-round">self_improvement</span>
            </button>
        </div>

    );
}

export default App;
