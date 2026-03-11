"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const hideTooltip = setTimeout(() => setTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTooltip);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      {tooltip && (
        <div className="animate-fade-in relative bg-white text-gray-900 text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl max-w-[200px]">
          <button
            onClick={() => setTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <X size={10} />
          </button>
          Precisa de ajuda? Fale com a gente!
          {/* Triangle */}
          <div className="absolute right-4 -bottom-1.5 w-3 h-3 bg-white rotate-45" />
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/5521988514602"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1DA851] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle
          size={26}
          className="text-white fill-white"
        />
      </a>
    </div>
  );
}
