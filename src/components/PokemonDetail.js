import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PokemonDetail = () => {
  const [errorFetch, setErrorFetch] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  let { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.abilities);
        },
        (error) => {
          setIsLoaded(true);
          setErrorFetch(error);
        }
      );
  }, []);

  let abilities = [];
  for (let i = 0; i < items.length; i++) {
    abilities[i] = items[i].ability.name;
  }

 

  return (
    <div className="detail">
      {errorFetch ? (
        <p>Terjadi Error Saat Fetching Data</p>
      ) : (
        <ul>
          <p>Kemampuan <span>{name}</span> adalah</p>
          {abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonDetail;
