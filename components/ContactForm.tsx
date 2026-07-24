export default function ContactForm() {
  return (
    <form className="max-w-2xl mx-auto p-8 bg-zinc-900 rounded-2xl shadow-xl space-y-5 border border-zinc-800">
      <h2 className="text-2xl font-bold text-white mb-6">
        Contáctanos
      </h2>

      <div>
        <label className="block text-sm text-zinc-300 mb-2">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg p-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-zinc-300 mb-2">
          Correo electrónico
        </label>
        <input
          type="email"
          name="correo"
          placeholder="correo@ejemplo.com"
          className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg p-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-zinc-300 mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          name="telefono"
          placeholder="Tu número de teléfono"
          className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg p-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-zinc-300 mb-2">
          Dirección
        </label>
        <input
          type="text"
          name="direccion"
          placeholder="Tu dirección"
          className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg p-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-zinc-300 mb-2">
          Asunto
        </label>
        <input
          type="text"
          name="asunto"
          placeholder="Motivo del contacto"
          className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg p-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-zinc-300 mb-2">
          ¿Qué necesitas?
        </label>

        <textarea
          name="mensaje"
          rows={7}
          placeholder="Cuéntanos cómo podemos ayudarte..."
          className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg p-3 placeholder-zinc-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
