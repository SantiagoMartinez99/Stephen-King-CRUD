import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetBooksQuery,
  useGetShortsQuery,
  useGetVillainsQuery,
} from "../redux/services/apiService";
import {
  reloadDataBooks,
  reloadDataShorts,
  reloadDataVillains,
} from "../redux/slices/book.slice";
import { RootState } from "../redux/store";
import List from "../components/List";
import Header from "../components/Header";
function Home() {
  const isAuth = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();

  const { data: books } = useGetBooksQuery();
  const { data: shorts } = useGetShortsQuery();
  const { data: villains } = useGetVillainsQuery();

  const booksState = useSelector((state: RootState) => state.books.books);
  const shortsState = useSelector((state: RootState) => state.books.shorts);
  const villainsState = useSelector((state: RootState) => state.books.villains);

  useEffect(() => {
    if (books) {
      dispatch(reloadDataBooks(books));
    }
  }, [books, dispatch]);

  useEffect(() => {
    if (shorts) {
      dispatch(reloadDataShorts(shorts));
    }
  }, [shorts, dispatch]);

  useEffect(() => {
    if (villains) {
      dispatch(reloadDataVillains(villains));
    }
  }, [villains, dispatch]);

  return (
    <>
      <Header />
      <List data={booksState} dataType="Books" />
      <List data={shortsState} dataType="Shorts" />
      <List data={villainsState} dataType="Villains" />
    </>
  );
}

export default Home;
