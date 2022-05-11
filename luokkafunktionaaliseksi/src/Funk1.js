import React, { useState } from 'react';

function Funk1() {
const [state, setState] = useState('Robin Hood')
const handleChange = event => {
  setState(event.target.value)
}

  return (
    <div className="marg">
      <h3>Funktionaalinen komponentti</h3>     
      <input
                    name="input"
                    type="text"
                    onChange={event => handleChange(event)}
                    value={state}
                    placeholder="Nimesi"
      />
      <p>{state}</p>
    </div>
  );
};

export default Funk1;