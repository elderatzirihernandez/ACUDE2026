// js/datos-matematicas.js
// PREGUNTAS DE MATEMÁTICAS (CIENCIAS) - 20 PREGUNTAS NIVEL ALTO

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    DATOS_ACUDE.preguntas.matematicas = [
        // PREGUNTA 1 - Nivel 5 - Límites (indeterminación 0/0)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-001',
            texto: `Calcular el límite: lim_{x→2} (x² - 4)/(x - 2)`,
            
            opciones: [
                "4, porque factorizando (x-2)(x+2)/(x-2) = x+2, evaluando en 2 da 4",
                "0, porque numerador tiende a 0",
                "∞, porque denominador tiende a 0",
                "2, porque 4/2",
                "No existe, porque es indeterminado"
            ],
            
            correcta: 0,
            
            explicacion: `Tenemos una indeterminación 0/0 cuando x→2.
            
            Factorizando el numerador: x² - 4 = (x - 2)(x + 2)
            
            Entonces: (x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2) = x + 2, para x ≠ 2
            
            lim_{x→2} (x + 2) = 4
            
            El límite existe y vale 4.`,
            
            dificultad: 4,
            
            temas: ["Límites", "Indeterminaciones", "Factorización"],
            
            contexto: "Cálculo diferencial"
        },
        
        // PREGUNTA 2 - Nivel 5 - Derivadas (regla de la cadena)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-002',
            texto: `Si f(x) = sen(3x² + 1), ¿cuál es f'(x)?`,
            
            opciones: [
                "6x·cos(3x² + 1), porque derivada externa: cos(...) × derivada interna: 6x",
                "cos(3x² + 1), porque derivada de seno es coseno",
                "3x²·cos(3x² + 1), porque derivada de 3x² es 6x?",
                "6x·sen(3x² + 1), porque se conserva",
                "-6x·cos(3x² + 1), por error de signo"
            ],
            
            correcta: 0,
            
            explicacion: `Regla de la cadena: f(x) = sen(g(x)) → f'(x) = cos(g(x)) × g'(x)
            
            g(x) = 3x² + 1
            g'(x) = 6x
            
            f'(x) = cos(3x² + 1) × 6x = 6x·cos(3x² + 1)`,
            
            dificultad: 4,
            
            temas: ["Derivadas", "Regla de la cadena", "Funciones trigonométricas"],
            
            contexto: "Cálculo diferencial"
        },
        
        // PREGUNTA 3 - Nivel 5 - Integrales (sustitución)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-003',
            texto: `Resolver la integral: ∫ 2x·e^(x²) dx`,
            
            opciones: [
                "e^(x²) + C, porque con u = x², du = 2x dx, ∫ e^u du = e^u + C",
                "x²·e^(x²) + C, porque la derivada de eso da",
                "2x·e^(x²) + C, porque es ella misma",
                "e^(x²)/2 + C, por factor 1/2",
                "2e^(x²) + C, porque 2x integra a x²"
            ],
            
            correcta: 0,
            
            explicacion: `Sustitución: u = x²
            du = 2x dx
            
            ∫ 2x·e^(x²) dx = ∫ e^u du = e^u + C = e^(x²) + C
            
            Podemos verificar derivando: d/dx[e^(x²)] = 2x·e^(x²)`,
            
            dificultad: 4,
            
            temas: ["Integrales", "Sustitución", "Exponenciales"],
            
            contexto: "Cálculo integral"
        },
        
        // PREGUNTA 4 - Nivel 5 - Ecuaciones diferenciales (variables separables)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-004',
            texto: `Resolver la ecuación diferencial: dy/dx = 2xy, con y(0) = 1`,
            
            opciones: [
                "y = e^(x²), porque separando: dy/y = 2x dx, integrando ln|y| = x² + C, y = e^(x²+C) = Ce^(x²), con C=1",
                "y = e^(2x), porque dy/dx = 2y",
                "y = x² + 1, porque integrando 2x",
                "y = e^(2x²), porque el 2 multiplica",
                "y = 1 + x², por serie de Taylor"
            ],
            
            correcta: 0,
            
            explicacion: `Ecuación de variables separables:
            dy/dx = 2xy
            dy/y = 2x dx
            
            Integrando: ∫ dy/y = ∫ 2x dx
            ln|y| = x² + C
            
            Aplicando exponencial: y = e^(x² + C) = e^C·e^(x²) = K·e^(x²)
            
            Con y(0) = 1: 1 = K·e^0 = K → K = 1
            
            Solución: y = e^(x²)`,
            
            dificultad: 5,
            
            temas: ["Ecuaciones diferenciales", "Variables separables", "Problema de valor inicial"],
            
            contexto: "Ecuaciones diferenciales ordinarias"
        },
        
        // PREGUNTA 5 - Nivel 4 - Álgebra lineal (sistemas de ecuaciones)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-005',
            texto: `Resolver el sistema: 
            2x + y = 5
            x - 3y = -1`,
            
            opciones: [
                "x = 2, y = 1, porque sustituyendo o por determinantes",
                "x = 1, y = 3, porque 2+3=5",
                "x = 0, y = 5, porque 0+5=5",
                "x = 3, y = -1, porque 3-(-3)=6",
                "x = 2, y = -1, porque 4-1=3"
            ],
            
            correcta: 0,
            
            explicacion: `Método de sustitución:
            De la primera: y = 5 - 2x
            Sustituyendo en segunda: x - 3(5 - 2x) = -1
            x - 15 + 6x = -1
            7x - 15 = -1
            7x = 14
            x = 2
            
            y = 5 - 4 = 1
            
            Verificación: 2(2)+1=5 ✓, 2-3(1)=-1 ✓`,
            
            dificultad: 3,
            
            temas: ["Álgebra lineal", "Sistemas de ecuaciones", "Solución de sistemas"],
            
            contexto: "Álgebra básica"
        },
        
        // PREGUNTA 6 - Nivel 5 - Matrices (determinante)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-006',
            texto: `Calcular el determinante de la matriz:
            | 2  1  0 |
            | 1  2  1 |
            | 0  1  2 |`,
            
            opciones: [
                "4, porque 2(2×2 - 1×1) - 1(1×2 - 1×0) + 0 = 2(4-1) - 1(2-0) = 6 - 2 = 4",
                "6, porque 2+2+2",
                "8, porque 2×2×2",
                "2, porque es simétrica",
                "0, porque es singular"
            ],
            
            correcta: 0,
            
            explicacion: `Desarrollando por primera fila:
            det = 2 × det([2,1; 1,2]) - 1 × det([1,1; 0,2]) + 0 × det([1,2; 0,1])
            
            det([2,1; 1,2]) = 2×2 - 1×1 = 4 - 1 = 3
            det([1,1; 0,2]) = 1×2 - 1×0 = 2 - 0 = 2
            
            det = 2×3 - 1×2 + 0 = 6 - 2 = 4`,
            
            dificultad: 5,
            
            temas: ["Matrices", "Determinantes", "Álgebra lineal"],
            
            contexto: "Cálculo matricial"
        },
        
        // PREGUNTA 7 - Nivel 5 - Geometría analítica (circunferencia)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-007',
            texto: `La ecuación x² + y² - 6x + 4y - 12 = 0 representa una circunferencia. ¿Cuáles son su centro y radio?`,
            
            opciones: [
                "C(3, -2), r = 5, porque completando cuadrados: (x-3)² + (y+2)² = 25",
                "C(-3, 2), r = 5, porque signos cambiados",
                "C(3, -2), r = √12, porque el término independiente",
                "C(6, -4), r = 6, porque los coeficientes",
                "C(0, 0), r = √12, porque no hay términos lineales"
            ],
            
            correcta: 0,
            
            explicacion: `Completando cuadrados:
            x² - 6x + y² + 4y = 12
            (x² - 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4
            (x - 3)² + (y + 2)² = 25
            
            Centro: (3, -2)
            Radio: √25 = 5`,
            
            dificultad: 4,
            
            temas: ["Geometría analítica", "Circunferencia", "Completar cuadrados"],
            
            contexto: "Geometría analítica"
        },
        
        // PREGUNTA 8 - Nivel 5 - Trigonometría (identidades)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-008',
            texto: `Simplificar: (sen x + cos x)² - 2 sen x cos x`,
            
            opciones: [
                "1, porque (sen x + cos x)² = sen²x + 2 sen x cos x + cos²x = 1 + 2 sen x cos x, restando 2 sen x cos x queda 1",
                "0, porque se cancelan términos",
                "sen²x + cos²x, que es 1",
                "2, porque hay doble producto",
                "sen 2x, porque 2 sen x cos x = sen 2x"
            ],
            
            correcta: 0,
            
            explicacion: `Desarrollando:
            (sen x + cos x)² = sen²x + 2 sen x cos x + cos²x
            
            Pero sen²x + cos²x = 1
            
            Entonces: (sen x + cos x)² = 1 + 2 sen x cos x
            
            Restando 2 sen x cos x: 1 + 2 sen x cos x - 2 sen x cos x = 1`,
            
            dificultad: 4,
            
            temas: ["Trigonometría", "Identidades trigonométricas", "Simplificación"],
            
            contexto: "Funciones trigonométricas"
        },
        
        // PREGUNTA 9 - Nivel 5 - Números complejos
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-009',
            texto: `Si z = 1 + i, calcular z⁴`,
            
            opciones: [
                "-4, porque z² = 2i, z⁴ = (2i)² = 4i² = -4",
                "4, porque (1+i)⁴ = 4",
                "4i, porque (1+i)² = 2i",
                "-4i, porque i² = -1",
                "1 + 4i, porque binomio"
            ],
            
            correcta: 0,
            
            explicacion: `z = 1 + i
            z² = (1 + i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i
            z⁴ = (z²)² = (2i)² = 4i² = 4(-1) = -4
            
            También en forma polar: |z| = √2, arg(z) = 45°
            z⁴ = (√2)⁴ cis(4×45°) = 4 cis(180°) = -4`,
            
            dificultad: 4,
            
            temas: ["Números complejos", "Potencia de complejos", "Forma binómica"],
            
            contexto: "Variable compleja"
        },
        
        // PREGUNTA 10 - Nivel 5 - Funciones (dominio)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-010',
            texto: `El dominio de la función f(x) = √(x² - 4) + 1/(x - 3) es:`,
            
            opciones: [
                "(-∞, -2] ∪ [2, 3) ∪ (3, ∞), porque x²-4 ≥ 0 → x ≤ -2 o x ≥ 2, y x ≠ 3",
                "[-2, 2], porque la raíz requiere x² ≤ 4",
                "(-∞, ∞), excepto 3, porque solo importa el denominador",
                "(-∞, -2) ∪ (2, ∞), sin importar el 3",
                "(-2, 2) ∪ (3, ∞), porque la raíz y el denominador"
            ],
            
            correcta: 0,
            
            explicacion: `Condiciones:
            1. Raíz cuadrada: x² - 4 ≥ 0 → x² ≥ 4 → |x| ≥ 2 → x ≤ -2 o x ≥ 2
            2. Denominador: x - 3 ≠ 0 → x ≠ 3
            
            Combinando: (-∞, -2] ∪ [2, 3) ∪ (3, ∞)
            
            Notar que en x = 2 y x = -2 la raíz es cero, sí están incluidos.`,
            
            dificultad: 5,
            
            temas: ["Funciones", "Dominio", "Condiciones de existencia"],
            
            contexto: "Análisis de funciones"
        },
        
        // PREGUNTA 11 - Nivel 5 - Logaritmos (ecuaciones)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-011',
            texto: `Resolver la ecuación: log₂(x) + log₂(x - 2) = 3`,
            
            opciones: [
                "x = 4, porque log₂[x(x-2)] = 3 → x(x-2) = 8 → x² - 2x - 8 = 0 → (x-4)(x+2)=0, x=4 (x=-2 no válido)",
                "x = 8, porque log₂(8) = 3",
                "x = 2, porque 2+0=2?",
                "x = 6, porque 6×4=24",
                "x = 3, porque 3×1=3"
            ],
            
            correcta: 0,
            
            explicacion: `Propiedad de logaritmos: log₂(x) + log₂(x-2) = log₂[x(x-2)]
            
            log₂[x(x-2)] = 3
            x(x-2) = 2³ = 8
            x² - 2x - 8 = 0
            (x - 4)(x + 2) = 0
            x = 4 o x = -2
            
            Verificando dominio: x > 0 y x > 2 → x > 2
            x = 4 es válido, x = -2 no está en el dominio.`,
            
            dificultad: 4,
            
            temas: ["Logaritmos", "Ecuaciones logarítmicas", "Propiedades"],
            
            contexto: "Funciones logarítmicas"
        },
        
        // PREGUNTA 12 - Nivel 5 - Sucesiones y series
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-012',
            texto: `En una progresión aritmética, el quinto término es 17 y el décimo término es 32. ¿Cuál es la suma de los primeros 15 términos?`,
            
            opciones: [
                "465, porque a₁ = 5, d = 3, S₁₅ = (15/2)(2×5 + 14×3) = 7.5(10 + 42) = 7.5×52 = 390? Error, 465 es incorrecto",
                "390, porque S₁₅ = (15/2)(a₁ + a₁₅) = 7.5(5 + 47) = 7.5×52 = 390",
                "450, porque 15×30",
                "480, porque a₁ = 7, d = 2.5",
                "435, porque promedio"
            ],
            
            correcta: 1,
            
            explicacion: `En PA: a_n = a₁ + (n-1)d
            a₅ = a₁ + 4d = 17
            a₁₀ = a₁ + 9d = 32
            Restando: 5d = 15 → d = 3
            a₁ + 12 = 17 → a₁ = 5
            
            a₁₅ = 5 + 14×3 = 5 + 42 = 47
            S₁₅ = (15/2)(a₁ + a₁₅) = 7.5 × (5 + 47) = 7.5 × 52 = 390`,
            
            dificultad: 4,
            
            temas: ["Sucesiones", "Progresiones aritméticas", "Suma de términos"],
            
            contexto: "Series y sucesiones"
        },
        
        // PREGUNTA 13 - Nivel 5 - Probabilidad (probabilidad condicional)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-013',
            texto: `En una urna hay 3 bolas rojas y 2 azules. Se extraen dos bolas sin reemplazo. ¿Cuál es la probabilidad de que ambas sean rojas?`,
            
            opciones: [
                "3/10, porque (3/5)×(2/4) = 6/20 = 3/10",
                "3/5, porque 3/5 de la primera",
                "1/2, porque 3/6",
                "9/25, porque (3/5)²",
                "2/5, porque 2/4 de la segunda"
            ],
            
            correcta: 0,
            
            explicacion: `Probabilidad de que la primera sea roja: 3/5
            Probabilidad de que la segunda sea roja (dado que la primera fue roja): 2/4 = 1/2
            
            Probabilidad conjunta: (3/5) × (1/2) = 3/10
            
            También por combinatoria: C(3,2)/C(5,2) = 3/10`,
            
            dificultad: 4,
            
            temas: ["Probabilidad", "Probabilidad condicional", "Muestreo sin reemplazo"],
            
            contexto: "Estadística y probabilidad"
        },
        
        // PREGUNTA 14 - Nivel 5 - Estadística (media y desviación)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-014',
            texto: `Un conjunto de datos tiene media 50 y desviación estándar 5. Si cada dato se multiplica por 2 y luego se suma 10, ¿cuál es la nueva media y desviación?`,
            
            opciones: [
                "Media = 110, Desviación = 10, porque transformación lineal: y = 2x + 10 → μ_y = 2μ_x + 10, σ_y = 2σ_x",
                "Media = 110, Desviación = 5, porque la desviación no cambia con suma",
                "Media = 100, Desviación = 10, porque 2×50",
                "Media = 60, Desviación = 15, porque 50+10",
                "Media = 110, Desviación = 20, porque 2×10"
            ],
            
            correcta: 0,
            
            explicacion: `Transformación lineal: y = a·x + b
            Media: μ_y = a·μ_x + b
            Desviación estándar: σ_y = |a|·σ_x
            
            a = 2, b = 10
            μ_y = 2×50 + 10 = 100 + 10 = 110
            σ_y = 2×5 = 10
            
            La suma de constante no afecta la desviación.`,
            
            dificultad: 4,
            
            temas: ["Estadística", "Media", "Desviación estándar", "Transformaciones lineales"],
            
            contexto: "Estadística descriptiva"
        },
        
        // PREGUNTA 15 - Nivel 5 - Funciones trigonométricas inversas
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-015',
            texto: `Calcular el valor exacto de: arcsen(1/2) + arccos(1/2)`,
            
            opciones: [
                "π/2, porque arcsen(1/2) = π/6, arccos(1/2) = π/3, suma = π/2",
                "π/3, porque 30°+60°=90°",
                "π/4, porque 45°+45°",
                "π, porque suma de ángulos",
                "0, porque se cancelan"
            ],
            
            correcta: 0,
            
            explicacion: `arcsen(1/2) = π/6 (30°)
            arccos(1/2) = π/3 (60°)
            
            Suma = π/6 + π/3 = π/6 + 2π/6 = 3π/6 = π/2
            
            En general, arcsen(x) + arccos(x) = π/2 para cualquier x en [-1,1]`,
            
            dificultad: 4,
            
            temas: ["Funciones trigonométricas inversas", "Arcoseno", "Arcocoseno"],
            
            contexto: "Trigonometría"
        },
        
        // PREGUNTA 16 - Nivel 5 - Geometría en el espacio (volumen)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-016',
            texto: `Calcular el volumen de un cono de radio 3 cm y altura 4 cm`,
            
            opciones: [
                "12π cm³, porque V = (1/3)πr²h = (1/3)π×9×4 = 12π",
                "36π cm³, porque πr²h",
                "9π cm³, porque (1/3)πr²",
                "24π cm³, porque 2×12π",
                "48π cm³, porque 4×12π"
            ],
            
            correcta: 0,
            
            explicacion: `Volumen del cono: V = (1/3) × π × r² × h
            
            V = (1/3) × π × 9 × 4 = (1/3) × 36π = 12π cm³
            
            El volumen es 1/3 del cilindro con misma base y altura.`,
            
            dificultad: 3,
            
            temas: ["Geometría", "Volumen", "Cono"],
            
            contexto: "Geometría del espacio"
        },
        
        // PREGUNTA 17 - Nivel 5 - Derivadas parciales
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-017',
            texto: `Si f(x,y) = x²y + y³, calcular ∂f/∂x y ∂f/∂y en el punto (1,2)`,
            
            opciones: [
                "∂f/∂x = 4, ∂f/∂y = 13, porque f_x = 2xy = 4, f_y = x² + 3y² = 1 + 12 = 13",
                "∂f/∂x = 2, ∂f/∂y = 12, porque 2×1×2 = 4?",
                "∂f/∂x = 1, ∂f/∂y = 8",
                "∂f/∂x = 4, ∂f/∂y = 7, porque x² + 3y = 1+6=7",
                "∂f/∂x = 0, ∂f/∂y = 13, porque x²y es constante"
            ],
            
            correcta: 0,
            
            explicacion: `Derivadas parciales:
            ∂f/∂x = 2xy (tratando y como constante)
            ∂f/∂y = x² + 3y² (tratando x como constante)
            
            Evaluando en (1,2):
            ∂f/∂x = 2×1×2 = 4
            ∂f/∂y = 1² + 3×2² = 1 + 3×4 = 1 + 12 = 13`,
            
            dificultad: 4,
            
            temas: ["Derivadas parciales", "Cálculo multivariable", "Funciones de varias variables"],
            
            contexto: "Cálculo avanzado"
        },
        
        // PREGUNTA 18 - Nivel 5 - Integral definida (área)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-018',
            texto: `Calcular el área bajo la curva f(x) = x² en el intervalo [0, 2]`,
            
            opciones: [
                "8/3 unidades cuadradas, porque ∫₀² x² dx = [x³/3]₀² = 8/3",
                "4 unidades cuadradas, porque 2² = 4",
                "2 unidades cuadradas, porque la integral de x² es x³/3",
                "8 unidades cuadradas, porque 2³ = 8",
                "4/3 unidades cuadradas, porque 2²/3"
            ],
            
            correcta: 0,
            
            explicacion: `Área = ∫₀² x² dx = [x³/3]₀² = (2³/3) - (0³/3) = 8/3 - 0 = 8/3 unidades cuadradas
            
            Este es un resultado clásico del cálculo integral.`,
            
            dificultad: 3,
            
            temas: ["Integral definida", "Área bajo la curva", "Cálculo integral"],
            
            contexto: "Aplicaciones de la integral"
        },
        
        // PREGUNTA 19 - Nivel 5 - Vectores (producto punto y cruz)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-019',
            texto: `Dados los vectores u = (1, 2, -1) y v = (2, -1, 3), calcular u·v y u×v`,
            
            opciones: [
                "u·v = -3, u×v = (5, -5, -5), porque producto punto: 2 -2 -3 = -3; producto cruz con determinante",
                "u·v = 3, u×v = (5, 5, 5)",
                "u·v = -3, u×v = (-5, 5, 5)",
                "u·v = 0, u×v = (0,0,0), son perpendiculares",
                "u·v = -3, u×v = (5, -5, 5)"
            ],
            
            correcta: 0,
            
            explicacion: `Producto punto: u·v = 1×2 + 2×(-1) + (-1)×3 = 2 - 2 - 3 = -3
            
            Producto cruz: u×v = | i   j   k  |
                                 | 1   2  -1  |
                                 | 2  -1   3  |
            
            i-componente: 2×3 - (-1)×(-1) = 6 - 1 = 5
            j-componente: -[1×3 - (-1)×2] = -[3 + 2] = -5
            k-componente: 1×(-1) - 2×2 = -1 - 4 = -5
            
            u×v = (5, -5, -5)`,
            
            dificultad: 5,
            
            temas: ["Vectores", "Producto punto", "Producto cruz", "Álgebra vectorial"],
            
            contexto: "Geometría vectorial"
        },
        
        // PREGUNTA 20 - Nivel 5 - Números combinatorios (binomio de Newton)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-020',
            texto: `Calcular el coeficiente de x⁴ en el desarrollo de (2x + 1)⁶`,
            
            opciones: [
                "240, porque término k: C(6,2)(2x)⁴(1)² = 15 × 16 × x⁴ = 240 x⁴",
                "60, porque C(6,4) = 15, 15×4",
                "120, porque C(6,2) = 15, 15×8",
                "480, porque 16×15×2",
                "192, porque 64×3"
            ],
            
            correcta: 0,
            
            explicacion: `Fórmula del binomio: (a + b)ⁿ = Σ C(n,k) a^(n-k) b^k
            
            Para obtener x⁴, necesitamos (2x)⁴ × (1)², es decir, n-k = 4 → k = 2
            
            Término: C(6,2) × (2x)⁴ × (1)²
            
            C(6,2) = 15
            (2x)⁴ = 16 x⁴
            
            Coeficiente: 15 × 16 = 240
            
            El término completo es 240 x⁴`,
            
            dificultad: 4,
            
            temas: ["Binomio de Newton", "Coeficientes binomiales", "Combinatoria"],
            
            contexto: "Álgebra"
        }
    ];
    
    console.log("✅ datos-matematicas.js cargado con 20 preguntas");
    console.log("📊 Total preguntas de matemáticas: 20");
}