"use client";
import { ChevronDown, Calendar, Search } from "lucide-react";
import { useState } from "react";
import SearchInput from "../atoms/search-input";

export default function SearchField() {
  const [activity, setActivity] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  return (
    <form className="flex w-full items-center rounded-lg border border-gray-100 bg-white p-1 text-black shadow-md">
      <div className="flex flex-grow divide-x divide-gray-300">
        <SearchInput
          label="¿Qué estás planeando?"
          placeholder="Escribe o Selecciona"
          value={activity}
          onChange={setActivity}
          icon={<ChevronDown className="h-4 w-4 text-gray-500" />}
        />

        <SearchInput
          label="¿Dónde?"
          placeholder="Escribe un lugar"
          value={location}
          onChange={setLocation}
        />

        <SearchInput
          label="¿Cuándo?"
          placeholder="Selecciona una fecha"
          value={date}
          onChange={setDate}
          icon={<Calendar className="h-4 w-4 text-gray-500" />}
        />
      </div>

      <button
        aria-label="Buscar"
        className="ml-2 rounded-full bg-gray-100 p-2 shadow-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md"
      >
        <Search />
      </button>
    </form>
  );
}
