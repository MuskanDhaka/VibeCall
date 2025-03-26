import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MeetingRoom from "./pages/MeetingRoom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meeting-room" element={<MeetingRoom />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
