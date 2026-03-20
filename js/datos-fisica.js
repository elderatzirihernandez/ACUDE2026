// js/datos-fisica.js
// PREGUNTAS DE FÍSICA GENERAL - 20 PREGUNTAS NIVEL ALTO

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    DATOS_ACUDE.preguntas.fisica = [
        // PREGUNTA 1 - Nivel 5 - Cinemática (movimiento parabólico)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-001',
            texto: `Se lanza un proyectil con velocidad inicial de 50 m/s y ángulo de 53° (sen 53° = 0.8, cos 53° = 0.6). ¿Cuál es su altura máxima y alcance horizontal? (g = 10 m/s²)`,
            
            opciones: [
                "h = 80 m, R = 240 m, porque v₀y = 40 m/s, v₀x = 30 m/s",
                "h = 100 m, R = 300 m, porque v₀y = 50 m/s",
                "h = 80 m, R = 480 m, porque el tiempo de vuelo es 8 s",
                "h = 40 m, R = 120 m, porque la mitad",
                "h = 160 m, R = 240 m, porque el doble"
            ],
            
            correcta: 0,
            
            explicacion: `Componentes de velocidad inicial:
            v₀x = v₀ cos θ = 50 × 0.6 = 30 m/s
            v₀y = v₀ sen θ = 50 × 0.8 = 40 m/s
            
            Altura máxima: h = v₀y²/(2g) = (40)²/(20) = 1600/20 = 80 m
            
            Tiempo de vuelo: t = 2v₀y/g = 80/10 = 8 s
            Alcance: R = v₀x × t = 30 × 8 = 240 m`,
            
            dificultad: 4,
            
            temas: ["Cinemática", "Movimiento parabólico", "Lanzamiento de proyectiles"],
            
            contexto: "Movimiento en dos dimensiones"
        },
        
        // PREGUNTA 2 - Nivel 5 - Dinámica (leyes de Newton)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-002',
            texto: `Un bloque de 5 kg está en reposo sobre una superficie horizontal con coeficiente de fricción estático μe = 0.4 y cinético μc = 0.3. Se aplica una fuerza horizontal de 15 N. ¿Qué ocurre? (g = 10 m/s²)`,
            
            opciones: [
                "No se mueve, porque la fuerza máxima de fricción estática es 20 N",
                "Se mueve con aceleración constante, porque 15 N > 0",
                "Se mueve con velocidad constante, porque 15 N = fuerza de fricción",
                "Acelera a 3 m/s², porque F = ma",
                "No se puede determinar sin conocer el área"
            ],
            
            correcta: 0,
            
            explicacion: `Fuerza normal: N = mg = 5 × 10 = 50 N
            Fuerza máxima de fricción estática: f_e_max = μe × N = 0.4 × 50 = 20 N
            
            La fuerza aplicada (15 N) es MENOR que la fricción estática máxima (20 N)
            Por lo tanto, el bloque NO SE MUEVE.
            
            La fricción estática se ajusta a 15 N para equilibrar la fuerza aplicada.`,
            
            dificultad: 4,
            
            temas: ["Dinámica", "Fricción", "Leyes de Newton"],
            
            contexto: "Fuerzas de contacto"
        },
        
        // PREGUNTA 3 - Nivel 5 - Trabajo y energía
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-003',
            texto: `Un automóvil de 1000 kg que viaja a 20 m/s aplica los frenos y se detiene en 40 m. ¿Cuál es la fuerza de frenado promedio?`,
            
            opciones: [
                "5,000 N, porque trabajo = ΔEc → F × d = ½mv²",
                "10,000 N, porque F = ma con a = 5 m/s²",
                "2,500 N, porque la mitad",
                "20,000 N, porque F = mv²/2d",
                "40,000 N, porque es muy pesado"
            ],
            
            correcta: 0,
            
            explicacion: `Energía cinética inicial: Ec = ½mv² = ½ × 1000 × (20)² = 500 × 400 = 200,000 J
            
            El trabajo de la fuerza de frenado es: W = F × d (con signo negativo)
            Por teorema trabajo-energía: W = ΔEc = 0 - 200,000 = -200,000 J
            
            F × 40 = -200,000
            F = -5,000 N (magnitud 5,000 N, dirección opuesta al movimiento)`,
            
            dificultad: 4,
            
            temas: ["Trabajo y energía", "Teorema trabajo-energía", "Energía cinética"],
            
            contexto: "Aplicaciones de la energía"
        },
        
        // PREGUNTA 4 - Nivel 5 - Conservación de la cantidad de movimiento
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-004',
            texto: `Una bala de 10 g se incrusta en un bloque de madera de 2 kg que está en reposo. Después del impacto, el bloque + bala se mueven a 2 m/s. ¿Cuál era la velocidad de la bala?`,
            
            opciones: [
                "402 m/s, porque conservación de momento: m₁v₁ = (m₁ + m₂)v_f",
                "400 m/s, porque 2 kg × 2 m/s = 4, dividido 0.01",
                "200 m/s, porque la mitad",
                "800 m/s, porque el doble",
                "100 m/s, porque 2/0.02"
            ],
            
            correcta: 0,
            
            explicacion: `Conservación de la cantidad de movimiento (choque inelástico):
            
            m_bala × v_bala = (m_bala + m_bloque) × v_f
            
            0.01 × v = (0.01 + 2) × 2
            0.01v = 2.01 × 2 = 4.02
            v = 4.02 / 0.01 = 402 m/s`,
            
            dificultad: 4,
            
            temas: ["Cantidad de movimiento", "Choques inelásticos", "Conservación"],
            
            contexto: "Colisiones"
        },
        
        // PREGUNTA 5 - Nivel 5 - Gravitación universal
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-005',
            texto: `La aceleración de la gravedad en la superficie de un planeta es g₀. ¿Cuál será la aceleración a una altura igual al radio del planeta?`,
            
            opciones: [
                "g₀/4, porque g ∝ 1/r², a distancia 2R la gravedad es 1/4",
                "g₀/2, porque la distancia se duplica",
                "g₀, porque no cambia con la altura",
                "g₀/√2, porque es inversa a la raíz",
                "0, porque ya no hay gravedad"
            ],
            
            correcta: 0,
            
            explicacion: `Ley de gravitación universal: F = G·M·m/r²
            Aceleración: g = G·M/r²
            
            En superficie: r = R → g₀ = G·M/R²
            A altura h = R: r = R + h = 2R
            
            g = G·M/(2R)² = G·M/(4R²) = (1/4)(G·M/R²) = g₀/4`,
            
            dificultad: 4,
            
            temas: ["Gravitación", "Ley de Newton", "Campo gravitatorio"],
            
            contexto: "Física planetaria"
        },
        
        // PREGUNTA 6 - Nivel 5 - Movimiento circular uniforme
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-006',
            texto: `Una masa de 2 kg atada a una cuerda de 0.5 m gira en un círculo horizontal a 120 rpm. ¿Cuál es la tensión en la cuerda?`,
            
            opciones: [
                "157.9 N, porque ω = 120 rpm = 4π rad/s, T = mω²r",
                "78.9 N, porque la mitad",
                "315.8 N, porque el doble",
                "50 N, porque F = ma",
                "100 N, aproximadamente"
            ],
            
            correcta: 0,
            
            explicacion: `Conversión de rpm a rad/s:
            ω = 120 rpm = 120 × (2π/60) = 120 × π/30 = 4π rad/s ≈ 12.57 rad/s
            
            Fuerza centrípeta (tensión): T = m·ω²·r
            T = 2 × (12.57)² × 0.5 = 2 × 158 × 0.5 = 2 × 79 = 158 N
            
            Cálculo exacto: (4π)² = 16π² ≈ 157.91
            T = 2 × 157.91 × 0.5 = 157.91 N`,
            
            dificultad: 5,
            
            temas: ["Movimiento circular", "Fuerza centrípeta", "Velocidad angular"],
            
            contexto: "Dinámica circular"
        },
        
        // PREGUNTA 7 - Nivel 4 - Termodinámica (primera ley)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-007',
            texto: `Un gas ideal recibe 500 J de calor y realiza un trabajo de 200 J. ¿Cuál es el cambio en su energía interna?`,
            
            opciones: [
                "+300 J, porque ΔU = Q - W",
                "+700 J, porque Q + W",
                "-300 J, porque pierde energía",
                "+500 J, porque solo el calor",
                "+200 J, porque solo el trabajo"
            ],
            
            correcta: 0,
            
            explicacion: `Primera ley de la termodinámica:
            ΔU = Q - W
            donde Q = calor absorbido (+), W = trabajo realizado por el sistema (+)
            
            ΔU = 500 J - 200 J = 300 J
            
            La energía interna aumenta en 300 J.`,
            
            dificultad: 3,
            
            temas: ["Termodinámica", "Primera ley", "Energía interna"],
            
            contexto: "Procesos termodinámicos"
        },
        
        // PREGUNTA 8 - Nivel 5 - Electricidad (ley de Coulomb)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-008',
            texto: `Dos cargas puntuales de +2 μC y -8 μC están separadas 10 cm en el aire. ¿En qué punto sobre la línea que las une el campo eléctrico es cero?`,
            
            opciones: [
                "A 20 cm de la carga positiva, fuera del segmento, porque las magnitudes se igualan",
                "A 5 cm de la positiva, dentro del segmento",
                "A 10 cm de la negativa, en el punto medio",
                "No hay punto, porque las cargas son opuestas",
                "En el infinito"
            ],
            
            correcta: 0,
            
            explicacion: `Para campo cero, las magnitudes deben ser iguales y direcciones opuestas.
            Con cargas opuestas, el punto debe estar FUERA del segmento, más cerca de la menor.
            
            Sea x la distancia desde la carga de +2 μC hacia afuera (alejándose de la carga negativa).
            
            E₁ = k(2)/x² (hacia afuera)
            E₂ = k(8)/(0.1 + x)² (hacia adentro, hacia la carga negativa)
            
            Igualando: 2/x² = 8/(0.1 + x)²
            (0.1 + x)²/x² = 4
            (0.1 + x)/x = 2
            0.1 + x = 2x
            0.1 = x
            x = 0.1 m = 10 cm
            
            El punto está a 10 cm de la positiva, o sea a 20 cm de la negativa.`,
            
            dificultad: 5,
            
            temas: ["Electrostática", "Ley de Coulomb", "Campo eléctrico"],
            
            contexto: "Distribuciones de carga"
        },
        
        // PREGUNTA 9 - Nivel 5 - Circuitos eléctricos (Leyes de Kirchhoff)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-009',
            texto: `En el circuito: una batería de 12 V con resistencia interna 1 Ω conectada a una resistencia externa R. Si la corriente es 2 A, ¿cuál es el valor de R y la potencia disipada en R?`,
            
            opciones: [
                "R = 5 Ω, P = 20 W, porque 12 = 2(1 + R) → R = 5, P = I²R = 4×5 = 20",
                "R = 6 Ω, P = 24 W, porque 12/2 = 6",
                "R = 5 Ω, P = 24 W, porque I²R = 4×6",
                "R = 4 Ω, P = 16 W, porque 12 = 2(1+R)",
                "R = 5 Ω, P = 12 W, porque V×I"
            ],
            
            correcta: 0,
            
            explicacion: `Ley de Ohm para el circuito completo:
            ε = I(r + R)
            12 = 2(1 + R)
            6 = 1 + R
            R = 5 Ω
            
            Potencia en R: P = I²R = (2)² × 5 = 4 × 5 = 20 W
            
            La potencia total de la batería es εI = 24 W, de los cuales 4 W se disipan en la resistencia interna.`,
            
            dificultad: 4,
            
            temas: ["Circuitos eléctricos", "Ley de Ohm", "Potencia eléctrica"],
            
            contexto: "Circuitos de corriente continua"
        },
        
        // PREGUNTA 10 - Nivel 5 - Magnetismo (fuerza magnética)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-010',
            texto: `Un protón (q = 1.6×10⁻¹⁹ C) entra con velocidad 2×10⁶ m/s perpendicular a un campo magnético de 0.5 T. ¿Cuál es el radio de su trayectoria? (mp = 1.67×10⁻²⁷ kg)`,
            
            opciones: [
                "0.042 m = 4.2 cm, porque r = mv/qB",
                "0.084 m, porque el doble",
                "0.021 m, porque la mitad",
                "0.42 m, porque 10 veces mayor",
                "0.0084 m, porque 8.4 mm"
            ],
            
            correcta: 0,
            
            explicacion: `Fuerza magnética = fuerza centrípeta:
            qvB = mv²/r
            r = mv/(qB)
            
            r = (1.67×10⁻²⁷ × 2×10⁶) / (1.6×10⁻¹⁹ × 0.5)
            r = (3.34×10⁻²¹) / (0.8×10⁻¹⁹)
            r = (3.34×10⁻²¹) / (8×10⁻²⁰)
            r = 3.34 / 8 × 10⁻¹ = 0.4175 × 0.1 = 0.04175 m ≈ 4.18 cm`,
            
            dificultad: 5,
            
            temas: ["Magnetismo", "Fuerza de Lorentz", "Movimiento de partículas cargadas"],
            
            contexto: "Física de partículas"
        },
        
        // PREGUNTA 11 - Nivel 5 - Óptica (lentes delgadas)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-011',
            texto: `Un objeto se coloca a 15 cm de una lente convergente de distancia focal 10 cm. ¿Cuál es la posición y naturaleza de la imagen?`,
            
            opciones: [
                "A 30 cm del otro lado, real e invertida, porque 1/f = 1/s + 1/s'",
                "A 6 cm del mismo lado, virtual y derecha",
                "A 30 cm del mismo lado, virtual",
                "A 15 cm, igual que el objeto",
                "No se forma imagen"
            ],
            
            correcta: 0,
            
            explicacion: `Ecuación de lentes delgadas: 1/f = 1/s + 1/s'
            
            f = 10 cm, s = 15 cm
            1/10 = 1/15 + 1/s'
            1/s' = 1/10 - 1/15 = (3 - 2)/30 = 1/30
            s' = 30 cm (positivo → imagen real, del otro lado de la lente)
            
            Aumento: M = -s'/s = -30/15 = -2 (invertida y de mayor tamaño)`,
            
            dificultad: 4,
            
            temas: ["Óptica geométrica", "Lentes delgadas", "Formación de imágenes"],
            
            contexto: "Instrumentos ópticos"
        },
        
        // PREGUNTA 12 - Nivel 4 - Fluidos (principio de Arquímedes)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-012',
            texto: `Un objeto de 500 g y densidad 0.8 g/cm³ se sumerge completamente en agua (ρ = 1 g/cm³). ¿Cuál es el empuje y la fuerza neta? (g = 10 m/s²)`,
            
            opciones: [
                "Empuje = 6.25 N, fuerza neta hacia arriba = 1.25 N",
                "Empuje = 5 N, fuerza neta = 0, flota",
                "Empuje = 5 N, fuerza neta hacia abajo = 5 N",
                "Empuje = 4 N, fuerza neta = 1 N hacia arriba",
                "Empuje = 6.25 N, fuerza neta hacia abajo = 1.25 N"
            ],
            
            correcta: 0,
            
            explicacion: `Volumen del objeto: V = m/ρ = 500 g / 0.8 g/cm³ = 625 cm³ = 6.25×10⁻⁴ m³
            
            Empuje = ρ_líquido × V × g = 1000 kg/m³ × 6.25×10⁻⁴ m³ × 10 m/s²
            Empuje = 1000 × 6.25×10⁻⁴ × 10 = 6.25 N
            
            Peso = m × g = 0.5 kg × 10 = 5 N
            
            Fuerza neta = Empuje - Peso = 6.25 - 5 = 1.25 N hacia ARRIBA
            El objeto asciende porque es menos denso que el agua.`,
            
            dificultad: 4,
            
            temas: ["Fluidos", "Principio de Arquímedes", "Empuje"],
            
            contexto: "Hidrostática"
        },
        
        // PREGUNTA 13 - Nivel 5 - Ondas (ecuación de onda)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-013',
            texto: `Una onda transversal en una cuerda tiene ecuación y(x,t) = 0.02 sen(4x - 8t) en unidades SI. ¿Cuál es su velocidad de propagación?`,
            
            opciones: [
                "2 m/s, porque v = ω/k = 8/4 = 2",
                "0.5 m/s, porque k/ω",
                "4 m/s, porque es el número de onda",
                "8 m/s, porque es la frecuencia angular",
                "32 m/s, porque 4×8"
            ],
            
            correcta: 0,
            
            explicacion: `Ecuación general: y = A sen(kx - ωt)
            donde:
            k = número de onda = 4 rad/m
            ω = frecuencia angular = 8 rad/s
            
            Velocidad de propagación: v = ω/k = 8/4 = 2 m/s
            
            La velocidad es positiva (dirección +x) porque es (kx - ωt).`,
            
            dificultad: 4,
            
            temas: ["Ondas", "Ecuación de onda", "Velocidad de fase"],
            
            contexto: "Movimiento ondulatorio"
        },
        
        // PREGUNTA 14 - Nivel 5 - Efecto Doppler
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-014',
            texto: `Una ambulancia emite un sonido de 1000 Hz y se acerca a 30 m/s hacia un observador en reposo. ¿Qué frecuencia escucha el observador? (vsound = 340 m/s)`,
            
            opciones: [
                "1097 Hz, porque f' = f × (v/(v - v_fuente))",
                "918 Hz, porque f' = f × (v/(v + v_fuente))",
                "1000 Hz, porque no cambia",
                "1030 Hz, porque 1000 + 30/340×1000",
                "970 Hz, porque se acerca"
            ],
            
            correcta: 0,
            
            explicacion: `Efecto Doppler para fuente en movimiento hacia observador en reposo:
            f' = f × [v/(v - v_fuente)]
            
            f' = 1000 × [340/(340 - 30)]
            f' = 1000 × (340/310)
            f' = 1000 × 1.0968 = 1096.8 Hz ≈ 1097 Hz
            
            La frecuencia aumenta cuando la fuente se acerca.`,
            
            dificultad: 4,
            
            temas: ["Efecto Doppler", "Ondas sonoras", "Frecuencia"],
            
            contexto: "Acústica"
        },
        
        // PREGUNTA 15 - Nivel 5 - Física moderna (efecto fotoeléctrico)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-015',
            texto: `La función de trabajo de un metal es 2.5 eV. ¿Cuál es la frecuencia umbral? (h = 4.14×10⁻¹⁵ eV·s)`,
            
            opciones: [
                "6.04×10¹⁴ Hz, porque f₀ = φ/h",
                "4.14×10¹⁴ Hz, porque es la constante",
                "2.5×10¹⁴ Hz, porque es el trabajo",
                "1.04×10¹⁵ Hz, porque φ×h",
                "0.6×10¹⁵ Hz, aproximado"
            ],
            
            correcta: 0,
            
            explicacion: `Efecto fotoeléctrico: la frecuencia umbral es la mínima para arrancar electrones.
            
            φ = h·f₀
            f₀ = φ / h = 2.5 eV / (4.14×10⁻¹⁵ eV·s)
            f₀ = (2.5 / 4.14) × 10¹⁵ = 0.604 × 10¹⁵ = 6.04×10¹⁴ Hz`,
            
            dificultad: 4,
            
            temas: ["Física moderna", "Efecto fotoeléctrico", "Constante de Planck"],
            
            contexto: "Naturaleza cuántica de la luz"
        },
        
        // PREGUNTA 16 - Nivel 5 - Capacitores (asociación)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-016',
            texto: `Tres capacitores de 2 μF, 3 μF y 6 μF se conectan en serie. ¿Cuál es la capacitancia equivalente?`,
            
            opciones: [
                "1 μF, porque 1/Ceq = 1/2 + 1/3 + 1/6 = 1",
                "11 μF, porque 2+3+6 = 11",
                "0.5 μF, porque es la mitad",
                "2 μF, porque promedio",
                "0.9 μF, aproximado"
            ],
            
            correcta: 0,
            
            explicacion: `Para capacitores en serie:
            1/Ceq = 1/C₁ + 1/C₂ + 1/C₃
            
            1/Ceq = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1
            Ceq = 1 μF
            
            La capacitancia equivalente en serie es MENOR que la menor individual.`,
            
            dificultad: 4,
            
            temas: ["Capacitores", "Circuitos de corriente continua", "Capacitancia equivalente"],
            
            contexto: "Electrostática"
        },
        
        // PREGUNTA 17 - Nivel 4 - Calorimetría
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-017',
            texto: `Se mezclan 200 g de agua a 80°C con 300 g de agua a 20°C. ¿Cuál es la temperatura final de equilibrio? (calor específico del agua = 1 cal/g°C)`,
            
            opciones: [
                "44°C, porque Qganado = Qperdido → 200(80-T) = 300(T-20)",
                "50°C, porque (80+20)/2",
                "40°C, porque 200×80 + 300×20 = 500T",
                "60°C, porque pesa más la caliente",
                "35°C, porque 200×60 = 300×15"
            ],
            
            correcta: 0,
            
            explicacion: `Principio de conservación de la energía:
            Calor perdido por agua caliente = Calor ganado por agua fría
            
            m₁c(T₁ - T) = m₂c(T - T₂)
            200(80 - T) = 300(T - 20)
            16,000 - 200T = 300T - 6,000
            16,000 + 6,000 = 300T + 200T
            22,000 = 500T
            T = 44°C`,
            
            dificultad: 3,
            
            temas: ["Calorimetría", "Equilibrio térmico", "Calor específico"],
            
            contexto: "Transferencia de calor"
        },
        
        // PREGUNTA 18 - Nivel 5 - Inducción electromagnética
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-018',
            texto: `Una bobina de 100 espiras y área 0.01 m² está en un campo magnético perpendicular de 0.5 T. Si el campo se reduce a cero en 0.1 s, ¿cuál es la fem inducida promedio?`,
            
            opciones: [
                "5 V, porque ε = -N ΔΦ/Δt = -100 × (0 - 0.5×0.01)/0.1 = 5 V",
                "0.5 V, porque ΔΦ/Δt",
                "50 V, porque 100 × 0.5",
                "10 V, porque 100 × 0.01 × 0.5/0.1",
                "1 V, porque 0.01×0.5/0.1×100"
            ],
            
            correcta: 0,
            
            explicacion: `Ley de Faraday: ε = -N ΔΦ/Δt
            
            Flujo inicial: Φ_inicial = B×A = 0.5 × 0.01 = 0.005 Wb
            Flujo final: Φ_final = 0
            ΔΦ = 0 - 0.005 = -0.005 Wb
            
            ε = -100 × (-0.005) / 0.1 = -100 × (-0.05) = 5 V
            
            El signo negativo indica dirección según Lenz, pero la magnitud es 5 V.`,
            
            dificultad: 5,
            
            temas: ["Inducción electromagnética", "Ley de Faraday", "Fem inducida"],
            
            contexto: "Electromagnetismo"
        },
        
        // PREGUNTA 19 - Nivel 5 - Movimiento armónico simple
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-019',
            texto: `Un sistema masa-resorte oscila con frecuencia 2 Hz y amplitud 0.1 m. ¿Cuál es la velocidad máxima?`,
            
            opciones: [
                "1.26 m/s, porque v_max = ωA = 2πf × A = 4π × 0.1",
                "0.2 m/s, porque 2×0.1",
                "0.63 m/s, porque 2π×0.1",
                "2.0 m/s, porque f×A×10",
                "3.14 m/s, porque π×1"
            ],
            
            correcta: 0,
            
            explicacion: `En MAS, la velocidad máxima es v_max = ωA
            ω = 2πf = 2π × 2 = 4π rad/s ≈ 12.57 rad/s
            
            v_max = 12.57 × 0.1 = 1.257 m/s ≈ 1.26 m/s
            
            Ocurre en la posición de equilibrio.`,
            
            dificultad: 4,
            
            temas: ["Movimiento armónico simple", "Velocidad máxima", "Frecuencia angular"],
            
            contexto: "Oscilaciones"
        },
        
        // PREGUNTA 20 - Nivel 5 - Relatividad especial
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'fisica-020',
            texto: `Una partícula inestable tiene vida media de 2×10⁻⁸ s en reposo. Si viaja a 0.6c, ¿qué distancia recorre en el laboratorio antes de desintegrarse?`,
            
            opciones: [
                "4.5 m, porque Δt = γτ, con γ = 1.25, distancia = v × γτ",
                "3.6 m, porque 0.6c × 2×10⁻⁸",
                "7.2 m, porque 2×3.6",
                "9.0 m, porque γ = 1.67",
                "2.25 m, porque la mitad"
            ],
            
            correcta: 0,
            
            explicacion: `Factor de Lorentz: γ = 1/√(1 - v²/c²) = 1/√(1 - 0.36) = 1/√0.64 = 1/0.8 = 1.25
            
            Tiempo de vida en laboratorio: Δt = γ·τ = 1.25 × 2×10⁻⁸ = 2.5×10⁻⁸ s
            
            Distancia recorrida: d = v × Δt = 0.6 × 3×10⁸ × 2.5×10⁻⁸
            d = 0.6 × 3 × 2.5 = 0.6 × 7.5 = 4.5 m
            
            Sin relatividad, solo recorrería 3.6 m.`,
            
            dificultad: 5,
            
            temas: ["Relatividad especial", "Dilatación del tiempo", "Transformaciones de Lorentz"],
            
            contexto: "Física de altas energías"
        }
    ];
    
    console.log("✅ datos-fisica.js cargado con 20 preguntas");
    console.log("📊 Total preguntas de física: 20");
}