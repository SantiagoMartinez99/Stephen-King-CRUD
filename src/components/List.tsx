import { Book, Short, Villain } from "../types";
import { useState } from "react";
import FormBook from "./FormBook";
import { deleteBook } from "../redux/slices/book.slice";
import { useDispatch } from "react-redux";

type DataType = Book | Short | Villain;

type BooksProps = {
  data: Book[] | Short[] | Villain[];
  dataType: string;
};

function List({ data, dataType }: BooksProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState<"recent" | "az">("recent");

  const handleDeleteBook = (id: number) => {
    dispatch(deleteBook(id));
    console.log(data);
  };

  const handleEditBook = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const filteredData = data
    .filter((item) =>
      dataType === "Books"
        ? (item as Book).Title.toLowerCase().includes(searchTerm.toLowerCase())
        : dataType === "Shorts"
        ? (item as Short).title.toLowerCase().includes(searchTerm.toLowerCase())
        : dataType === "Villains"
        ? (item as Villain).name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        : false
    )
    .sort((a, b) => {
      if (orderBy === "recent" && dataType === "Books") {
        return (
          new Date((b as Book).created_at).getTime() -
          new Date((a as Book).created_at).getTime()
        );
      } else if (orderBy === "az") {
        // Ordenar alfabéticamente por el título común (Title, title o name)
        const titleA =
          dataType === "Books"
            ? (a as Book).Title
            : dataType === "Shorts"
            ? (a as Short).title
            : dataType === "Villains"
            ? (a as Villain).name
            : "";
        const titleB =
          dataType === "Books"
            ? (b as Book).Title
            : dataType === "Shorts"
            ? (b as Short).title
            : dataType === "Villains"
            ? (b as Villain).name
            : "";
        return titleA.localeCompare(titleB);
      }
      return 0;
    });

  return (
    <section className=" px-10">
      <h1 className="text-4xl font-bold pt-24 text-center">{dataType}</h1>

      <div className="flex flex-row-reverse align-bottom gap-4 items-center">
        <select
          className="block appearance-none w-1/6 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value as "recent" | "az")}
        >
          <option disabled>--Select an option--</option>
          <option value="recent">Recent</option>
          <option value="az">A-Z</option>
        </select>
        <b className="flex">Filter by:</b>
        <div className="relative">
          <input
            type="search"
            className="w-full rounded border border-solid border-grey-200 bg-transparent  px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none "
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="my-12  h-96 overflow-y-scroll">
        {filteredData.map((item, index) => (
          <div key={index} className="container flex-column p-5 border ">
            {dataType === "Books" && (
              <>
                <h2 className="text-xl font-bold">{(item as Book).Title}</h2>
                <p>
                  <b>Year:</b> {(item as Book).Year}
                </p>
                <p>
                  <b>Publisher:</b> {(item as Book).Publisher}
                </p>
                <p>
                  <b>ISBN:</b> {(item as Book).ISBN}
                </p>
                <p>
                  <b>Pages:</b> {(item as Book).Pages}
                </p>
              </>
            )}
            {dataType === "Shorts" && (
              <>
                <h2 className="text-xl font-bold">{(item as Short).title}</h2>
                <p>{(item as Short).title}</p>
                <p>{(item as Short).originallyPublishedIn}</p>
                <p>{(item as Short).collectedIn}</p>
                <p>{(item as Short).year}</p>
              </>
            )}
            {dataType === "Villains" && (
              <>
                <h2 className="text-xl font-bold">{(item as Villain).name}</h2>
                <p>{(item as Villain).gender}</p>
                <p>{(item as Villain).status}</p>
              </>
            )}
            <div className="flex gap-3 my-2">
              <button
                onClick={() => handleEditBook(item as Book)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </button>
              <button
                onClick={(e) => handleDeleteBook((item as Book).id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row-reverse">
        {(dataType === "Books" || dataType === "Shorts") && (
          <button
            onClick={() => setIsModalOpen(true)}
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-5 px-4 rounded w-1/6 self-end"
          >
            Add {dataType}
          </button>
        )}
      </div>
      {isModalOpen && (
        <FormBook book={selectedBook} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}

export default List;
