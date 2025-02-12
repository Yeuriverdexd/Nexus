import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Code, Smartphone, User, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleServiceClick = (e: React.MouseEvent, service: string) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setIsLoginOpen(true);
    } else {
      // Si está autenticado, redirigir al formulario de cotización
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />

      {/* Hero Slider */}
      <div className="pt-16">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-[500px]"
        >
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" 
                alt="Software Development"
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Innovación Digital</h1>
                  <p className="text-xl">Transformando ideas en soluciones tecnológicas</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692" 
                alt="Team"
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Equipo Experto</h1>
                  <p className="text-xl">Profesionales apasionados por la tecnología</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Sobre Nosotros</h2>
              <p className="text-gray-600 mb-6">
                Somos una empresa líder en desarrollo de software, especializada en crear soluciones 
                tecnológicas innovadoras que impulsan el éxito de nuestros clientes. Con años de 
                experiencia en la industria, combinamos creatividad y experiencia técnica para 
                ofrecer productos de alta calidad.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg text-center hover-rise">
                  <h3 className="text-2xl font-bold gradient-text">100+</h3>
                  <p className="text-gray-600">Proyectos Completados</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center hover-rise">
                  <h3 className="text-2xl font-bold gradient-text">50+</h3>
                  <p className="text-gray-600">Clientes Satisfechos</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Team" 
                className="rounded-lg shadow-2xl hover-rise"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="service-card p-6 rounded-xl cursor-pointer"
              onClick={(e) => handleServiceClick(e, 'web')}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Desarrollo Web</h3>
              <p className="mb-4">
                Creamos aplicaciones web modernas y escalables utilizando las últimas tecnologías.
              </p>
              <ul className="space-y-2">
                <li>• Aplicaciones Web Personalizadas</li>
                <li>• Comercio Electrónico</li>
                <li>• Sistemas de Gestión</li>
              </ul>
              <button className="mt-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                Cotizar Ahora
              </button>
            </div>
            <div
              className="service-card p-6 rounded-xl cursor-pointer"
              onClick={(e) => handleServiceClick(e, 'mobile')}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Desarrollo Móvil</h3>
              <p className="mb-4">
                Desarrollamos aplicaciones móviles nativas y multiplataforma de alta calidad.
              </p>
              <ul className="space-y-2">
                <li>• Apps iOS y Android</li>
                <li>• Aplicaciones Híbridas</li>
                <li>• PWA</li>
              </ul>
              <button className="mt-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                Cotizar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Solicita una Cotización</h2>
          {isAuthenticated ? (
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Proyecto</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Aplicación Web</option>
                  <option>Aplicación Móvil</option>
                  <option>Ambos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Descripción del Proyecto</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Solicitar Cotización
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Para solicitar una cotización, necesitas iniciar sesión primero.
              </p>
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-6 py-3 gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Iniciar Sesión
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Nuestros Proyectos</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-rise">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                  <p className="text-gray-600">Plataforma de comercio electrónico moderna y escalable</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-rise">
                <img
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Fitness App</h3>
                  <p className="text-gray-600">Aplicación móvil para seguimiento de ejercicios</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-rise">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">CRM System</h3>
                  <p className="text-gray-600">Sistema de gestión de relaciones con clientes</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <span>123 Calle Principal, Ciudad</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <span>info@techvision.com</span>
                </div>
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Logo Animado</h3>
                <div className="aspect-video bg-black/20 rounded-lg">
                  {/* Aquí se puede insertar el video del logo animado */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/50">Video del Logo</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-white text-blue-600 rounded-lg hover:bg-white/90 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2024 TechVision Solutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;