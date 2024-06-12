import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormBookProps = {
  onClose: () => void;
};

function FormBook({ onClose }: FormBookProps) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pages, setPages] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          <h2 className="font-black text-3xl text-center pt-4">Add Book</h2>
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
                onChange={(e) => setYear(e.target.value)}
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
                onChange={(e) => setPages(e.target.value)}
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
