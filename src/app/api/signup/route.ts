import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { nombre, email, telefono, nombre_negocio, giro_negocio, turnstileToken } = body;

  // Verificar Turnstile
  const turnstileRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    }
  );

  const turnstileData = await turnstileRes.json();

  if (!turnstileData.success) {
    return NextResponse.json(
      { error: "Verificación de captcha fallida" },
      { status: 400 }
    );
  }

  // Insertar en Supabase
  const { error } = await supabase.from("early_signups").insert([
    {
      nombre: nombre.trim(),
      email: email.trim().toLowerCase(),
      telefono: telefono?.trim() || null,
      nombre_negocio: nombre_negocio.trim(),
      giro_negocio: giro_negocio?.trim() || null,
    },
  ]);

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Este correo ya está registrado. ¡Ya tienes tu lugar!" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Hubo un error. Intenta de nuevo." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
