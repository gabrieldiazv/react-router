import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setEquipo(users);
  };

  return (
    <div>
      <h1>Nosotros</h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            <Link to={`/nosotros/${item.id}`}>
              nombre: {item.name} - email: {item.email} - ciudad:
              {item.address.city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nosotros;
