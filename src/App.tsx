import { useState } from "react";
import {
  useGetBooksQuery,
  useGetShortsQuery,
  useGetVillainByIdQuery,
  useGetVillainsQuery,
} from "./redux/slices/book.slice";
import Books from "./components/List";
import Header from "./components/Header";
function App() {
  const {
    data: books,
    error: booksError,
    isLoading: booksIsLoading,
  } = useGetBooksQuery();
  const {
    data: shorts,
    error: shortsError,
    isLoading: shortsIsLoading,
  } = useGetShortsQuery();
  const {
    data: villains,
    error: villainsError,
    isLoading: villainsIsLoading,
  } = useGetVillainsQuery();

  if (booksError) {
    console.error("Error fetching books:", booksError);
    return <div>Error: Unable to retrieve books</div>;
  }

  if (booksIsLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(books)) {
    console.error("Books data is not an array:", books);
    return <div>Error: Unable to retrieve books</div>;
  }

  return (
    <>
    <Header/>
      <h1 className="text-center">STEPHEN KING WIKI</h1>
      <Books data={books} dataType="Books" />
      {shorts && <Books data={shorts} dataType="Shorts" />}
      {villains && <Books data={villains} dataType="Villain" />}
    </>
  );
}

export default App;
