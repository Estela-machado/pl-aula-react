import logo from './react.png';
import './App.css';
import BlocoHome from './componentes/bloco-home';

function App() {
  const APP_TITLE = 'MyApp';

  return (
    <BlocoHome img={logo} title={APP_TITLE} />
  );
}

export default App;
