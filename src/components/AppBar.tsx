import { useNavigate } from "react-router-dom";

export default function AppBar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        gap: 3,
        padding: 10,
        backgroundColor: "black",
        color: "white",
        margin: 2,
        justifyContent: "center",
      }}
    >
      <p>Navigate to various hooks!</p>
      <button
        onClick={() => {
          navigate("/autoDataRefreshHook");
        }}
      >
        Auto Data Refresh Hook
      </button>

      <button
        onClick={() => {
          navigate("/isUserOnlineHook");
        }}
      >
        Is User Online?
      </button>

      <button
        onClick={() => {
          navigate("/mousePosHook");
        }}
      >
        Where is my mouse?
      </button>

      <button
        onClick={() => {
          navigate("/useIntervalHook");
        }}
      >
        Custom Interval Hook
      </button>

      <button
        onClick={() => {
          navigate("/useDebounceHook");
        }}
      >
        Debounce Value
      </button>
    </div>
  );
}
