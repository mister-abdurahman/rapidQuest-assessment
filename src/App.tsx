import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeDB } from "./Pages/HomeDB";
import { MobileIncome } from "./Pages/MobileIncome";
import { MobileCompare } from "./Pages/MobileCompare";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomeDB />}></Route>
        <Route path="/income" element={<MobileIncome />}></Route>
        <Route path="/compare" element={<MobileCompare />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
