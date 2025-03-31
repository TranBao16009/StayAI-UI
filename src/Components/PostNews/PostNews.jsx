import React, { useEffect, useState } from 'react';
import SideBar from "../SideBar/SideBar";

const PostNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: null });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch('/api/news');
      const data = await res.json();
      setNewsList(data);
    } catch (err) {
      console.error("Lỗi tải tin tức:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPost({ ...newPost, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', newPost.title);
      formData.append('content', newPost.content);
      if (newPost.image) formData.append('image', newPost.image);

      const res = await fetch('/api/news', {
        method: 'POST',
        body: formData
      });

      const created = await res.json();
      setNewsList([...newsList, { ...created, preview: preview }]);
      setNewPost({ title: '', content: '', image: null });
      setPreview(null);
    } catch (err) {
      console.error("Lỗi đăng tin:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/news/${id}`, { method: 'DELETE' });
      setNewsList(newsList.filter(n => n.id !== id));
    } catch (err) {
      console.error("Lỗi xoá tin:", err);
    }
  };

  return (
    <>
      <SideBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">📰 Đăng & Quản lý Tin tức</h1>

        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">📝 Đăng tin mới</h2>
          <input
            type="text"
            name="title"
            placeholder="Tiêu đề"
            value={newPost.title}
            onChange={handleInputChange}
            className="w-full border p-2 mb-2"
          />
          <textarea
            name="content"
            placeholder="Nội dung"
            value={newPost.content}
            onChange={handleInputChange}
            className="w-full border p-2 mb-2"
            rows="4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-2"
          />
          {preview && (
            <img src={preview} alt="preview" className="w-48 h-32 object-cover mb-4" />
          )}
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Đăng tin</button>
        </div>

        <div className="space-y-4">
          {newsList.map((news) => (
            <div key={news.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">{news.title}</h3>
              <p>{news.content}</p>
              {news.preview && <img src={news.preview} alt="Hình ảnh" className="w-48 mt-2 rounded" />}
              <button className="mt-2 text-sm text-red-600" onClick={() => handleDelete(news.id)}>Xoá</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostNews;
