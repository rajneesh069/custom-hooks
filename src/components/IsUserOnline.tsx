import { useIsOnline } from "../hooks/useIsOnline";

export default function IsUserOnline() {
  const isUserOnline = useIsOnline();
  return (
    <div style={{ border: "2px solid black", margin: 2 }}>
      {isUserOnline ? <p>You are online.</p> : <p>You are offline.</p>}
    </div>
  );
}
