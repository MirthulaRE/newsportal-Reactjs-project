import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
import Login from './components/Login';
import './components/Login.css';
import './index.css';
import Contact from './components/Contact';
import './components/Contact.css';
function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState('general');
  const [loggedIn, setLoggedIn] = useState(false); 
  useEffect(() => {
    if (loggedIn) {
      
      fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=021baff830cb4c8fa2c688eefdd78b46`)
        .then((res) => res.json())
        .then((data) => setItems(data.articles));
    }
  }, [category, loggedIn]);
  return (
    <div className="App">
      <h1 className="title">See the Latest News!!</h1>
      {loggedIn ? (
        <>
          <Menu active={active} setActive={setActive} setCategory={setCategory} />
          <NewsGrid items={items} />
          <Contact items={items}/>
        </>
      ) : (
      <Login onLogin={setLoggedIn} />
      )}
    </div>
  )
}
export default App;
