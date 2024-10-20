import React from 'react';
import { Home, Wrench, Zap, Droplet, Wind, Waves } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-12 h-12 text-blue-600" />,
    title: 'Reformas',
    description: 'Transformamos espacios para mejorar su funcionalidad y estética, adaptándonos a sus necesidades y presupuesto.'
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    title: 'Instalaciones Eléctricas de Baja Tensión',
    description: 'Realizamos instalaciones eléctricas seguras y eficientes, cumpliendo con todas las normativas vigentes.'
  },
  {
    icon: <Droplet className="w-12 h-12 text-blue-400" />,
    title: 'Fontanería',
    description: 'Ofrecemos soluciones para todo tipo de problemas de fontanería, desde reparaciones hasta instalaciones completas.'
  },
  {
    icon: <Wind className="w-12 h-12 text-green-500" />,
    title: 'Climatización y Aires Acondicionados',
    description: 'Instalamos y mantenemos sistemas de climatización para garantizar el confort en su hogar o negocio.'
  },
  {
    icon: <Waves className="w-12 h-12 text-cyan-500" />,
    title: 'Mantenimiento de Piscinas',
    description: 'Cuidamos de su piscina para que pueda disfrutarla en perfectas condiciones durante todo el año.'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Wrench className="mr-2" /> Instalaciones Z.M.
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#inicio" className="hover:underline">Inicio</a></li>
              <li><a href="#servicios" className="hover:underline">Servicios</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Bienvenidos a Instalaciones Z.M.</h2>
            <p className="text-xl mb-8">Expertos en reformas, instalaciones y mantenimiento</p>
            <a href="#contacto" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300">Contáctanos</a>
          </div>
        </section>

        <section id="servicios" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
              <form>
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre</label>
                  <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="mensaje" className="block text-gray-700 font-bold mb-2">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Enviar</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Instalaciones Z.M. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;