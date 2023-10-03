import React, {useState, useEffect} from 'react'

export default function useFetch(url) {
    const [Data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((Data) => setData(Data))
      .catch((error) => console.log("error occured", error));
  }, []);
  return [Data]
}
