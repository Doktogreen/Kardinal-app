
import react, { useEffect } from "react";

export default function PREVNEXT() {
  const [array, setArray] = react.useState([]);
  const [currentPage, setCurrentPage] = react.useState(1);
  var totalItems = 0;
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`
    )
      .then((response) => response.json())
      .then((result) => setArray(result));
  });
  function change() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${currentPage}`
    )
      .then((response) => response.json())
      .then((result) => setArray(result));
  }
  function decrement() {
    setCurrentPage(currentPage - 1);
  }
  function increment() {
    setCurrentPage(currentPage + 1);
  }
  return (
    <div>
      <ul>
        {array.map((item) => (
          <li>{item.id}</li>
        ))}
      </ul>
      <button disabled={currentPage === 1 ? true : false} onClick={decrement}>
        PREVIOUS
      </button>
      <button disabled={currentPage === 10 ? true : false} onClick={increment}>
        NEXT
      </button>
    </div>
  );
}
