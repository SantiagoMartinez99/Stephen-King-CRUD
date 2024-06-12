import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Books from "./components/List";
import {
  useGetBooksQuery,
  useGetShortsQuery,
  useGetVillainsQuery,
} from "./redux/services/apiService";
import {
  reloadDataBooks,
  reloadDataShorts,
  reloadDataVillains,
} from "./redux/slices/book.slice";
import { RootState } from "./redux/store";
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
  const dispatch = useDispatch();

  const booksState = useSelector((state: RootState) => state.books);
  const shortsState = useSelector((state: RootState) => state.shorts);
  const villainsState = useSelector((state: RootState) => state.villains);

  useEffect(() => {
    if (books) {
      dispatch(reloadDataBooks(books||[]));
    }
  }, [books]);

  useEffect(() => {
    if (shorts) {
      dispatch(reloadDataShorts(shorts||[]));
    }
  }, [shorts]);

  useEffect(() => {
    if (shorts) {
      dispatch(reloadDataVillains(villains||[]));
    }
  }, [villains]);

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
      <Books data={booksState.books} dataType="Books" />
      {shorts && <Books data={shorts} dataType="Shorts" />}
      {villains && <Books data={villains} dataType="Villains" />}
    </>
  );
}

export default App;
