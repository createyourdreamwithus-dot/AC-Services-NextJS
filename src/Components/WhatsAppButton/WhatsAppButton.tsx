import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9962860347" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 z-50 p-4 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={20} className="text-white" />
    </a>
  );
}
