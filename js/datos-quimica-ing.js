// js/datos-quimica-ing.js
// PREGUNTAS DE QUÍMICA PARA INGENIERÍA - 20 PREGUNTAS NIVEL ALTO

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    DATOS_ACUDE.preguntas.quimica_ing = [
        // PREGUNTA 1 - Nivel 5 - Termodinámica química (energía libre)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-001',
            texto: `Para una reacción química, ΔG° = -RT ln K. Si ΔG° es negativo, ¿qué podemos afirmar sobre la constante de equilibrio K?`,
            
            opciones: [
                "K > 1, lo que indica que la reacción está desplazada hacia los productos en el equilibrio",
                "K < 1, lo que indica que la reacción está desplazada hacia los reactivos",
                "K = 1, lo que indica que hay igual cantidad de reactivos y productos",
                "K = 0, lo que indica que no hay reacción",
                "K es independiente de ΔG°, no hay relación"
            ],
            
            correcta: 0,
            
            explicacion: `Relación ΔG° y K:
            • ΔG° < 0 → -RT ln K < 0 → ln K > 0 → K > 1
            • ΔG° = 0 → K = 1
            • ΔG° > 0 → K < 1
            
            K > 1 significa que en el equilibrio predominan los productos.`,
            
            dificultad: 4,
            
            temas: ["Termodinámica química", "Energía libre de Gibbs", "Constante de equilibrio"],
            
            contexto: "Equilibrio químico"
        },
        
        // PREGUNTA 2 - Nivel 5 - Cinética química (ecuación de Arrhenius)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-002',
            texto: `La ecuación de Arrhenius, k = A e^(-Ea/RT), relaciona la constante de velocidad con la temperatura. ¿Qué representa el factor pre-exponencial A?`,
            
            opciones: [
                "La frecuencia de colisiones y la orientación adecuada de las moléculas (factor estérico)",
                "La energía de activación de la reacción",
                "La constante universal de los gases",
                "El número de moléculas que reaccionan",
                "El cambio de entalpía de la reacción"
            ],
            
            correcta: 0,
            
            explicacion: `Factor A (factor de frecuencia):
            • Relacionado con la frecuencia de colisiones
            • Incluye el factor estérico (probabilidad de orientación correcta)
            • Se considera constante para pequeñas variaciones de temperatura
            • Dimensiones: mismas que k (dependen del orden de reacción)
            
            Ea es la energía de activación, R la constante de gases.`,
            
            dificultad: 5,
            
            temas: ["Cinética química", "Ecuación de Arrhenius", "Factor pre-exponencial"],
            
            contexto: "Ingeniería de reacciones"
        },
        
        // PREGUNTA 3 - Nivel 5 - Equilibrio de fases (regla de las fases)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-003',
            texto: `La regla de las fases de Gibbs (F = C - P + 2) para un sistema de un componente (C=1) con tres fases en equilibrio (sólido, líquido, vapor) indica que:`,
            
            opciones: [
                "Los grados de libertad son cero (F=0), por lo que el sistema es invariante (punto triple)",
                "Los grados de libertad son uno (F=1), por lo que podemos variar temperatura o presión",
                "Los grados de libertad son dos (F=2), por lo que podemos variar ambas",
                "Los grados de libertad son tres (F=3), sistema no definido",
                "La regla no aplica para sistemas con tres fases"
            ],
            
            correcta: 0,
            
            explicacion: `Regla de Gibbs: F = C - P + 2
            C = 1 (un componente: agua, por ejemplo)
            P = 3 (tres fases: sólido, líquido, vapor)
            
            F = 1 - 3 + 2 = 0
            
            Esto significa que el sistema es INVARIANTE: solo existe a una temperatura y presión únicas (el punto triple). No podemos cambiar ninguna variable sin que desaparezca una fase.`,
            
            dificultad: 5,
            
            temas: ["Equilibrio de fases", "Regla de Gibbs", "Punto triple"],
            
            contexto: "Termodinámica"
        },
        
        // PREGUNTA 4 - Nivel 5 - Electroquímica (ecuación de Nernst)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-004',
            texto: `La ecuación de Nernst, E = E° - (RT/nF) ln Q, permite calcular el potencial de una celda en condiciones no estándar. Para una celda con n=2 electrones, a 25°C, ¿cuál es el valor de (RT/nF) ln Q en voltios?`,
            
            opciones: [
                "(0.0592/2) log Q, porque RT/F = 0.0257 V, multiplicado por 2.303 da 0.0592, y dividido por n",
                "(0.0257/2) ln Q, que es la forma natural",
                "(0.0592) log Q, sin dividir por n",
                "(0.0257) ln Q, sin dividir",
                "(8.314×298/96500) ln Q, que es correcto pero no simplificado"
            ],
            
            correcta: 0,
            
            explicacion: `A 25°C (298 K):
            RT/F = (8.314 × 298) / 96485 = 0.0257 V
            Para pasar de ln a log: 2.303 × 0.0257 = 0.0592 V
            
            Ecuación práctica: E = E° - (0.0592/n) log Q
            
            Para n=2: (0.0592/2) log Q = 0.0296 log Q`,
            
            dificultad: 5,
            
            temas: ["Electroquímica", "Ecuación de Nernst", "Potencial de celda"],
            
            contexto: "Ingeniería electroquímica"
        },
        
        // PREGUNTA 5 - Nivel 5 - Química de polímeros (grado de polimerización)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-005',
            texto: `El grado de polimerización (DP) de un polímero se define como:`,
            
            opciones: [
                "El número de unidades monoméricas en la cadena polimérica promedio (DP = Mn / M0, donde Mn es masa molecular promedio y M0 masa del monómero)",
                "La masa molecular total del polímero",
                "La temperatura de fusión del polímero",
                "La cristalinidad del material",
                "El tiempo de reacción de polimerización"
            ],
            
            correcta: 0,
            
            explicacion: `Grado de polimerización (DP):
            • DP = número promedio de unidades monoméricas por cadena
            • Relación con masa molecular: Mn = DP × M0 (Mn = masa molecular promedio numérica, M0 = masa del monómero)
            • Afecta propiedades: mayor DP → mayor resistencia, mayor viscosidad
            
            Ejemplo: polietileno con Mn = 56,000 g/mol, M0 = 28 g/mol → DP = 2,000`,
            
            dificultad: 4,
            
            temas: ["Polímeros", "Grado de polimerización", "Ciencia de materiales"],
            
            contexto: "Ingeniería de materiales"
        },
        
        // PREGUNTA 6 - Nivel 5 - Catálisis (energía de activación)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-006',
            texto: `Un catalizador aumenta la velocidad de reacción porque:`,
            
            opciones: [
                "Disminuye la energía de activación (Ea) al proporcionar un camino de reacción alternativo",
                "Aumenta la temperatura del sistema",
                "Aumenta la concentración de los reactivos",
                "Aumenta la constante de equilibrio (K)",
                "Disminuye la entalpía de reacción (ΔH)"
            ],
            
            correcta: 0,
            
            explicacion: `Mecanismo de catálisis:
            • El catalizador participa en la reacción pero se regenera al final
            • Proporciona un mecanismo alternativo con MENOR energía de activación
            • NO cambia ΔG° ni K (solo acelera el equilibrio, no lo desplaza)
            • NO se consume en la reacción
            
            La ecuación de Arrhenius: k = A e^(-Ea/RT) → menor Ea, mayor k.`,
            
            dificultad: 4,
            
            temas: ["Catálisis", "Cinética química", "Energía de activación"],
            
            contexto: "Ingeniería de reacciones"
        },
        
        // PREGUNTA 7 - Nivel 5 - Balance de materia (reactor continuo)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-007',
            texto: `En un reactor continuo de tanque agitado (CSTR) en estado estacionario, con una reacción de primer orden A → productos, la ecuación de diseño es: V = FA0 × X / (-rA). ¿Qué significa cada término?`,
            
            opciones: [
                "V = volumen del reactor, FA0 = flujo molar de entrada, X = conversión, -rA = velocidad de reacción",
                "V = velocidad, FA0 = flujo másico, X = tiempo, -rA = constante",
                "V = viscosidad, FA0 = área, X = posición, -rA = densidad",
                "V = voltaje, FA0 = corriente, X = resistencia, -rA = potencia",
                "V = volumen, FA0 = flujo volumétrico, X = concentración, -rA = temperatura"
            ],
            
            correcta: 0,
            
            explicacion: `Ecuación de diseño para CSTR:
            • V = volumen del reactor (L o m³)
            • FA0 = flujo molar de A a la entrada (mol/s)
            • X = conversión fraccional (0 a 1)
            • -rA = velocidad de reacción (mol/L·s)
            
            Balance: Entrada = Salida + Desaparición por reacción
            FA0 = FA0(1-X) + (-rA)V → FA0 X = (-rA)V`,
            
            dificultad: 5,
            
            temas: ["Ingeniería de reactores", "Balance de materia", "CSTR"],
            
            contexto: "Ingeniería química"
        },
        
        // PREGUNTA 8 - Nivel 5 - Transferencia de masa (ley de Fick)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-008',
            texto: `La primera ley de Fick para difusión establece que:`,
            
            opciones: [
                "El flujo de materia es proporcional al gradiente de concentración: J = -D (dC/dx)",
                "La velocidad de difusión es proporcional al tiempo",
                "La concentración cambia linealmente con el tiempo",
                "El flujo es independiente de la concentración",
                "La difusión solo ocurre en gases"
            ],
            
            correcta: 0,
            
            explicacion: `Primera ley de Fick (estado estacionario):
            J = -D (dC/dx)
            donde:
            • J = flujo molar (mol/m²·s)
            • D = difusividad (m²/s)
            • dC/dx = gradiente de concentración
            
            El signo negativo indica que el flujo va de mayor a menor concentración.`,
            
            dificultad: 4,
            
            temas: ["Transferencia de masa", "Difusión", "Ley de Fick"],
            
            contexto: "Fenómenos de transporte"
        },
        
        // PREGUNTA 9 - Nivel 5 - Número de Reynolds (flujo de fluidos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-009',
            texto: `El número de Reynolds (Re) es un parámetro adimensional que indica:`,
            
            opciones: [
                "Si el flujo es laminar (Re < 2000), turbulento (Re > 4000) o de transición, relacionando fuerzas inerciales y viscosas",
                "La velocidad del fluido en una tubería",
                "La densidad del fluido únicamente",
                "La caída de presión en el sistema",
                "La transferencia de calor en el fluido"
            ],
            
            correcta: 0,
            
            explicacion: `Número de Reynolds: Re = ρ v D / μ = v D / ν
            donde:
            • ρ = densidad, v = velocidad, D = diámetro, μ = viscosidad dinámica, ν = viscosidad cinemática
            
            Interpretación:
            • Re < 2000: laminar (capas paralelas, dominan fuerzas viscosas)
            • 2000 < Re < 4000: transición
            • Re > 4000: turbulento (dominAN fuerzas inerciales, caos)
            
            Es fundamental en mecánica de fluidos.`,
            
            dificultad: 4,
            
            temas: ["Mecánica de fluidos", "Número de Reynolds", "Fenómenos de transporte"],
            
            contexto: "Ingeniería química"
        },
        
        // PREGUNTA 10 - Nivel 5 - Equilibrio líquido-vapor (ley de Raoult)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-010',
            texto: `La ley de Raoult para una solución ideal establece que:`,
            
            opciones: [
                "La presión parcial de un componente en el vapor es igual a su fracción molar en el líquido multiplicada por su presión de vapor pura: Pi = xi × Pi°",
                "La presión total es la suma de las presiones parciales",
                "El volumen de la solución es la suma de los volúmenes de los componentes",
                "La temperatura de ebullición aumenta linealmente con la concentración",
                "La viscosidad es proporcional a la concentración"
            ],
            
            correcta: 0,
            
            explicacion: `Ley de Raoult (soluciones ideales):
            • Pi = xi × Pi° (presión parcial = fracción molar en líquido × presión de vapor pura)
            • Válida cuando las interacciones moleculares A-A, B-B y A-B son similares
            • Combinada con Dalton: P_total = Σ Pi = Σ xi × Pi°
            
            Para soluciones no ideales se usan coeficientes de actividad (γ).`,
            
            dificultad: 4,
            
            temas: ["Equilibrio de fases", "Ley de Raoult", "Termodinámica de soluciones"],
            
            contexto: "Ingeniería química"
        },
        
        // PREGUNTA 11 - Nivel 5 - Reactores (tiempo espacial)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-011',
            texto: `En un reactor de flujo pistón (PFR), el tiempo espacial (τ) se define como:`,
            
            opciones: [
                "τ = V / v0, donde V es volumen del reactor y v0 es el flujo volumétrico de entrada",
                "τ = v0 / V, inverso del tiempo de residencia",
                "τ = CA0 / (-rA), tiempo de reacción característico",
                "τ = L / u, longitud sobre velocidad",
                "τ = k × CA0, constante de tiempo"
            ],
            
            correcta: 0,
            
            explicacion: `Tiempo espacial (τ):
            • τ = V / v0 (unidades de tiempo)
            • Es el tiempo necesario para procesar un volumen de alimentación igual al volumen del reactor
            • Relacionado con el tiempo de residencia promedio
            • Para PFR, la ecuación de diseño: τ = CA0 ∫ dX / (-rA)
            
            El inverso (v0/V) es la velocidad espacial (espacio-velocidad).`,
            
            dificultad: 5,
            
            temas: ["Ingeniería de reactores", "Tiempo espacial", "PFR"],
            
            contexto: "Diseño de reactores"
        },
        
        // PREGUNTA 12 - Nivel 5 - Termodinámica (ciclo de Carnot)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-012',
            texto: `La eficiencia máxima de una máquina térmica que opera entre dos fuentes a temperaturas T1 (caliente) y T2 (fría) está dada por:`,
            
            opciones: [
                "η = 1 - T2/T1 (temperaturas absolutas, en Kelvin)",
                "η = 1 - T1/T2, que daría negativa",
                "η = (T1 - T2) / T2",
                "η = T1 / (T1 - T2)",
                "η = (T1 + T2) / T1"
            ],
            
            correcta: 0,
            
            explicacion: `Ciclo de Carnot (reversible):
            • Eficiencia térmica: η = 1 - T2/T1
            • T1 y T2 en Kelvin (siempre positivas)
            • Es la MÁXIMA eficiencia posible entre esas temperaturas
            • Ninguna máquina real puede superarla
            
            Ejemplo: T1 = 500 K, T2 = 300 K → η = 1 - 300/500 = 1 - 0.6 = 0.4 (40%)`,
            
            dificultad: 4,
            
            temas: ["Termodinámica", "Ciclo de Carnot", "Eficiencia térmica"],
            
            contexto: "Ingeniería energética"
        },
        
        // PREGUNTA 13 - Nivel 5 - Transferencia de calor (número de Nusselt)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-013',
            texto: `El número de Nusselt (Nu) en transferencia de calor se define como:`,
            
            opciones: [
                "Nu = h L / k, donde h es coeficiente de transferencia de calor, L longitud característica, k conductividad térmica del fluido",
                "Nu = ρ v L / μ, que es el número de Reynolds",
                "Nu = μ cp / k, que es el número de Prandtl",
                "Nu = α t / L², número de Fourier",
                "Nu = q / (k ΔT), flujo de calor"
            ],
            
            correcta: 0,
            
            explicacion: `Número de Nusselt (Nu):
            • Relación entre transferencia de calor por convección y conducción
            • Nu = h L / k
            • Para convección forzada en tubos, Nu ≈ 0.023 Re^0.8 Pr^0.4 (Dittus-Boelter)
            • Nu = 1 para conducción pura en una placa plana
            
            Es fundamental en correlaciones de transferencia de calor.`,
            
            dificultad: 5,
            
            temas: ["Transferencia de calor", "Números adimensionales", "Convección"],
            
            contexto: "Fenómenos de transporte"
        },
        
        // PREGUNTA 14 - Nivel 5 - Diagrama de fases (regla de la palanca)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-014',
            texto: `En un diagrama de fases binario, la regla de la palanca permite calcular:`,
            
            opciones: [
                "Las proporciones relativas de dos fases en equilibrio en una región bifásica",
                "La temperatura de fusión de la aleación",
                "La composición del eutéctico",
                "La solubilidad máxima de un componente en otro",
                "La densidad de las fases presentes"
            ],
            
            correcta: 0,
            
            explicacion: `Regla de la palanca (diagramas de fases):
            • Se aplica en regiones de dos fases
            • % de fase α = (Xβ - X0) / (Xβ - Xα) × 100
            • % de fase β = (X0 - Xα) / (Xβ - Xα) × 100
            donde X0 es composición global, Xα y Xβ son composiciones de las fases en equilibrio
            
            Es análoga a una palanca física: el punto de composición global es el fulcro.`,
            
            dificultad: 4,
            
            temas: ["Diagramas de fases", "Regla de la palanca", "Ciencia de materiales"],
            
            contexto: "Ingeniería de materiales"
        },
        
        // PREGUNTA 15 - Nivel 5 - Reactores (selectividad)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-015',
            texto: `En reacciones múltiples, la selectividad (S) se define como:`,
            
            opciones: [
                "La relación entre la velocidad de formación del producto deseado y la velocidad de formación del producto no deseado (o del reactivo consumido)",
                "La conversión del reactivo limitante",
                "El rendimiento del producto dividido por la conversión",
                "La constante de velocidad de la reacción principal",
                "El tiempo de residencia en el reactor"
            ],
            
            correcta: 0,
            
            explicacion: `Selectividad (importante en reacciones complejas):
            • SELECTIVIDAD INSTANTÁNEA: S = rD / rU (deseado / no deseado)
            • SELECTIVIDAD GLOBAL: S = moles de producto deseado / moles de producto no deseado
            • RENDIMIENTO: Y = (moles de producto deseado) / (moles de reactivo alimentado)
            
            Optimizar selectividad es clave en ingeniería de reacciones.`,
            
            dificultad: 5,
            
            temas: ["Ingeniería de reactores", "Selectividad", "Reacciones múltiples"],
            
            contexto: "Diseño de reactores"
        },
        
        // PREGUNTA 16 - Nivel 5 - Corrosión (serie galvánica)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-016',
            texto: `Cuando dos metales diferentes están en contacto eléctrico en un electrolito, el metal más activo (más anódico) sufre corrosión. ¿Qué metal se corroerá en un par Zn-Cu?`,
            
            opciones: [
                "El Zn (ánodo) se oxida: Zn → Zn²⁺ + 2e⁻, protegiendo al Cu (cátodo)",
                "El Cu (ánodo) se oxida, protegiendo al Zn",
                "Ambos se corroen por igual",
                "Ninguno se corroe si están en contacto",
                "Depende del electrolito exclusivamente"
            ],
            
            correcta: 0,
            
            explicacion: `Serie galvánica (potenciales estándar):
            • Zn²⁺/Zn: E° = -0.76 V (más activo, anódico)
            • Cu²⁺/Cu: E° = +0.34 V (más noble, catódico)
            
            En el par galvánico, el Zn (más negativo) actúa como ÁNODO y se oxida (corroe), protegiendo al Cu que actúa como CÁTODO.
            
            Esto se usa en protección catódica (ánodos de sacrificio).`,
            
            dificultad: 4,
            
            temas: ["Corrosión", "Serie galvánica", "Electroquímica"],
            
            contexto: "Ingeniería de materiales"
        },
        
        // PREGUNTA 17 - Nivel 5 - Diagrama de Pourbaix
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-017',
            texto: `Un diagrama de Pourbaix (potencial-pH) muestra:`,
            
            opciones: [
                "Las regiones de estabilidad termodinámica de las especies de un metal en función del potencial y pH, indicando zonas de inmunidad, corrosión y pasivación",
                "La velocidad de corrosión en función del tiempo",
                "La composición de fases en equilibrio térmico",
                "La resistencia mecánica de un material",
                "La conductividad eléctrica en función de la temperatura"
            ],
            
            correcta: 0,
            
            explicacion: `Diagramas de Pourbaix:
            • Eje Y: potencial electroquímico (vs SHE)
            • Eje X: pH
            • Muestran especies termodinámicamente estables
            • REGIONES: inmunidad (metal estable), corrosión (iones solubles), pasivación (óxidos/hidróxidos estables)
            
            Útiles para predecir corrosión y diseñar protección.`,
            
            dificultad: 5,
            
            temas: ["Corrosión", "Diagramas de Pourbaix", "Electroquímica"],
            
            contexto: "Ingeniería de materiales"
        },
        
        // PREGUNTA 18 - Nivel 5 - Operaciones unitarias (destilación)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-018',
            texto: `En una columna de destilación, el plato de alimentación óptimo se determina por el método de McCabe-Thiele. ¿Qué condición se busca?`,
            
            opciones: [
                "Que el escalón que contiene la alimentación cruce la línea de alimentación (q-line) en el punto óptimo para minimizar el número de platos",
                "Que la alimentación entre siempre por el plato superior",
                "Que la alimentación entre siempre por el plato inferior",
                "Que la columna tenga el mismo número de platos en ambas secciones",
                "Que el reflujo sea mínimo"
            ],
            
            correcta: 0,
            
            explicacion: `Método McCabe-Thiele (destilación binaria):
            • Se construyen rectas de operación (sección de rectificación y agotamiento)
            • La línea de alimentación (q-line) depende de la condición térmica del alimento
            • El plato óptimo es donde el escalón cruza la intersección de las rectas de operación y la q-line
            • Esto minimiza el número total de platos teóricos
            
            Es un método gráfico fundamental en diseño de columnas.`,
            
            dificultad: 5,
            
            temas: ["Operaciones unitarias", "Destilación", "McCabe-Thiele"],
            
            contexto: "Ingeniería química"
        },
        
        // PREGUNTA 19 - Nivel 5 - Balance de energía (ecuación de Bernoulli)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-019',
            texto: `La ecuación de Bernoulli para flujo de fluidos incompresibles sin fricción establece que:`,
            
            opciones: [
                "P/ρ + v²/2 + gz = constante a lo largo de una línea de corriente",
                "P × v = constante",
                "P + ρv²/2 = constante",
                "ρv²/2 + gz = constante",
                "P/ρ + v² = constante"
            ],
            
            correcta: 0,
            
            explicacion: `Ecuación de Bernoulli (fluido ideal, incompresible, estacionario):
            • P/ρ + v²/2 + gz = constante
            • Cada término representa energía por unidad de masa: presión, cinética, potencial
            • Se conserva a lo largo de una línea de corriente si no hay fricción ni trabajo externo
            
            Unidades: [P/ρ] = (N/m²)/(kg/m³) = (kg·m/s²/m²)/(kg/m³) = m²/s² (energía/masa).`,
            
            dificultad: 4,
            
            temas: ["Mecánica de fluidos", "Ecuación de Bernoulli", "Balance de energía"],
            
            contexto: "Fenómenos de transporte"
        },
        
        // PREGUNTA 20 - Nivel 5 - Polimerización (tipos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'quimica-ing-020',
            texto: `La polimerización por etapas (condensación) se diferencia de la polimerización en cadena (adición) en que:`,
            
            opciones: [
                "En la polimerización por etapas, el peso molecular aumenta lentamente y se requiere alta conversión para obtener polímero de alto peso molecular",
                "En la polimerización por etapas, el peso molecular es alto desde el inicio",
                "En la polimerización por etapas, se requieren iniciadores radicalarios",
                "La polimerización por etapas es siempre más rápida",
                "No hay diferencia, son sinónimos"
            ],
            
            correcta: 0,
            
            explicacion: `Diferencias clave:
            • POLIMERIZACIÓN EN CADENA: monómero se añade uno a uno a cadena activa; alto PM desde bajo monómero; requiere iniciador (radical, iónico)
            • POLIMERIZACIÓN POR ETAPAS: cualquier dos especies (monómero, oligómero, polímero) pueden reaccionar; PM aumenta lentamente con conversión; se libera subproducto a veces (condensación)
            
            Ejemplos: adición → polietileno; etapas → nylon, poliéster.`,
            
            dificultad: 5,
            
            temas: ["Polímeros", "Polimerización", "Ciencia de materiales"],
            
            contexto: "Ingeniería de materiales"
        }
    ];
    
    console.log("✅ datos-quimica-ing.js cargado con 20 preguntas");
    console.log("📊 Total preguntas de química para ingeniería: 20");
}