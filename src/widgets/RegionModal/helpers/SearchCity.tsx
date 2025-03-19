import { Search } from "lucide-react";

export default function SearchCity({ setSearchedCity }) {
  return (
    <div className="flex mt-8 mb-5">
      <span className="relative top-2 left-6 text-gray-500">
        <Search size={18} />
      </span>
      <input
        type="text"
        className="w-80 px-8 py-1 text-lg focus:border-none focus:outline-1 focus:outline-orange-500 rounded-lg border-1 font-medium placeholder:text-gray-500 text-gray-700 border-gray-300"
        placeholder="Поиск..."
        onChange={(e) => setSearchedCity(e.target.value.trim().toLowerCase())}
      />
    </div>
  );
}
