import { Link } from "react-router-dom";

const Pokemon = ({ items, errorFetch }) => {
  return (
    <div className="wrapper">
       <h1>List Pokemon</h1>
       <ul className="pokemon">
        {errorFetch ? (
          <p>Terjadi Error Saat Fetching data</p>
        ) : (
          items.map((item, index) => (
            <li key={index}>
              <Link to={`${item.name}`}>{item.name}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
    
  );
};

export default Pokemon;
