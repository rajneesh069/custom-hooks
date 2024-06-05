import { useEffect, useState } from "react";
import { todo } from "../components/UseAutoRefreshHookApp";
import axios from "axios";

export function useAutoRefresh(n: number): {
  todos: todo[];
  loading: boolean;
  error: boolean;
} {
  const [todos, setTodos] = useState<todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const interval: number = setInterval(() => {
      axios
        /* For local development 
        .get("http://localhost:8080/todos", {
          headers: {
            "Content-Type": "application/json",
          },
        }) */
        .get("https://dummy-server-for-react-js-lazy-loading.onrender.com", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setTodos(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          setError(true);
        });
    }, n * 1000);

    axios
      /*  .get("http:///localhost:8080/todos", {
        headers: {
          "Content-Type": "application/json",
        },
      }) */
      .get("https://dummy-server-for-react-js-lazy-loading.onrender.com", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

    return () => {
      //the cleanup function is for n, for now n is hard coded but once its dynamic then we'll need to address the previous running interval
      clearInterval(interval);
    };
  }, [n]);

  return { todos, loading, error };
}
