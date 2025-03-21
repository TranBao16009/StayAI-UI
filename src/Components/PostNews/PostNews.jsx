import { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";

const PostNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tin đã đăng:", { title, content });
  };

  return (
    <>
        <SideBar/>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Đăng Tin Mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Tiêu đề</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Nội dung</label>
          <textarea
            className="w-full border p-2 rounded"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Đăng Tin
        </button>
      </form>
    </div>
    </>
  );
};

export default PostNews;
