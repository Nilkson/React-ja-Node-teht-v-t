import React, { useState } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {
  const [pets, setPets] = useState([]);
  return (
    <div className="App">
      <Header title='Nuuhkukuonot' />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
