import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";
import { GlobalStyles } from "./components/GlobalStyles";
import { Navigation } from "./components/Navigation";
import { Routes } from "./components/Routes";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <AppContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Navigation />
        <Routes />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
