import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("La URL ingresada no existe.");
        } else {
          response.json().then((data) => setData(data));
        }
      })
      .catch((error) => {
        if (error instanceof TypeError) {
          setError("El sistema no se encuentra disponible, por favor vuelva a intentarlo en unos minutos.");
        } else {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
