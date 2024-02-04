import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemainging }) {
  const mins = Math.floor(secondsRemainging / 60);
  const seconds = Math.floor(secondsRemainging % 60);

  useEffect(
    function () {
      const idTimer = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(idTimer);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
