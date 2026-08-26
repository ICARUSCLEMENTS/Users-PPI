import "./Users.css"

function User(props) {
    return (
        <div className="card">
            <img className="foto" src={props.imagem} alt={props.nome} />
            <h3 className="nome">{props.name}</h3>
            <h2 className="subnome">{props.age}</h2>
            <h2 className="subnome">{props.gender}</h2>
            <div className="char">
                <p><span className="character">Email:</span> {props.email}</p>
                <p><span className="character">Number:</span> {props.email}</p>
                <p><span className="character">City:</span> {props.email}</p>
                <p><span className="character">Email:</span> {props.email}</p>
                <p><span className="character">Email:</span> {props.email}</p>

            </div>
        </div>
    )

}