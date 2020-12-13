import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  //   console.log(useParams());
  const { id } = useParams();

  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const person = await data.json();
      setEquipo(person);
    };
    obtenerDatos();
  }, [id]);

  return (
    <div>
      <h3>Nombre: {equipo.name}</h3>
      <p>Nombre de Usuario: {equipo.username}</p>
      <p>Telefono: {equipo.phone}</p>
    </div>
  );
};

export default User;
