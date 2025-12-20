"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

export default function NpxCard() {
  const [copied, setCopied] = useState(false);

  const command = "npx gauravxdev";

  const copyCommand = async () => {
    try {
      // Modern clipboard API
      await navigator.clipboard.writeText(command);
    } catch {
      // Fallback (VERY IMPORTANT)
      const textarea = document.createElement("textarea");
      textarea.value = command;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full max-w-[320px]
                 bg-[#2f2f2f] border border-white/10
                 rounded-xl px-4 py-2
                 font-mono text-sm
                 flex items-center justify-between"
    >
      {/* Command */}
      <div className="flex items-center gap-2">
        <span className="text-accent text-lg">$</span>
        <span className="text-white text-lg">{command}</span>
      </div>

      {/* Copy Button */}
      <button
        onClick={copyCommand}
        className={`p-1 rounded-md transition
          ${
            copied
              ? "bg-transparent text-accent text-xl"
              : "text-accent text-xl hover:bg-white/10"
          }
        `}
        aria-label="Copy npx command"
      >
        {copied ? <FaCheck /> : <FaCopy />}
      </button>
    </motion.div>
  );
}
