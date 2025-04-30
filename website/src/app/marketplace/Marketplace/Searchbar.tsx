"use client";

import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex items-center bg-white border border-gray-300 rounded-full overflow-hidden shadow-md focus-within:border-[var(--faun-light)] transition-all"
    >
      <input
        type="text"
        placeholder="Search for jewelry..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-5 py-2 text-gray-700 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-[var(--faun-light)] hover:bg-[var(--faun-dark)] text-white px-4 py-2 transition-all"
      >
        <i className="fa-solid fa-search"></i>
      </button>
    </form>
  );
};
export default SearchBar;
