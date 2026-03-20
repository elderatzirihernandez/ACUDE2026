// js/datos-literatura.js
// PREGUNTAS DE LITERATURA - 20 PREGUNTAS NIVEL ALTO

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    DATOS_ACUDE.preguntas.literatura = [
        // PREGUNTA 1 - Nivel 5 - Géneros literarios (épica)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-001',
            texto: `La Ilíada y la Odisea, atribuidas a Homero, son obras fundamentales de la literatura occidental. ¿A qué género literario pertenecen y qué características presentan?`,
            
            opciones: [
                "Pertenecen al género ÉPICO, son poemas extensos que narran hazañas de héroes (Aquiles, Odiseo) con intervención de dioses y un tono elevado",
                "Son del género LÍRICO, porque expresan sentimientos personales del autor sobre la guerra",
                "Pertenecen al género DRAMÁTICO, porque están escritas para ser representadas en teatros griegos",
                "Son del género NARRATIVO moderno, similares a la novela del siglo XIX",
                "Pertenecen al género DIDÁCTICO, porque buscan enseñar moral y valores a los jóvenes griegos"
            ],
            
            correcta: 0,
            
            explicacion: `La épica (o epopeya) se caracteriza por:
            • Poemas extensos en verso
            • Narran hazañas de héroes (Aquiles, Héctor, Odiseo)
            • Intervienen seres sobrenaturales (dioses del Olimpo)
            • Tono elevado y solemne
            • Valores: honor, gloria, patria
            
            La Ilíada narra la guerra de Troya; la Odisea, el viaje de regreso de Odiseo.`,
            
            dificultad: 4,
            
            temas: ["Géneros literarios", "Épica", "Homero", "Literatura clásica"],
            
            contexto: "Literatura griega"
        },
        
        // PREGUNTA 2 - Nivel 5 - Lírica (figuras retóricas)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-002',
            texto: `En el verso de Garcilaso de la Vega: "Sus cabellos son de oro", ¿qué figura retórica predomina?`,
            
            opciones: [
                "Metáfora, porque identifica directamente los cabellos con el oro (sustitución), sin usar 'como'",
                "Símil o comparación, porque está comparando cabellos con oro",
                "Hipérbole, porque exagera el color de los cabellos",
                "Metonimia, porque oro representa riqueza",
                "Personificación, porque atribuye cualidad humana a los cabellos"
            ],
            
            correcta: 0,
            
            explicacion: `Metáfora: identificación de un término real (cabellos) con uno imaginario (oro) por su semejanza (color dorado). 
            
            Si dijera "sus cabellos SON COMO oro" sería símil. 
            Al decir "SON oro" (verbo ser + atributo) es metáfora pura o atributiva.
            
            Es un ejemplo típico del petrarquismo renacentista.`,
            
            dificultad: 3,
            
            temas: ["Figuras retóricas", "Metáfora", "Lírica renacentista"],
            
            contexto: "Literatura española del Siglo de Oro"
        },
        
        // PREGUNTA 3 - Nivel 5 - Dramática (tragedia griega)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-003',
            texto: `En la tragedia griega "Edipo Rey" de Sófocles, Edipo descubre que ha matado a su padre y se ha casado con su madre. Este momento de máximo sufrimiento y reconocimiento se denomina:`,
            
            opciones: [
                "Catarsis y anagnórisis (reconocimiento), que produce la peripecia (cambio de fortuna)",
                "Hibris, porque es el orgullo excesivo del héroe",
                "Éxodo, porque es la parte final de la obra",
                "Estásimo, porque es un canto del coro",
                "Prólogo, porque es la introducción de la obra"
            ],
            
            correcta: 0,
            
            explicacion: `En la tragedia griega:
            • ANAGNÓRISIS: reconocimiento o descubrimiento de la verdad (Edipo descubre su origen)
            • PERIPECIA: cambio repentino de fortuna (de rey a desgraciado)
            • CATARSIS: purificación emocional del espectador (miedo y compasión)
            
            Estos conceptos fueron definidos por Aristóteles en su "Poética".`,
            
            dificultad: 5,
            
            temas: ["Tragedia griega", "Sófocles", "Edipo Rey", "Aristóteles"],
            
            contexto: "Literatura clásica"
        },
        
        // PREGUNTA 4 - Nivel 5 - Narrativa (tipos de narrador)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-004',
            texto: `En la novela "Cien años de soledad" de Gabriel García Márquez, un narrador cuenta la historia de los Buendía desde fuera, conoce todo (pasado, futuro, pensamientos) y es objetivo. ¿Qué tipo de narrador es?`,
            
            opciones: [
                "Narrador omnisciente en tercera persona, porque lo sabe todo y no participa en la historia",
                "Narrador protagonista, porque es uno de los personajes",
                "Narrador testigo, porque solo cuenta lo que ve",
                "Narrador en segunda persona, porque habla al lector",
                "Narrador múltiple, porque cambia constantemente"
            ],
            
            correcta: 0,
            
            explicacion: `El narrador OMNISCIENTE:
            • Tercera persona gramatical (él/ellos)
            • Conoce pensamientos y sentimientos de todos los personajes
            • Sabe el pasado y el futuro ("muchos años después...")
            • Puede opinar y juzgar
            
            Es el narrador clásico de la novela realista y de gran parte del "boom" latinoamericano.`,
            
            dificultad: 3,
            
            temas: ["Narrativa", "Tipos de narrador", "García Márquez", "Boom latinoamericano"],
            
            contexto: "Literatura hispanoamericana"
        },
        
        // PREGUNTA 5 - Nivel 5 - Modernismo
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-005',
            texto: `Rubén Darío es el máximo representante del Modernismo. ¿Cuál de los siguientes versos es un ejemplo característico de su estilo?`,
            
            opciones: [
                "La princesa está triste... ¿qué tendrá la princesa? (sonoridad, musicalidad, temas exóticos y aristocráticos)",
                "Con diez cañones por banda, viento en popa a toda vela (poesía narrativa, tema marinero)",
                "Caminante, no hay camino, se hace camino al andar (filosofía existencial, tono reflexivo)",
                "En un lugar de la Mancha, de cuyo nombre no quiero acordarme (inicio de novela realista)",
                "Verde que te quiero verde, verde viento, verdes ramas (poesía con color, pero posterior)"
            ],
            
            correcta: 0,
            
            explicacion: `El Modernismo (finales XIX - principios XX) se caracteriza por:
            • BÚSQUEDA DE LA BELLEZA: "el arte por el arte"
            • MUSICALIDAD: versos rítmicos, aliteraciones
            • TEMAS EXÓTICOS: princesas, cisnes, hadas, oriente
            • VOCABULARIO CULTO Y SONORO
            
            "La princesa está triste" (de "Sonatina") es emblemático.
            Las otras opciones son: B) Espronceda (Romanticismo), C) Machado (Generación del 98), D) Cervantes (Siglo de Oro), E) Lorca (Generación del 27).`,
            
            dificultad: 5,
            
            temas: ["Modernismo", "Rubén Darío", "Poesía hispanoamericana"],
            
            contexto: "Literatura hispanoamericana"
        },
        
        // PREGUNTA 6 - Nivel 5 - Romanticismo
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-006',
            texto: `El Romanticismo (siglo XIX) exaltaba:`,
            
            opciones: [
                "El individualismo, la libertad creadora, los sentimientos pasionales y la naturaleza salvaje frente a la razón ilustrada",
                "La razón, el equilibrio, las reglas y la imitación de los clásicos grecolatinos",
                "La perfección formal, la belleza ideal y el arte por el arte",
                "El realismo, la observación objetiva y la crítica social",
                "La experimentación, el subconsciente y la ruptura temporal"
            ],
            
            correcta: 0,
            
            explicacion: `El Romanticismo surge como reacción al Neoclasicismo (razón, reglas):
            • INDIVIDUALISMO: el "yo" frente a la sociedad
            • SENTIMIENTOS: amor pasional, desengaño, soledad
            • LIBERTAD: rompe reglas (mezcla géneros, verso y prosa)
            • NATURALEZA: salvaje, tormentosa (acorde al estado de ánimo)
            • EVASIÓN: Edad Media, exotismo
            
            Autores: Hugo, Espronceda, Bécquer, Larra.`,
            
            dificultad: 4,
            
            temas: ["Romanticismo", "Movimientos literarios", "Siglo XIX"],
            
            contexto: "Literatura universal"
        },
        
        // PREGUNTA 7 - Nivel 5 - Generación del 98
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-007',
            texto: `Tras el desastre del 98 (pérdida de Cuba, Puerto Rico y Filipinas), un grupo de escritores españoles reflexionó sobre la identidad de España. ¿Quiénes formaban parte de esta Generación del 98?`,
            
            opciones: [
                "Unamuno, Azorín, Baroja, Maeztu y Antonio Machado (principalmente)",
                "García Lorca, Alberti, Salinas, Cernuda y Guillén",
                "Cervantes, Lope de Vega, Quevedo, Góngora y Calderón",
                "Vargas Llosa, García Márquez, Cortázar, Fuentes y Donoso",
                "Bécquer, Rosalía de Castro, Espronceda, Larra y Zorrilla"
            ],
            
            correcta: 0,
            
            explicacion: `Generación del 98 (características):
            • PREOCUPACIÓN POR ESPAÑA: su historia, su paisaje (Castilla), su gente
            • ESTILO SENCILLO: frente al retoricismo modernista
            • FILOSÓFICA: temas existenciales (Unamuno: "sentimiento trágico de la vida")
            
            Nómina principal: Miguel de Unamuno, Pío Baroja, José Martínez Ruiz "Azorín", Ramiro de Maeztu, Antonio Machado.
            
            Las otras opciones: B) Generación del 27, C) Siglo de Oro, D) Boom latinoamericano, E) Romanticismo español.`,
            
            dificultad: 5,
            
            temas: ["Generación del 98", "Literatura española", "Siglo XX"],
            
            contexto: "Literatura española"
        },
        
        // PREGUNTA 8 - Nivel 5 - Boom latinoamericano
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-008',
            texto: `"Rayuela" de Julio Cortázar es una novela fundamental del Boom latinoamericano. ¿Qué característica innovadora presenta?`,
            
            opciones: [
                "Ofrece múltiples formas de lectura (tablero de dirección), permitiendo leer los capítulos en diferentes órdenes, rompiendo la linealidad narrativa",
                "Es una novela estrictamente lineal y cronológica, pero con saltos temporales",
                "Está escrita completamente en verso, mezclando poesía y narrativa",
                "No tiene personajes definidos, solo voces que hablan",
                "Es una novela policíaca tradicional sin innovaciones"
            ],
            
            correcta: 0,
            
            explicacion: `"Rayuela" (1963) propone:
            • DOS FORMAS DE LECTURA: la tradicional (hasta capítulo 56) y la que sigue el "tablero de dirección" saltando entre capítulos
            • LECTOR ACTIVO: el lector debe elegir su camino (personaje activo, "lector cómplice")
            • ESTRUCTURA ABERTA: rompe con la narrativa lineal clásica
            
            Es una de las obras más experimentales del Boom.`,
            
            dificultad: 4,
            
            temas: ["Boom latinoamericano", "Cortázar", "Rayuela", "Narrativa experimental"],
            
            contexto: "Literatura hispanoamericana"
        },
        
        // PREGUNTA 9 - Nivel 5 - Barroco (Conceptismo vs Culteranismo)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-009',
            texto: `En el Barroco español del siglo XVII, dos corrientes estilísticas principales fueron el conceptismo y el culteranismo. ¿Qué autores las representan respectivamente?`,
            
            opciones: [
                "Conceptismo: Quevedo (juego de ideas, agudeza); Culteranismo: Góngora (complejidad formal, cultismos, hipérbaton)",
                "Conceptismo: Góngora; Culteranismo: Quevedo",
                "Conceptismo: Cervantes; Culteranismo: Lope de Vega",
                "Conceptismo: Calderón; Culteranismo: Tirso de Molina",
                "Conceptismo: Santa Teresa; Culteranismo: San Juan de la Cruz"
            ],
            
            correcta: 0,
            
            explicacion: `Diferencias:
            • CONCEPTISMO (Quevedo): profundidad del pensamiento, juego de ideas, múltiples significados en pocas palabras, antítesis, paradojas ("El Buscón")
            • CULTERANISMO (Góngora): belleza formal, complicación sintáctica (hipérbaton extremo), cultismos léxicos, alusiones mitológicas ("Soledades", "Fábula de Polifemo y Galatea")
            
            Fueron rivales literarios y personales.`,
            
            dificultad: 5,
            
            temas: ["Barroco", "Quevedo", "Góngora", "Literatura española"],
            
            contexto: "Siglo de Oro español"
        },
        
        // PREGUNTA 10 - Nivel 4 - Renacimiento (Lírica italianizante)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-010',
            texto: `Garcilaso de la Vega introdujo en España formas poéticas italianas como:`,
            
            opciones: [
                "El soneto, el verso endecasílabo y la lira, adaptando la métrica italiana al castellano",
                "El romance y la redondilla, formas tradicionales castellanas",
                "La prosa didáctica y el ensayo filosófico",
                "El teatro nacional y la comedia nueva",
                "La novela picaresca y el realismo"
            ],
            
            correcta: 0,
            
            explicacion: `Garcilaso (junto con Boscán) introdujo:
            • VERSO ENDECASÍLABO (11 sílabas) frente al octosílabo tradicional
            • ESTROFAS ITALIANAS: soneto, lira (combinación de heptasílabos y endecasílabos), octava real, tercetos encadenados
            • TEMAS PETRARQUISTAS: amor platónico, naturaleza idealizada, mitología
            
            Su obra marca el inicio del Renacimiento en España.`,
            
            dificultad: 3,
            
            temas: ["Renacimiento", "Garcilaso", "Métrica", "Literatura española"],
            
            contexto: "Siglo de Oro español"
        },
        
        // PREGUNTA 11 - Nivel 5 - Realismo y Naturalismo
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-011',
            texto: `"La Regenta" de Leopoldo Alas "Clarín" y "Fortunata y Jacinta" de Benito Pérez Galdós son obras cumbre del Realismo español. ¿Qué característica comparten?`,
            
            opciones: [
                "Análisis psicológico profundo de los personajes, descripción detallada de la sociedad y crítica de la hipocresía burguesa",
                "Idealización de la realidad y evasión hacia mundos exóticos",
                "Experimentación formal y ruptura temporal",
                "Temas religiosos y místicos con lenguaje sencillo",
                "Narración en primera persona de un personaje marginal y antisocial"
            ],
            
            correcta: 0,
            
            explicacion: `El Realismo (segunda mitad siglo XIX) se caracteriza por:
            • OBSERVACIÓN Y DESCRIPCIÓN MINUCIOSA de la realidad contemporánea
            • PERSONAJES COMPLEJOS psicológicamente (Ana Ozores, Fortunata, Jacinta)
            • CRÍTICA SOCIAL: hipocresía, doble moral, clases sociales
            • NARRADOR OMNISCIENTE que analiza y juzga
            
            El Naturalismo (versión extremada) añade determinismo (herencia y ambiente condicionan).`,
            
            dificultad: 4,
            
            temas: ["Realismo", "Naturalismo", "Galdós", "Clarín", "Novela del XIX"],
            
            contexto: "Literatura española"
        },
        
        // PREGUNTA 12 - Nivel 5 - Literatura medieval (Cantar de Mío Cid)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-012',
            texto: `El "Cantar de Mío Cid", la obra épica más importante de la literatura medieval española, se caracteriza por:`,
            
            opciones: [
                "Su realismo, humanidad del héroe (no es perfecto) y métrica irregular (versos de 14 a 16 sílabas, divididos en dos hemistiquios)",
                "Su métrica perfecta y regular (versos octosílabos) de la épica francesa",
                "Su tono fantástico y sobrenatural, con apariciones de seres mitológicos",
                "Su autor conocido (Per Abbat) que firma la obra original",
                "Su lenguaje extremadamente culto y latinizante, incomprensible para el pueblo"
            ],
            
            correcta: 0,
            
            explicacion: `Características del Cantar:
            • REALISMO: no hay seres fantásticos (a diferencia de la épica francesa)
            • HÉROE HUMANO: Rodrigo Díaz tiene momentos de debilidad, llora, negocia
            • MÉTRICA: anisosilábica (versos irregulares) con pausa medial (hemistiquios)
            • AUTOR: anónimo (Per Abbat es copista, no autor)
            • TEMA: honor, recuperación de la honra, lealtad al rey
            
            Fechado hacia 1200 (perdido el original, conservado en copia de 1300).`,
            
            dificultad: 5,
            
            temas: ["Literatura medieval", "Cantar de Mío Cid", "Épica española"],
            
            contexto: "Literatura española"
        },
        
        // PREGUNTA 13 - Nivel 5 - Vanguardias
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-013',
            texto: `El movimiento vanguardista que buscaba la "deshumanización del arte" (Ortega y Gasset), eliminaba la anécdota y jugaba con la metáfora pura se llamó:`,
            
            opciones: [
                "Ultraísmo y Creacionismo, en los que participaron poetas como Jorge Luis Borges y Vicente Huidobro",
                "Modernismo, con Rubén Darío",
                "Romanticismo, con Espronceda",
                "Realismo mágico, con García Márquez",
                "Barroco, con Góngora"
            ],
            
            correcta: 0,
            
            explicacion: `Las vanguardias históricas (principios siglo XX):
            • ULTRAÍSMO: español, reducción de la lírica a la metáfora, supresión de lo narrativo
            • CREACIONISMO: Huidobro, "el poeta es un pequeño dios", crea realidad autónoma
            • SURREALISMO: automatismo psíquico, mundo onírico
            
            Borges en su juventud fue ultraísta. La "deshumanización" se refiere a quitar lo sentimental y anecdótico.`,
            
            dificultad: 5,
            
            temas: ["Vanguardias", "Ultraísmo", "Creacionismo", "Borges", "Huidobro"],
            
            contexto: "Literatura hispanoamericana"
        },
        
        // PREGUNTA 14 - Nivel 5 - Generación del 27
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-014',
            texto: `Federico García Lorca, autor de "Bodas de sangre" y "La casa de Bernarda Alba", pertenece a la Generación del 27. ¿Qué características definen a este grupo?`,
            
            opciones: [
                "Síntesis de tradición (Góngora, popular) y vanguardia (surrealismo), con búsqueda de la perfección formal",
                "Pura experimentación vanguardista sin raíces tradicionales",
                "Realismo social y compromiso político exclusivamente",
                "Vuelta al Romanticismo del siglo XIX",
                "Exclusivamente poetas, sin dramaturgos ni narradores"
            ],
            
            correcta: 0,
            
            explicacion: `Generación del 27 (homenaje a Góngora en 1927):
            • TRADICIÓN Y VANGUARDIA: admiran a Góngora (barroco) y usan técnicas surrealistas
            • POESÍA PURA Y HUMANA: desde la perfección formal inicial hasta el compromiso social tras la Guerra Civil
            • NÓMINA: Lorca, Alberti, Salinas, Guillén, Cernuda, Aleixandre, Dámaso Alonso
            • NO SOLO POESÍA: Lorca también teatro, Cernuda prosa poética
            
            Fusión de lo culto y lo popular (romancero gitano).`,
            
            dificultad: 5,
            
            temas: ["Generación del 27", "Lorca", "Poesía española", "Vanguardias"],
            
            contexto: "Literatura española"
        },
        
        // PREGUNTA 15 - Nivel 5 - Literatura hispanoamericana (poesía)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-015',
            texto: `Pablo Neruda, premio Nobel chileno, escribió "Veinte poemas de amor y una canción desesperada". ¿Qué etapa de su poesía representa esta obra?`,
            
            opciones: [
                "Poesía amorosa y erótica de juventud, con influencias modernistas y románticas, pero ya con voz propia",
                "Poesía épica y política de madurez, como en 'Canto General'",
                "Poesía experimental y surrealista de vanguardia pura",
                "Poesía social y de compromiso comunista exclusivamente",
                "Poesía metafísica y filosófica sobre la existencia"
            ],
            
            correcta: 0,
            
            explicacion: `Neruda pasó por varias etapas:
            • JUVENTUD: "Veinte poemas..." (1924) - poesía amorosa, melancólica, erótica, aún con restos modernistas pero ya personal
            • VANGUARDIA: "Residencia en la tierra" (1925-1935) - surrealismo, angustia existencial
            • ÉPICA Y POLÍTICA: "Canto General" (1950) - historia de América, compromiso
            • COTIDIANA: "Odas elementales" (1954) - poesía a objetos simples
            
            "Veinte poemas..." es su libro más popular y el que lo consagró.`,
            
            dificultad: 4,
            
            temas: ["Pablo Neruda", "Poesía hispanoamericana", "Premios Nobel"],
            
            contexto: "Literatura hispanoamericana"
        },
        
        // PREGUNTA 16 - Nivel 5 - Teatro del absurdo
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-016',
            texto: `"Esperando a Godot" de Samuel Beckett es la obra más representativa del Teatro del Absurdo. ¿Qué visión del mundo presenta?`,
            
            opciones: [
                "La espera infinita sin sentido, la incomunicación y la falta de propósito de la existencia humana",
                "La lucha de clases y la revolución proletaria",
                "El amor romántico y la pasión desenfrenada",
                "La exaltación de la razón y el progreso científico",
                "La recreación histórica de la Segunda Guerra Mundial"
            ],
            
            correcta: 0,
            
            explicacion: `Teatro del Absurdo (décadas 1950-60):
            • INFLUENCIA: filosofía existencialista (Camus, Sartre)
            • CARACTERÍSTICAS: personajes que no progresan, diálogos sin sentido, situaciones circulares, falta de lógica
            • TEMAS: incomunicación, soledad, sinsentido de la existencia
            • "ESPERANDO A GODOT": dos vagabundos esperan a Godot (que nunca llega) mientras pasan el tiempo sin propósito
            
            Otros autores: Ionesco ("La cantante calva"), Pinter.`,
            
            dificultad: 4,
            
            temas: ["Teatro del absurdo", "Beckett", "Existencialismo", "Teatro contemporáneo"],
            
            contexto: "Literatura universal"
        },
        
        // PREGUNTA 17 - Nivel 5 - Novela picaresca
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-017',
            texto: `"El Lazarillo de Tormes" (1554) inaugura el género picaresco. ¿Cuál de las siguientes características NO es propia de la novela picaresca?`,
            
            opciones: [
                "Protagonista noble y heroico que lucha por ideales elevados",
                "Narración en primera persona (autobiografía ficticia)",
                "Protagonista de baja extracción social que sirve a varios amos",
                "Visión pesimista y crítica de la sociedad",
                "Evolución del protagonista (aprendizaje) pero sin mejora moral"
            ],
            
            correcta: 0,
            
            explicacion: `La picaresca se caracteriza por:
            • NARRADOR EN PRIMERA PERSONA: el pícaro cuenta su vida
            • ORIGEN HUMILDE Y DESHONROSO
            • SIRVE A MÚLTIPLES AMOS: ve todas las clases sociales
            • VISIÓN CRÍTICA Y PESIMISTA: sociedad hipócrita
            • EVOLUCIÓN: el pícaro "aprende", pero para sobrevivir, no para mejorar moralmente
            
            El protagonista NO es noble ni heroico; es un antihéroe.`,
            
            dificultad: 4,
            
            temas: ["Novela picaresca", "Lazarillo de Tormes", "Literatura del Siglo de Oro"],
            
            contexto: "Literatura española"
        },
        
        // PREGUNTA 18 - Nivel 5 - Realismo mágico
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-018',
            texto: `El Realismo Mágico, característico del Boom latinoamericano, se define como:`,
            
            opciones: [
                "La inserción de elementos fantásticos o sobrenaturales en la realidad cotidiana, presentados con naturalidad por el narrador",
                "La descripción objetiva y científica de la realidad social",
                "La evasión hacia mundos de fantasía pura, sin conexión con la realidad",
                "La exaltación de la tecnología y el futuro",
                "El retorno a las formas clásicas grecolatinas"
            ],
            
            correcta: 0,
            
            explicacion: `Realismo Mágico:
            • LO FANTÁSTICO ES COTIDIANO: los personajes no se sorprenden ante lo sobrenatural
            • NARRADOR "NORMALIZA" LO EXTRAORDINARIO: lo cuenta con la misma naturalidad que lo real
            • FUSIÓN DE PLANOS: realidad y fantasía se mezclan
            • EJEMPLOS: "Cien años de soledad" (García Márquez), "Pedro Páramo" (Rulfo, precursor)
            
            No es evasión, sino una forma de entender una realidad donde lo mítico y lo real coexisten.`,
            
            dificultad: 5,
            
            temas: ["Realismo mágico", "Boom latinoamericano", "García Márquez"],
            
            contexto: "Literatura hispanoamericana"
        },
        
        // PREGUNTA 19 - Nivel 4 - Mester de Clerecía vs Mester de Juglaría
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-019',
            texto: `En la literatura medieval española, el Mester de Clerecía se diferencia del Mester de Juglaría por:`,
            
            opciones: [
                "Ser obra de autores cultos (clérigos), con métrica regular (cuaderna vía) y temas religiosos o eruditos",
                "Ser de autoría anónima, transmitida oralmente y con métrica irregular",
                "Ser exclusivamente de temática amorosa y cortés",
                "Ser representado en teatros con actores profesionales",
                "Ser escrito en latín, no en romance"
            ],
            
            correcta: 0,
            
            explicacion: `Diferencias:
            • MESTER DE JUGLARÍA: juglares (populares), obras anónimas, transmisión oral, métrica irregular, temas épicos (Cantar de Mío Cid)
            • MESTER DE CLERECÍA: clérigos (cultos), autores conocidos (Gonzalo de Berceo), métrica regular (cuaderna vía: 4 versos alejandrinos de 14 sílabas), temas religiosos, históricos o eruditos ("Milagros de Nuestra Señora", "Libro de Alexandre")`,
            
            dificultad: 3,
            
            temas: ["Literatura medieval", "Mester de Clerecía", "Mester de Juglaría"],
            
            contexto: "Literatura española"
        },
        
        // PREGUNTA 20 - Nivel 5 - Literatura contemporánea (novela)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'literatura-020',
            texto: `"1984" de George Orwell y "Un mundo feliz" de Aldous Huxley son novelas distópicas del siglo XX. ¿Qué característica comparten?`,
            
            opciones: [
                "Presentan sociedades totalitarias futuras donde se controla a los individuos mediante el poder estatal, la tecnología o la manipulación psicológica",
                "Describen sociedades utópicas ideales y perfectas",
                "Son novelas de ciencia ficción pura sin crítica social",
                "Exaltan el progreso tecnológico sin consecuencias negativas",
                "Narran viajes a otros planetas y civilizaciones extraterrestres"
            ],
            
            correcta: 0,
            
            explicacion: `Distopías (antiutopías):
            • "1984": control mediante vigilancia total ("Gran Hermano"), manipulación del lenguaje ("neolengua"), represión violenta
            • "UN MUNDO FELIZ": control mediante ingeniería genética, condicionamiento psicológico, consumo de drogas (soma), sociedad de castas
            • AMBAS: crítica a los totalitarismos (comunismo, fascismo) y al capitalismo de consumo
            
            Son advertencias sobre el poder del estado y la tecnología para deshumanizar.`,
            
            dificultad: 4,
            
            temas: ["Literatura del siglo XX", "Distopía", "Orwell", "Huxley"],
            
            contexto: "Literatura universal"
        }
    ];
    
    console.log("✅ datos-literatura.js cargado con 20 preguntas");
    console.log("📊 Total preguntas de literatura: 20");
}