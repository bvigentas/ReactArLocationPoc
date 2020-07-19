import React from 'react';

function App() {
  return (
    <div className="App">
      <a-scene embedded arjs>
        <a-marker preset="hiro">
            <a-entity
            position="0 -1 0"
            scale="0.05 0.05 0.05"
            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
        </a-scene>
    </div>
  );
}

export default App;
