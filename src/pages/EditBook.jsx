import React from "react";
import http from "../http";
import { useParams } from "react-router-dom";

function AddBook() {
  const params = useParams();
  const [name, setName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [publisher, setPublisher] = React.useState("");
  const [publishDate, setPublishDate] = React.useState("");
  const [isbn, setIsbn] = React.useState("");
  const [total, setTotal] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // Get data fist time for default value
  React.useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = () => {
    http.get(`/books/${params?.id}`).then(({ data }) => {
      setName(data?.name);
      setAuthor(data?.author);
      setPublisher(data?.publisher);
      setPublishDate(data?.publishDate);
      setIsbn(data?.isbn);
      setTotal(data?.total);
    });
  };

  // Handle storing data to backend
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await http.patch(`/books/${params?.id}`, {
        name,
        author,
        publisher,
        publishDate: publishDate,
        isbn,
        total,
      });

      setIsLoading(true);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex gap-x-5 w-full p-5 bg-slate-900 text-white">
        <a href="/book">Back</a>
      </div>
      <div className="flex flex-column justify-center items-center ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-10 w-[800px] gap-6">
            <p className="text-2xl">Edit book</p>
            <div className="flex flex-col gap-2">
              <label
                for="namabuku"
                className="text-sm font-medium text-gray-900"
              >
                Nama Buku
              </label>
              <input
                type="text"
                className="border-solid border-2 py-2 px-4"
                placeholder="Nama Buku"
                name="namabuku"
                id="namabuku"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label for="author" className="text-sm font-medium text-gray-900">
                Author
              </label>
              <input
                type="text"
                className="border-solid border-2 py-2 px-4"
                placeholder="Tulis nama author disini"
                name="author"
                id="author"
                defaultValue={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="publisher"
                className="text-sm font-medium text-gray-900"
              >
                Publisher
              </label>
              <input
                type="text"
                className="border-solid border-2 py-2 px-4"
                placeholder="Tulis nama publisher disini"
                name="publisher"
                id="publisher"
                defaultValue={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="tahunpublish"
                className="text-sm font-medium text-gray-900"
              >
                Tahun Publish
              </label>
              <input
                type="date"
                className="border-solid border-2 py-2 px-4"
                name="tahunpublish"
                id="tahunpublish"
                defaultValue={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label for="isbn" className="text-sm font-medium text-gray-900">
                ISBN
              </label>
              <input
                type="text"
                className="border-solid border-2 py-2 px-4"
                placeholder="Tulis isbn disini"
                name="isbn"
                id="isbn"
                defaultValue={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="total_copies"
                className="text-sm font-medium text-gray-900"
              >
                Total Copy Buku
              </label>
              <input
                type="number"
                className="border-solid border-2 py-2 px-4"
                placeholder="Tulis total buku disini"
                name="total_copies"
                id="total_copies"
                defaultValue={total}
                onChange={(e) => setTotal(e.target.value)}
              />
            </div>
            <button
              className="w-full py-4 bg-slate-800 rounded-lg text-white"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Save Buku"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
