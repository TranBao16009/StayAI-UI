import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomById } from "../../Assets/library"; // Kiểm tra đường dẫn chính xác

const DEFAULT_IMAGE = "https://via.placeholder.com/600x400?text=No+Image";

const RoomDetail = () => {
  const { roomID } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(DEFAULT_IMAGE);

  useEffect(() => {
    const roomData = getRoomById(Number(roomID)); // Chuyển roomID thành số
    if (!roomData) {
      console.error("Phòng không tồn tại.");
      return;
    }
    setRoom(roomData);
    setMainImage(roomData.images?.[0] || DEFAULT_IMAGE);
  }, [roomID]);

  if (!room) return <p className="text-center text-lg">Đang tải thông tin phòng...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">{room.title}</h1>
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
    </div>
  );
};

export default RoomDetail;
