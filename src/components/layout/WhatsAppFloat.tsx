"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { getClientProfile, createWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    if (isOpen) {
      const saved = getClientProfile();
      if (saved.name) setClientName(saved.name);
    }
  }, [isOpen]);

  const directChatUrl = createWhatsAppLink({
    name: clientName,
    message: customMsg || "Hello Izzy Immigration, I would like a confidential sovereign advisory consultation.",
    type: "consultation",
  });

  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Modal */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-navy-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-navy-900" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-heading">Izzy Advisory Desk</h4>
                <p className="text-[11px] text-emerald-400">Typically replies in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-full"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-surface-100 text-xs text-body space-y-3">
            <div className="p-3 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <p className="font-semibold text-navy-900 mb-1">
                Hello! 👋
              </p>
              <p>
                Welcome to Izzy Immigration. How can our sovereign advisory team assist your family today?
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-navy-900 mb-1">
                Your message:
              </label>
              <textarea
                rows={2}
                placeholder="I am interested in Caribbean CBI / Golden Visas..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-gold-500 bg-white"
              />
            </div>

            <a
              href={directChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Conversation</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
