import React, { useEffect, useState } from "react";
import "./App.css";
import Collection from "./components/collection/Collection";
import Navigation from "./components/nav-bar/Navigation";
import Pages from "./components/page/Pages";

function App() {
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [collection, setCollection] = useState([]);
  const [serchValue, setSerchValue] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}` : "";

    fetch(
      `https://63e8eea45f3e35d898f7ecf8.mockapi.io/photo_collections?page=${page}&limit=3&${category}
      `
    )
      .then((response) => response.json())
      .then((json) => setCollection(json))
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  const onChahgeSearchValue = (e) => {
    setSerchValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <Navigation
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        onChahgeSearchValue={onChahgeSearchValue}
        serchValue={serchValue}
      />
      <div className="wrapper-collection">
        {isLoading ? (
          <p> Идет загрузка....</p>
        ) : (
          collection
            .filter((obj) => {
              return obj.name.toLowerCase().includes(serchValue.toLowerCase());
            })
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <Pages page={page} setPage={setPage} />
    </div>
  );
}

export default App;
