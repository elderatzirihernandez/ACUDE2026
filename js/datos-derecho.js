// js/datos-derecho.js
// PREGUNTAS DE DERECHO - 20 PREGUNTAS NIVEL ALTO

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    DATOS_ACUDE.preguntas.derecho = [
        // PREGUNTA 1 - Nivel 5 - Fundamentos del Derecho (tipos de normas)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-001',
            texto: `Un conductor se detiene ante un semáforo en rojo. ¿Qué tipo de norma está cumpliendo y cuál es la principal diferencia con las normas morales y sociales?`,
            
            opciones: [
                "Norma jurídica, porque es heterónoma (impuesta por el Estado), bilateral y coercible (puede exigirse por la fuerza)",
                "Norma moral, porque es autónoma y unilateral",
                "Norma social, porque es un convencionalismo social sin sanción organizada",
                "Norma religiosa, porque se basa en mandamientos divinos",
                "Norma técnica, porque es una regla de tránsito para eficiencia"
            ],
            
            correcta: 0,
            
            explicacion: `Características de las normas:
            • JURÍDICA: heterónoma (impuesta), bilateral (otro puede exigir), externa, coercible (fuerza estatal)
            • MORAL: autónoma (autodeterminación), unilateral, interna, incoercible
            • SOCIAL: convencionalismo, presión social, no coercible por el Estado
            
            El semáforo en rojo es una norma jurídica de tránsito.`,
            
            dificultad: 4,
            
            temas: ["Teoría del Derecho", "Normas jurídicas", "Clasificación de normas"],
            
            contexto: "Introducción al Derecho"
        },
        
        // PREGUNTA 2 - Nivel 5 - Fuentes del Derecho
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-002',
            texto: `En el sistema jurídico mexicano, la jurisprudencia emitida por la Suprema Corte de Justicia de la Nación tiene carácter obligatorio para los tribunales inferiores. ¿Qué tipo de fuente del derecho es?`,
            
            opciones: [
                "Fuente formal (indirecta), porque es un criterio de interpretación judicial que complementa la ley",
                "Fuente material, porque es un factor social que origina el derecho",
                "Fuente histórica, porque son documentos del pasado",
                "Fuente real, porque surge de la realidad social",
                "Fuente legislativa, porque es creada por el Congreso"
            ],
            
            correcta: 0,
            
            explicacion: `Fuentes del derecho:
            • FORMALES: procesos de creación (legislación, jurisprudencia, costumbre, doctrina)
            • MATERIALES: factores sociales, políticos, económicos que determinan el contenido
            • HISTÓRICAS: documentos del pasado que ya no rigen
            
            La jurisprudencia es fuente FORMAL porque es un proceso de creación (interpretación) del derecho.`,
            
            dificultad: 5,
            
            temas: ["Fuentes del derecho", "Jurisprudencia", "Sistema jurídico mexicano"],
            
            contexto: "Teoría del Derecho"
        },
        
        // PREGUNTA 3 - Nivel 5 - Derecho Constitucional (división de poderes)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-003',
            texto: `La Constitución Política de los Estados Unidos Mexicanos establece la división de poderes en Ejecutivo, Legislativo y Judicial. ¿Qué artículo fundamental la consagra?`,
            
            opciones: [
                "Artículo 49, que establece la división de poderes y que no deben reunirse dos o más en una sola persona",
                "Artículo 1, que establece los derechos humanos",
                "Artículo 3, sobre educación",
                "Artículo 27, sobre propiedad y recursos",
                "Artículo 123, sobre trabajo"
            ],
            
            correcta: 0,
            
            explicacion: `Artículo 49 CPEUM:
            "El Supremo Poder de la Federación se divide para su ejercicio en Legislativo, Ejecutivo y Judicial. No podrán reunirse dos o más de estos Poderes en una sola persona o corporación, ni depositarse el Legislativo en un individuo, salvo el caso de facultades extraordinarias al Ejecutivo..."
            
            Es el fundamento de la división de poderes en México.`,
            
            dificultad: 3,
            
            temas: ["Derecho Constitucional", "División de poderes", "Constitución mexicana"],
            
            contexto: "Derecho mexicano"
        },
        
        // PREGUNTA 4 - Nivel 5 - Derecho Civil (personas)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-004',
            texto: `Según el Código Civil, la persona física adquiere capacidad de ejercicio plena a los 18 años. Sin embargo, existen excepciones. ¿Cuál de los siguientes casos otorga capacidad de ejercicio anticipada?`,
            
            opciones: [
                "El matrimonio, que emancipa al menor de edad, otorgándole capacidad de ejercicio aunque sea menor",
                "La autorización de los padres para trabajar, que otorga capacidad plena",
                "La terminación de estudios profesionales, que emancipa automáticamente",
                "La independencia económica, que otorga capacidad de ejercicio",
                "La autorización judicial por madurez anticipada"
            ],
            
            correcta: 0,
            
            explicacion: `Código Civil (arts. 641-643):
            • EMANCIPACIÓN: el matrimonio del menor (con 14 años mujer, 16 hombre) le otorga capacidad de ejercicio, aunque con limitaciones para ciertos actos (enajenar bienes raíces requiere autorización judicial)
            
            Otras formas: el mayor de 16 años que con autorización de los padres vive independientemente puede administrar sus bienes (emancipación por habilitación de edad).`,
            
            dificultad: 4,
            
            temas: ["Derecho Civil", "Personas", "Capacidad", "Emancipación"],
            
            contexto: "Derecho mexicano"
        },
        
        // PREGUNTA 5 - Nivel 5 - Derecho Penal (elementos del delito)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-005',
            texto: `Para que exista un delito, deben concurrir ciertos elementos. ¿Cuáles son los elementos POSITIVOS del delito según la teoría general?`,
            
            opciones: [
                "Conducta (acción u omisión), tipicidad, antijuridicidad, culpabilidad y punibilidad",
                "Dolo y culpa solamente",
                "Daño causado y relación de causalidad",
                "Sujeto activo, sujeto pasivo y objeto material",
                "Imputabilidad, tentativa y consumación"
            ],
            
            correcta: 0,
            
            explicacion: `Elementos del delito (concepción mayoritaria):
            • CONDUCTA: comportamiento humano (acción u omisión)
            • TIPICIDAD: adecuación de la conducta al tipo penal
            • ANTIJURIDICIDAD: contrariedad al orden jurídico (sin causas de justificación)
            • CULPABILIDAD: reproche personal al autor (imputabilidad, conocimiento, exigibilidad)
            • PUNIBILIDAD: posibilidad de aplicar la pena
            
            Los elementos negativos son ausencia de los anteriores.`,
            
            dificultad: 5,
            
            temas: ["Derecho Penal", "Teoría del delito", "Elementos del delito"],
            
            contexto: "Derecho penal"
        },
        
        // PREGUNTA 6 - Nivel 5 - Derecho Laboral (relación de trabajo)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-006',
            texto: `La Ley Federal del Trabajo establece las condiciones mínimas de trabajo. ¿Cuál de las siguientes situaciones NO constituye una relación laboral?`,
            
            opciones: [
                "El servicio prestado por un familiar sin remuneración ni subordinación en un negocio familiar",
                "El trabajador que presta servicios subordinados a cambio de un salario",
                "El empleado de confianza con horario flexible",
                "El trabajador de temporada en el campo",
                "El trabajador a domicilio que recibe instrucciones del patrón"
            ],
            
            correcta: 0,
            
            explicacion: `Elementos de la relación laboral (art. 20 LFT):
            • TRABAJO PERSONAL
            • SUBORDINACIÓN
            • SALARIO
            
            El familiar que trabaja sin remuneración ni subordinación NO tiene relación laboral (puede ser ayuda familiar no regulada).
            
            Todas las otras opciones SÍ constituyen relación laboral, aunque tengan particularidades.`,
            
            dificultad: 4,
            
            temas: ["Derecho Laboral", "Relación de trabajo", "LFT"],
            
            contexto: "Derecho mexicano"
        },
        
        // PREGUNTA 7 - Nivel 5 - Derecho Procesal (principios)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-007',
            texto: `El principio procesal que establece que "nadie puede ser juzgado dos veces por el mismo delito" (non bis in idem) está consagrado en:`,
            
            opciones: [
                "Artículo 23 de la Constitución Mexicana, como garantía de seguridad jurídica",
                "Artículo 1 de la Constitución, como derecho humano genérico",
                "Artículo 14, como garantía de audiencia",
                "Artículo 16, como garantía de legalidad",
                "Artículo 20, como derecho de la víctima"
            ],
            
            correcta: 0,
            
            explicacion: `Artículo 23 CPEUM:
            "Ningún juicio criminal deberá tener más de tres instancias. Nadie puede ser juzgado dos veces por el mismo delito, ya sea que en el juicio se le absuelva o se le condene."
            
            Es el principio NON BIS IN IDEM, garantía procesal penal.`,
            
            dificultad: 4,
            
            temas: ["Derecho Procesal", "Garantías constitucionales", "Non bis in idem"],
            
            contexto: "Derecho mexicano"
        },
        
        // PREGUNTA 8 - Nivel 5 - Derecho Mercantil (sociedades)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-008',
            texto: `En una Sociedad Anónima, el órgano supremo que decide sobre los asuntos más importantes (cambios de estatutos, fusiones, disolución) es:`,
            
            opciones: [
                "La Asamblea General de Accionistas, que es el órgano de deliberación y decisión colegiada",
                "El Consejo de Administración, que administra la sociedad",
                "El Comisario, que vigila",
                "El Director General, que ejecuta",
                "El Secretario, que da fe"
            ],
            
            correcta: 0,
            
            explicacion: `Órganos de la S.A.:
            • ASAMBLEA GENERAL DE ACCIONISTAS: órgano supremo, decide modificaciones estructurales, nombra administradores
            • ADMINISTRADORES (Consejo): gestión ordinaria
            • COMISARIO: vigilancia
            
            La asamblea puede ser ordinaria (anual, balance) o extraordinaria (reformas, fusiones).`,
            
            dificultad: 4,
            
            temas: ["Derecho Mercantil", "Sociedades Anónimas", "Gobierno corporativo"],
            
            contexto: "Derecho mercantil"
        },
        
        // PREGUNTA 9 - Nivel 5 - Derecho Internacional (tratados)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-009',
            texto: `En México, los tratados internacionales en materia de derechos humanos tienen jerarquía:`,
            
            opciones: [
                "A nivel constitucional, según la interpretación de la SCJN (bloque de constitucionalidad)",
                "Por debajo de la Constitución pero por encima de las leyes federales",
                "Al mismo nivel que las leyes federales",
                "Por debajo de las leyes federales",
                "Por debajo de las leyes locales"
            ],
            
            correcta: 0,
            
            explicacion: `Reforma constitucional 2011 y tesis de la SCJN:
            • Los derechos humanos en tratados tienen rango constitucional (forman parte del "bloque de constitucionalidad")
            • Solo limitados por la propia Constitución (principio pro persona)
            • Antes de 2011, estaban por debajo de la Constitución pero por encima de leyes federales
            
            La jerarquía actual: Constitución + Tratados de DDHH > Leyes federales > Leyes locales.`,
            
            dificultad: 5,
            
            temas: ["Derecho Internacional", "Derechos humanos", "Jerarquía normativa"],
            
            contexto: "Derecho mexicano"
        },
        
        // PREGUNTA 10 - Nivel 5 - Derecho Administrativo (acto administrativo)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-010',
            texto: `Una licencia de construcción otorgada por el municipio es un acto administrativo. ¿Cuál de los siguientes NO es un elemento de validez del acto administrativo?`,
            
            opciones: [
                "La intención de lucro del funcionario que lo emite",
                "Competencia del órgano que lo emite",
                "Objeto lícito y posible",
                "Formalidades establecidas en la ley",
                "Motivación y fundamentación"
            ],
            
            correcta: 0,
            
            explicacion: `Elementos del acto administrativo:
            • SUJETO: órgano competente
            • OBJETO: contenido lícito y posible
            • FORMA: procedimiento y formalidades
            • MOTIVACIÓN: razones de hecho
            • FUNDAMENTACIÓN: base legal
            
            La intención de lucro del funcionario es un vicio (desviación de poder), no un elemento.`,
            
            dificultad: 5,
            
            temas: ["Derecho Administrativo", "Acto administrativo", "Elementos de validez"],
            
            contexto: "Derecho administrativo"
        },
        
        // PREGUNTA 11 - Nivel 5 - Derecho Familiar (matrimonio)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-011',
            texto: `En México, el régimen de bienes en el matrimonio puede ser de sociedad conyugal o separación de bienes. ¿Qué característica tiene la sociedad conyugal?`,
            
            opciones: [
                "Los bienes adquiridos durante el matrimonio pertenecen a ambos cónyuges por partes iguales, administrándolos conjuntamente",
                "Cada cónyuge conserva la propiedad y administración de sus bienes presentes y futuros",
                "Solo los bienes inmuebles se comparten, los muebles no",
                "Los bienes adquiridos antes del matrimonio también se comparten",
                "El esposo administra todos los bienes, la esposa solo los suyos"
            ],
            
            correcta: 0,
            
            explicacion: `Régimen de sociedad conyugal:
            • BIENES COMUNES: los adquiridos durante el matrimonio (por trabajo, compras, rentas)
            • ADMINISTRACIÓN: conjunta (ambos deben consentir)
            • AL DISOLVERSE: se parte por mitad
            
            Los bienes adquiridos antes del matrimonio son propios de cada cónyuge.
            La opción B describe la separación de bienes.`,
            
            dificultad: 4,
            
            temas: ["Derecho Familiar", "Régimen patrimonial", "Sociedad conyugal"],
            
            contexto: "Derecho civil"
        },
        
        // PREGUNTA 12 - Nivel 5 - Derecho Penal (delitos contra la salud)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-012',
            texto: `El narcotráfico es un delito contra la salud. Según el Código Penal Federal, ¿qué elemento distingue el narcotráfico del simple consumo?`,
            
            opciones: [
                "El ánimo de comerciar, vender, suministrar o realizar cualquier acto de comercio con la droga",
                "La cantidad de droga poseída, sin importar la intención",
                "El tipo de droga, las duras siempre son tráfico",
                "La reincidencia del consumidor",
                "El lugar donde se encuentra la droga"
            ],
            
            correcta: 0,
            
            explicacion: `Diferenciación:
            • CONSUMO: para uso personal (dosis personal, tratamiento, adicción) - no es delito o es menos grave
            • NARCOTRÁFICO: comercio, suministro, producción, transporte con fines de comercio
            
            La ley establece tabla de dosis máximas de consumo personal. Superar esa cantidad genera presunción de tráfico.`,
            
            dificultad: 4,
            
            temas: ["Derecho Penal", "Delitos contra la salud", "Narcotráfico"],
            
            contexto: "Derecho penal mexicano"
        },
        
        // PREGUNTA 13 - Nivel 5 - Derecho Agrario (ejido)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-013',
            texto: `La reforma al artículo 27 constitucional de 1992 permitió:`,
            
            opciones: [
                "La posibilidad de que las tierras ejidales sean aportadas a sociedades mercantiles y, eventualmente, vendidas a particulares (dominio pleno)",
                "La expropiación masiva de latifundios para crear ejidos",
                "La abolición total de la propiedad ejidal",
                "La nacionalización de todas las tierras agrícolas",
                "El reparto gratuito de tierras a campesinos sin tierra"
            ],
            
            correcta: 0,
            
            explicacion: `Reforma de 1992 al 27 constitucional:
            • ANTES: ejido inalienable, imprescriptible, inembargable (no se podía vender)
            • DESPUÉS: PROCEDE (Programa de Certificación) permite certificar parcelas, y la asamblea ejidal puede autorizar el "dominio pleno" (propiedad privada) y venta a terceros
            
            Se buscaba capitalizar el campo y dar certeza jurídica.`,
            
            dificultad: 5,
            
            temas: ["Derecho Agrario", "Ejido", "Reforma de 1992", "Artículo 27"],
            
            contexto: "Derecho mexicano"
        },
        
        // PREGUNTA 14 - Nivel 5 - Derecho Fiscal (contribuciones)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-014',
            texto: `El Impuesto al Valor Agregado (IVA) es un impuesto:`,
            
            opciones: [
                "Indirecto, porque se traslada al consumidor final y grava actos de consumo",
                "Directo, porque grava directamente la capacidad contributiva de las personas",
                "Progresivo, porque aumenta con el ingreso",
                "Regresivo, porque pagan más los que menos tienen",
                "Local, porque lo cobran los estados"
            ],
            
            correcta: 0,
            
            explicacion: `Clasificación del IVA:
            • INDIRECTO: no grava directamente al contribuyente, sino actos de consumo (se "traslada" al consumidor)
            • FEDERAL: lo cobra la Federación (SAT)
            • PROPORCIONAL: tasa fija (16% general), no progresiva
            • REGRESIVO EN LA PRÁCTICA: pagan más proporción de ingreso los pobres (todo mundo paga 16% sin importar ingreso)
            
            Pero la respuesta pide la clasificación técnica: es INDIRECTO.`,
            
            dificultad: 4,
            
            temas: ["Derecho Fiscal", "IVA", "Clasificación de impuestos"],
            
            contexto: "Derecho tributario"
        },
        
        // PREGUNTA 15 - Nivel 5 - Garantías individuales (amparo)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-015',
            texto: `El juicio de amparo procede contra:`,
            
            opciones: [
                "Actos de autoridad que violen derechos humanos, incluyendo leyes, actos administrativos, judiciales y omisiones",
                "Cualquier acto de particular que cause molestia",
                "Solo contra sentencias judiciales definitivas",
                "Solo contra leyes inconstitucionales",
                "Solo contra actos del Presidente de la República"
            ],
            
            correcta: 0,
            
            explicacion: `Ley de Amparo (artículos 1, 5, 103 y 107 Const.):
            • PROCEDE contra: leyes, tratados, reglamentos, actos administrativos, actos judiciales, omisiones de autoridad
            • REQUISITO: que violen derechos humanos reconocidos en la Constitución y tratados
            • SUJETO: autoridades (en general), excepcionalmente particulares con funciones equivalentes (art. 5 L.A.)
            
            Es el principal medio de control constitucional en México.`,
            
            dificultad: 5,
            
            temas: ["Juicio de amparo", "Garantías constitucionales", "Derechos humanos"],
            
            contexto: "Derecho constitucional"
        },
        
        // PREGUNTA 16 - Nivel 5 - Derecho Internacional Humanitario
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-016',
            texto: `Los Convenios de Ginebra y sus Protocolos adicionales regulan:`,
            
            opciones: [
                "El Derecho Internacional Humanitario (DIH), protegiendo a personas que no participan en hostilidades (civiles, heridos, prisioneros) en conflictos armados",
                "Los derechos humanos en tiempos de paz",
                "El comercio internacional entre naciones",
                "La solución de controversias en la OMC",
                "El derecho del mar y la navegación"
            ],
            
            correcta: 0,
            
            explicacion: `Convenios de Ginebra (1949):
            • I: heridos y enfermos de fuerzas armadas en campaña
            • II: heridos, enfermos y náufragos en el mar
            • III: prisioneros de guerra
            • IV: protección de civiles en tiempo de guerra
            • PROTOCOLOS (1977): conflictos internacionales y no internacionales
            
            Es el núcleo del Derecho Internacional Humanitario.`,
            
            dificultad: 4,
            
            temas: ["Derecho Internacional", "Convenios de Ginebra", "DIH"],
            
            contexto: "Derecho internacional"
        },
        
        // PREGUNTA 17 - Nivel 5 - Derecho Romano (influencia)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-017',
            texto: `El Derecho Romano es la base de los sistemas jurídicos de tradición continental (civil law). ¿Cuál de los siguientes principios NO es de origen romano?`,
            
            opciones: [
                "El precedente judicial obligatorio (stare decisis), propio del common law",
                "La distinción entre derecho público y privado",
                "Las instituciones de propiedad, posesión y contratos",
                "El principio de que las leyes deben ser generales y abstractas",
                "La clasificación de las cosas (res) en muebles e inmuebles"
            ],
            
            correcta: 0,
            
            explicacion: `Aportaciones romanas:
            • PÚBLICO/PRIVADO: Ulpiano
            • INSTITUCIONES: propiedad (dominium), contratos (obligationes), familia, sucesiones
            • CLASIFICACIONES: cosas, acciones, personas
            
            El precedente obligatorio (stare decisis) es del COMMON LAW inglés, no del Derecho Romano (que era legalista, no judicialista).`,
            
            dificultad: 5,
            
            temas: ["Derecho Romano", "Historia del Derecho", "Sistemas jurídicos"],
            
            contexto: "Fundamentos históricos"
        },
        
        // PREGUNTA 18 - Nivel 5 - Derecho Procesal Penal (sistema acusatorio)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-018',
            texto: `El Nuevo Sistema de Justicia Penal en México (acusatorio y oral) se caracteriza por:`,
            
            opciones: [
                "Ser adversarial (partes contendientes), con un juez imparcial, audiencias orales, públicas y continuas, y énfasis en la presunción de inocencia",
                "Ser inquisitivo, escrito y secreto, con el juez investigando",
                "Ser mixto, con etapas escritas y orales combinadas",
                "Ser exclusivamente escrito, como el sistema anterior",
                "No tener Ministerio Público, solo jueces"
            ],
            
            correcta: 0,
            
            explicacion: `Características del sistema acusatorio (reforma 2008-2016):
            • ORALIDAD: audiencias públicas
            • CONTRADICCIÓN: las partes (MP y defensa) confrontan pruebas
            • INMEDIACIÓN: juez presencia directamente las audiencias
            • CONTINUIDAD: audiencias en un solo acto (o días consecutivos)
            • PRESUNCIÓN DE INOCENCIA: el imputado es inocente hasta sentencia
            
            El juez ya NO investiga (inquisitivo), solo juzga.`,
            
            dificultad: 4,
            
            temas: ["Derecho Procesal Penal", "Sistema acusatorio", "Reforma penal"],
            
            contexto: "Derecho mexicano"
        },
        
        // PREGUNTA 19 - Nivel 5 - Derecho Electoral
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-019',
            texto: `El Tribunal Electoral del Poder Judicial de la Federación (TEPJF) es la máxima autoridad jurisdiccional en materia electoral. ¿Cuál de las siguientes resoluciones NO le corresponde?`,
            
            opciones: [
                "Resolver sobre la constitucionalidad de leyes penales",
                "Resolver impugnaciones en elecciones federales y locales",
                "Resolver sobre derechos político-electorales de los ciudadanos",
                "Calificar la elección presidencial",
                "Resolver sobre nulidad de elecciones"
            ],
            
            correcta: 0,
            
            explicacion: `Competencia del TEPJF (art. 99 Const.):
            • IMPUGNACIONES electorales federales y locales
            • DERECHOS POLÍTICO-ELECTORALES (votar, ser votado, asociación)
            • CALIFICACIÓN de elección presidencial (declara validez y presidente electo)
            • NULIDAD de elecciones
            • CONSULTAS electorales populares
            
            La constitucionalidad de leyes penales corresponde a la SCJN (acción de inconstitucionalidad, amparo contra leyes).`,
            
            dificultad: 5,
            
            temas: ["Derecho Electoral", "TEPJF", "Competencia jurisdiccional"],
            
            contexto: "Derecho mexicano"
        },
        
        // PREGUNTA 20 - Nivel 5 - Filosofía del Derecho (iusnaturalismo vs iuspositivismo)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'derecho-020',
            texto: `El iusnaturalismo sostiene que:`,
            
            opciones: [
                "Existen principios de justicia universales y superiores al derecho positivo (derecho natural), y una ley injusta puede no ser ley",
                "El derecho es solo el conjunto de normas creadas por el Estado, sin consideraciones morales",
                "El derecho es un sistema cerrado de normas jerarquizadas",
                "El derecho debe estudiarse como fenómeno social, no como norma",
                "El derecho es pura norma básica hipotética"
            ],
            
            correcta: 0,
            
            explicacion: `IUSNATURALISMO:
            • Hay un DERECHO NATURAL (universal, inmutable) superior al positivo
            • La ley positiva debe ajustarse a ese derecho natural
            • "Lex iniusta non est lex" (ley injusta no es ley)
            • Autores: Santo Tomás, Grocio, Locke
            
            IUSPOSITIVISMO (opción B): solo derecho positivo, separación derecho-moral (Kelsen, Hart).
            
            La opción C es la teoría pura de Kelsen, D es sociología jurídica, E es la norma fundante de Kelsen.`,
            
            dificultad: 5,
            
            temas: ["Filosofía del Derecho", "Iusnaturalismo", "Iuspositivismo"],
            
            contexto: "Teoría del Derecho"
        }
    ];
    
    console.log("✅ datos-derecho.js cargado con 20 preguntas");
    console.log("📊 Total preguntas de derecho: 20");
}