import { Routes, Route } from "react-router-dom";

import Envelope from "./components/Envelope";
import Invitation from "./pages/Invitation";

function Celebration() {
  return (
    <div>
      <h1>Happy Teacher's Day 🌿</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Envelope />} />

      <Route
        path="/invitation"
        element={<Invitation />}
      />

      <Route
        path="/celebration"
        element={<Celebration />}
      />
    </Routes>
  );
}

export default App;