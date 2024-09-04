import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  lights,
  countLights,
  turnAllLightsOn,
  turnAllLightsOff,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        countLights={countLights}
        turnAllLightsOff={turnAllLightsOff}
        turnAllLightsOn={turnAllLightsOn}
      />
    </>
  );
}
