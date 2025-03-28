import { useState } from "react";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Khi chọn ảnh từ máy tính
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Gửi ảnh lên API (hoặc API giả MSW)
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Vui lòng chọn một ảnh để tải lên!");
      return;
    }

    setUploading(true);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`Lỗi tải ảnh: ${response.status}`);
      }

      const data = await response.json();
      setImageUrl(data.imageUrl); // Hiển thị ảnh đã tải lên
    } catch (error) {
      console.error("Lỗi khi tải ảnh:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tải ảnh lên</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2" />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
        {uploading ? "Đang tải..." : "Tải ảnh lên"}
      </button>

      {/* Hiển thị ảnh sau khi tải lên */}
      {imageUrl && (
        <div className="mt-4">
          <p>Ảnh đã tải lên:</p>
          <img src={imageUrl} alt="Ảnh tải lên" className="w-40 h-40 object-cover rounded" />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
