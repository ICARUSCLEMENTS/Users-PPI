import React, { useEffect, useState } from "react";
import User from "./components/Users";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((resposta) => resposta.json())
      .then((dados) => setUsers(dados.users));
  }, []);

  return (
    <div className="App">
      <h1>Lista de Usuários</h1>
      <div className="user-list">
        {users.map((user) => (
          <User
            key={user.id}
            image={user.image}
            nome={`${user.firstName} ${user.lastName}`}
            idade={user.age}
            genero={user.gender}
            email={user.email}
            telefone={user.phone}
            empresa={user.company.name}
            cargo={user.company.title}
            cidade={`${user.address.city} - ${user.address.stateCode}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
