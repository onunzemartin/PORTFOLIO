import "./js/myScript";

function App() {
  return (
    <>
      <div className="App">
        <h1>{"Hello World"}</h1>
      </div>
      console.log(addTwoNumbers())
      {/* if its was a component */}
      <AddTwoNumber />
      {/* if it was a comp with props */}
      <AddTwoNumbers name="Rafael" age={25} />
    </>
  );
}

export default App;

function addTwoNumbers() {
  return 2 + 3;
}
// if it was a component
function AddTwoNumbers() {
  return 2 + 3;
}
