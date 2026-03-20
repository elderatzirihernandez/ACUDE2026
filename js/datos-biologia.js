// js/datos-biologia.js
// PREGUNTAS DE BIOLOGÍA - 20 PREGUNTAS NIVEL ALTO

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    DATOS_ACUDE.preguntas.biologia = [
        // PREGUNTA 1 - Nivel 5 - Fotosíntesis (fases y ubicación)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-001',
            texto: `Un científico trata una muestra de cloroplastos con un inhibidor que bloquea específicamente el complejo del citocromo b6f. ¿Cuál de los siguientes procesos se verá directamente afectado?`,
            
            opciones: [
                "El flujo de electrones entre el fotosistema II y el fotosistema I",
                "La fotólisis del agua en el fotosistema II",
                "La síntesis de ATP en la fotofosforilación cíclica",
                "La fijación de CO₂ en el ciclo de Calvin",
                "La regeneración de RuBP en el estroma"
            ],
            
            correcta: 0,
            
            explicacion: `El complejo citocromo b6f es parte de la cadena de transporte de electrones en la fotosíntesis. Su función es:
            • Recibir electrones de la plastoquinona (proveniente del FSII)
            • Transferirlos a la plastocianina (que va al FSI)
            
            Bloquearlo detiene el flujo de electrones entre ambos fotosistemas, afectando la cadena lineal.`,
            
            dificultad: 5,
            
            temas: ["Fotosíntesis", "Cadena transportadora de electrones", "Cloroplastos"],
            
            contexto: "Bioquímica vegetal avanzada"
        },
        
        // PREGUNTA 2 - Nivel 5 - Genética (ligamiento y recombinación)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-002',
            texto: `En un experimento con Drosophila, se cruza una hembra heterocigota para dos genes ligados (A y B) con un macho doble recesivo. La descendencia muestra: 400 parentales, 100 recombinantes. ¿Cuál es la distancia de mapa entre estos genes?`,
            
            opciones: [
                "20 unidades de mapa, porque (100/500) × 100 = 20% de recombinación",
                "10 unidades de mapa, porque solo la mitad son recombinantes",
                "25 unidades de mapa, porque 100/400 = 0.25",
                "5 unidades de mapa, porque hay poca recombinación",
                "50 unidades de mapa, porque están en cromosomas diferentes"
            ],
            
            correcta: 0,
            
            explicacion: `La frecuencia de recombinación = (número de recombinantes / total) × 100
            Total = 400 + 100 = 500
            FR = (100/500) × 100 = 20%
            
            1% de recombinación = 1 unidad de mapa (centiMorgan)
            Por lo tanto, distancia = 20 u.m.`,
            
            dificultad: 5,
            
            temas: ["Genética", "Ligamiento", "Recombinación", "Mapas genéticos"],
            
            contexto: "Genética de Drosophila"
        },
        
        // PREGUNTA 3 - Nivel 4 - Ciclo de Krebs (puntos de control)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-003',
            texto: `¿Cuál de las siguientes enzimas del ciclo de Krebs es inhibida por altas concentraciones de ATP y NADH, actuando como principal punto de regulación?`,
            
            opciones: [
                "Isocitrato deshidrogenasa",
                "Citrato sintasa",
                "Succinato deshidrogenasa",
                "Fumarasa",
                "Malato deshidrogenasa"
            ],
            
            correcta: 0,
            
            explicacion: `La isocitrato deshidrogenasa es el principal punto de regulación del ciclo de Krebs:
            • Inhibida por: ATP y NADH (alta energía)
            • Activada por: ADP y NAD⁺
            
            Esto asegura que el ciclo solo funcione cuando la célula necesita energía.`,
            
            dificultad: 4,
            
            temas: ["Ciclo de Krebs", "Regulación metabólica", "Bioenergética"],
            
            contexto: "Metabolismo celular"
        },
        
        // PREGUNTA 4 - Nivel 5 - Expresión génica (operón lac)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-004',
            texto: `En E. coli, si hay alta concentración de glucosa y baja de lactosa, ¿cuál es el estado del operón lac?`,
            
            opciones: [
                "Reprimido por catabolito, porque la glucosa baja el AMPc y no se activa CAP",
                "Inducido, porque la lactosa está presente aunque sea poca",
                "Reprimido por el represor lac, porque no hay lactosa",
                "Inducido por la glucosa, porque es la fuente preferida",
                "Parcialmente activo, porque hay lactosa pero también glucosa"
            ],
            
            correcta: 0,
            
            explicacion: `Con glucosa alta → AMPc bajo → CAP no activado
            Con lactosa baja → el represor lac bloquea el operón
            
            El operón lac requiere DOS condiciones:
            1. Ausencia de glucosa (para activar CAP)
            2. Presencia de lactosa (para inactivar el represor)
            
            Si falta cualquiera, el operón está reprimido.`,
            
            dificultad: 5,
            
            temas: ["Operón lac", "Regulación génica", "E. coli"],
            
            contexto: "Microbiología molecular"
        },
        
        // PREGUNTA 5 - Nivel 4 - Transporte a través de membrana
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-005',
            texto: `Una célula se coloca en una solución hipotónica. ¿Qué ocurrirá con el volumen celular si la célula tiene pared celular?`,
            
            opciones: [
                "Aumenta hasta que la presión de turgencia iguala la presión osmótica",
                "Aumenta hasta reventar (lisis)",
                "Disminuye por pérdida de agua",
                "No cambia porque la pared es rígida",
                "Aumenta y luego disminuye"
            ],
            
            correcta: 0,
            
            explicacion: `Célula con pared (vegetal, bacteria):
            • Entra agua por ósmosis
            • La pared ejerce presión (presión de turgencia)
            • Se alcanza equilibrio sin lisis
            
            Célula sin pared (animal): sufre lisis en medio hipotónico.`,
            
            dificultad: 4,
            
            temas: ["Ósmosis", "Pared celular", "Presión de turgencia"],
            
            contexto: "Fisiología celular"
        },
        
        // PREGUNTA 6 - Nivel 5 - Ciclo celular (puntos de control)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-006',
            texto: `El gen p53 es conocido como "el guardián del genoma". ¿En qué punto de control del ciclo celular actúa principalmente y qué hace?`,
            
            opciones: [
                "En G1/S, deteniendo el ciclo si hay daño en el ADN para permitir reparación o apoptosis",
                "En G2/M, verificando la correcta replicación del ADN",
                "En metafase, asegurando la correcta alineación cromosómica",
                "En la fase S, controlando la velocidad de replicación",
                "En todos los puntos de control simultáneamente"
            ],
            
            correcta: 0,
            
            explicacion: `p53 actúa principalmente en el punto de control G1/S:
            • Detecta daño en el ADN
            • Activa p21 que inhibe CDK
            • Detiene el ciclo en G1
            • Si el daño es irreparable, induce apoptosis
            
            Por eso es el gen supresor de tumores más importante.`,
            
            dificultad: 5,
            
            temas: ["Ciclo celular", "p53", "Puntos de control", "Cáncer"],
            
            contexto: "Biología molecular del cáncer"
        },
        
        // PREGUNTA 7 - Nivel 4 - Ecología (sucesión ecológica)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-007',
            texto: `Después de un incendio forestal, se observa que primero crecen pastos y hierbas, luego arbustos, y finalmente árboles. ¿Qué tipo de sucesión es esta?`,
            
            opciones: [
                "Sucesión secundaria, porque ya existía suelo y comunidad previa",
                "Sucesión primaria, porque el fuego destruyó todo",
                "Sucesión autogénica, porque los organismos modifican el ambiente",
                "Sucesión alogénica, por cambios externos",
                "Sucesión degradativa, porque hay pérdida de biomasa"
            ],
            
            correcta: 0,
            
            explicacion: `Sucesión secundaria: ocurre en áreas donde existía una comunidad previa y el suelo permanece.
            • Incendios, inundaciones, agricultura abandonada
            • Más rápida que la primaria
            
            Sucesión primaria: en áreas sin suelo (rocas, lava).`,
            
            dificultad: 4,
            
            temas: ["Sucesión ecológica", "Ecología de comunidades"],
            
            contexto: "Ecología aplicada"
        },
        
        // PREGUNTA 8 - Nivel 5 - Fisiología (potencial de acción)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-008',
            texto: `Durante la fase de despolarización del potencial de acción neuronal, ¿qué canales iónicos se abren y en qué dirección fluye el ion?`,
            
            opciones: [
                "Canales de Na⁺ dependientes de voltaje, entra Na⁺",
                "Canales de K⁺ dependientes de voltaje, sale K⁺",
                "Canales de Ca²⁺, entra Ca²⁺",
                "Canales de Cl⁻, entra Cl⁻",
                "Bombas de Na⁺/K⁺, saca Na⁺ y entra K⁺"
            ],
            
            correcta: 0,
            
            explicacion: `Fases del potencial de acción:
            1. Despolarización: apertura de canales de Na⁺, entra Na⁺ (interior menos negativo)
            2. Repolarización: canales de Na⁺ se inactivan, se abren canales de K⁺, sale K⁺
            3. Hiperpolarización: canales de K⁺ lentos en cerrarse
            
            La bomba Na⁺/K⁺ mantiene los gradientes, pero no genera el potencial de acción.`,
            
            dificultad: 5,
            
            temas: ["Potencial de acción", "Canales iónicos", "Neurofisiología"],
            
            contexto: "Fisiología neuronal"
        },
        
        // PREGUNTA 9 - Nivel 4 - Evolución (selección natural)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-009',
            texto: `En una población de insectos, los individuos con coloración intermedia tienen mayor supervivencia que los muy claros o muy oscuros. ¿Qué tipo de selección está actuando?`,
            
            opciones: [
                "Selección estabilizadora",
                "Selección direccional",
                "Selección disruptiva",
                "Selección sexual",
                "Deriva génica"
            ],
            
            correcta: 0,
            
            explicacion: `Tipos de selección natural:
            • Estabilizadora: favorece fenotipos intermedios (elimina extremos)
            • Direccional: favorece un extremo
            • Disruptiva: favorece ambos extremos (elimina intermedios)
            
            El ejemplo describe selección estabilizadora.`,
            
            dificultad: 4,
            
            temas: ["Selección natural", "Evolución", "Fenotipos"],
            
            contexto: "Biología evolutiva"
        },
        
        // PREGUNTA 10 - Nivel 5 - Bioquímica (enzimas y cinética)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-010',
            texto: `Un inhibidor competitivo de una enzima:`,
            
            opciones: [
                "Aumenta la Km sin afectar la Vmax",
                "Disminuye la Vmax sin afectar la Km",
                "Aumenta tanto Km como Vmax",
                "Disminuye ambas, Km y Vmax",
                "No afecta los parámetros cinéticos"
            ],
            
            correcta: 0,
            
            explicacion: `Efectos de inhibidores en cinética enzimática (Michaelis-Menten):
            
            Inhibidor competitivo:
            • Compite con sustrato por sitio activo
            • ↑ Km (menor afinidad aparente)
            • Vmax sin cambios (con suficiente sustrato)
            
            Inhibidor no competitivo:
            • Se une a otro sitio
            • Km sin cambios
            • ↓ Vmax`,
            
            dificultad: 5,
            
            temas: ["Enzimas", "Cinética enzimática", "Inhibición"],
            
            contexto: "Bioquímica avanzada"
        },
        
        // PREGUNTA 11 - Nivel 4 - Reproducción celular (mitosis vs meiosis)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-011',
            texto: `¿Cuál de los siguientes eventos ocurre en meiosis I pero NO en mitosis?`,
            
            opciones: [
                "Apareamiento de cromosomas homólogos y entrecruzamiento",
                "Separación de cromátidas hermanas",
                "Alineación de cromosomas en el ecuador",
                "Formación del huso acromático",
                "Desaparición de la membrana nuclear"
            ],
            
            correcta: 0,
            
            explicacion: `Eventos exclusivos de meiosis I:
            • Sinapsis (apareamiento de homólogos)
            • Entrecruzamiento (crossing over)
            • Separación de homólogos (no de cromátidas)
            
            La separación de cromátidas ocurre en mitosis y meiosis II.`,
            
            dificultad: 4,
            
            temas: ["Mitosis", "Meiosis", "División celular"],
            
            contexto: "Biología celular"
        },
        
        // PREGUNTA 12 - Nivel 5 - Inmunología (anticuerpos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-012',
            texto: `Una persona es vacunada contra el virus de la hepatitis B. ¿Qué tipo de inmunidad adquiere y qué células son responsables de la memoria inmunológica?`,
            
            opciones: [
                "Inmunidad activa artificial, linfocitos B y T de memoria",
                "Inmunidad pasiva natural, anticuerpos maternos",
                "Inmunidad activa natural, por infección",
                "Inmunidad pasiva artificial, suero con anticuerpos",
                "Inmunidad innata, fagocitos"
            ],
            
            correcta: 0,
            
            explicacion: `Vacunación = inmunidad ACTIVA ARTIFICIAL
            • Activa: el organismo produce su propia respuesta
            • Artificial: inducida por intervención médica
            
            La memoria inmunológica reside en linfocitos B y T de memoria.`,
            
            dificultad: 5,
            
            temas: ["Inmunología", "Vacunas", "Memoria inmunológica"],
            
            contexto: "Inmunización y salud pública"
        },
        
        // PREGUNTA 13 - Nivel 4 - Genética molecular (código genético)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-013',
            texto: `Si un triplete de ADN es 5'-TAC-3', ¿cuál será el anticodón correspondiente en el tRNA?`,
            
            opciones: [
                "3'-AUG-5'",
                "5'-AUG-3'",
                "3'-UAC-5'",
                "5'-UAC-3'",
                "3'-TAC-5'"
            ],
            
            correcta: 0,
            
            explicacion: `Flujo de información:
            ADN: 5'-TAC-3'
            ARNm (transcripción): 3'-AUG-5' en la cadena complementaria? No, mejor:
            
            La cadena molde es complementaria: Si la cadena es 5'-TAC-3', el ARNm será complementario y antiparalelo: 3'-AUG-5' (pero se escribe 5'-AUG-3')
            
            El anticodón del tRNA es complementario al codón del ARNm y antiparalelo.`,
            
            dificultad: 4,
            
            temas: ["Código genético", "Transcripción", "Traducción"],
            
            contexto: "Biología molecular"
        },
        
        // PREGUNTA 14 - Nivel 5 - Fotosíntesis (fotorespiración)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-014',
            texto: `En condiciones de alta temperatura y baja concentración de CO₂, la enzima Rubisco puede fijar O₂ en lugar de CO₂. ¿Cómo se llama este proceso y qué consecuencias tiene?`,
            
            opciones: [
                "Fotorrespiración, consume ATP y libera CO₂ sin producir azúcares",
                "Fotosíntesis C4, concentra CO₂ en células de la vaina",
                "Ciclo de Calvin, produce carbohidratos",
                "Fosforilación oxidativa, produce ATP",
                "Ciclo de Krebs, produce NADH"
            ],
            
            correcta: 0,
            
            explicacion: `La fotorrespiración ocurre cuando Rubisco actúa como oxigenasa:
            • Fija O₂ en lugar de CO₂
            • Produce fosfoglicolato (tóxico)
            • Requiere ATP y libera CO₂
            • NO produce azúcares (pérdida de eficiencia)
            
            Plantas C4 y CAM evolucionaron para evitarlo.`,
            
            dificultad: 5,
            
            temas: ["Fotorrespiración", "Rubisco", "Metabolismo vegetal"],
            
            contexto: "Fisiología vegetal avanzada"
        },
        
        // PREGUNTA 15 - Nivel 4 - Ecología (flujo de energía)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-015',
            texto: `Si en un ecosistema los productores tienen 10,000 kcal, y la eficiencia de transferencia entre niveles tróficos es del 10%, ¿cuánta energía llegará a los consumidores terciarios?`,
            
            opciones: [
                "10 kcal, porque pasa por tres niveles: 10,000 → 1,000 → 100 → 10",
                "100 kcal, calculando 10,000 × 0.1³",
                "1,000 kcal, solo un nivel de transferencia",
                "0.1 kcal, porque la eficiencia es baja",
                "1 kcal, porque se pierde mucho"
            ],
            
            correcta: 0,
            
            explicacion: `Flujo de energía en cadena trófica:
            Productores (nivel 1): 10,000 kcal
            Consumidores primarios (nivel 2): 10,000 × 0.1 = 1,000 kcal
            Consumidores secundarios (nivel 3): 1,000 × 0.1 = 100 kcal
            Consumidores terciarios (nivel 4): 100 × 0.1 = 10 kcal
            
            La regla del 10% explica la pirámide de energía.`,
            
            dificultad: 4,
            
            temas: ["Flujo de energía", "Niveles tróficos", "Ecología"],
            
            contexto: "Ecología de ecosistemas"
        },
        
        // PREGUNTA 16 - Nivel 5 - Genética de poblaciones (equilibrio Hardy-Weinberg)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-016',
            texto: `En una población en equilibrio Hardy-Weinberg, la frecuencia del alelo recesivo (a) es 0.3. ¿Cuál es la frecuencia de individuos heterocigotos?`,
            
            opciones: [
                "0.42, porque 2pq = 2 × 0.7 × 0.3 = 0.42",
                "0.09, porque q² = 0.09",
                "0.49, porque p² = 0.49",
                "0.21, porque pq = 0.21",
                "0.58, porque p² + 2pq = 0.91"
            ],
            
            correcta: 0,
            
            explicacion: `Hardy-Weinberg: p² + 2pq + q² = 1
            q = 0.3
            p = 1 - q = 0.7
            
            Heterocigotos (2pq) = 2 × 0.7 × 0.3 = 0.42
            
            Frecuencias:
            • AA (p²) = 0.49
            • Aa (2pq) = 0.42
            • aa (q²) = 0.09`,
            
            dificultad: 5,
            
            temas: ["Genética de poblaciones", "Hardy-Weinberg", "Evolución"],
            
            contexto: "Evolución y genética"
        },
        
        // PREGUNTA 17 - Nivel 4 - Respiración celular (balance energético)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-017',
            texto: `Por cada molécula de glucosa que entra en respiración aerobia, ¿cuál es el rendimiento neto aproximado de ATP en eucariotas?`,
            
            opciones: [
                "36-38 ATP, considerando glucólisis, ciclo de Krebs y cadena respiratoria",
                "2 ATP, solo de glucólisis",
                "4 ATP, de sustrato",
                "30 ATP, sin contar transporte",
                "50 ATP, máximo teórico"
            ],
            
            correcta: 0,
            
            explicacion: `Rendimiento aproximado por glucosa:
            • Glucólisis: 2 ATP (neto) + 2 NADH (→ 5 ATP)
            • Piruvato → Acetil-CoA: 2 NADH (→ 5 ATP)
            • Ciclo de Krebs: 2 ATP + 6 NADH (→ 15 ATP) + 2 FADH₂ (→ 3 ATP)
            Total ≈ 36-38 ATP
            
            Varía por eficiencia de transporte de NADH en mitocondria.`,
            
            dificultad: 4,
            
            temas: ["Respiración celular", "ATP", "Metabolismo energético"],
            
            contexto: "Bioenergética"
        },
        
        // PREGUNTA 18 - Nivel 5 - Biotecnología (PCR)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-018',
            texto: `En una reacción de PCR, ¿cuál es la función de la Taq polimerasa y por qué se utiliza esta enzima específicamente?`,
            
            opciones: [
                "Sintetizar ADN a altas temperaturas, porque es termoestable de Thermus aquaticus",
                "Desnaturalizar el ADN, rompiendo puentes de hidrógeno",
                "Unir los fragmentos de Okazaki en la replicación",
                "Copiar ARN a ADN en transcripción reversa",
                "Degradar ADN molde para evitar contaminación"
            ],
            
            correcta: 0,
            
            explicacion: `Taq polimerasa:
            • Aislada de bacteria termófila Thermus aquaticus
            • Resistente a altas temperaturas (72°C óptimo, 95°C no la desnaturaliza)
            • Sintetiza ADN en dirección 5'→3'
            • Esencial para PCR porque los ciclos requieren temperaturas altas
            
            Otras ADN polimerasas se desnaturalizarían.`,
            
            dificultad: 5,
            
            temas: ["PCR", "Biotecnología", "Enzimas"],
            
            contexto: "Técnicas moleculares"
        },
        
        // PREGUNTA 19 - Nivel 4 - Anatomía vegetal (tejidos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-019',
            texto: `¿Qué tejido vegetal es responsable del transporte de agua y minerales desde la raíz hasta las hojas?`,
            
            opciones: [
                "Xilema, compuesto por traqueidas y elementos de vaso",
                "Floema, compuesto por tubos cribosos y células acompañantes",
                "Parénquima, para almacenamiento",
                "Colénquima, para soporte",
                "Epidermis, para protección"
            ],
            
            correcta: 0,
            
            explicacion: `Tejidos conductores:
            • XILEMA: transporta agua y sales minerales (savia bruta)
              - Células muertas en madurez
              - Traqueidas y elementos de vaso
              - Movimiento unidireccional (raíz → hojas)
            
            • FLOEMA: transporta azúcares (savia elaborada)
              - Células vivas
              - Tubos cribosos y células acompañantes
              - Movimiento bidireccional`,
            
            dificultad: 4,
            
            temas: ["Anatomía vegetal", "Tejidos conductores", "Xilema"],
            
            contexto: "Fisiología vegetal"
        },
        
        // PREGUNTA 20 - Nivel 5 - Endocrinología (retroalimentación hormonal)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'biologia-020',
            texto: `En el eje hipotálamo-hipófisis-tiroides, si los niveles de hormonas tiroideas (T3/T4) son altos en sangre, ¿qué efecto tienen sobre la secreción de TRH y TSH?`,
            
            opciones: [
                "Inhiben la secreción de TRH y TSH por retroalimentación negativa",
                "Estimulan más secreción de TRH y TSH",
                "Inhiben solo TSH, pero no TRH",
                "Inhiben solo TRH, pero no TSH",
                "No tienen efecto, es un sistema abierto"
            ],
            
            correcta: 0,
            
            explicacion: `Retroalimentación negativa en eje hipotálamo-hipófisis:
            
            Hipotálamo → TRH → Hipófisis anterior → TSH → Tiroides → T3/T4
            
            Cuando T3/T4 ↑:
            • Inhiben hipotálamo (↓ TRH)
            • Inhiben hipófisis (↓ TSH)
            
            Esto mantiene la homeostasis hormonal.`,
            
            dificultad: 5,
            
            temas: ["Endocrinología", "Retroalimentación hormonal", "Eje tiroideo"],
            
            contexto: "Fisiología endocrina"
        }
    ];
    
    console.log("✅ datos-biologia.js cargado con 20 preguntas");
    console.log("📊 Total preguntas de biología: 20");
}