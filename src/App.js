import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [accounts, setAccounts] = useState([]);

  const fetchUsers = () => {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  };

  const fetchAccounts = () => {
    fetch("http://localhost:3000/accounts")
      .then((resp) => resp.json())
      .then((data) => setAccounts(data));
  };

  useEffect(() => {
    fetchUsers();
    fetchAccounts();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to PizzaBank!</h1>
    </div>
  );
}

export default App;
