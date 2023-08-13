import React from "react";
import Route from "./components/Route";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Sidebar from "./components/Sidebar";
import ModelPage from "./pages/ModelPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="flex container auto-mx gap-4 m-4">
      <Sidebar />
      <div>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/model">
          <ModelPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;
