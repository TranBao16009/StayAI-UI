import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api";
import UploadImage from "../UploadImage/UploadImage"; // Import UploadImage

const DEFAULT_IMAGE = "https://via.placeholder.com/600x400?text=No+Image";

const RoomDetail = () => {
  const { roomID } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(DEFAULT_IMAGE);

  useEffect(() => {
    fetchData(`/api/room/${roomID}`)
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          throw new Error("Phòng không tồn tại.");
        }
        setRoom(data);
        setMainImage(data.images?.[0] || DEFAULT_IMAGE);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu phòng:", error);
      });
  }, [roomID]);

  const handleImageUpload = (newImageUrl) => {
    setRoom((prevRoom) => ({
      ...prevRoom,
      images: [...(prevRoom?.images || []), newImageUrl],
    }));
    setMainImage(newImageUrl);
  };

  if (!room) return <p className="text-center text-lg">Đang tải thông tin phòng...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">{room.title}</h1>

      {/* Hình ảnh */}
      <div>
        <img src={mainImage} alt="Phòng trọ" className="w-full h-96 object-cover rounded-lg shadow-md" />
        <div className="flex mt-2 space-x-2">
          {room.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hình ảnh ${index + 1}`}
              className="w-24 h-16 object-cover rounded-md cursor-pointer hover:opacity-80"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Tải ảnh lên */}
      <UploadImage onUpload={handleImageUpload} />
    </div>
  );
};

export default RoomDetail;
