import React from "react";
import SimpleCom from "./SimpleCom";
import StyleComponent from "./StyleCom/StyleComponent";

function App() {
  const [state, setState] = useState("");
  const onShow = () => {
  setState("passed")
  };
  const onRegister = () => {};
  return (
    <Container>
      {/* <SimpleCom value={"hello"}>
        <h3>birnima</h3>

      </SimpleCom> */}
    </Container>
  );
}

export default App;
