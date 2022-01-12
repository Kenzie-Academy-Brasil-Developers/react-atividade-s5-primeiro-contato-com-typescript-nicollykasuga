import "./App.css";
import { Input } from "./components/Input/index";
import { Card } from "./components/Card/index";
import { useState } from "react";

interface User {
  name: string;
  // onChange volta erro, se eu usar tipo number
  age: string;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [data, setData] = useState<User[]>([] as User[]);

  const HandleSubmit = () => {
    const person = { name, age, hobby };

    setData([...data, person]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          label="Name "
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
        <Input
          label="Age "
          placeholder="Age"
          onChange={e => setAge(e.target.value)}
        />
        <Input
          label="Hobby "
          placeholder="Hobby"
          onChange={e => setHobby(e.target.value)}
        />

        <button onClick={HandleSubmit}>Enviar</button>
        {data && <Card name={data.name} age={data.age} hobby={data.hobby} />}
      </header>
    </div>
  );
}

export default App;
