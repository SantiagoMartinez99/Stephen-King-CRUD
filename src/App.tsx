import { useState } from "react";
import {
  useGetBooksQuery,
  useGetShortsQuery,
  useGetVillainByIdQuery,
  useGetVillainsQuery,
} from "./redux/slices/book.slice";
import Books from "./components/List";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import FormBook from "./components/FormBook";
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
      {/* <Login></Login> */}
      <Header />
      {/* <Hero /> */}
      <Books data={books} dataType="Books" />
      {shorts && <Books data={shorts} dataType="Shorts" />}
      {villains && <Books data={villains} dataType="Villains" />}

    </>
  );
}

export default App;
