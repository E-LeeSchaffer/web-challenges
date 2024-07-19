import "./styles.css";

function Greeting({ name, isCoach }) {
  return <h1>Hello, {isCoach ? `Coach ${name}` : name}!</h1>;
}
export default function App() {
  return (
    <div>
      <Greeting name="Jane" />
      <Greeting name="Felix" isCoach />
      <Greeting name="Beate" isCoach />
    </div>
  );
}
