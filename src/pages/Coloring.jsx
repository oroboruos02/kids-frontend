import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate de React Router

const Coloring = () => {
  const templates = [
    { id: 1, name: 'Plantilla 1', img: '/colorear.jpg', pdf: '/pdf/colorear.pdf' },
    { id: 2, name: 'Plantilla 2', img: '/colorear1.jpg', pdf: '/pdf/colorear1.pdf' },
    { id: 3, name: 'Plantilla 3', img: '/colorear2.jpg', pdf: '/pdf/colorear2.pdf' },
    { id: 4, name: 'Plantilla 4', img: '/colorear3.jpg', pdf: '/pdf/colorear3.pdf' },
    { id: 5, name: 'Plantilla 1', img: '/colorear4.jpg', pdf: '/pdf/colorear4.pdf' },
    { id: 6, name: 'Plantilla 2', img: '/colorear5.jpg', pdf: '/pdf/colorear5.pdf' },
    { id: 7, name: 'Plantilla 3', img: '/colorear6.jpg', pdf: '/pdf/colorear6.pdf' },
    { id: 8, name: 'Plantilla 4', img: '/colorear7.jpg', pdf: '/pdf/colorear7.pdf' },
    { id: 9, name: 'Plantilla 1', img: '/colorear8.jpg', pdf: '/pdf/colorear8.pdf' },
    { id: 10, name: 'Plantilla 2', img: '/colorear9.jpg', pdf: '/pdf/colorear9.pdf' },
    { id: 11, name: 'Plantilla 3', img: '/colorear0.jpg', pdf: '/pdf/colorear10.pdf' },
  ];

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navegar a la página anterior
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header className="bg-white p-4 flex flex-col sm:flex-row justify-between items-center border-b border-gray-300">
        <img src="https://placehold.co/100x40" alt="PBS Kids Logo" className="h-10 mb-4 sm:mb-0" />
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-blue-500">APPS</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">SHOP</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">PARENTS</a>
        </nav>
      </header>

      <main className="text-center bg-cover bg-center py-8" style={{ backgroundImage: 'url(https://placehold.co/1200x800)' }}>
        <h1 className="text-3xl sm:text-4xl text-pink-500 mb-4">Jelly, Ben & Pogo</h1>
        <p className="text-lg sm:text-xl text-gray-800 mb-8 px-4 sm:px-0">
          Creative problem-solving is fun with "Lyla in the Loop," a new show for kids ages 4-8. 
          <a href="#" className="text-blue-500">Learn More</a>
        </p>
        {/* Botones de JUEGOS y VIDEOS */}
        <Link to="/game">
          <button className="bg-pink-500 text-white py-2 px-4 rounded font-comic mb-4">
            🎮 GAMES
          </button>
        </Link>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 sm:px-0">
          {templates.map((template) => (
            <div key={template.id} className="bg-white p-4 rounded shadow transform transition-transform duration-300 hover:scale-105">
              <a href={template.pdf} target="_blank" rel="noopener noreferrer">
                <img src={template.img} alt={`Plantilla para colorear ${template.id}`} className="w-full h-auto object-cover rounded" />
              </a>
              <p className="text-gray-800 mt-2">{template.name}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Botón para volver atrás */}
      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-xl font-comic py-2 px-8 mt-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
      >
        ⬅️ Volver Atrás
      </button>

      <footer className="text-center py-4 pt-6 bg-green-200">
        <div className='text-black'>
          Política de privacidad  | Términos de uso | pbskids.org © 2024
        </div> 
      </footer>
    </div>
  );
};

export default Coloring;
