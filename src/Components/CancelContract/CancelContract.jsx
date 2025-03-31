import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SideBars from "../SideBars/SideBars";

export default function CancelContract() {
  const location = useLocation();
  const navigate = useNavigate();
  const { contract } = location.state || {};
  const [loading, setLoading] = useState(false);

  const handleCancel = async () => {
    if (!contract) return;
    setLoading(true);
    try {
      await fetch(`/api/contracts/${contract.id}/cancel`, { method: 'POST' });
      alert("Hợp đồng đã được hủy thành công.");
      navigate("/contract");
    } catch (err) {
      console.error("Lỗi huỷ hợp đồng:", err);
      alert("Đã xảy ra lỗi khi huỷ hợp đồng.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SideBars />
      <div className="p-6">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Hủy Hợp Đồng
          </h2>
          <div className="mb-4">
            <p className="text-lg">
              <span className="font-semibold">Số phòng:</span> {contract?.room}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Ngày bắt đầu:</span> {contract?.startDate}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Ngày kết thúc:</span> {contract?.endDate}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Giá thuê:</span> {contract?.rent?.toLocaleString()} đ
            </p>
          </div>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-6">
            <p>
              <span className="font-semibold">Lưu ý:</span> Bạn cần thanh toán tiền bồi thường trước khi hủy hợp đồng.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleCancel}
              disabled={loading}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? "Đang huỷ..." : "Thanh toán & Huỷ hợp đồng"}
            </button>
            <Link to='/contract'>
              <button className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
                Quay lại
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}