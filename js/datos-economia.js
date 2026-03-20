// js/datos-economia.js
// PREGUNTAS DE ECONOMÍA Y ADMINISTRACIÓN - 20 PREGUNTAS NIVEL ALTO

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    DATOS_ACUDE.preguntas.economia = [
        // PREGUNTA 1 - Nivel 5 - Elasticidad precio de la demanda
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-001',
            texto: `Un producto tiene una elasticidad precio de la demanda de -0.5. Si el precio aumenta un 10%, ¿qué ocurre con la cantidad demandada y el ingreso total?`,
            
            opciones: [
                "La cantidad disminuye 5% y el ingreso total aumenta",
                "La cantidad disminuye 5% y el ingreso total disminuye",
                "La cantidad disminuye 10% y el ingreso total no cambia",
                "La cantidad disminuye 20% y el ingreso total disminuye",
                "La cantidad no cambia y el ingreso total aumenta"
            ],
            
            correcta: 0,
            
            explicacion: `Elasticidad = -0.5 significa demanda INELÁSTICA (|E| < 1)
            • Cambio en cantidad = Elasticidad × Cambio en precio = -0.5 × 10% = -5%
            • Cuando demanda es inelástica, un aumento de precio INCREMENTA el ingreso total
            • Ingreso total = P × Q, cae menos Q que sube P`,
            
            dificultad: 5,
            
            temas: ["Microeconomía", "Elasticidad", "Ingreso total"],
            
            contexto: "Análisis de demanda"
        },
        
        // PREGUNTA 2 - Nivel 5 - Costos de producción
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-002',
            texto: `Una empresa tiene costos fijos de $1000 y costos variables de $10 por unidad. Si produce 100 unidades, ¿cuál es su costo marginal y costo medio total?`,
            
            opciones: [
                "Costo marginal = $10, Costo medio total = $20",
                "Costo marginal = $10, Costo medio total = $10",
                "Costo marginal = $20, Costo medio total = $20",
                "Costo marginal = $1000, Costo medio total = $20",
                "Costo marginal = $0, Costo medio total = $10"
            ],
            
            correcta: 0,
            
            explicacion: `Costo marginal = cambio en costo total por unidad adicional = $10 (solo variable)
            
            Costo total = CF + CV = 1000 + (10 × 100) = 1000 + 1000 = $2000
            Costo medio total = CT / Q = 2000 / 100 = $20
            
            El costo marginal cruza al costo medio total en su punto mínimo.`,
            
            dificultad: 4,
            
            temas: ["Microeconomía", "Costos de producción", "Estructura de costos"],
            
            contexto: "Teoría de la empresa"
        },
        
        // PREGUNTA 3 - Nivel 5 - Mercados de competencia perfecta
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-003',
            texto: `En un mercado de competencia perfecta, una empresa maximiza beneficios cuando:`,
            
            opciones: [
                "Precio = Costo marginal (siempre que P ≥ Costo variable medio)",
                "Precio = Costo medio total",
                "Ingreso marginal = 0",
                "Costo total es mínimo",
                "Costo variable medio es mínimo"
            ],
            
            correcta: 0,
            
            explicacion: `En competencia perfecta:
            • La empresa es precio-aceptante → P = IMg
            • Maximización: IMg = CMg → P = CMg
            • Condición de cierre: P ≥ CVMe (corto plazo)
            • Si P < CVMe, mejor cerrar
            
            En el largo plazo, P = CMg = CMe mínimo (beneficio cero).`,
            
            dificultad: 5,
            
            temas: ["Microeconomía", "Competencia perfecta", "Maximización"],
            
            contexto: "Teoría de mercados"
        },
        
        // PREGUNTA 4 - Nivel 4 - Producto Interno Bruto (PIB)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-004',
            texto: `¿Cuál de los siguientes NO se incluye en el cálculo del PIB de México?`,
            
            opciones: [
                "Las ventas de un automóvil usado",
                "La construcción de una nueva fábrica",
                "El consumo de servicios médicos",
                "La compra de alimentos en un supermercado",
                "La exportación de aguacate"
            ],
            
            correcta: 0,
            
            explicacion: `El PIB mide:
            • Bienes y servicios FINALES NUEVOS
            • Producidos DENTRO del país
            • En un período determinado
            
            NO incluye:
            • Bienes usados (ya se contaron cuando eran nuevos)
            • Transacciones financieras
            • Trabajo informal no registrado
            • Bienes intermedios (para evitar doble contabilización)`,
            
            dificultad: 4,
            
            temas: ["Macroeconomía", "PIB", "Contabilidad nacional"],
            
            contexto: "Medición de la actividad económica"
        },
        
        // PREGUNTA 5 - Nivel 5 - Inflación y tasas de interés
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-005',
            texto: `Si la tasa de interés nominal es 8% y la inflación esperada es 3%, ¿cuál es la tasa de interés real aproximada según la ecuación de Fisher?`,
            
            opciones: [
                "5%, porque tasa real ≈ nominal - inflación",
                "11%, porque nominal + inflación",
                "24%, porque 8 × 3",
                "2.67%, porque 8/3",
                "8%, porque la inflación no afecta"
            ],
            
            correcta: 0,
            
            explicacion: `Ecuación de Fisher (aproximación):
            Tasa real ≈ Tasa nominal - Inflación
            8% - 3% = 5%
            
            Fórmula exacta: (1 + nominal) = (1 + real) × (1 + inflación)
            Real = (1.08/1.03) - 1 = 0.0485 = 4.85% (aproximadamente 5%)`,
            
            dificultad: 4,
            
            temas: ["Macroeconomía", "Inflación", "Tasas de interés"],
            
            contexto: "Política monetaria"
        },
        
        // PREGUNTA 6 - Nivel 5 - Teoría del consumidor (utilidad marginal)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-006',
            texto: `Un consumidor maximiza su utilidad cuando:`,
            
            opciones: [
                "La utilidad marginal por peso gastado es igual para todos los bienes",
                "La utilidad total es máxima",
                "La utilidad marginal es cero para todos los bienes",
                "El precio de todos los bienes es igual",
                "La utilidad marginal es creciente"
            ],
            
            correcta: 0,
            
            explicacion: `Condición de maximización de utilidad (enfoque cardinal):
            UMgx / Px = UMgy / Py = ... = λ (utilidad marginal del dinero)
            
            Si UMgx/Px > UMgy/Py → comprar más X (baja UMgx) hasta igualar.
            
            Esto asegura la asignación óptima del presupuesto.`,
            
            dificultad: 5,
            
            temas: ["Microeconomía", "Teoría del consumidor", "Utilidad"],
            
            contexto: "Comportamiento del consumidor"
        },
        
        // PREGUNTA 7 - Nivel 4 - Ciclo económico
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-007',
            texto: `En una fase de recesión económica, ¿qué suele ocurrir con el desempleo y la producción?`,
            
            opciones: [
                "Aumenta el desempleo y disminuye la producción",
                "Disminuye el desempleo y aumenta la producción",
                "Aumentan ambos, desempleo y producción",
                "Disminuyen ambos, desempleo y producción",
                "No hay relación entre desempleo y producción"
            ],
            
            correcta: 0,
            
            explicacion: `Fases del ciclo económico:
            • Expansión: ↑ PIB, ↓ desempleo
            • Pico: máximo PIB, mínimo desempleo
            • Recesión: ↓ PIB, ↑ desempleo (Ley de Okun)
            • Fondo: mínimo PIB, máximo desempleo
            
            Ley de Okun: 1% de caída en PIB → 2% de aumento en desempleo (aproximadamente).`,
            
            dificultad: 4,
            
            temas: ["Macroeconomía", "Ciclo económico", "Desempleo"],
            
            contexto: "Análisis macroeconómico"
        },
        
        // PREGUNTA 8 - Nivel 5 - Monopolio
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-008',
            texto: `Un monopolio maximiza beneficios cuando:`,
            
            opciones: [
                "Ingreso marginal = Costo marginal, pero el precio es mayor al ingreso marginal",
                "Precio = Costo marginal, como en competencia",
                "Ingreso total es máximo",
                "Costo medio es mínimo",
                "Ingreso marginal = 0"
            ],
            
            correcta: 0,
            
            explicacion: `Maximización en monopolio:
            • IMg = CMg (como toda empresa)
            • Pero para el monopolio, P > IMg (curva de demanda con pendiente negativa)
            • El precio se lee en la curva de demanda para Q donde IMg = CMg
            
            Esto genera ineficiencia (pérdida de bienestar) por precio > CMg.`,
            
            dificultad: 5,
            
            temas: ["Microeconomía", "Monopolio", "Poder de mercado"],
            
            contexto: "Estructuras de mercado"
        },
        
        // PREGUNTA 9 - Nivel 4 - Dinero y bancos centrales
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-009',
            texto: `Si el banco central aumenta el coeficiente de reservas, ¿qué efecto tiene sobre la oferta monetaria?`,
            
            opciones: [
                "Disminuye la oferta monetaria, porque los bancos pueden prestar menos",
                "Aumenta la oferta monetaria, porque hay más reservas",
                "No afecta la oferta monetaria",
                "Aumenta la base monetaria",
                "Disminuye la demanda de dinero"
            ],
            
            correcta: 0,
            
            explicacion: `Coeficiente de reservas = porcentaje de depósitos que los bancos deben mantener como reservas.
            
            ↑ Coeficiente de reservas:
            • Bancos pueden prestar MENOS
            • Multiplicador monetario = 1 / coeficiente (simplificado) DISMINUYE
            • Oferta monetaria DISMINUYE
            
            Es una política monetaria CONTRACCIONISTA.`,
            
            dificultad: 4,
            
            temas: ["Macroeconomía", "Política monetaria", "Banca"],
            
            contexto: "Sistema financiero"
        },
        
        // PREGUNTA 10 - Nivel 5 - Externalidades
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-010',
            texto: `Una fábrica contamina un río afectando a pescadores río abajo. Esto es un ejemplo de:`,
            
            opciones: [
                "Externalidad negativa en la producción, y el costo social excede al costo privado",
                "Externalidad positiva en el consumo",
                "Bien público, porque el río es de todos",
                "Fallo de mercado por información asimétrica",
                "Monopolio natural por los altos costos fijos"
            ],
            
            correcta: 0,
            
            explicacion: `Externalidad negativa en producción:
            • Costo privado: lo que paga la fábrica
            • Costo social: privado + daño a pescadores
            • Costo social > Costo privado
            
            Soluciones:
            • Impuesto pigouviano (igual al costo externo)
            • Permisos de contaminación negociables
            • Regulación directa`,
            
            dificultad: 5,
            
            temas: ["Microeconomía", "Externalidades", "Fallas de mercado"],
            
            contexto: "Economía ambiental"
        },
        
        // PREGUNTA 11 - Nivel 5 - Ventaja comparativa
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-011',
            texto: `País A produce 10 computadoras o 20 automóviles. País B produce 8 computadoras o 12 automóviles. ¿Qué afirmación es correcta?`,
            
            opciones: [
                "A tiene ventaja comparativa en automóviles, B en computadoras",
                "A tiene ventaja comparativa en computadoras, B en automóviles",
                "A tiene ventaja absoluta en ambos, pero no hay comparativa",
                "B tiene ventaja comparativa en ambos",
                "No hay base para el comercio"
            ],
            
            correcta: 0,
            
            explicacion: `Costos de oportunidad:
            
            País A:
            • 1 computadora = 2 automóviles (20/10)
            • 1 automóvil = 0.5 computadoras (10/20)
            
            País B:
            • 1 computadora = 1.5 automóviles (12/8)
            • 1 automóvil = 0.67 computadoras (8/12)
            
            Comparativa:
            • A tiene menor costo en automóviles (0.5 < 0.67) → A exporta autos
            • B tiene menor costo en computadoras (1.5 < 2) → B exporta computadoras`,
            
            dificultad: 5,
            
            temas: ["Comercio internacional", "Ventaja comparativa", "Costos de oportunidad"],
            
            contexto: "Teoría del comercio"
        },
        
        // PREGUNTA 12 - Nivel 4 - Desempleo (tipos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-012',
            texto: `Un trabajador es despedido porque su empresa cierra y su industria está en declive permanente. Necesita capacitarse para otro sector. Este es un ejemplo de:`,
            
            opciones: [
                "Desempleo estructural",
                "Desempleo friccional",
                "Desempleo cíclico",
                "Desempleo estacional",
                "Desempleo voluntario"
            ],
            
            correcta: 0,
            
            explicacion: `Tipos de desempleo:
            • FRICCIONAL: entre trabajos (normal, voluntario, corto plazo)
            • ESTRUCTURAL: desajuste habilidades/ubicación (requiere capacitación, largo plazo)
            • CÍCLICO: por recesión (se soluciona con crecimiento)
            • ESTACIONAL: por temporadas (turismo, agricultura)`,
            
            dificultad: 4,
            
            temas: ["Macroeconomía", "Desempleo", "Mercado laboral"],
            
            contexto: "Análisis del mercado de trabajo"
        },
        
        // PREGUNTA 13 - Nivel 5 - Curva de Phillips
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-013',
            texto: `La curva de Phillips de corto plazo muestra una relación:`,
            
            opciones: [
                "Negativa entre inflación y desempleo",
                "Positiva entre inflación y desempleo",
                "Negativa entre PIB y desempleo",
                "Positiva entre PIB e inflación",
                "Constante, sin relación"
            ],
            
            correcta: 0,
            
            explicacion: `Curva de Phillips (corto plazo):
            • Inflación ↑ → Desempleo ↓ (trade-off)
            • Explicación: cuando la demanda agregada ↑, ↓ desempleo y ↑ precios
            
            Largo plazo: vertical en tasa natural de desempleo
            • No hay trade-off permanente
            • Expectativas de inflación se ajustan`,
            
            dificultad: 5,
            
            temas: ["Macroeconomía", "Curva de Phillips", "Inflación-desempleo"],
            
            contexto: "Política macroeconómica"
        },
        
        // PREGUNTA 14 - Nivel 4 - Impuestos (tipos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-014',
            texto: `Un impuesto que aumenta su tasa conforme aumenta la base imponible se denomina:`,
            
            opciones: [
                "Impuesto progresivo",
                "Impuesto regresivo",
                "Impuesto proporcional",
                "Impuesto directo",
                "Impuesto indirecto"
            ],
            
            correcta: 0,
            
            explicacion: `Clasificación por progresividad:
            • PROGRESIVO: tasa ↑ cuando base ↑ (ISR, donaciones)
            • REGRESIVO: tasa ↓ cuando base ↑ (IVA, consumo - pobres gastan mayor %)
            • PROPORCIONAL: tasa constante (flat tax)
            
            Progresivo reduce desigualdad, regresivo la aumenta.`,
            
            dificultad: 4,
            
            temas: ["Finanzas públicas", "Impuestos", "Política fiscal"],
            
            contexto: "Sistema tributario"
        },
        
        // PREGUNTA 15 - Nivel 5 - Teoría de juegos (dilema del prisionero)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-015',
            texto: `En el dilema del prisionero, el equilibrio de Nash es:`,
            
            opciones: [
                "Ambos confiesan, aunque cooperar sería mejor para ambos",
                "Ambos cooperan (no confiesan)",
                "Uno confiesa y el otro coopera",
                "No hay equilibrio",
                "Depende de quién mueva primero"
            ],
            
            correcta: 0,
            
            explicacion: `Dilema del prisionero:
            • Cada jugador tiene incentivo individual a confesar
            • Confesar es estrategia dominante
            • Resultado: ambos confiesan (equilibrio de Nash)
            • Pero cooperar (no confesar) da mejor resultado conjunto
            
            Muestra cómo racionalidad individual lleva a resultado subóptimo social.`,
            
            dificultad: 5,
            
            temas: ["Microeconomía", "Teoría de juegos", "Equilibrio de Nash"],
            
            contexto: "Interacción estratégica"
        },
        
        // PREGUNTA 16 - Nivel 4 - Balanza de pagos
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-016',
            texto: `La exportación de automóviles se registra en la balanza de pagos como:`,
            
            opciones: [
                "Crédito en la cuenta corriente",
                "Débito en la cuenta corriente",
                "Crédito en la cuenta de capital",
                "Débito en la cuenta financiera",
                "Crédito en la cuenta de errores"
            ],
            
            correcta: 0,
            
            explicacion: `Balanza de pagos:
            • CUENTA CORRIENTE: bienes, servicios, renta, transferencias
              - Exportaciones: CRÉDITO (+)
              - Importaciones: DÉBITO (-)
            • CUENTA FINANCIERA: inversiones, préstamos
            • CUENTA DE CAPITAL: transferencias de capital
            
            Toda transacción tiene contrapartida, por eso suma cero.`,
            
            dificultad: 4,
            
            temas: ["Macroeconomía", "Balanza de pagos", "Comercio internacional"],
            
            contexto: "Sector externo"
        },
        
        // PREGUNTA 17 - Nivel 5 - Inversión y VAN
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-017',
            texto: `Un proyecto requiere inversión inicial de $1000 y generará $600 en año 1 y $600 en año 2. Con tasa de descuento 10%, ¿cuál es su VAN?`,
            
            opciones: [
                "$41.32, porque VAN = -1000 + 600/1.1 + 600/1.21",
                "$200, porque 1200 - 1000 = 200",
                "$0, porque no hay ganancia",
                "-$41.32, porque no es rentable",
                "$100, porque 1200/1.1 - 1000"
            ],
            
            correcta: 0,
            
            explicacion: `VAN = -Inversión + Σ Flujo / (1+r)^t
            
            Año 1: 600 / 1.1 = 545.45
            Año 2: 600 / 1.21 = 495.87
            Suma = 1041.32
            VAN = 1041.32 - 1000 = $41.32
            
            VAN > 0 → proyecto rentable.`,
            
            dificultad: 5,
            
            temas: ["Finanzas", "Evaluación de proyectos", "VAN"],
            
            contexto: "Matemáticas financieras"
        },
        
        // PREGUNTA 18 - Nivel 4 - Oferta y demanda agregada
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-018',
            texto: `Un aumento en el gasto de gobierno desplaza:`,
            
            opciones: [
                "La curva de demanda agregada a la derecha",
                "La curva de oferta agregada a la derecha",
                "La curva de demanda agregada a la izquierda",
                "La curva de oferta agregada a la izquierda",
                "Ambas curvas a la derecha"
            ],
            
            correcta: 0,
            
            explicacion: `Política fiscal expansiva (↑ G):
            • Aumenta demanda agregada (DA = C + I + G + XN)
            • Desplaza DA a la DERECHA
            • En corto plazo: ↑ PIB y ↑ precios
            
            Oferta agregada se desplaza por:
            • Tecnología
            • Precios de insumos
            • Productividad`,
            
            dificultad: 4,
            
            temas: ["Macroeconomía", "Demanda agregada", "Política fiscal"],
            
            contexto: "Modelo OA-DA"
        },
        
        // PREGUNTA 19 - Nivel 5 - Discriminación de precios
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-019',
            texto: `Un cine cobra entrada más barata a estudiantes y adultos mayores. Esto es un ejemplo de:`,
            
            opciones: [
                "Discriminación de precios de tercer grado",
                "Discriminación de precios de primer grado",
                "Discriminación de precios de segundo grado",
                "Competencia perfecta",
                "Precio predatoria"
            ],
            
            correcta: 0,
            
            explicacion: `Tipos de discriminación:
            • 1er GRADO: precio diferente a CADA consumidor (máximo)
            • 2do GRADO: precio según cantidad o versión (descuentos por volumen)
            • 3er GRADO: precio diferente a GRUPOS (estudiantes, tercera edad)
            
            Requiere poder de mercado y evitar reventa.`,
            
            dificultad: 5,
            
            temas: ["Microeconomía", "Discriminación de precios", "Poder de mercado"],
            
            contexto: "Estrategias de precios"
        },
        
        // PREGUNTA 20 - Nivel 4 - Bienes públicos
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'economia-020',
            texto: `Un bien es público puro si es:`,
            
            opciones: [
                "No rival y no excluyente",
                "Rival y excluyente",
                "No rival y excluyente",
                "Rival y no excluyente",
                "Ni rival ni no rival"
            ],
            
            correcta: 0,
            
            explicacion: `Clasificación de bienes:
            
            • RIVAL: el consumo de uno reduce disponibilidad para otros
            • EXCLUYENTE: se puede impedir su consumo a quien no pague
            
            Bien público PURO:
            - NO RIVAL: faro, defensa nacional
            - NO EXCLUYENTE: aire limpio
            
            Problema: free rider → provisión privada insuficiente → estado`,
            
            dificultad: 4,
            
            temas: ["Microeconomía", "Bienes públicos", "Fallas de mercado"],
            
            contexto: "Economía del sector público"
        }
    ];
    
    console.log("✅ datos-economia.js cargado con 20 preguntas");
    console.log("📊 Total preguntas de economía: 20");
}