import React from 'react';

const Header = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-lg font-bold">Clínica Imbanaco</div>
          <div className="space-x-4">
            <a href="#especialidades" className="text-gray-500 hover:text-gray-900 font-medium">Especialidades</a>
            <a href="#servicios" className="text-gray-500 hover:text-gray-900 font-medium">Servicios</a>
            <a href="#pacientes" className="text-gray-500 hover:text-gray-900 font-medium">Pacientes</a>
            <div className="relative">
              <button
                className="text-gray-500 hover:text-gray-900 font-medium inline-flex items-center"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Noticias y Novedades
                <svg className="ml-2 -mr-1 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 7l-4-4m0 0l-4 4" />
                </svg>
              </button>
              <div className="hidden dropdown absolute z-10 w-auto bg-white shadow-md mt-3">
                <ul className="text-gray-500 dropdown-menu">
                  <li className="py-2 px-4">
                    <a href="#noticias" className="block hover:bg-gray-100">Noticias</a>
                  </li>
                  <li className="py-2 px-4">
                    <a href="#eventos" className="block hover:bg-gray-100">Eventos</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#nosotros" className="text-gray-500 hover:text-gray-900 font-medium">Nosotros</a>
            <a href="#investigacion" className="text-gray-500 hover:text-gray-900 font-medium">Investigación</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
