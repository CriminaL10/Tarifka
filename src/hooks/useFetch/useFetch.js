import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
    // const {data} = await axios.get(url);
    // setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
};

export default useFetch;
