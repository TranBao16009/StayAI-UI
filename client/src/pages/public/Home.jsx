import { useState } from "react";
import { FaComments } from "react-icons/fa"; // Biểu tượng chat
import { HomeSection } from "~/components/posts";
import { useAppStore } from "~/store";
import axios from "axios"; // Axios để gửi yêu cầu HTTP

const Home = () => {
  const { catalogs } = useAppStore();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]); // Lưu trữ các tin nhắn
  const [userMessage, setUserMessage] = useState(""); // Tin nhắn người dùng

  // Hàm xử lý gửi tin nhắn và gọi API GPT
  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      const newMessage = { sender: "user", text: userMessage };
      setMessages((prev) => [...prev, newMessage]);
      setUserMessage(""); // Xóa tin nhắn sau khi gửi

      try {
        // Gọi API GPT để lấy phản hồi
        const aiResponse = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
            max_tokens: 800,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer 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`, // Thay bằng API Key của bạn
            },
          }
        );

        // Lấy kết quả từ GPT và thêm vào chatbox
        const aiMessage = aiResponse.data.choices[0].message.content;
        const botMessage = { sender: "bot", text: aiMessage };
        setMessages((prev) => [...prev, botMessage]); // Cập nhật tin nhắn từ người dùng và chatbot
      } catch (error) {
        console.error("Error sending message to GPT", error);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Đã có lỗi xảy ra. Vui lòng thử lại!" },
        ]);
      }
    }
  };

  return (
    <main className="w-full bg-white lg:w-main px-4 py-4 mx-auto">
      <h1 className="text-3xl font-semibold mt-3">
        {catalogs?.find((el) => el.slug === "trang-chu")?.text}
      </h1>
      <span className="text-base line-clamp-2 block my-4">
        {catalogs?.find((el) => el.slug === "trang-chu")?.description}
      </span>
      <HomeSection filters={{ sort: "-star" }} title="Tin đăng nổi bật" />
      <HomeSection filters={{ sort: "-createdAt" }} title="Tin đăng mới nhất" />

      {/* Icon Box Chat */}
      <div
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-10 right-10 bg-blue-500 text-white p-4 rounded-full cursor-pointer shadow-lg"
      >
        <FaComments size={24} />
      </div>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-10 w-[350px] h-[450px] bg-white shadow-lg rounded-lg p-4">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center mb-4">
              <img
                src="https://i.pinimg.com/originals/21/a1/aa/21a1aa2537400d0232efd93e108fd953.gif" // Thay thế với ảnh avatar chatbot của bạn
                alt="StayAI Chat"
                className="w-14 h-14 rounded-full mr-2"
              />
              <span className="text-lg font-semibold">StayAI Chat</span>
            </div>

            {/* Tin nhắn */}
            <div className="flex-1 overflow-y-auto mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`inline-block max-w-[70%] px-3 py-2 rounded-md ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center mt-auto">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md"
                placeholder="Nhập tin nhắn..."
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 p-2 bg-blue-500 text-white rounded-md"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
