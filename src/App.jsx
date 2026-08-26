import { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((resposta) => resposta.json())
      .then((dados) => setUsers(dados.users));
  }, []);


  return (

  )
}

export default App
