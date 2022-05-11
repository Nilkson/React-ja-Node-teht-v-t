import React from 'react';

const Content = (pet) => {
  return (
    <main>
      <div id='petCard' className='row'>
        <div className='column'>
        <h2>{pet.title}</h2>
        </div>
        <div className='column'>
        <img src={pet.pic} alt={pet.title}></img>
        </div>
      </div>
    </main>
  );
};

export default Content;
