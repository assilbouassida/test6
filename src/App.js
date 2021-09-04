
import './App.css';
import Profile from './profile/profile'
import assil from "./profile/assil.JPG"


function App() {
  function mes(){
    alert("Assil Bouassida")
  }
  const name="Bouassida Assil"
  const Adresse ="sfax rte saltnia "
  const mm ="étudion de lycée sadak fiki"
  return (
    <div className="App" style={{color:"red"}}>
      <header className="App-header">
      <Profile name={name} adresse={Adresse} mm={mm} mes={mes} >
          <img src={assil} alt="assil"/>
        </Profile>
      </header>
    </div>
  );
}

export default App;
