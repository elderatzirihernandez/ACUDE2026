// js/datos.js
// ARCHIVO PRINCIPAL - VERSIÓN UNIFICADA Y OPTIMIZADA
// 12 MATERIAS · 1200+ PREGUNTAS · SIN REPETICIÓN DE TEMAS

const DATOS_ACUDE = {
    // ============================================
    // METADATA DEL SISTEMA
    // ============================================
    metadata: {
        version: '2.0.0',
        fecha: '2026-03-19',
        totalMaterias: 12,
        totalPreguntasEstimadas: 1200,
        nivelExigencia: 'Alto (MCAT)',
        caracteristicas: [
            'Opciones aleatorias en cada intento',
            'Preguntas con contexto clínico/experimental',
            'Niveles de dificultad 1-5',
            'Sin repetición temática'
        ]
    },

    // ============================================
    // INFORMACIÓN DE MATERIAS (12 UNIFICADAS)
    // ============================================
    materias: [
        // ============================================
        // GRUPO 1: MATERIAS TRONCALES (BÁSICO)
        // ============================================
        {
            id: 'lengua',
            nombre: 'Lengua Española',
            icono: 'fa-language',
            color: '#9b59b6',
            descripcion: 'Análisis textual avanzado, gramática superior, semántica y pragmática',
            nivel: 'Avanzado',
            area: 'Troncal',
            dificultadBase: 4,
            temasPrincipales: [
                'Comprensión lectora crítica',
                'Categorías gramaticales complejas',
                'Relaciones semánticas',
                'Ortografía avanzada'
            ],
            objetivos: [
                'Analizar textos con estructura compleja',
                'Identificar funciones del lenguaje en contexto',
                'Aplicar reglas ortográficas en casos especiales'
            ]
        },
        {
            id: 'razonamiento',
            nombre: 'Razonamiento Matemático',
            icono: 'fa-brain',
            color: '#f1c40f',
            descripcion: 'Lógica formal, razonamiento abstracto, aritmética avanzada y álgebra',
            nivel: 'Intermedio',
            area: 'Troncal',
            dificultadBase: 3,
            temasPrincipales: [
                'Razonamiento lógico-deductivo',
                'Jerarquía de operaciones complejas',
                'Proporcionalidad y funciones',
                'Ecuaciones y sistemas'
            ],
            objetivos: [
                'Resolver problemas con múltiples pasos',
                'Aplicar razonamiento abstracto',
                'Modelar situaciones mediante ecuaciones'
            ]
        },
        {
            id: 'ingles',
            nombre: 'Inglés',
            icono: 'fa-language',
            color: '#3498db',
            descripcion: 'Gramática inglesa avanzada, tiempos verbales compuestos, morfosintaxis integrativa',
            nivel: 'Intermedio',
            area: 'Troncal',
            dificultadBase: 3,
            temasPrincipales: [
                'Tiempos verbales complejos',
                'Condicionales mixtos',
                'Voz pasiva y estilo indirecto',
                'Morfosintaxis aplicada'
            ],
            objetivos: [
                'Comprender textos académicos en inglés',
                'Usar estructuras gramaticales avanzadas',
                'Diferenciar matices semánticos'
            ]
        },

        // ============================================
        // GRUPO 2: CIENCIAS QUÍMICO-BIOLÓGICAS (INTERMEDIO)
        // ============================================
        {
            id: 'biologia',
            nombre: 'Biología',
            icono: 'fa-dna',
            color: '#2ecc71',
            descripcion: 'Biología molecular, genética avanzada, ecología de poblaciones y evolución',
            nivel: 'Avanzado',
            area: 'Ciencias',
            dificultadBase: 4,
            temasPrincipales: [
                'Origen de la vida (teorías)',
                'Biología celular y molecular',
                'Genética mendeliana y molecular',
                'Ecología y evolución'
            ],
            objetivos: [
                'Comprender procesos celulares complejos',
                'Analizar problemas genéticos',
                'Interpretar relaciones ecológicas'
            ]
        },
        {
            id: 'quimica',
            nombre: 'Química General',
            icono: 'fa-flask',
            color: '#e74c3c',
            descripcion: 'Estructura atómica, enlaces químicos, estequiometría y termoquímica',
            nivel: 'Avanzado',
            area: 'Ciencias',
            dificultadBase: 4,
            temasPrincipales: [
                'Estructura atómica y tabla periódica',
                'Enlaces químicos y fuerzas intermoleculares',
                'Reacciones y estequiometría',
                'Termoquímica y cinética'
            ],
            objetivos: [
                'Predecir propiedades periódicas',
                'Resolver problemas estequiométricos',
                'Analizar reacciones químicas'
            ]
        },
        {
            id: 'fisica',
            nombre: 'Física General',
            icono: 'fa-bolt',
            color: '#3498db',
            descripcion: 'Mecánica clásica, termodinámica, electromagnetismo básico',
            nivel: 'Intermedio',
            area: 'Ciencias',
            dificultadBase: 3,
            temasPrincipales: [
                'Cinemática y dinámica',
                'Trabajo, energía y potencia',
                'Termodinámica',
                'Electrostática'
            ],
            objetivos: [
                'Aplicar leyes de Newton',
                'Resolver problemas de conservación',
                'Comprender fenómenos térmicos'
            ]
        },
        {
            id: 'matematicas',
            nombre: 'Matemáticas (Ciencias)',
            icono: 'fa-calculator',
            color: '#f39c12',
            descripcion: 'Álgebra superior, cálculo diferencial, geometría analítica',
            nivel: 'Avanzado',
            area: 'Ciencias',
            dificultadBase: 4,
            temasPrincipales: [
                'Álgebra y ecuaciones',
                'Funciones y límites',
                'Derivadas e integrales básicas',
                'Geometría analítica'
            ],
            objetivos: [
                'Modelar fenómenos con funciones',
                'Calcular derivadas e integrales',
                'Resolver problemas de optimización'
            ]
        },

        // ============================================
        // GRUPO 3: CIENCIAS SOCIALES Y HUMANIDADES (INTERMEDIO)
        // ============================================
        {
            id: 'historia',
            nombre: 'Historia',
            icono: 'fa-landmark',
            color: '#e67e22',
            descripcion: 'Historia universal, guerras mundiales, historia de México, análisis histórico',
            nivel: 'Intermedio',
            area: 'Humanidades',
            dificultadBase: 3,
            temasPrincipales: [
                'Historia universal (s. XVI-XX)',
                'Primera y Segunda Guerra Mundial',
                'Revoluciones y movimientos sociales',
                'Historia de México'
            ],
            objetivos: [
                'Analizar causas y consecuencias históricas',
                'Interpretar procesos sociales',
                'Relacionar eventos globales'
            ]
        },
        {
            id: 'literatura',
            nombre: 'Literatura',
            icono: 'fa-book-open',
            color: '#1abc9c',
            descripcion: 'Géneros literarios, figuras retóricas, movimientos literarios y análisis textual',
            nivel: 'Avanzado',
            area: 'Humanidades',
            dificultadBase: 4,
            temasPrincipales: [
                'Géneros literarios (épica, lírica, dramática, narrativa)',
                'Figuras retóricas y recursos estilísticos',
                'Movimientos literarios',
                'Análisis de textos'
            ],
            objetivos: [
                'Identificar recursos literarios',
                'Contextualizar obras literarias',
                'Analizar textos críticamente'
            ]
        },
        {
            id: 'derecho',
            nombre: 'Derecho',
            icono: 'fa-gavel',
            color: '#34495e',
            descripcion: 'Fundamentos del derecho, clasificación jurídica, derechos humanos',
            nivel: 'Intermedio',
            area: 'Humanidades',
            dificultadBase: 3,
            temasPrincipales: [
                'Normas sociales, morales y jurídicas',
                'Clasificación del derecho',
                'Derechos humanos',
                'Fuentes del derecho'
            ],
            objetivos: [
                'Diferenciar tipos de normas',
                'Comprender la jerarquía jurídica',
                'Analizar casos prácticos'
            ]
        },

        // ============================================
        // GRUPO 4: CIENCIAS EXACTAS INGENIERÍA (AVANZADO)
        // ============================================
        {
            id: 'quimica_ing',
            nombre: 'Química (Ingeniería)',
            icono: 'fa-flask',
            color: '#c0392b',
            descripcion: 'Química cuántica, termodinámica química, cinética avanzada',
            nivel: 'Avanzado',
            area: 'Ingeniería',
            dificultadBase: 5,
            temasPrincipales: [
                'Estructura atómica avanzada',
                'Enlaces y orbitales moleculares',
                'Termoquímica y equilibrio',
                'Cinética y mecanismos'
            ],
            objetivos: [
                'Aplicar principios cuánticos',
                'Calcular parámetros termodinámicos',
                'Diseñar mecanismos de reacción'
            ]
        },
        {
            id: 'matematicas_ing',
            nombre: 'Matemáticas (Ingeniería)',
            icono: 'fa-square-root-alt',
            color: '#d35400',
            descripcion: 'Cálculo avanzado, ecuaciones diferenciales, álgebra lineal',
            nivel: 'Avanzado',
            area: 'Ingeniería',
            dificultadBase: 5,
            temasPrincipales: [
                'Cálculo diferencial e integral avanzado',
                'Ecuaciones diferenciales',
                'Álgebra lineal y matrices',
                'Cálculo vectorial'
            ],
            objetivos: [
                'Resolver ecuaciones diferenciales',
                'Modelar sistemas dinámicos',
                'Aplicar métodos numéricos'
            ]
        },
        {
            id: 'fisica_ing',
            nombre: 'Física (Ingeniería)',
            icono: 'fa-rocket',
            color: '#2980b9',
            descripcion: 'Mecánica avanzada, electromagnetismo, termodinámica aplicada',
            nivel: 'Avanzado',
            area: 'Ingeniería',
            dificultadBase: 5,
            temasPrincipales: [
                'Mecánica de sólidos y fluidos',
                'Electromagnetismo y circuitos',
                'Termodinámica avanzada',
                'Óptica y acústica'
            ],
            objetivos: [
                'Aplicar leyes de conservación',
                'Diseñar circuitos eléctricos',
                'Analizar sistemas termodinámicos'
            ]
        },

        // ============================================
        // GRUPO 5: CIENCIAS ECONÓMICO-ADMINISTRATIVAS (INTERMEDIO-AVANZADO)
        // ============================================
        {
            id: 'economia',
            nombre: 'Economía y Administración',
            icono: 'fa-chart-line',
            color: '#27ae60',
            descripcion: 'Teoría administrativa, microeconomía, macroeconomía',
            nivel: 'Intermedio',
            area: 'Económicas',
            dificultadBase: 3,
            temasPrincipales: [
                'Fundamentos de administración',
                'Microeconomía y oferta-demanda',
                'Macroeconomía y política económica',
                'Sistemas económicos'
            ],
            objetivos: [
                'Comprender procesos administrativos',
                'Analizar mercados y precios',
                'Interpretar indicadores económicos'
            ]
        },
        {
            id: 'matematicas_fin',
            nombre: 'Matemáticas Financieras',
            icono: 'fa-coins',
            color: '#f39c12',
            descripcion: 'Interés compuesto, anualidades, amortizaciones, valor del dinero en el tiempo',
            nivel: 'Avanzado',
            area: 'Económicas',
            dificultadBase: 4,
            temasPrincipales: [
                'Interés simple y compuesto',
                'Anualidades y perpetuidades',
                'Amortizaciones y fondos',
                'Evaluación de proyectos'
            ],
            objetivos: [
                'Calcular valor futuro y presente',
                'Evaluar alternativas de inversión',
                'Resolver problemas financieros'
            ]
        }
    ],

    // ============================================
    // BANCO DE PREGUNTAS (INICIALMENTE VACÍO)
    // Se llenará desde los archivos: datos-lengua.js, etc.
    // ============================================
    preguntas: {
        // Troncales
        lengua: [],
        razonamiento: [],
        ingles: [],
        
        // Ciencias
        biologia: [],
        quimica: [],
        fisica: [],
        matematicas: [],
        
        // Humanidades
        historia: [],
        literatura: [],
        derecho: [],
        
        // Ingeniería
        quimica_ing: [],
        matematicas_ing: [],
        fisica_ing: [],
        
        // Económicas
        economia: [],
        matematicas_fin: []
    },

    // ============================================
    // FUNCIONES UTILITARIAS
    // ============================================
    metodos: {
        /**
         * Obtiene todas las preguntas de una materia
         * @param {string} materiaId - ID de la materia
         * @returns {Array} - Array de preguntas
         */
        getPreguntas: function(materiaId) {
            return DATOS_ACUDE.preguntas[materiaId] || [];
        },

        /**
         * Cuenta el total de preguntas en el sistema
         * @returns {Object} - Estadísticas por materia
         */
        contarPreguntas: function() {
            const stats = {};
            let total = 0;
            
            for (const [materiaId, preguntas] of Object.entries(DATOS_ACUDE.preguntas)) {
                const cantidad = preguntas.length;
                stats[materiaId] = cantidad;
                total += cantidad;
            }
            
            stats.total = total;
            return stats;
        },

        /**
         * Verifica la integridad de los datos
         * @returns {Object} - Reporte de validación
         */
        validarIntegridad: function() {
            const reporte = {
                materiasOK: DATOS_ACUDE.materias.length === 12,
                preguntasCargadas: {},
                errores: []
            };

            // Verificar que cada materia tenga su array de preguntas
            DATOS_ACUDE.materias.forEach(materia => {
                if (!DATOS_ACUDE.preguntas[materia.id]) {
                    reporte.errores.push(`Falta array de preguntas para: ${materia.id}`);
                    reporte.preguntasCargadas[materia.id] = 0;
                } else {
                    reporte.preguntasCargadas[materia.id] = DATOS_ACUDE.preguntas[materia.id].length;
                }
            });

            return reporte;
        },

        /**
         * Obtiene materias por área
         * @param {string} area - Área a filtrar
         * @returns {Array} - Materias filtradas
         */
        getMateriasPorArea: function(area) {
            if (area === 'todos') return DATOS_ACUDE.materias;
            return DATOS_ACUDE.materias.filter(m => m.area === area);
        },

        /**
         * Calcula el nivel de dificultad promedio de una materia
         * @param {string} materiaId - ID de la materia
         * @returns {number} - Nivel promedio
         */
        getNivelPromedio: function(materiaId) {
            const preguntas = DATOS_ACUDE.preguntas[materiaId] || [];
            if (preguntas.length === 0) return 3;
            
            const suma = preguntas.reduce((acc, p) => acc + (p.dificultad || 3), 0);
            return Math.round(suma / preguntas.length);
        }
    }
};

// ============================================
// VALIDACIÓN INICIAL DEL OBJETO
// ============================================
(function validarEstructura() {
    console.log("🔍 Validando estructura de DATOS_ACUDE...");
    
    // Verificar propiedades requeridas
    const propiedadesRequeridas = ['metadata', 'materias', 'preguntas', 'metodos'];
    const faltantes = propiedadesRequeridas.filter(p => !DATOS_ACUDE[p]);
    
    if (faltantes.length > 0) {
        console.error("❌ Estructura inválida. Faltan:", faltantes);
    } else {
        console.log("✅ Estructura válida");
        console.log(`📊 Materias configuradas: ${DATOS_ACUDE.materias.length}`);
        console.log(`📝 Arrays de preguntas: ${Object.keys(DATOS_ACUDE.preguntas).length}`);
    }
})();

// ============================================
// EXPORTAR GLOBALMENTE
// ============================================
window.DATOS_ACUDE = DATOS_ACUDE;

// ============================================
// MENSAJE DE INICIALIZACIÓN
// ============================================
console.log("==========================================");
console.log("🚀 ACUDE 2026 - Sistema Avanzado de Cuestionarios");
console.log(`📌 Versión: ${DATOS_ACUDE.metadata.version}`);
console.log(`📚 Materias disponibles: ${DATOS_ACUDE.materias.length}`);
console.log(`🎯 Nivel de exigencia: ${DATOS_ACUDE.metadata.nivelExigencia}`);
console.log("==========================================");
console.log("📋 Materias configuradas:");
DATOS_ACUDE.materias.forEach(m => {
    console.log(`   • ${m.nombre} (${m.area}) - ${m.nivel}`);
});
console.log("==========================================");