import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <FontAwesomeIcon icon={icon({ name: "user-secret" })} beatFade/>
      <FontAwesomeIcon
        icon={icon({ name: "user", family: "classic", style: "regular" })} bounce
      />
      <FontAwesomeIcon
        icon={icon({ name: "user", family: "classic", style: "regular" })} spin
      />
    </div>
  );
}

export default App;
