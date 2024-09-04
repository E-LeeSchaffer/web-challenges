import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(id) {
    setLights((lights) =>
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function turnAllLightsOn() {
    setLights((lights) => lights.map((light) => ({ ...light, isOn: true })));
    console.log("on");
  }

  function turnAllLightsOff() {
    setLights((lights) => lights.map((light) => ({ ...light, isOn: false })));
    console.log("off");
  }

  const countLights = lights.filter(({ isOn }) => isOn).length;

  return (
    <Layout isDimmed={countLights === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggle}
        countLights={countLights}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
    </Layout>
  );
}
