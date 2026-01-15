import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-wrapper">

      {/* ====================== SECCIÓN HERO ====================== */}
      <section className="about-hero-modern">
        <motion.div
          className="about-hero-modern-text"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>GRUPO OMEGA </h1>
          <p>
            Grupo Omega, multidisciplinario, con más de 15 años integrando biología molecular, microbiología clínica, farmacología, salud pública y análisis científico aplicado. Contribuye activamente al desarrollo de soluciones innovadoras para el diagnóstico, prevención y análisis de enfermedades de alto impacto poblacional.
          </p>

          <motion.div
            className="about-hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div><strong>15+</strong><span>Años de trayectoria</span></div>
            <div><strong>40+</strong><span>Artículos científicos</span></div>
            <div><strong>45+</strong><span>Congresos internacionales</span></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-hero-modern-photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          FOTO AQUÍ
        </motion.div>
      </section>

      {/* ====================== SECCIÓN 1: TARJETAS ====================== */}
      <section className="about-section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Perfil Profesional
        </motion.h2>

        <div className="alt-card-grid">

          <motion.div className="alt-card-1" whileHover={{ scale: 1.05 }}>
            <h3>Formación Científica</h3>
            <p>
              Ciencias Biológicas y de la Salud, con especialización en biología
              molecular, bioquímica, microbiología avanzada y diseño de estudios
              experimentales. Experiencia sólida en técnicas como qPCR, secuenciación,
              análisis de biomarcadores y validación molecular.
            </p>
          </motion.div>

          <motion.div className="alt-card-2" whileHover={{ scale: 1.05 }}>
            <h3>Experiencia Actual</h3>
            <p>
              Jefe de Investigación en INTEGRADORA MÉDICA GASA, liderando líneas de
              investigación, protocolos clínicos, producción académica y capacitación
              científica. Responsable de coordinar equipos multidisciplinarios y generar
              evidencia para la toma de decisiones en salud.
            </p>
          </motion.div>

          <motion.div className="alt-card-3" whileHover={{ scale: 1.08 }}>
            <h3>Producción Académica</h3>
            <ul>
              <li>40+ publicaciones indexadas</li>
              <li>45+ ponencias y congresos especializados</li>
              <li>Participación en estudios multicéntricos nacionales e internacionales</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ====================== SECCIÓN 2: LÍNEA DEL TIEMPO ====================== */}
      <section className="timeline-section">
        <h2 className="section-title">Trayectoria Profesional</h2>

        <div className="timeline">

          <motion.div
            className="timeline-item"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot" />
            <h3>2008 — Formación y Bases Científicas</h3>
            <p>
              Desarrollo de competencias en biotecnología, biología molecular, farmacología
              y técnicas de laboratorio clínico. Inicio en investigación académica.
            </p>
          </motion.div>

          <motion.div
            className="timeline-item right"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot" />
            <h3>2012 — Investigación Clínica y Salud Pública</h3>
            <p>
              Participación en estudios epidemiológicos, validación de pruebas diagnósticas,
              vigilancia de enfermedades y evaluación de intervenciones en salud.
            </p>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot" />
            <h3>2020 — Consolidación Profesional</h3>
            <p>
              Diversificación de líneas científicas, publicación internacional, formación
              de nuevos investigadores y liderazgo institucional en proyectos de alto impacto.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ====================== SECCIÓN 3: ACORDEÓN ====================== */}
      <section className="accordion-section">
        <h2 className="section-title">Líneas Científicas</h2>

        <details>
          <summary>Biología Molecular</summary>
          <p>
            Amplia experiencia en PCR, qPCR, secuenciación, análisis genético, diagnóstico
            molecular, validación de biomarcadores y diseño de protocolos experimentales.
          </p>
        </details>

        <details>
          <summary>Microbiología Clínica</summary>
          <p>
            Manejo de microorganismos patógenos, técnicas de cultivo, identificación,
            susceptibilidad antimicrobiana y análisis epidemiológico de enfermedades infecciosas.
          </p>
        </details>

        <details>
          <summary>Farmacología y Bioquímica</summary>
          <p>
            Evaluación de compuestos bioactivos, mecanismos moleculares, toxicidad,
            farmacodinámica, farmacocinética y desarrollo de propuestas terapéuticas.
          </p>
        </details>

        <details>
          <summary>Investigación Clínica</summary>
          <p>
            Diseño y ejecución de protocolos clínicos, manejo de bases de datos,
            análisis estadístico, ética en investigación y estudios de intervención.
          </p>
        </details>
      </section>

      {/* ====================== SECCIÓN 4: MISIÓN / VISIÓN / VALORES ====================== */}
      <section className="floating-cards-section">
        <h2 className="section-title">Misión, Visión y Valores</h2>

        <div className="floating-cards">

          <motion.div className="floating-card" whileHover={{ y: -10 }}>
            <h3>MISIÓN</h3>
            <p>
              Impulsar el avance científico mediante investigación rigurosa, divulgación
              académica y acompañamiento integral para estudiantes, profesionales e
              instituciones que buscan fortalecer la calidad de sus proyectos.
            </p>
          </motion.div>

          <motion.div className="floating-card" whileHover={{ y: -10 }}>
            <h3>VISIÓN</h3>
            <p>
              Convertirse en referente nacional e internacional en investigación científica
              aplicada, formación académica y generación de conocimiento de alto impacto.
            </p>
          </motion.div>

          <motion.div className="floating-card" whileHover={{ y: -10 }}>
            <h3>VALORES</h3>
            <ul>
              <li>Rigor metodológico</li>
              <li>Integridad científica</li>
              <li>Innovación constante</li>
              <li>Excelencia y compromiso académico</li>
              <li>Confidencialidad y ética profesional</li>
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
