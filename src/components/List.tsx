import { Book, Short, Villain } from "../redux/slices/book.slice";

type DataType = Book | Short | Villain;

type BooksProps = {
  data: Book[] | Short[] | Villain[];
  dataType: string;
};

function List({ data, dataType }: BooksProps) {
  const renderItemDetails = (item: DataType) => {
    switch (dataType) {
      case "Books":
        return (
          <>
            <h2 className="text-xl font-bold">{(item as Book).Title}</h2>
            <p>{(item as Book).Year}</p>
            <p>{(item as Book).Publisher}</p>
            <p>{(item as Book).ISBN}</p>
            <p>{(item as Book).Pages}</p>
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
      case "Villain":
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
    <>
      <div className="mx-10 gap-4 flex flex-col ">
        <select className="block appearance-none w-1/6 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>--Seleccione una opción--</option>
          <option>Libros</option>
          <option>Cuentos</option>
        </select>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6">
          Agregar nuevo libro
        </button>
      </div>
      <div className="m-10 overflow-y-scroll h-96">
        <article className="container grid grid-cols-3 gap-5 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="container flex-column p-5 border border-orange-500"
            >
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
        </article>
      </div>
    </>
  );
}

export default List;
