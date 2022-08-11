import "./App.css";
import axios from "axios";
import Books from "./components/books";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/api/v1/books";

const getApiData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;

    getApiData().then((items) => {
      if (mounted) {
        setBooks(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Books books={books}/>
    </div>
  );
}

export default App;
