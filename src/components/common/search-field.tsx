// TODO: Refactor this component with zod and react-hook-form then remove the use client
"use client";
import { ChevronDown, Calendar, Search, MapPin } from "lucide-react";
import { useState } from "react";
import SearchInput from "./search-input";

export default function SearchField() {
  const [activity, setActivity] = useState("Solo estoy viendo");
  const [location, setLocation] = useState("En cualquier lugar");
  const [date, setDate] = useState("En cualquier momento");

  return (
    <form
      className="flex w-full flex-col items-center rounded-lg border border-gray-100 bg-white p-1 text-black shadow-md sm:flex-row"
      role="search"
      aria-label="Búsqueda de lugares"
    >
      <div className="flex w-full flex-grow flex-col divide-y divide-gray-300 sm:divide-x sm:divide-y-0 lg:flex-row">
        <SearchInput
          id="activity-search"
          label="¿Qué estás planeando?"
          placeholder="Busca una actividad"
          value={activity}
          onChange={setActivity}
          icon={<ChevronDown className="h-4 w-4 text-gray-500" />}
        />

        <SearchInput
          id="location-search"
          label="¿Dónde?"
          placeholder="Ingresa un lugar"
          value={location}
          onChange={setLocation}
          icon={<MapPin className="h-4 w-4 text-gray-500" />}
        />

        <SearchInput
          id="date-search"
          label="¿Cuándo?"
          placeholder="Selecciona una fecha"
          value={date}
          onChange={setDate}
          icon={<Calendar className="h-4 w-4 text-gray-500" />}
        />
      </div>

      <button
        type="submit"
        aria-label="Buscar lugares"
        className="bg-primary hover:bg-primary/90 mx-auto mt-2 flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 shadow-sm transition-all duration-200 sm:mx-4 sm:mt-0 sm:w-auto"
      >
        <Search className="h-4 w-4 text-white" aria-hidden="true" />
        <span className="text-md font-semibold text-white">Buscar</span>
      </button>
    </form>
  );
}
