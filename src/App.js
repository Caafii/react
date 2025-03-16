import "./App.css";

function App() {
  const nameClicker = () => {
    console.log(students);
  };
  const students = ["cali", "farax", "cabdi", " cumar"];
  return students.map((student, index) => (
    <>
      
      <li onClick={nameClicker} key={index}>
      
        {student}
      </li>

      <input type="text" placeholder="Enter name"></input>
    </>
  ),
 
 
);
}

export default App;
