import Todo from "./components/Todo";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Debounce from "./components/DebounceHookApp";
import SetCountUsingUseAppIntervalHook from "./components/UseIntervalApp";

import IsUserOnline from "./components/IsUserOnline";
import MousePosition from "./components/MousePosition";
import AppBar from "./components/AppBar";

function App() {
  return (
    <div
      style={{
        height: "100%",
        border: "1px solid gray",
      }}
    >
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <p>This project demonstrates various useful custom hooks! The focus is on hooks not on CSS.</p>
              </div>
            }
          />
          <Route path="/autoDataRefreshHook" element={<Todo />} />
          <Route path="/isUserOnlineHook" element={<IsUserOnline />} />
          <Route path="/mousePosHook" element={<MousePosition />} />
          <Route
            path="/useIntervalHook"
            element={<SetCountUsingUseAppIntervalHook />}
          />
          <Route path="/useDebounceHook" element={<Debounce />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
