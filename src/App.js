import { useState } from "react";

// componet representing how counter will be displayed
const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

// componet representing how counter will be displayed
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />

      <Button onClick={setToZero} text="zero" />

      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};

export default App;

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };
// export default App;
