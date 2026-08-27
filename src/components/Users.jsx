import React from "react";
import "./Users.css";

function User({props}) {
  return (
    <div className="user-card">
      <img src={image} alt={nome} className="user-image" />
      <h2>{props.firstname} {props.lastname}</h2>
      <p>{props.age} anos | {genero}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Telefone:</strong> {props.phone}</p>
      <p><strong>Empresa:</strong> {props.company.name}</p>
      <p><strong>Cargo:</strong> {props.company.title}</p>
      <p><strong>Cidade:</strong> {props.address.city} - {props.address.stateCode}</p>
    </div>
  );
}

export default User;
