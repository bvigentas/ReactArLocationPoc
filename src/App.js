import React from 'react';

function App() {
  return (
    <div className="App">  
      <a-text
        value="This content will always face you."
        look-at="[gps-camera]"
        scale="120 120 120"
        gps-entity-place="latitude: -26.9156302; longitude: -49.1143945;"
      ></a-text>
      <a-camera gps-camera rotation-reader> </a-camera>
    </div>
  );
}

export default App;
