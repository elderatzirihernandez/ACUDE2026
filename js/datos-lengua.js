// js/datos-lengua.js
// PREGUNTAS DE LENGUA ESPAÑOLA - 20 PREGUNTAS NIVEL ALTO (COMPLETO)

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    // ============================================
    // BANCO DE PREGUNTAS DE LENGUA (YA TIENES 1, AÑADIMOS 19 MÁS)
    // ============================================
    DATOS_ACUDE.preguntas.lengua = [
        // PREGUNTA 1 - (Ya existente - la mantenemos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-001',
            texto: `En el siguiente fragmento de "El llano en llamas" de Juan Rulfo:
            
            "El caso es que ella no aparecía por ningún lado. Yo seguía oyendo el ruido de las cosas: que si las olas, que si el viento, que si la arena raspando las paredes. Ella no. Ella estaba quieta, como si se hubiera quedado dormida. Pero yo sabía que no dormía, porque sentía sus ojos abiertos sobre mí."

            ¿Qué función del lenguaje predomina y mediante qué recursos literarios se logra?`,
            
            opciones: [
                "Función poética mediante el uso de anáfora ('que si... que si...') y personificación ('la arena raspando') para crear atmósfera psicológica",
                "Función referencial mediante descripción objetiva del entorno y acciones concretas de los personajes",
                "Función emotiva con énfasis en la subjetividad del narrador usando monólogo interior y flashbacks",
                "Función apelativa buscando la participación del lector a través de preguntas retóricas implícitas",
                "Función metalingüística al reflexionar sobre el acto mismo de narrar y percibir"
            ],
            
            correcta: 0,
            
            explicacion: `Predomina la FUNCIÓN POÉTICA. Rulfo utiliza:
            
            • Anáfora: repetición de "que si..." que crea ritmo hipnótico y refleja la obsesión del narrador.
            • Personificación: "la arena raspando" dota de intencionalidad a elementos inertes.
            • Sinestesia: mezcla sensaciones auditivas (ruido, olas) con visuales (ojos abiertos).
            
            El lenguaje no solo informa, sino que crea una atmósfera psicológica de angustia y espera. La función poética se centra en el mensaje mismo, en CÓMO se dice más que en QUÉ se dice.`,
            
            dificultad: 5,
            
            temas: ["Funciones del lenguaje", "Recursos literarios", "Análisis textual", "Literatura mexicana"],
            
            contexto: "Literatura hispanoamericana del siglo XX",
            
            autor: "Juan Rulfo",
            
            obra: "El llano en llamas"
        },
        
        // PREGUNTA 2 - Nivel 5 - Comprensión lectora (estructura temporal)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-002',
            texto: `"Después de la tormenta vino la calma. Pero antes, el viento había derribado los árboles más viejos. Ahora, mientras el sol secaba la tierra, los niños salían a jugar entre las ramas caídas."

            ¿Qué tipo de estructura temporal predomina en este texto?`,
            
            opciones: [
                "Estructura compleja con analepsis (retrospección) y prolepsis (anticipación) combinadas",
                "Estructura cronológica lineal (pasado → presente → futuro)",
                "Estructura puramente descriptiva sin orden temporal",
                "Estructura circular que termina donde empezó",
                "Estructura simultánea donde todo ocurre al mismo tiempo"
            ],
            
            correcta: 1,
            
            explicacion: `El texto presenta una estructura cronológica lineal:
            • "Después de la tormenta" (posterior a la tormenta)
            • "Pero antes" (retrospección a lo que ocurrió durante la tormenta)
            • "Ahora" (presente posterior a ambos eventos)
            
            Hay un pequeño flashback, pero la estructura general es cronológica.`,
            
            dificultad: 4,
            
            temas: ["Comprensión lectora", "Estructura temporal", "Análisis textual"],
            
            contexto: "Análisis narrativo"
        },
        
        // PREGUNTA 3 - Nivel 5 - Categorías gramaticales (verbos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-003',
            texto: `En la oración: "Juan debe de haber estado estudiando toda la noche", ¿qué perífrasis verbales encontramos?`,
            
            opciones: [
                "Perífrasis modal de obligación ('debe de') + perífrasis aspectual perfectiva ('haber estado') + perífrasis aspectual durativa ('estado estudiando')",
                "Solo una perífrasis: 'debe de haber'",
                "Dos perífrasis: 'debe de' y 'haber estado estudiando'",
                "Ninguna perífrasis, es tiempo compuesto",
                "Perífrasis modal + tiempo compuesto solamente"
            ],
            
            correcta: 0,
            
            explicacion: `Análisis completo:
            • "debe de" → perífrasis MODAL de probabilidad o suposición (deber de + infinitivo)
            • "haber estado" → perífrasis ASPECTUAL perfectiva (indica acción acabada)
            • "estado estudiando" → perífrasis ASPECTUAL durativa (gerundio indica acción en desarrollo)
            
            Es un ejemplo de concatenación de perífrasis verbales.`,
            
            dificultad: 5,
            
            temas: ["Perífrasis verbales", "Categorías gramaticales", "Verbo"],
            
            contexto: "Gramática avanzada"
        },
        
        // PREGUNTA 4 - Nivel 5 - Reglas ortográficas (acentuación)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-004',
            texto: `¿Cuál de las siguientes palabras está correctamente acentuada según las reglas de la RAE?`,
            
            opciones: [
                "Solo 'fue' y 'fui' nunca llevan tilde, aunque muchos crean que sí",
                "Sólo lleva tilde cuando puede sustituirse por 'solamente'",
                "Aún lleva tilde cuando puede sustituirse por 'todavía'",
                "Éste lleva tilde siempre, aunque haya perdido la tilde diacrítica",
                "Guión lleva tilde por ser aguda terminada en 'n'"
            ],
            
            correcta: 2,
            
            explicacion: `Reglas de acentuación:
            • Fue y fui: monosílabos, NO llevan tilde NUNCA (errores comunes)
            • Solo: ya no lleva tilde ni siquiera en casos de ambigüedad (2010)
            • AÚN: lleva tilde cuando significa 'todavía' (adverbio temporal) → correcta
            • Este/esta/esto: pronombres demostrativos ya NO llevan tilde (2010)
            • Guion: monosílabo, NO lleva tilde (se considera monosílabo a efectos ortográficos)`,
            
            dificultad: 5,
            
            temas: ["Ortografía", "Acentuación", "Tilde diacrítica"],
            
            contexto: "Normas de la RAE"
        },
        
        // PREGUNTA 5 - Nivel 5 - Relaciones semánticas (sinonimia)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-005',
            texto: `En el contexto de la frase: "Era un hombre de carácter **flemático**", ¿cuál es el sinónimo más preciso?`,
            
            opciones: [
                "Flemático significa impasible, lento, que no se altera fácilmente, sinónimo: apático, indolente",
                "Flemático significa colérico, irascible, de mal genio",
                "Flemático significa alegre, jovial, optimista",
                "Flemático significa enfermizo, delicado de salud",
                "Flemático significa soñador, idealista, distraído"
            ],
            
            correcta: 0,
            
            explicacion: `FLEMÁTICO (del griego 'phlegma', flema):
            • En la teoría de los cuatro humores, la flema produce personalidad lenta, calmada, impasible.
            • Sinónimos: APÁTICO, INDOLENTE, IMPASIBLE, FRIO.
            • No tiene relación con cólera (ira), alegría ni enfermedad.`,
            
            dificultad: 4,
            
            temas: ["Semántica", "Sinónimos", "Etimología"],
            
            contexto: "Léxico culto"
        },
        
        // PREGUNTA 6 - Nivel 5 - Morfología (formación de palabras)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-006',
            texto: `La palabra "automóvil" está formada por:`,
            
            opciones: [
                "Composición culta: auto- (por sí mismo) + móvil (que se mueve), ambos de origen grecolatino",
                "Derivación: automovil (raíz) + -ista (sufijo)",
                "Parasíntesis: auto- + mov- + -il",
                "Composición popular: auto (carro) + móvil (móvil)",
                "Acortamiento: de 'automotor' + 'móvil'"
            ],
            
            correcta: 0,
            
            explicacion: `Formación de "automóvil":
            • AUTO-: del griego 'autós' (por sí mismo)
            • -MÓVIL: del latín 'mobilis' (que se mueve)
            
            Es una palabra compuesta por dos elementos cultos (no existen "auto" ni "móvil" por separado con ese significado en español antes de la palabra compuesta).`,
            
            dificultad: 4,
            
            temas: ["Morfología", "Formación de palabras", "Composición culta"],
            
            contexto: "Lexicología"
        },
        
        // PREGUNTA 7 - Nivel 5 - Sintaxis (oraciones subordinadas)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-007',
            texto: `En la oración: "El profesor explicó el tema **de manera que todos lo entendieron**", la proposición subordinada es:`,
            
            opciones: [
                "Subordinada adverbial consecutiva, porque expresa la consecuencia de la acción principal",
                "Subordinada adjetiva especificativa, porque modifica a 'manera'",
                "Subordinada sustantiva de complemento directo",
                "Subordinada adverbial modal, porque indica el modo",
                "Subordinada adverbial final, porque indica propósito"
            ],
            
            correcta: 0,
            
            explicacion: `Análisis:
            • "de manera que" es una locución conjuntiva consecutiva
            • La subordinada indica la CONSECUENCIA de la explicación (que todos entendieron)
            • Si fuera "de manera como" sería modal
            • Si fuera "para que" sería final
            
            Las consecutivas expresan el efecto derivado de la acción principal.`,
            
            dificultad: 5,
            
            temas: ["Sintaxis", "Oraciones subordinadas", "Consecutivas"],
            
            contexto: "Análisis sintáctico"
        },
        
        // PREGUNTA 8 - Nivel 5 - Literatura (Generación del 27)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-008',
            texto: `"Verde que te quiero verde. / Verde viento. Verdes ramas." Estos versos de Federico García Lorca pertenecen a:`,
            
            opciones: [
                "Romancero gitano, específicamente al 'Romance sonámbulo', y utilizan la sinestesia y el símbolo",
                "Poeta en Nueva York, de su etapa surrealista",
                "Bodas de sangre, obra de teatro",
                "Yerma, drama rural",
                "Libro de poemas, su primera obra"
            ],
            
            correcta: 0,
            
            explicacion: `"Romance sonámbulo" (parte de Romancero gitano, 1928):
            • El color verde es símbolo de muerte, deseo, misterio
            • Sinestesia: "verde viento" (mezcla sensaciones visuales y táctiles)
            • Es uno de los poemas más famosos de Lorca y de la Generación del 27.`,
            
            dificultad: 4,
            
            temas: ["Literatura española", "Generación del 27", "Lorca", "Romancero gitano"],
            
            contexto: "Poesía del siglo XX"
        },
        
        // PREGUNTA 9 - Nivel 5 - Léxico (tecnicismos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-009',
            texto: `En un texto de medicina, la palabra "epónimo" se refiere a:`,
            
            opciones: [
                "Una enfermedad, síndrome o estructura que recibe el nombre de una persona (ej. enfermedad de Alzheimer)",
                "Un medicamento de marca registrada",
                "Un síntoma característico de varias enfermedades",
                "Un procedimiento quirúrgico estándar",
                "Un término que describe una epidemia"
            ],
            
            correcta: 0,
            
            explicacion: `EPÓNIMO (del griego 'epi' + 'onoma' = sobre el nombre):
            • En medicina: enfermedades que llevan nombre de quien las descubrió (Alzheimer, Parkinson, Hodgkin)
            • En anatomía: estructuras con nombre de persona (Trompa de Eustaquio, Aquiles)
            • En general, cualquier cosa que recibe nombre de persona.`,
            
            dificultad: 4,
            
            temas: ["Léxico", "Tecnicismos", "Epónimos"],
            
            contexto: "Lenguaje científico"
        },
        
        // PREGUNTA 10 - Nivel 5 - Pragmática (actos de habla)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-010',
            texto: `Cuando alguien dice "¿Puedes pasarme la sal?" en la mesa, ¿qué tipo de acto de habla está realizando predominantemente?`,
            
            opciones: [
                "Acto de habla indirecto: la forma es interrogativa (pregunta sobre capacidad) pero la intención es directiva (una petición)",
                "Acto de habla directo: está preguntando literalmente si tengo capacidad física",
                "Acto de habla declarativo: está declarando que no hay sal",
                "Acto de habla expresivo: está expresando su necesidad de sal",
                "Acto de habla asertivo: está afirmando que la sal existe"
            ],
            
            correcta: 0,
            
            explicacion: `Teoría de los actos de habla (Austin, Searle):
            • Forma lingüística: interrogativa (¿puedes...?)
            • Intención comunicativa: DIRECTIVA (quiere que le pasen la sal)
            • Es INDIRECTO porque la forma no coincide con la intención
            
            Nadie responde "Sí, puedo" sin pasar la sal.`,
            
            dificultad: 5,
            
            temas: ["Pragmática", "Actos de habla", "Cortesía lingüística"],
            
            contexto: "Lingüística"
        },
        
        // PREGUNTA 11 - Nivel 5 - Variedades lingüísticas (dialectos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-011',
            texto: `El voseo, característico de varias regiones de América Latina, consiste en:`,
            
            opciones: [
                "El uso del pronombre 'vos' en lugar de 'tú' para la segunda persona singular, con conjugaciones verbales específicas (ej. 'vos tenés', 'vos sabés')",
                "El uso de 'vosotros' en lugar de 'ustedes'",
                "La pronunciación de la 's' aspirada al final de sílaba",
                "El uso exclusivo de 'usted' en contextos informales",
                "La mezcla de 'tú' y 'usted' en la misma conversación"
            ],
            
            correcta: 0,
            
            explicacion: `VOSEO (presente en Argentina, Uruguay, Paraguay, Centroamérica, partes de Colombia y Venezuela):
            • PRONOMBRE: "vos" (del latín 'vos', originalmente plural)
            • VERBO: acentuación en la última sílaba (cantás, comés, vivís)
            • Es una característica morfosintáctica del español americano.
            
            No es lo mismo que "vosotros" (España) que es plural.`,
            
            dificultad: 4,
            
            temas: ["Variedades lingüísticas", "Voseo", "Dialectología"],
            
            contexto: "Lingüística hispánica"
        },
        
        // PREGUNTA 12 - Nivel 5 - Figuras retóricas (hipérbaton)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-012',
            texto: `En el verso de Góngora: "Infame turba de nocturnas aves", ¿qué figura retórica destaca por la alteración del orden sintáctico?`,
            
            opciones: [
                "Hipérbaton, porque el orden normal sería 'turba infame de aves nocturnas' (adjetivo antepuesto al sustantivo)",
                "Anáfora, por repetición de sonidos",
                "Metáfora, porque aves no son literalmente infames",
                "Aliteración, por repetición de consonantes",
                "Paradoja, porque aves nocturnas no pueden ser infames"
            ],
            
            correcta: 0,
            
            explicacion: `HIPÉRBATON (alteración del orden sintáctico normal):
            • Orden normal: sustantivo + adjetivo (turba infame, aves nocturnas)
            • Orden gongorino: adjetivo + sustantivo (infame turba, nocturnas aves)
            
            Es característico del culteranismo barroco, buscando complicar la sintaxis para darle más belleza y dificultad.`,
            
            dificultad: 4,
            
            temas: ["Figuras retóricas", "Hipérbaton", "Barroco", "Góngora"],
            
            contexto: "Literatura del Siglo de Oro"
        },
        
        // PREGUNTA 13 - Nivel 5 - Ortografía (homófonos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-013',
            texto: `¿En cuál de las siguientes oraciones se usa correctamente "haber"?`,
            
            opciones: [
                "Va a haber mucha gente en la fiesta",
                "A ver si vienes temprano",
                "Debería de aber venido",
                "Hay mucha comida, a ver si comes",
                "Han habido problemas con el sistema"
            ],
            
            correcta: 0,
            
            explicacion: `Análisis:
            • "Va a HABER mucha gente" → correcto (infinitivo del verbo haber)
            • "A VER si vienes" → correcto, pero es "a ver" (preposición + verbo ver), no "haber"
            • "Debería de aber venido" → incorrecto, debe ser "haber"
            • "Hay mucha comida, a ver si comes" → ambos correctos (hay = haber, a ver = ver)
            • "Han habido problemas" → INCORRECTO, debe ser "ha habido" (haber impersonal)`,
            
            dificultad: 5,
            
            temas: ["Ortografía", "Homófonos", "Haber vs a ver"],
            
            contexto: "Errores comunes"
        },
        
        // PREGUNTA 14 - Nivel 5 - Semántica (polisemia)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-014',
            texto: `La palabra "banco" puede significar: institución financiera, asiento, conjunto de peces, o reserva de órganos. Este fenómeno se llama:`,
            
            opciones: [
                "Polisemia, porque una misma palabra tiene varios significados relacionados etimológicamente",
                "Homonimia, porque son palabras diferentes que coinciden en la forma",
                "Sinonimia, porque son palabras diferentes con mismo significado",
                "Antonimia, porque son significados opuestos",
                "Paronimia, porque suenan parecido a otras palabras"
            ],
            
            correcta: 0,
            
            explicacion: `Diferencia entre polisemia y homonimia:
            • POLISEMIA: un mismo origen etimológico que ha desarrollado varios significados (banco del italiano 'banco', todos relacionados con 'superficie')
            • HOMONIMIA: palabras con distinto origen que coinciden en la forma (vino (bebida) del latín 'vinum' y vino (venir) del latín 'venit')
            
            En "banco", todos los significados derivan del germánico 'bank' (banco, superficie).`,
            
            dificultad: 5,
            
            temas: ["Semántica", "Polisemia", "Homonimia"],
            
            contexto: "Lingüística"
        },
        
        // PREGUNTA 15 - Nivel 5 - Literatura medieval (Mester de Clerecía)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-015',
            texto: `El "Libro de Buen Amor" del Arcipreste de Hita se caracteriza por:`,
            
            opciones: [
                "Ser una obra del Mester de Clerecía del siglo XIV que mezcla lo religioso y lo profano, con métrica de cuaderna vía y múltiples interpretaciones",
                "Ser una obra anónima del Mester de Juglaría de carácter épico",
                "Ser un tratado de teología medieval escrito en latín",
                "Ser una colección de cantares de gesta sobre el Cid",
                "Ser una obra exclusivamente religiosa y moralizante"
            ],
            
            correcta: 0,
            
            explicacion: `"Libro de Buen Amor" (1330-1343):
            • Mester de Clerecía (cuaderna vía, pero con variedad métrica)
            • AUTOR: Juan Ruiz, Arcipreste de Hita
            • TEMAS: amor divino (buen amor) vs amor mundano (loco amor)
            • AMBIGÜEDAD: puede leerse como moralizante o como alabanza del amor carnal
            • INCLUYE: fábulas, episodios amorosos, sátira, lírica.`,
            
            dificultad: 5,
            
            temas: ["Literatura medieval", "Mester de Clerecía", "Arcipreste de Hita", "Libro de Buen Amor"],
            
            contexto: "Literatura española"
        },
        
        // PREGUNTA 16 - Nivel 5 - Morfosintaxis (voz pasiva)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-016',
            texto: `¿Cuál de las siguientes oraciones está en voz pasiva refleja?`,
            
            opciones: [
                "Se venden casas en esta zona",
                "La casa fue vendida por los dueños",
                "Vendieron la casa rápidamente",
                "La casa se vende sola por su ubicación",
                "Han vendido todas las casas"
            ],
            
            correcta: 0,
            
            explicacion: `VOZ PASIVA REFLEJA (o pasiva con "se"):
            • Estructura: "se" + verbo en activa (3ª persona) + sujeto paciente
            • "Se venden casas" = casas son vendidas (por alguien)
            • El verbo concuerda con el sujeto (venden/casas)
            • No hay complemento agente explícito
            
            La opción B es pasiva perifrástica (ser + participio).`,
            
            dificultad: 4,
            
            temas: ["Morfosintaxis", "Voz pasiva", "Pasiva refleja"],
            
            contexto: "Gramática"
        },
        
        // PREGUNTA 17 - Nivel 5 - Léxico (neologismos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-017',
            texto: `"Tuitear" (publicar en Twitter) es un ejemplo de:`,
            
            opciones: [
                "Neologismo formado por préstamo adaptado del inglés 'tweet' con el sufijo español -ear",
                "Arcaísmo rescatado del español antiguo",
                "Tecnicismo científico de la informática",
                "Préstamo no adaptado (extranjerismo crudo)",
                "Jerga profesional de periodistas"
            ],
            
            correcta: 0,
            
            explicacion: `NEOLOGISMO (palabra nueva):
            • Base: inglés 'tweet' (trino de pájaro, mensaje en Twitter)
            • Adaptación: se hispaniza eliminando la 'w' y añadiendo sufijo verbal -ear
            • Es un PRÉSTAMO ADAPTADO (ya aceptado por la RAE como "tuit" y "tuitear")
            
            No es extranjerismo crudo (como 'tweet' sin adaptar).`,
            
            dificultad: 4,
            
            temas: ["Léxico", "Neologismos", "Préstamos lingüísticos"],
            
            contexto: "Lengua y tecnología"
        },
        
        // PREGUNTA 18 - Nivel 5 - Ortografía (signos de puntuación)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-018',
            texto: `¿Cuál es el uso correcto de los dos puntos en la siguiente oración?`,
            
            opciones: [
                "Querido Juan: Te escribo para recordarte la cita de mañana.",
                "Querido Juan, Te escribo: para recordarte la cita de mañana.",
                "Querido Juan; Te escribo para: recordarte la cita de mañana.",
                "Querido Juan. Te escribo para recordarte: la cita de mañana.",
                "Querido Juan... Te escribo para recordarte la cita de mañana."
            ],
            
            correcta: 0,
            
            explicacion: `USO DE LOS DOS PUNTOS:
            • En encabezamientos de cartas: después del vocativo (Querido Juan:)
            • Antes de enumeraciones
            • Antes de citas textuales
            • Para introducir una explicación o consecuencia
            
            La opción A es la correcta. Después de los dos puntos en cartas, se suele escribir mayúscula (aunque no es obligatorio, es lo común).`,
            
            dificultad: 3,
            
            temas: ["Ortografía", "Signos de puntuación", "Dos puntos"],
            
            contexto: "Normas ortográficas"
        },
        
        // PREGUNTA 19 - Nivel 5 - Comprensión lectora (idea principal)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-019',
            texto: `"El calentamiento global, causado principalmente por la emisión de gases de efecto invernadero, está provocando el derretimiento de los polos, el aumento del nivel del mar y fenómenos meteorológicos extremos. Sin embargo, algunos científicos señalan que la variabilidad natural del clima también juega un papel importante, aunque menor."

            ¿Cuál es la idea principal del texto?`,
            
            opciones: [
                "El calentamiento global tiene múltiples consecuencias graves, aunque existe cierto debate sobre sus causas exactas",
                "El calentamiento global es causado exclusivamente por el hombre",
                "Los polos se están derritiendo por causas naturales",
                "No hay consenso científico sobre el calentamiento global",
                "Los fenómenos meteorológicos extremos son normales"
            ],
            
            correcta: 0,
            
            explicacion: `Análisis de la idea principal:
            • Primera parte: afirma que el calentamiento global (causado por gases) produce consecuencias graves
            • Segunda parte (con "sin embargo"): matiza que hay otros factores (naturales) pero MENORES
            
            El texto NO dice que sea exclusivamente humano, ni que sea solo natural, ni que no haya consenso. La idea principal incluye ambos aspectos.`,
            
            dificultad: 4,
            
            temas: ["Comprensión lectora", "Idea principal", "Análisis textual"],
            
            contexto: "Textos argumentativos"
        },
        
        // PREGUNTA 20 - Nivel 5 - Lingüística (saussure)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'lengua-020',
            texto: `Según Ferdinand de Saussure, la lingüística debe estudiar la "langue" (lengua) y no la "parole" (habla). ¿Qué diferencia establecía?`,
            
            opciones: [
                "La lengua es el sistema social, abstracto y compartido; el habla es el acto individual y concreto de uso",
                "La lengua es el habla escrita; el habla es la oral",
                "La lengua es la gramática normativa; el habla es la incorrecta",
                "La lengua es el español; el habla son los dialectos",
                "La lengua es lo que se dice; el habla es lo que se escribe"
            ],
            
            correcta: 0,
            
            explicacion: `Dicotomía saussureana:
            • LANGUE (lengua): sistema abstracto, social, compartido por una comunidad, conjunto de reglas (código)
            • PAROLE (habla): realización individual, concreta, variable de ese sistema (mensaje)
            
            Saussure propuso que la lingüística debe centrarse en la LANGUE por ser sistemática y social.`,
            
            dificultad: 5,
            
            temas: ["Lingüística", "Saussure", "Langue y parole"],
            
            contexto: "Teoría lingüística"
        }
    ];
    
    console.log("✅ datos-lengua.js cargado con 20 preguntas (completo)");
    console.log("📊 Total preguntas de lengua: 20");
}