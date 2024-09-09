import './App.css';
import Main from './components/Main.js';

//Componente principal, será renderizado primeiro dentro da aplicação
function App() {
  return (
    //Chamada de componente externo, este componente trará as funcionalidades basicas da aplicação.
    <Main />
  );
}

export default App;