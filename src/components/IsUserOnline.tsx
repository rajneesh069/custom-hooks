import { useIsOnline } from "../utils/customHooks";

export default function IsUserOnline() {
  const isUserOnline = useIsOnline();
  return (
    <div>{isUserOnline ? <p>You are online.</p> : <p>You are offline.</p>}</div>
  );
}
