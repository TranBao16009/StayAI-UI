// import image from '../Assets/phongtro1.jpg'
const roomsData = [
    {
      id: 1,
      name: "Phòng trọ A",
      description: "Mô tả phòng trọ A",
      imageUrl: "phongtro1.jpg"
    },
    {
      id: 2,
      name: "Phòng trọ B",
      description: "Mô tả phòng trọ B",
      imageUrl: "phongtro2.png"
    },
    {
      id: 3,
      name: "Phòng trọ C",
      description: "Mô tả phòng trọ C",
      imageUrl: "phongtro3.jpg"
    },
    {
      id: 4,
      name: "Phòng trọ D",
      description: "Mô tả phòng trọ D",
      imageUrl: "phongtro4.jpg"
    },
    {
      id: 5,
      name: "Phòng trọ E",
      description: "Mô tả phòng trọ E",
      imageUrl: "phongtro5.jpg"
    }
  ];
   const roomsID = [
    {
      id: 1,
      title: "Phòng trọ cao cấp Quận 1, full nội thất",
      price: "6 triệu/tháng",
      area: "25m²",
      location: "12 Quang Trung, P.12, Q.Gò Vấp, TP.HCM",
      description: "Phòng đẹp, đầy đủ tiện nghi, gần trung tâm, có bảo vệ 24/7.",
      images: [
        "https://via.placeholder.com/600x400?text=Hinh+1",
        "https://via.placeholder.com/600x400?text=Hinh+2",
        "https://via.placeholder.com/600x400?text=Hinh+3",
      ],
      owner: { name: "Anh Tuấn", phone: "0707 320 581" },
    },
    {
      id: 2,
      title: "Phòng trọ giá rẻ Quận 7",
      price: "3.5 triệu/tháng",
      area: "20m²",
      location: "99 Nguyễn Văn Linh, Q.7, TP.HCM",
      description: "Phòng mới, có cửa sổ lớn, gần trường học, an ninh tốt.",
      images: [
        "https://via.placeholder.com/600x400?text=Hinh+4",
        "https://via.placeholder.com/600x400?text=Hinh+5",
        "https://via.placeholder.com/600x400?text=Hinh+6",
      ],
      owner: { name: "Chị Hằng", phone: "0987 654 321" },
    },
  ];
  export const getRoomById = (id) => {
    return roomsID.find((room) => room.id == id); 
  };
  
  export { roomsData, roomsID};

 
  