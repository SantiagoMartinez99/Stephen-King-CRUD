import React, { useState, useEffect } from "react";
import { addBook, updateBook } from "../redux/slices/book.slice";
import { useDispatch, useSelector } from "react-redux";
import { Book } from "../types";
import { RootState } from "../redux/store";

type FormBookProps = {
  onClose: () => void;
  book: Book | null;
};

function FormBook({ onClose, book }: FormBookProps) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [publisher, setPublisher] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pages, setPages] = useState(0);
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);

  useEffect(() => {
    if (book) {
      setTitle(book.Title || "");
      setYear(book.Year || 0);
      setPublisher(book.Publisher || "");
      setIsbn(book.ISBN || "");
      setPages(book.Pages || 0);
    }
  }, [book]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (book && book.id) {
      const updatedBook: Book = {
        ...book,
        Title: title,
        Year: year,
        Publisher: publisher,
        ISBN: isbn,
        Pages: pages,
      };

      dispatch(updateBook(updatedBook));
    } else {
      // Si el libro no tiene un ID, es una operación de agregación
      const newId =
        books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1;
      const newBook: Book = {
        id: newId,
        Title: title,
        Year: year,
        Publisher: publisher,
        ISBN: isbn,
        Pages: pages,
        created_at: new Date().toISOString(),
      };

      dispatch(addBook(newBook));
    }

    onClose();
  };

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-400 "
            onClick={onClose}
          >
            ×
          </button>
          <h2 className="font-black text-3xl text-center pt-4">
            {" "}
            {book ? "Edit Book" : "Add Book"}
          </h2>
          <form
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="mb-5">
              <label htmlFor="title" className="text-sm uppercase font-bold">
                Title
              </label>
              <input
                id="title"
                className="w-full p-3 border border-gray-100"
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="year" className="text-sm uppercase font-bold">
                Year
              </label>
              <input
                id="year"
                className="w-full p-3 border border-gray-100"
                type="number"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="publisher"
                className="text-sm uppercase font-bold"
              >
                Publisher
              </label>
              <input
                id="publisher"
                className="w-full p-3 border border-gray-100"
                type="text"
                placeholder="Publisher"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="isbn" className="text-sm uppercase font-bold">
                ISBN
              </label>
              <input
                id="isbn"
                className="w-full p-3 border border-gray-100"
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="pages" className="text-sm uppercase font-bold">
                Pages
              </label>
              <input
                id="pages"
                className="w-full p-3 border border-gray-100"
                placeholder="Pages"
                type="number"
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
              />
            </div>

            <input
              type="submit"
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
              value="Add Book"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormBook;
