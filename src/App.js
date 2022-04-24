import { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pokemon from "./components/Pokemon";
import PokemonDetail from "./components/PokemonDetail";
import NoPage from "./components/NoPage";

function ErrorHandler({error}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

function App() {
  const [errorFetch, setErrorFetch] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setErrorFetch(error);
        }
      )
  }, [])

  console.log(items)
  return (
    // Simulasi untuk melihat keberhasilan ErrorBoundary dapat dilihat dengan
    // melakukan pengubahan props items menjadi item
    <ErrorBoundary FallbackComponent={ErrorHandler}>
        <Navbar/>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="Pokemon" element={<Pokemon items={items} errorFetch={errorFetch}/>} />
            <Route path="Pokemon/:name" element={<PokemonDetail />} />  
            <Route path="*" element={<NoPage />} />
        </Routes>
    </ErrorBoundary>
  );
}

export default App;
