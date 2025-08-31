import { FaPhoneAlt } from "react-icons/fa";

export function PhoneButton() {
  return (
    <a
      href="tel:+918667867082" 
      
      className="fixed bottom-5 right-5 z-50 p-4 rounded-full bg-blue-600 shadow-lg hover:bg-blue-700 transition"
      aria-label="Call us"
    >
      <FaPhoneAlt size={20} className="text-white" />
    </a>
  );
}
