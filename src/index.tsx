import * as React from "react";
import { render } from "react-dom";
import { grey } from "@material-ui/core/colors";
import "./styles.css";
import { SomeComp } from "./SomeComp";
import { ObservationCard } from "./ObservationCard";
import ChipMenu from "./ChipMenu";

function App() {
  return (
    <div>
      {/* <h3>Observations</h3> */}
      {/* <SomeComp /> */}

      <div style={{ margin: "2%", marginTop: "2%", marginBottom: "3%" }}>
        <ChipMenu />
      </div>
      <ObservationCard id={1} />
      <ObservationCard id={2} />
      <ObservationCard id={3} />
      <ObservationCard id={4} />
      <ObservationCard id={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
