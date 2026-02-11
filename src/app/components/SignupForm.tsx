"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabase";

export default function SignupForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    nombre_negocio: "",
    giro_negocio: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const { error } = await getSupabase().from("early_signups").insert([
      {
        nombre: form.nombre.trim(),
        email: form.email.trim().toLowerCase(),
        telefono: form.telefono.trim() || null,
        nombre_negocio: form.nombre_negocio.trim(),
        giro_negocio: form.giro_negocio.trim() || null,
      },
    ]);

    if (error) {
      if (error.code === "23505") {
        setErrorMsg("Este correo ya está registrado. ¡Ya tienes tu lugar!");
      } else {
        setErrorMsg("Hubo un error. Intenta de nuevo.");
      }
      setStatus("error");
    } else {
      setStatus("success");
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        nombre_negocio: "",
        giro_negocio: "",
      });
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          ¡Registro exitoso!
        </h3>
        <p className="text-green-700">
          Gracias por registrarte. Te avisaremos cuando lancemos SomosLagos.
          ¡Serás de los primeros!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tu nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Juan Pérez"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-gray-900"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-gray-900"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="telefono"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          WhatsApp / Teléfono{" "}
          <span className="text-gray-400">(opcional)</span>
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="474 123 4567"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-gray-900"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="nombre_negocio"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre de tu negocio *
          </label>
          <input
            type="text"
            id="nombre_negocio"
            name="nombre_negocio"
            required
            value={form.nombre_negocio}
            onChange={handleChange}
            placeholder="Mi Negocio"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-gray-900"
          />
        </div>
        <div>
          <label
            htmlFor="giro_negocio"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Giro del negocio{" "}
            <span className="text-gray-400">(opcional)</span>
          </label>
          <input
            type="text"
            id="giro_negocio"
            name="giro_negocio"
            value={form.giro_negocio}
            onChange={handleChange}
            placeholder="Restaurante, Tienda, Taller..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-gray-900"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm bg-red-50 p-3 rounded-xl">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-lg cursor-pointer"
      >
        {status === "loading" ? "Registrando..." : "¡Quiero ser de los primeros!"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Al registrarte aceptas que te contactemos cuando lancemos la plataforma.
      </p>
    </form>
  );
}
