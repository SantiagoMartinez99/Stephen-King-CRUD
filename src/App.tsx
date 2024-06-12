import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
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
import Home from "./pages/Home";
function App() {
  const isAuth = useSelector((state: RootState) => state.authReducer.isAuth);
  console.log(isAuth);
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
