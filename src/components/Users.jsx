import React from "react";
import "./Users.css";

function User({ image, nome, idade, genero, email, telefone, empresa, cargo, cidade }) {
  return (
    <div className="user-card">
      <img src={image} alt={nome} className="user-image" />
      <h2>{nome}</h2>
      <p>{idade} anos | {genero}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Telefone:</strong> {telefone}</p>
      <p><strong>Empresa:</strong> {empresa}</p>
      <p><strong>Cargo:</strong> {cargo}</p>
      <p><strong>Cidade:</strong> {cidade}</p>
    </div>
  );
}

export default User;
