// js/datos-ingles.js
// PREGUNTAS DE INGLÉS - 20 PREGUNTAS NIVEL ALTO (PARTE 1: 1-10)

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    DATOS_ACUDE.preguntas.ingles = [
        // PREGUNTA 1 - Nivel 5 - Mixed Conditionals
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-001',
            texto: `Which of the following sentences correctly uses a mixed conditional to express a present result of a past action?`,
            
            opciones: [
                "If she had studied medicine, she would be a doctor now",
                "If she studied medicine, she would be a doctor",
                "If she has studied medicine, she will be a doctor",
                "If she would have studied medicine, she was a doctor",
                "If she studies medicine, she would have been a doctor"
            ],
            
            correcta: 0,
            
            explicacion: `Mixed conditional (3rd/2nd): If + past perfect (had studied) → would + infinitive (would be)
            Expresses: Past action (didn't study) → Present result (is not a doctor now)
            
            Structure: If + past perfect, would + infinitive (present result)`,
            
            dificultad: 5,
            
            temas: ["Conditionals", "Mixed conditionals", "Grammar"],
            
            contexto: "Advanced conditional structures"
        },
        
        // PREGUNTA 2 - Nivel 5 - Inversion after negative adverbials
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-002',
            texto: `Select the sentence that correctly uses inversion after a negative adverbial:`,
            
            opciones: [
                "Not only did she finish the project, but she also helped others",
                "Not only she finished the project, but she also helped others",
                "Not only she did finish the project, but she also helped others",
                "Not only finished she the project, but she also helped others",
                "Not only had she finish the project, but she also helped others"
            ],
            
            correcta: 0,
            
            explicacion: `After negative adverbials like "Not only", "Never", "Rarely", we use inversion:
            Not only + auxiliary verb + subject + main verb
            Correct: "Not only DID she FINISH..."`,
            
            dificultad: 5,
            
            temas: ["Inversion", "Negative adverbials", "Advanced grammar"],
            
            contexto: "Formal and literary English"
        },
        
        // PREGUNTA 3 - Nivel 4 - Future Perfect vs Future Continuous
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-003',
            texto: `By the time you arrive, I _____ for three hours.`,
            
            opciones: [
                "will have been waiting",
                "will be waiting",
                "will wait",
                "am going to wait",
                "will have waited"
            ],
            
            correcta: 0,
            
            explicacion: `Future Perfect Continuous: will have been + -ing
            Used for actions that will be in progress up to a specific future time.
            "By the time you arrive" (future point) + duration "for three hours" → requires perfect continuous.`,
            
            dificultad: 4,
            
            temas: ["Future tenses", "Perfect continuous", "Time expressions"],
            
            contexto: "Talking about duration in the future"
        },
        
        // PREGUNTA 4 - Nivel 5 - Wish/If only with past perfect
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-004',
            texto: `Which sentence expresses regret about a past action correctly?`,
            
            opciones: [
                "I wish I had listened to my parents' advice",
                "I wish I listened to my parents' advice",
                "I wish I would listen to my parents' advice",
                "I wish I have listened to my parents' advice",
                "I wish I was listening to my parents' advice"
            ],
            
            correcta: 0,
            
            explicacion: `To express regret about the past: wish + past perfect (had + past participle)
            "I wish I had listened" means I didn't listen and now I regret it.
            
            Other structures:
            • wish + past simple → present/future wishes
            • wish + would → complaints about habits`,
            
            dificultad: 5,
            
            temas: ["Wish clauses", "Regrets", "Past unreal situations"],
            
            contexto: "Expressing regret"
        },
        
        // PREGUNTA 5 - Nivel 4 - Causative have/get
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-005',
            texto: `Choose the sentence that means "I paid someone to clean my house":`,
            
            opciones: [
                "I had my house cleaned",
                "I cleaned my house",
                "I had cleaned my house",
                "I was cleaning my house",
                "I have cleaned my house"
            ],
            
            correcta: 0,
            
            explicacion: `Causative structure: have/get + object + past participle
            "I had my house cleaned" = I arranged for someone else to clean it.
            
            Other examples:
            • I need to have my car repaired
            • She got her nails done`,
            
            dificultad: 4,
            
            temas: ["Causative verbs", "Have something done", "Services"],
            
            contexto: "Arranging services"
        },
        
        // PREGUNTA 6 - Nivel 5 - Reduced relative clauses
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-006',
            texto: `Which sentence contains a correctly reduced relative clause?`,
            
            opciones: [
                "The man standing over there is my brother",
                "The man who standing over there is my brother",
                "The man is standing over there is my brother",
                "The man who is stand over there is my brother",
                "The man stands over there is my brother"
            ],
            
            correcta: 0,
            
            explicacion: `Active relative clauses can be reduced by removing the relative pronoun and using the -ing form.
            Full: The man WHO IS STANDING over there is my brother
            Reduced: The man STANDING over there is my brother
            
            For passive: The car THAT WAS DAMAGED → The car DAMAGED`,
            
            dificultad: 5,
            
            temas: ["Relative clauses", "Reduced clauses", "Participle clauses"],
            
            contexto: "Formal and concise English"
        },
        
        // PREGUNTA 7 - Nivel 4 - Reported speech with modal changes
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-007',
            texto: `Direct speech: "You must finish this report today."
            Indirect speech: He said that I _____ finish that report today.`,
            
            opciones: [
                "had to",
                "must",
                "must have",
                "should",
                "ought to"
            ],
            
            correcta: 0,
            
            explicacion: `In reported speech, "must" usually changes to "had to" when expressing obligation in the past.
            Exception: If "must" expresses a permanent obligation or logical necessity, it can remain unchanged.
            
            Other modal changes:
            • will → would
            • can → could
            • may → might`,
            
            dificultad: 4,
            
            temas: ["Reported speech", "Modal verbs", "Indirect speech"],
            
            contexto: "Reporting past obligations"
        },
        
        // PREGUNTA 8 - Nivel 5 - Inversion in conditional sentences
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-008',
            texto: `Which sentence is a formal alternative to "If I had known, I would have told you"?`,
            
            opciones: [
                "Had I known, I would have told you",
                "If I would have known, I would have told you",
                "Were I known, I would have told you",
                "Should I know, I would have told you",
                "Have I known, I would have told you"
            ],
            
            correcta: 0,
            
            explicacion: `In formal English, we can invert subject and auxiliary verb to omit "if":
            • Third conditional: If + past perfect → Had + subject + past participle
            • First conditional: If + present simple → Should + subject + infinitive
            • Second conditional: If + past simple → Were + subject + to-infinitive`,
            
            dificultad: 5,
            
            temas: ["Conditionals", "Inversion", "Formal English"],
            
            contexto: "Formal and literary conditional structures"
        },
        
        // PREGUNTA 9 - Nivel 4 - Phrasal verbs with multiple meanings
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-009',
            texto: `In which sentence does "take off" have a DIFFERENT meaning from the others?`,
            
            opciones: [
                "The plane will take off at 6 PM",
                "His career really took off after the award",
                "Please take off your shoes before entering",
                "The product took off immediately in the market",
                "Sales took off during the holiday season"
            ],
            
            correcta: 2,
            
            explicacion: `"Take off" meanings:
            • Depart (plane) → sentences 1
            • Become successful (career, product, sales) → sentences 2, 4, 5
            • Remove clothing → sentence 3 (DIFFERENT)
            
            Phrasal verbs often have multiple unrelated meanings depending on context.`,
            
            dificultad: 4,
            
            temas: ["Phrasal verbs", "Multiple meanings", "Context"],
            
            contexto: "Understanding phrasal verb polysemy"
        },
        
        // PREGUNTA 10 - Nivel 5 - Ellipsis and substitution
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-010',
            texto: `Complete: "I don't like coffee, but my wife _____."`,
            
            opciones: [
                "does",
                "likes",
                "is",
                "do",
                "does like"
            ],
            
            correcta: 0,
            
            explicacion: `In English, we use substitution to avoid repetition:
            "I don't like coffee, but my wife DOES" = ... but my wife LIKES COFFEE.
            
            Rules:
            • After auxiliary verbs, we can omit the main verb
            • "Does" substitutes for "likes coffee"
            • This creates more natural, concise speech`,
            
            dificultad: 5,
            
            temas: ["Ellipsis", "Substitution", "Avoiding repetition"],
            
            contexto: "Natural spoken English"
        },
        // js/datos-ingles.js
// PREGUNTAS DE INGLÉS - 20 PREGUNTAS NIVEL ALTO (PARTE 2: 11-20)
// AGREGAR ESTE CÓDIGO AL FINAL DEL ARCHIVO datos-ingles.js

        // PREGUNTA 11 - Nivel 5 - Hedging language (academic English)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-011',
            texto: `Which sentence uses appropriate hedging language in academic writing?`,
            
            opciones: [
                "The results suggest that there may be a correlation between the variables",
                "The results prove that there is a definite correlation between the variables",
                "The results show that there is always a correlation between the variables",
                "The results demonstrate that there is an absolute correlation between the variables",
                "The results confirm that there is an undeniable correlation between the variables"
            ],
            
            correcta: 0,
            
            explicacion: `Academic English uses hedging (cautious language) to avoid overgeneralization:
            • Verbs: suggests, indicates, appears, seems
            • Modals: may, might, could
            • Adverbs: possibly, perhaps, reportedly
            
            Strong claims (prove, always, absolute) are rarely appropriate in academic writing.`,
            
            dificultad: 5,
            
            temas: ["Academic writing", "Hedging", "Cautious language"],
            
            contexto: "Formal academic discourse"
        },
        
        // PREGUNTA 12 - Nivel 4 - Prepositional verbs vs phrasal verbs
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-012',
            texto: `Identify the sentence containing a prepositional verb (verb + preposition that cannot be separated):`,
            
            opciones: [
                "She looked after her sick grandmother",
                "She turned off the computer",
                "She put on her coat",
                "She took off her shoes",
                "She gave up smoking"
            ],
            
            correcta: 0,
            
            explicacion: `Prepositional verbs: verb + preposition (inseparable)
            • look after (cannot say "look her after")
            
            Phrasal verbs: verb + particle (separable)
            • turn off → turn it off ✓
            • put on → put it on ✓
            • take off → take them off ✓
            • give up → give it up ✓`,
            
            dificultad: 4,
            
            temas: ["Phrasal verbs", "Prepositional verbs", "Transitivity"],
            
            contexto: "Distinguishing verb types"
        },
        
        // PREGUNTA 13 - Nivel 5 - Cleft sentences for emphasis
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-013',
            texto: `Transform "I met John at the party" to emphasize "John" using a cleft sentence:`,
            
            opciones: [
                "It was John that I met at the party",
                "It was at the party that I met John",
                "What I met at the party was John",
                "John was who I met at the party",
                "The person I met at the party was John"
            ],
            
            correcta: 0,
            
            explicacion: `Cleft sentences structure information to give emphasis:
            • It-cleft: It + be + emphasized element + that/who + rest
            "It was JOHN that I met" emphasizes the person
            
            Other cleft types:
            • Wh-cleft: What I need is a vacation
            • All-cleft: All I want is peace`,
            
            dificultad: 5,
            
            temas: ["Cleft sentences", "Emphasis", "Information structure"],
            
            contexto: "Emphatic structures in English"
        },
        
        // PREGUNTA 14 - Nivel 4 - Subjunctive mood
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-014',
            texto: `Which sentence correctly uses the subjunctive mood?`,
            
            opciones: [
                "I suggest that he arrive early",
                "I suggest that he arrives early",
                "I suggest that he is arriving early",
                "I suggest that he will arrive early",
                "I suggest that he has arrived early"
            ],
            
            correcta: 0,
            
            explicacion: `The subjunctive mood (base form of verb) is used after:
            • Verbs: suggest, recommend, insist, demand, propose
            • Adjectives: essential, important, necessary that
            • Expressions: It is vital that
            
            Correct: I suggest that he ARRIVE (not arrives) early.`,
            
            dificultad: 4,
            
            temas: ["Subjunctive mood", "Formal English", "Verb moods"],
            
            contexto: "Formal recommendations and demands"
        },
        
        // PREGUNTA 15 - Nivel 5 - Fronting and inversion
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-015',
            texto: `Which sentence uses fronting with inversion for literary effect?`,
            
            opciones: [
                "Into the room walked the professor",
                "The professor walked into the room",
                "Walked the professor into the room",
                "The room into walked the professor",
                "Into walked the professor the room"
            ],
            
            correcta: 0,
            
            explicacion: `Fronting with inversion creates dramatic/literary effect:
            Normal: The professor walked into the room
            Fronted: Into the room walked the professor
            
            Rules:
            • Place expression first (Into the room)
            • Invert subject and verb (walked the professor)
            Common in narratives and descriptions`,
            
            dificultad: 5,
            
            temas: ["Fronting", "Inversion", "Literary style"],
            
            contexto: "Descriptive and literary English"
        },
        
        // PREGUNTA 16 - Nivel 4 - Gerunds vs infinitives after verbs
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-016',
            texto: `Which pair shows verbs that change meaning with gerund vs infinitive?`,
            
            opciones: [
                "stop, remember, forget, regret",
                "enjoy, finish, avoid, consider",
                "want, need, hope, expect",
                "can, must, should, might",
                "be, have, do, make"
            ],
            
            correcta: 0,
            
            explicacion: `Some verbs change meaning with gerund vs infinitive:
            • stop smoking (quit) vs stop to smoke (pause in order to)
            • remember doing (recall) vs remember to do (not forget)
            • forget doing (not recall) vs forget to do (fail)
            • regret doing (feel sorry about past) vs regret to say (apologize now)`,
            
            dificultad: 4,
            
            temas: ["Gerunds", "Infinitives", "Verb patterns"],
            
            contexto: "Meaning changes with different complements"
        },
        
        // PREGUNTA 17 - Nivel 5 - Passive voice with double objects
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-017',
            texto: `Active: "They awarded the winner a prize."
            Which passive form is also correct?`,
            
            opciones: [
                "The winner was awarded a prize",
                "A prize was awarded the winner",
                "They were awarded a prize the winner",
                "Was awarded the winner a prize",
                "The winner a prize was awarded"
            ],
            
            correcta: 0,
            
            explicacion: `With verbs that take two objects (give, send, award, offer):
            Active: Subject + verb + indirect object + direct object
            
            Two possible passives:
            1. Indirect object becomes subject: The winner was awarded a prize ✓
            2. Direct object becomes subject: A prize was awarded TO the winner
            
            Both are correct, but form 1 is more common.`,
            
            dificultad: 5,
            
            temas: ["Passive voice", "Double object verbs", "Ditransitive verbs"],
            
            contexto: "Advanced passive constructions"
        },
        
        // PREGUNTA 18 - Nivel 4 - Discourse markers
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-018',
            texto: `Which discourse marker is used to introduce an opposite or contrasting idea?`,
            
            opciones: [
                "However",
                "Moreover",
                "Furthermore",
                "In addition",
                "Besides"
            ],
            
            correcta: 0,
            
            explicacion: `Discourse markers organize text:
            • Contrast: however, nevertheless, on the other hand, conversely
            • Addition: moreover, furthermore, in addition, besides
            • Consequence: therefore, consequently, as a result
            • Sequence: first, next, finally`,
            
            dificultad: 4,
            
            temas: ["Discourse markers", "Cohesion", "Linking words"],
            
            contexto: "Academic and formal writing"
        },
        
        // PREGUNTA 19 - Nivel 5 - Nominalization in academic English
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-019',
            texto: `Which version is more characteristic of formal academic writing?`,
            
            opciones: [
                "The implementation of the policy resulted in significant economic changes",
                "They implemented the policy and the economy changed a lot",
                "The policy was implemented and things changed economically",
                "They put the policy in place and the economy was different",
                "Because they implemented the policy, the economy changed"
            ],
            
            correcta: 0,
            
            explicacion: `Academic English favors nominalization (turning verbs into nouns):
            • implement (verb) → implementation (noun)
            • change (verb) → changes (noun)
            
            This creates:
            • More formal tone
            • Higher information density
            • Abstract, analytical style`,
            
            dificultad: 5,
            
            temas: ["Nominalization", "Academic style", "Formal register"],
            
            contexto: "Advanced academic writing"
        },
        
        // PREGUNTA 20 - Nivel 5 - Ellipsis in comparative structures
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'ingles-020',
            texto: `Complete: "She drives much more carefully than _____."`,
            
            opciones: [
                "he does",
                "him",
                "he",
                "his",
                "he drives"
            ],
            
            correcta: 0,
            
            explicacion: `In comparative structures, we can use auxiliary substitution:
            • Formal: She drives more carefully than HE DOES
            • Informal: She drives more carefully than HIM
            
            "He does" (with auxiliary) is grammatically correct in formal English.
            "He drives" would be redundant.
            "Him" is acceptable in informal contexts but less formal.`,
            
            dificultad: 5,
            
            temas: ["Ellipsis", "Comparatives", "Auxiliary substitution"],
            
            contexto: "Formal vs informal comparisons"
        }
    ];
    
    console.log("✅ datos-ingles.js (Parte 2: 10 preguntas) cargado");
    console.log("📊 Total preguntas de inglés: 20");
}