import React, { useState, useRef, ChangeEvent } from 'react';
import { Paperclip, Image, File, BarChart2, Wallet, Send } from 'lucide-react';

// تعريف أنواع الخيارات في القائمة
interface MenuOptionProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const MenuOption: React.FC<MenuOptionProps> = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-4 w-full p-3 hover:bg-[#2c2c2c] transition-colors rounded-lg text-[14px] text-white"
  >
    <span className="flex-shrink-0">{icon}</span>
    <span className="font-medium">{label}</span>
  </button>
);

const ChatInput: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // دالة التحكم في ارتفاع النص التلقائي
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
    
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="relative flex items-end gap-2 p-3 bg-[#212121] min-h-[60px] w-full max-w-2xl mx-auto font-sans">
      
      {/* Container الرئيسي للحقل */}
      <div className="relative flex-1 bg-[#2c2c2c] rounded-2xl flex items-end p-1.5 shadow-lg border border-transparent focus-within:border-[#8774e1]/50 transition-all">
        
        {/* زر المرفقات */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2.5 rounded-full transition-all duration-200 ${isOpen ? 'text-[#8774e1] bg-[#8774e1]/10' : 'text-gray-400 hover:bg-[#333]'}`}
        >
          <Paperclip size={24} className={isOpen ? "rotate-45 transition-transform" : ""} />
        </button>

        {/* القائمة المنبثقة */}
        {isOpen && (
          <>
            {/* طبقة شفافة لإغلاق القائمة عند الضغط خارجها */}
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            
            <div className="absolute bottom-[calc(100%+12px)] left-0 w-64 bg-[#212121] border border-[#333] rounded-2xl shadow-2xl overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-150 origin-bottom-left">
              <div className="flex flex-col p-1.5">
                <MenuOption icon={<Image size={20} className="text-blue-400" />} label="Photo or video" />
                <MenuOption icon={<File size={20} className="text-white" />} label="Document" />
              </div>
            </div>
          </>
        )}

        {/* حقل الإدخال */}
        <textarea
          ref={textAreaRef}
          rows={1}
          value={message}
          onChange={handleInputChange}
          placeholder="Write a message..."
          className="w-full bg-transparent border-none focus:ring-0 resize-none py-2.5 px-2 text-[16px] text-white outline-none placeholder-gray-500 max-h-48 overflow-y-auto"
        />
      </div>

      {/* زر الإرسال المستدير */}
      <button 
        disabled={!message.trim()}
        className={`p-3.5 rounded-full text-white transition-all transform active:scale-95 ${
          message.trim() ? 'bg-[#8774e1] hover:bg-[#7b68d6] cursor-pointer' : 'bg-gray-600 cursor-not-allowed opacity-50'
        }`}
      >
        <Send size={22} fill="currentColor" />
      </button>
    </div>
  );
};

export default ChatInput;