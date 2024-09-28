import React from "react";

const ChatWindow = () => {
  return (
    <div>
      <div className="flex gap-5">
        <img
          src=""
          alt=""
          className="w-[60px] h-[60px] rounded-[50%] object-cover"
        />
        <div>
          <span>Henry Jheng</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div>chat center</div>
      <div>
        <div>
          icon
          <input type="text" placeholder="請輸入訊息..." />
          <div>emoji</div>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
