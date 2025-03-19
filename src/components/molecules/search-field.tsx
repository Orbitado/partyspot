"use client";
import { ChevronDown, Calendar, Search, MapPin } from "lucide-react";
import { useState } from "react";
import SearchInput from "../atoms/search-input";

export default function SearchField() {
  const [activity, setActivity] = useState("Solo estoy viendo");
  const [location, setLocation] = useState("En cualquier lugar");
  const [date, setDate] = useState("En cualquier momento");

  return (
    <form className="flex w-full items-center rounded-lg border border-gray-100 bg-white p-1 text-black shadow-md">
      <div className="flex flex-grow divide-x divide-gray-300">
        <SearchInput
          label="¿Qué estás planeando?"
          placeholder="Busca una actividad"
          value={activity}
          onChange={setActivity}
          icon={<ChevronDown className="h-4 w-4 text-gray-500" />}
        />

        <SearchInput
          label="¿Dónde?"
          placeholder="Ingresa un lugar"
          value={location}
          onChange={setLocation}
          icon={<MapPin className="h-4 w-4 text-gray-500" />}
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
        className="bg-primary hover:bg-primary/90 mx-4 flex items-center gap-2 rounded-md px-5 py-3 shadow-sm transition-all duration-200"
      >
        <Search className="h-4 w-4 text-white" />
        <span className="text-md font-semibold text-white">Buscar</span>
      </button>
    </form>
  );
}
