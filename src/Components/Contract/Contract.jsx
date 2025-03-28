// import { useState, useEffect } from "react";
// import SideBar from "../SideBar/SideBar";
// import { FaClock, FaCheckCircle, FaTimesCircle, FaSearch, FaPlus } from "react-icons/fa";

// const Contract = () => {
//   const [contracts, setContracts] = useState([
//     { id: 1, room: "101", startDate: "2024-01-01", endDate: "2025-01-01", rent: "3.000.000 ", status: "Đang hiệu lực" },
//     { id: 2, room: "202", startDate: "2023-06-01", endDate: "2024-06-01", rent: "3.500.000 ", status: "Sắp hết hạn" },
//   ]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newContract, setNewContract] = useState({
//     room: "",
//     startDate: "",
//     endDate: "",
//     rent: "",
//     status: "Đang hiệu lực",
//   });
//   const [editingContract, setEditingContract] = useState(null);

//   useEffect(() => {
//     if (editingContract) {
//       setNewContract(editingContract);
//     }
//   }, [editingContract]);

//   const handleAddContract = () => {
//     if (editingContract) {
//       const updatedContracts = contracts.map((contract) =>
//         contract.id === editingContract.id ? { ...editingContract, ...newContract } : contract
//       );
//       setContracts(updatedContracts);
//       setEditingContract(null);
//     } else {
//       const newContractData = {
//         id: contracts.length + 1,
//         ...newContract,
//       };
//       setContracts([...contracts, newContractData]);
//     }
//     setShowAddForm(false);
//     setNewContract({
//       room: "",
//       startDate: "",
//       endDate: "",
//       rent: "",
//       status: "Đang hiệu lực",
//     });
//   };

//   const handleDeleteContract = (id) => {
//     const updatedContracts = contracts.filter((contract) => contract.id !== id);
//     setContracts(updatedContracts);
//   };

//   const handleEditContract = (contract) => {
//     setEditingContract(contract);
//     setShowAddForm(true);
//   };

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case "Đang hiệu lực":
//         return "text-green-600";
//       case "Sắp hết hạn":
//         return "text-yellow-600";
//       case "Hết hạn":
//         return "text-red-600";
//       default:
//         return "text-gray-600";
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "Đang hiệu lực":
//         return <FaCheckCircle className="ml-1" />;
//       case "Sắp hết hạn":
//         return <FaClock className="ml-1" />;
//       case "Hết hạn":
//         return <FaTimesCircle className="ml-1" />;
//       default:
//         return null;
//     }
//   };

//   const filteredContracts = contracts.filter((contract) =>
//     contract.room.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <SideBar />
//       <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Quản Lý Hợp Đồng</h2>

//         <div className="mb-4 flex justify-between items-center">
//           <div className="relative w-1/3">
//             <FaSearch className="absolute left-3 top-3 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Tìm kiếm hợp đồng..."
//               className="border p-2 pl-10 rounded w-full"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <button
//             className="bg-blue-500 text-white px-3 py-2 rounded flex items-center"
//             onClick={() => {
//               setShowAddForm(true);
//               setEditingContract(null);
//             }}
//           >
//             <FaPlus className="mr-2" /> Thêm Hợp Đồng
//           </button>
//         </div>

//         {showAddForm && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
//               <h3 className="text-xl font-bold mb-4">{editingContract ? "Sửa Hợp Đồng" : "Thêm Hợp Đồng"}</h3>
//               <input
//                 type="text"
//                 placeholder="Số phòng"
//                 className="border p-2 rounded w-full mb-2"
//                 value={newContract.room}
//                 onChange={(e) => setNewContract({ ...newContract, room: e.target.value })}
//               />
//               <input
//                 type="date"
//                 className="border p-2 rounded w-full mb-2"
//                 value={newContract.startDate}
//                 onChange={(e) => setNewContract({ ...newContract, startDate: e.target.value })}
//               />
//               <input
//                 type="date"
//                 className="border p-2 rounded w-full mb-2"
//                 value={newContract.endDate}
//                 onChange={(e) => setNewContract({ ...newContract, endDate: e.target.value })}
//               />
//               <input
//                 type="text"
//                 placeholder="Giá thuê"
//                 className="border p-2 rounded w-full mb-2"
//                 value={newContract.rent}
//                 onChange={(e) => setNewContract({ ...newContract, rent: e.target.value })}
//               />
//               <button
//                 className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
//                 onClick={handleAddContract}
//               >
//                 Lưu
//               </button>
//               <button
//                 className="mt-4 ml-2 bg-red-500 text-white px-4 py-2 rounded"
//                 onClick={() => setShowAddForm(false)}
//               >
//                 Hủy
//               </button>
//             </div>
//           </div>
//         )}

//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Phòng</th>
//               <th className="border p-2">Ngày Bắt Đầu</th>
//               <th className="border p-2">Ngày Kết Thúc</th>
//               <th className="border p-2">Giá Thuê</th>
//               <th className="border p-2">Trạng Thái</th>
//               <th className="border p-2">Hành Động</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredContracts.map((contract) => (
//               <tr key={contract.id} className="text-center">
//                 <td className="border p-2">{contract.room}</td>
//                 <td className="border p-2">{contract.startDate}</td>
//                 <td className="border p-2">{contract.endDate}</td>
//                 <td className="border p-2">{contract.rent}</td>
//                 <td className={`border p-2 ${getStatusStyle(contract.status)}`}>
//                   {contract.status} {getStatusIcon(contract.status)}
//                 </td>
//                 <td className="border p-2">
//                   <button
//                     className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
//                     onClick={() => handleEditContract(contract)}
//                   >
//                     Sửa
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     onClick={() => handleDeleteContract(contract.id)}
//                   >
//                     Xóa
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Contract;