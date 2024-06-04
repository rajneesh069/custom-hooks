import { useEffect, useState } from "react";
import { todo } from "../components/Todo";
import axios from "axios";

export function useTodos(n: number): { todos: todo[]; loading: boolean } {
  const [todos, setTodos] = useState<todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const interval: number = setInterval(() => {
      axios
        .get("http:///localhost:8080/todos", {
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
    }, n * 1000);

    axios
      .get("http:///localhost:8080/todos", {
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

  return { todos, loading };
}

export function useIsOnline(): boolean {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  useEffect(() => {
    const val = setInterval(() => {
      if (window.navigator.onLine) {
        setIsOnline(true);
      } else {
        setIsOnline(false);
      }
    }, 10000);

    if (window.navigator.onLine) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }

    return () => {
      clearInterval(val);
    };
  }, []);
  return isOnline;
}
