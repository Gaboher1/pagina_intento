import "../styles/FAQ.css";
import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaRobot,
} from "react-icons/fa";

// PREGUNTAS PREDETERMINADAS
const preguntas = [
  { id: 1, pregunta: "¿Cómo inicio el proceso?", respuesta: "Solo tienes que enviarnos un mensaje por WhatsApp, correo o desde el formulario de contacto. El primer contacto no tiene costo." },
  { id: 2, pregunta: "¿Cuánto tiempo tarda una asesoría?", respuesta: "Depende del proyecto: Tareas 24–72h, Protocolos 3–7 días, Análisis 2–5 días, Artículos 1–3 semanas. Si es urgente, ajustamos tiempos." },
  { id: 3, pregunta: "¿Cómo es la forma de trabajo?", respuesta: "1. Nos contactas. 2. Revisamos tu caso. 3. Te damos plan y tiempos. 4. Trabajamos contigo. 5. Entregamos producto final." },
  { id: 4, pregunta: "¿Mi información es confidencial?", respuesta: "Sí. Todo lo que envías se maneja con estricta confidencialidad. Nada se comparte con terceros." },
  { id: 5, pregunta: "¿Qué recibo al final?", respuesta: "Tarea, ensayo, protocolo, análisis, gráficas, revisión académica o artículo listo para revista, según tu servicio." },
  { id: 6, pregunta: "¿Métodos de pago?", respuesta: "Transferencia, depósito o pago móvil. En proyectos grandes el pago puede dividirse en partes." },
  { id: 7, pregunta: "¿Puedo tener sesiones personalizadas?", respuesta: "Sí. Videollamada, revisión de avances, tutoría o aclaración de dudas en tiempo real." },
  { id: 8, pregunta: "¿Hacen correcciones después?", respuesta: "Incluimos una ronda de ajustes sin costo. También apoyamos si tu institución solicita cambios." },
  { id: 9, pregunta: "¿Pueden analizar mi base de datos?", respuesta: "Sí. Excel, SPSS, R, JASP o Stata. Selección de pruebas, interpretación y reporte incluido." },
  { id: 10, pregunta: "¿Pueden ayudarme con mi artículo?", respuesta: "Sí. Organización IMRyD, tablas, gráficas, selección de revista y respuesta a revisores." },
  { id: 11, pregunta: "¿Qué áreas atienden?", respuesta: "Principalmente ciencias de la salud: Medicina, Enfermería, Biología, Biotecnología, Psicología, Epidemiología." },
  { id: 12, pregunta: "¿Es apoyo académico o hacen trabajos?", respuesta: "Es acompañamiento académico. En trabajos entregados completos, tú debes conocer su contenido." },
  { id: 13, pregunta: "¿Qué pasa si no sé qué tema elegir?", respuesta: "Te ayudamos a delimitarlo, hacer preguntas, objetivos y metodología. Ideal si empiezas desde cero." },
  { id: 14, pregunta: "¿Puedo empezar hoy mismo?", respuesta: "Sí. Solo envía mensaje y comenzamos tu evaluación inicial." },
];

export default function FAQ() {
  const [mensajes, setMensajes] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const firma = " Para más información comunícate con el doctor Omar: +52 5564309985";

  // SALUDOS
  const saludos = ["hola", "buenas", "hey", "que tal", "holaa", "holi"];
  const respuestasSaludos = [
    "¡Hola! 👋 ¿En qué puedo ayudarte hoy?",
    "¡Hola! 😊 ¿Cómo puedo apoyarte?",
    "Hola, ¿qué tal? Estoy aquí para ayudarte.",
  ];

  // DESPEDIDAS
  const despedidas = ["adios", "bye", "hasta luego", "nos vemos", "gracias"];
  const respuestasDespedidas = [
    "¡Hasta luego! 👋 Si necesitas más ayuda, aquí estaré.",
    "Gracias a ti. ¡Que tengas un excelente día! 🌟",
    "Nos vemos, mucho éxito con tu proyecto. 📚",
  ];

  // TEMAS PERMITIDOS
  const temasPermitidos = [
    "tesis", "protocolo", "investigacion", "metodologia", "variables",
    "hipotesis", "objetivos", "marco teorico", "muestra", "poblacion",
    "bioestadistica", "regresion", "prueba t", "anova", "chi cuadrado",
    "base de datos", "articulo", "redaccion cientifica", "imryd",
    "resultados", "discusion", "plagio", "apa", "normas",
    "ensayo", "referencias", "metodologia cientifica",
  ];

  // NORMALIZAR TEXTO
  const normalizarTexto = (texto) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, "");

  const esPreguntaPermitida = (texto) => {
    const limpio = normalizarTexto(texto);
    return temasPermitidos.some((tema) =>
      limpio.includes(normalizarTexto(tema))
    );
  };

  // BOTÓN PREDETERMINADO
  const enviarPregunta = (pregunta, respuesta) => {
    setMensajes((prev) => [
      ...prev,
      { tipo: "user", texto: pregunta },
      { tipo: "bot", texto: respuesta + firma },
    ]);
  };

  // MENSAJE PERSONALIZADO
  async function enviarPersonalizada() {
    if (!input.trim()) return;

    const userText = input;
    const limpio = normalizarTexto(userText);

    setMensajes((prev) => [...prev, { tipo: "user", texto: userText }]);
    setInput("");

    // SALUDOS
    if (saludos.some((s) => limpio.includes(s))) {
      const respuesta =
        respuestasSaludos[Math.floor(Math.random() * respuestasSaludos.length)];
      setMensajes((prev) => [...prev, { tipo: "bot", texto: respuesta + firma }]);
      return;
    }

    // DESPEDIDAS
    if (despedidas.some((d) => limpio.includes(d))) {
      const respuesta =
        respuestasDespedidas[Math.floor(Math.random() * respuestasDespedidas.length)];
      setMensajes((prev) => [...prev, { tipo: "bot", texto: respuesta + firma }]);
      return;
    }

    // BLOQUEO
    if (!esPreguntaPermitida(userText)) {
      setMensajes((prev) => [
        ...prev,
        {
          tipo: "bot",
          texto:
            "Solo puedo ayudarte con dudas sobre tesis, protocolos de investigación, metodología, análisis de datos y redacción científica." +
            firma,
        },
      ]);
      return;
    }

    // GEMINI
    setLoading(true);

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyD7xt7h34aG3JwR0VcsCB1xGQvXLXDJlWo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: "Responde de forma clara y académica: " + userText },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const output =
        data.candidates?.[0]?.content?.parts?.[0]?.text ??
        "No pude responder esta duda.";

      setMensajes((prev) => [
        ...prev,
        { tipo: "bot", texto: output + firma },
      ]);
    } catch {
      setMensajes((prev) => [
        ...prev,
        { tipo: "bot", texto: "Error al conectar. Inténtalo más tarde." + firma },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="chat-wrapper">
      <h1 className="faq-title"><FaRobot /> Centro de Ayuda Inteligente</h1>
      <p className="faq-subtitle">Selecciona una pregunta o escribe la tuya.</p>

      <div className="chat-box">
        {mensajes.length === 0 && (
          <div className="chat-placeholder">
            <FaRobot className="bot-icon" />
            <p>Hola 👋 Selecciona una pregunta o escribe la tuya.</p>
          </div>
        )}

        {mensajes.map((msg, index) => (
          <div
            key={index}
            className={`mensaje ${msg.tipo === "user" ? "user-msg" : "bot-msg"}`}
          >
            {msg.texto}
          </div>
        ))}

        {loading && <div className="mensaje bot-msg">Escribiendo...</div>}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Escribe tu duda aquí..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={enviarPersonalizada}>Enviar</button>
      </div>

      <div className="preguntas-lista">
        {preguntas.map((p) => (
          <button
            key={p.id}
            className="pregunta-btn"
            onClick={() => enviarPregunta(p.pregunta, p.respuesta)}
          >
            {p.pregunta}
          </button>
        ))}
      </div>

      <div className="contacto-chatbot">
        <h3>¿Necesitas algo más?</h3>
        <p>Puedes hablar directamente con un asesor.</p>

        <div className="contact-buttons">
          <a href="https://wa.me/52555526905683" className="w-btn">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="mailto:contacto@email.com" className="m-btn">
            <FaEnvelope /> Correo
          </a>
        </div>
      </div>
    </div>
  );
}
