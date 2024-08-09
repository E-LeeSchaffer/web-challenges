import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1337, name: "🍌 Banana", color: "yellow" },
    { id: 1338, name: "🍎 Apple", color: "red" },
    { id: 1339, name: "🍊 Orange", color: "orange" },
    { id: 1340, name: "🍒 Cherry", color: "pink" },
    { id: 1341, name: "🍇 Grapes", color: "violet" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <ul key={id}>
          <Card id={id} name={name} color={color} />
        </ul>
      ))}
    </div>
  );
}
