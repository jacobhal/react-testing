import './App.css';
import { useState } from 'react';

function MainApp() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={() => setButtonColor(newButtonColor)}>Change to {newButtonColor}</button>
      <input type="checkbox"></input>
    </div>
  );
}

export default MainApp;
