import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  const [isFilterVisible, setisFilterVisible] = useState(false);
  return (
    <>
      <Header
        isFilterVisible={isFilterVisible}
        setisFilterVisible={setisFilterVisible}
      />
    </>
  );
}

export default App;
