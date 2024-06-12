import { Book, Short, Villain } from "../redux/slices/book.slice";
import { useState } from "react";
import FormBook from "./FormBook";

type DataType = Book | Short | Villain;

type BooksProps = {
  data: Book[] | Short[] | Villain[];
  dataType: string;
};

function List({ data, dataType }: BooksProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderItemDetails = (item: DataType) => {
    switch (dataType) {
      case "Books":
        return (
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
        );
      case "Shorts":
        return (
          <>
            <h2 className="text-xl font-bold">{(item as Short).title}</h2>
            <p>{(item as Short).title}</p>
            <p>{(item as Short).originallyPublishedIn}</p>
            <p>{(item as Short).collectedIn}</p>
            <p>{(item as Short).year}</p>
          </>
        );
      case "Villains":
        return (
          <>
            <h2 className="text-xl font-bold">{(item as Villain).name}</h2>
            <p>{(item as Villain).gender}</p>
            <p>{(item as Villain).status}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className=" px-10">
      <h1 className="text-4xl font-bold pt-24 text-center">{dataType}</h1>

      <div className="flex flex-row-reverse align-bottom gap-4 items-center">
        <select className="block appearance-none w-1/6 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>--Select an option--</option>
          <option>Recent</option>
          <option>A-Z</option>
        </select>
        <b className="flex">Filter by:</b>
        <div className="relative">
          <input
            type="search"
            className="w-full rounded border border-solid border-grey-200 bg-transparent  px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none "
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      <div className="my-12 border  border-blue-500 h-96 overflow-y-scroll">
        {data.map((item, index) => (
          <div key={index} className="container flex-column p-5 border">
            {renderItemDetails(item)}
            <div className="flex gap-3 my-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Editar
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row-reverse">
        <button
          onClick={() => setIsModalOpen(true)}
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-5 px-4 rounded w-1/6 self-end"
        >
          Add {dataType}
        </button>
      </div>
      {isModalOpen && <FormBook onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

export default List;
