import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <h1>Etienne Plante</h1>
            <p>Sit qui exercitation sint Lorem deserunt. Eu excepteur occaecat veniam ut dolor mollit exercitation eiusmod reprehenderit. Occaecat ipsum deserunt consectetur laboris aliquip. Fugiat mollit excepteur ad aute cupidatat Lorem excepteur officia.</p>
            <p>Reprehenderit cupidatat exercitation occaecat occaecat et ea. Ea consequat nostrud consectetur nostrud irure exercitation aliquip fugiat. Labore labore in reprehenderit exercitation est et voluptate commodo incididunt in non. Laboris veniam Lorem id magna deserunt. Sit nisi exercitation velit minim. Fugiat sit dolor in nostrud ullamco ut ex non et cupidatat reprehenderit.</p>
        </div>
    );
}

export default App;
