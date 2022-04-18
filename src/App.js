import './App.css';
import BrandBar from './components/BrandBar/BrandBar';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App flex flex-col items-center border h-screen">

      <BrandBar
        backgroundColor={ `#4D2D7F` }
        foregroundColor={ `white` }
        logo={ `./logo192.png` }
        companyName={ `Nombre de la Compañía` }
      />

      <Body
        backgroundImage={ `https://i.picsum.photos/id/128/1920/1080.jpg?hmac=A9n9Hfj2w0ohm-zgX1FrZsnp7jH_iE-NR6RJhjuMv4A` }
        backgroundPosition={ `center` }
        backgroundRepeat={ `no-repeat` }
        backgroundSize={ `cover` }
        foregroundColor={ `black` }
      />

    </div>
  );
}

export default App;
