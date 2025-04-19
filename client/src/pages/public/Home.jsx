import { useEffect, useRef, useState } from "react";
import { FaComments } from "react-icons/fa";
import { HomeSection } from "~/components/posts";
import { useAppStore } from "~/store";
import { apiSuggestPost } from "~/apis/post";
import { Link } from "react-router-dom";
import pathname from "~/utilities/path"
import slugify from "slugify"

const Home = () => {
  const { catalogs } = useAppStore();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [suggestedPosts, setSuggestedPosts] = useState([]);
  const inputRef = useRef(null);

  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      const newMessage = { sender: "user", text: userMessage };
      setMessages((prev) => [...prev, newMessage]);
      setUserMessage("");
      setSuggestedPosts([]);

      try {
        const res = await apiSuggestPost({ message: userMessage });
        const aiMessage = res?.suggestion || "Không có gợi ý phù hợp.";
        const botMessage = { sender: "bot", text: aiMessage };
        setMessages((prev) => [...prev, botMessage]);
        setSuggestedPosts(res?.suggestedPosts || []);
      } catch (error) {
        console.error("Lỗi khi gọi API gợi ý:", error);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Đã có lỗi xảy ra. Vui lòng thử lại!" },
        ]);
      }
    }
  };

  useEffect(() => {
    if (isChatOpen && inputRef.current) inputRef.current.focus();
  }, [messages, isChatOpen]);

  const convertMarkdownToHTML = (markdown) => {
    let html = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
    html = html.replace(/_(.*?)_/g, "<em>$1</em>");
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">$1</a>');
    html = html.replace(/^- (.*)$/gm, "<li>• $1</li>");
    html = html.replace(/\n/g, "<br />");
    return html;
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

      {/* Nút mở chatbot */}
      <div
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-10 right-10 bg-blue-500 text-white p-4 rounded-full cursor-pointer shadow-lg z-50"
      >
        <FaComments size={24} />
      </div>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-10 w-[500px] h-[600px] bg-white shadow-2xl rounded-xl p-4 border border-gray-300 z-50 flex flex-col">
          <div className="flex items-center mb-3">
            <img
              src="https://i.pinimg.com/originals/21/a1/aa/21a1aa2537400d0232efd93e108fd953.gif"
              alt="StayAI Chat"
              className="w-14 h-14 rounded-full mr-3"
            />
            <span className="text-xl font-bold text-gray-700">StayAI Chat</span>
          </div>

          {/* Tin nhắn */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-sm ${msg.sender === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block max-w-[80%] px-4 py-2 rounded-lg shadow-sm ${msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"}`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: convertMarkdownToHTML(msg.text),
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Gợi ý bài đăng */}
            {suggestedPosts.length > 0 && (
              <div className="mt-3 space-y-3">
                {suggestedPosts.map((post, i) => (
                  <div
                    key={post.id}
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50"
                  >
                    <Link
                      to={`/${pathname.public.DETAIL_POST}/${post.id}/${slugify(post.title).toLocaleLowerCase()}`}
                      className="font-semibold cursor-pointer hover:underline text-lg text-[#007370] line-clamp-3"
                    >
                      {post.title}
                    </Link>
                    <div className="text-sm text-gray-500 mb-1">
                      {post.address}
                    </div>
                    <div className="text-sm text-gray-700 mb-1">
                      <strong>Giá:</strong> {post.rRooms.map((r) => r.price).join(", ")} VND
                    </div>
                    <div className="text-sm text-yellow-500 mb-1">
                      ⭐ {post.star || "Chưa có"}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center pt-3 mt-auto border-t border-gray-200">
            <input
              ref={inputRef}
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập tin nhắn..."
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;