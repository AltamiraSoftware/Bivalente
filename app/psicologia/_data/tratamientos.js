export const danielaProfile = {
  name: "Daniela López Meléndez",
  role: "Psicóloga General Sanitaria",
  image: "/Daniela.webp",
  recipientEmail: "danilopezme1004@gmail.com",
  phone: "+34 674547577",
  location: "Madrid",
  credentials: [
    "Grado en Psicología - Universidad Nebrija",
    "Máster en Psicología General Sanitaria - Universidad Europea",
    "Formación en intervención en crisis - Fundación ANAR",
  ],
  chips: ["Infanto-juvenil", "Adultos", "Pareja"],
};

const commonFaqs = [
  {
    question: "¿Puedo empezar aunque no tenga claro lo que me pasa?",
    answer:
      "Sí. La primera sesión también sirve para ordenar el motivo de consulta y valorar si este espacio puede ayudarte.",
  },
  {
    question: "¿Las sesiones pueden ser online?",
    answer:
      "Sí. Daniela ofrece sesiones online y presenciales en Madrid, adaptando la modalidad a cada caso.",
  },
  {
    question: "¿También trabajas con adolescentes o familias?",
    answer:
      "Sí. Dependiendo del motivo de consulta, el trabajo puede orientarse a adolescentes, adultos, pareja o acompañamiento familiar.",
  },
];

export const tratamientosSeo = {
  ansiedad: {
    slug: "ansiedad",
    path: "/psicologia/ansiedad",
    navLabel: "Ansiedad",
    cardTitle: "Ansiedad y regulación emocional",
    cardDescription:
      "Acompañamiento para entender la ansiedad, regular las emociones y recuperar sensación de calma y control.",
    metaTitle: "Terapia para la ansiedad en Madrid | Psicología Bivalente",
    metaDescription:
      "Psicología para ansiedad en Madrid con Daniela López Meléndez. Sesiones presenciales y online para preocupación constante, bloqueo y regulación emocional.",
    heroTitle: "Terapia para la ansiedad en Madrid",
    heroSubtitle:
      "Un espacio terapéutico para comprender la ansiedad, bajar la sensación de alarma y construir herramientas emocionales más estables en tu día a día.",
    heroBadges: ["Presencial en Madrid", "Online", "Adultos y adolescentes"],
    introTitle: "Qué es la ansiedad y cuándo puede ayudarte la terapia",
    introBody:
      "La ansiedad puede aparecer como preocupación constante, sensación de alerta, bloqueo, agotamiento o miedo a perder el control. La terapia ayuda a entender qué la sostiene y cómo empezar a regularla sin exigirte ir más rápido de lo que puedes.",
    introPoints: [
      "Cuando sientes preocupación constante o anticipación excesiva.",
      "Cuando tu cuerpo vive en tensión, bloqueo o sobresalto.",
      "Cuando la ansiedad afecta al descanso, al trabajo o a tus relaciones.",
    ],
    symptoms: [
      "Preocupación constante o dificultad para desconectar.",
      "Sensación de nudo en el pecho, tensión o agitación física.",
      "Pensamientos repetitivos o miedo a que ocurra algo malo.",
      "Dificultad para descansar o conciliar el sueño.",
      "Irritabilidad, saturación o sensación de estar desbordada.",
      "Evitar situaciones por miedo, inseguridad o bloqueo.",
    ],
    approach: [
      {
        title: "Comprender lo que activa la ansiedad",
        description:
          "Exploramos el contexto, los disparadores y la forma en la que la ansiedad se mantiene en tu vida diaria.",
      },
      {
        title: "Regular cuerpo y emociones",
        description:
          "Trabajamos herramientas para bajar activación, sostener mejor lo que sientes y recuperar sensación de seguridad interna.",
      },
      {
        title: "Construir respuestas más sostenibles",
        description:
          "El objetivo no es solo aliviar el malestar, sino ayudarte a relacionarte de otra forma con lo que te pasa.",
      },
    ],
    modality: {
      presencial:
        "Sesiones en Madrid en un espacio tranquilo y sanitario, pensado para poder trabajar con calma y sin interrupciones.",
      online:
        "Sesiones por videollamada si necesitas mayor flexibilidad o prefieres empezar desde casa manteniendo continuidad terapéutica.",
    },
    professionalBlurb:
      "Daniela acompaña procesos de ansiedad y desregulación emocional desde un enfoque integrador, cercano y adaptado al ritmo de cada persona.",
    faqs: [
      {
        question: "¿La ansiedad se puede trabajar aunque lleve mucho tiempo conmigo?",
        answer:
          "Sí. Aunque la ansiedad lleve tiempo instalada, la terapia puede ayudarte a entender sus patrones y a introducir cambios progresivos que tengan sentido para ti.",
      },
      {
        question: "¿Es útil la terapia si ya he probado otras herramientas por mi cuenta?",
        answer:
          "Sí. Muchas personas llegan después de haber intentado manejar la ansiedad solas. El trabajo terapéutico permite ordenar mejor lo que ocurre y sostener cambios con acompañamiento.",
      },
      ...commonFaqs,
    ],
  },
  autoestima: {
    slug: "autoestima",
    path: "/psicologia/autoestima",
    navLabel: "Autoestima",
    cardTitle: "Autoestima y autoconcepto",
    cardDescription:
      "Trabajo terapéutico para fortalecer la imagen personal, la seguridad interna y la relación contigo misma o contigo mismo.",
    metaTitle: "Terapia para autoestima en Madrid | Psicología Bivalente",
    metaDescription:
      "Psicología para autoestima y autoconcepto en Madrid. Sesiones con Daniela López Meléndez para inseguridad, autoexigencia y vínculo contigo misma.",
    heroTitle: "Terapia para la autoestima en Madrid",
    heroSubtitle:
      "Un proceso terapéutico para revisar la forma en la que te hablas, te valoras y te relacionas contigo misma o contigo mismo.",
    heroBadges: ["Presencial en Madrid", "Online", "Adultos y adolescentes"],
    introTitle: "Qué trabajamos cuando hablamos de autoestima",
    introBody:
      "La autoestima no es solo quererse más. También tiene que ver con cómo interpretas tus errores, cuánto valor das a tus necesidades y cómo te colocas en tus relaciones. En terapia se puede revisar ese autoconcepto y construir una relación interna más segura.",
    introPoints: [
      "Cuando predomina la autoexigencia o la sensación de no ser suficiente.",
      "Cuando te cuesta poner límites o priorizarte.",
      "Cuando tu seguridad depende mucho de la aprobación externa.",
    ],
    symptoms: [
      "Crítica interna muy dura o constante.",
      "Sensación de inseguridad en decisiones cotidianas.",
      "Necesidad de validación externa para sentirte bien.",
      "Dificultad para poner límites o expresar necesidades.",
      "Comparación frecuente con otras personas.",
      "Autoexigencia o culpa cuando no llegas a todo.",
    ],
    approach: [
      {
        title: "Entender de dónde viene esa mirada hacia ti",
        description:
          "Revisamos experiencias, mensajes y vínculos que han podido moldear tu autoconcepto.",
      },
      {
        title: "Trabajar la relación interna",
        description:
          "Exploramos la autoexigencia, la culpa, la comparación y otras dinámicas que sostienen el malestar.",
      },
      {
        title: "Construir formas más seguras de estar contigo",
        description:
          "Buscamos una autoestima menos frágil, más realista y más conectada con tus necesidades y valores.",
      },
    ],
    modality: {
      presencial:
        "Sesiones en Madrid para trabajar con calma tu historia personal, tus vínculos y la forma en la que te tratas.",
      online:
        "Modalidad online si necesitas flexibilidad o quieres empezar desde un entorno conocido sin perder profundidad terapéutica.",
    },
    professionalBlurb:
      "Daniela acompaña procesos de autoestima desde un enfoque respetuoso, sin fórmulas vacías y adaptado a la historia de cada persona.",
    faqs: [
      {
        question: "¿La autoestima se puede trabajar aunque nunca haya hecho terapia?",
        answer:
          "Sí. Es un motivo de consulta frecuente y no hace falta haber pasado por terapia antes para empezar a trabajarlo.",
      },
      {
        question: "¿Sirve si mi problema principal son mis relaciones?",
        answer:
          "Sí. Muchas veces la autoestima y la forma de vincularnos están muy conectadas, por lo que ambos aspectos pueden abordarse juntos.",
      },
      ...commonFaqs,
    ],
  },
  depresion: {
    slug: "depresion",
    path: "/psicologia/depresion",
    navLabel: "Depresión",
    cardTitle: "Trastornos del estado de ánimo",
    cardDescription:
      "Intervención en depresión, desmotivación, apatía y vacío emocional desde un enfoque cercano y estructurado.",
    metaTitle: "Psicología para depresión en Madrid | Psicología Bivalente",
    metaDescription:
      "Acompañamiento psicológico para depresión y bajo estado de ánimo en Madrid. Sesiones presenciales y online con Daniela López Meléndez.",
    heroTitle: "Psicología para depresión y bajo estado de ánimo en Madrid",
    heroSubtitle:
      "Un espacio terapéutico para entender el apagamiento emocional, la desmotivación y el vacío, sin forzarte a sostenerlo sola o solo.",
    heroBadges: ["Presencial en Madrid", "Online", "Adultos y adolescentes"],
    introTitle: "Cuándo puede ayudarte la terapia en depresión",
    introBody:
      "La depresión puede expresarse como tristeza, pero también como apatía, desconexión, cansancio o sensación de vacío. La terapia ofrece un espacio para comprender ese malestar, sostenerlo con acompañamiento y empezar a recuperar movimiento emocional.",
    introPoints: [
      "Cuando sientes apatía, desmotivación o vacío persistente.",
      "Cuando te cuesta conectar con lo que antes te sostenía.",
      "Cuando el día a día se vuelve pesado o difícil de sostener.",
    ],
    symptoms: [
      "Sensación de apagamiento o vacío emocional.",
      "Desmotivación y dificultad para iniciar tareas.",
      "Cansancio mental o físico persistente.",
      "Pérdida de interés por actividades habituales.",
      "Aislamiento o distancia en las relaciones.",
      "Pensamientos de inutilidad, culpa o desesperanza.",
    ],
    approach: [
      {
        title: "Poner palabras al malestar",
        description:
          "Empezamos por comprender cómo se está manifestando el sufrimiento y qué factores pueden estar influyendo.",
      },
      {
        title: "Recuperar sostén emocional",
        description:
          "Trabajamos para que el proceso no recaiga solo en tu esfuerzo, sino también en recursos, vínculos y estructura terapéutica.",
      },
      {
        title: "Avanzar con un ritmo posible",
        description:
          "La intervención se adapta a tu momento, buscando pequeños cambios sostenibles en lugar de exigencias irreales.",
      },
    ],
    modality: {
      presencial:
        "Sesiones en Madrid en un entorno sanitario y cuidado, donde trabajar el proceso con presencia y sostén.",
      online:
        "Sesiones online para facilitar continuidad cuando cuesta desplazarse o necesitas una opción más flexible.",
    },
    professionalBlurb:
      "Daniela acompaña procesos de bajo estado de ánimo y vacío emocional con una mirada integradora y respetuosa con cada ritmo vital.",
    faqs: [
      {
        question: "¿Puedo pedir ayuda aunque no sepa si es depresión?",
        answer:
          "Sí. No necesitas tener una etiqueta clara. Si sientes que algo no va bien o que el malestar te está apagando, ese ya es un motivo válido para consultar.",
      },
      {
        question: "¿La terapia puede ayudar si llevo tiempo desanimada o desanimado?",
        answer:
          "Sí. Incluso cuando el malestar se ha cronificado, la terapia puede ayudarte a comprenderlo mejor y a introducir cambios posibles.",
      },
      ...commonFaqs,
    ],
  },
  trauma: {
    slug: "trauma",
    path: "/psicologia/trauma",
    navLabel: "Trauma",
    cardTitle: "Trauma psicológico",
    cardDescription:
      "Espacio seguro para trabajar experiencias dolorosas, comprender su impacto y avanzar con mayor estabilidad emocional.",
    metaTitle: "Terapia para trauma psicológico en Madrid | Psicología Bivalente",
    metaDescription:
      "Psicología para trauma en Madrid con Daniela López Meléndez. Un espacio seguro para procesar experiencias difíciles y recuperar estabilidad emocional.",
    heroTitle: "Terapia para trauma psicológico en Madrid",
    heroSubtitle:
      "Un espacio seguro para comprender el impacto de experiencias dolorosas y trabajar sus efectos emocionales y relacionales de forma gradual.",
    heroBadges: ["Presencial en Madrid", "Online", "Acompañamiento gradual"],
    introTitle: "Qué entendemos por trauma y cuándo puede ayudarte la terapia",
    introBody:
      "El trauma no depende solo de lo que ocurrió, sino también de cómo quedó registrado en el cuerpo, las emociones y la forma de relacionarte. La terapia no busca forzarte a revivir nada, sino ayudarte a construir seguridad suficiente para empezar a elaborarlo.",
    introPoints: [
      "Cuando algo vivido sigue presente aunque haya pasado tiempo.",
      "Cuando aparecen bloqueos, hipervigilancia o respuestas intensas.",
      "Cuando ciertas relaciones o situaciones activan miedo o desregulación.",
    ],
    symptoms: [
      "Hipervigilancia o sensación constante de alerta.",
      "Bloqueo, desconexión o dificultad para sentirte presente.",
      "Reacciones intensas ante situaciones que te activan.",
      "Recuerdos intrusivos o malestar difícil de nombrar.",
      "Dificultades para confiar o sentir seguridad en vínculos.",
      "Sensación de vergüenza, culpa o amenaza interna persistente.",
    ],
    approach: [
      {
        title: "Crear seguridad antes de profundizar",
        description:
          "El trabajo se orienta primero a generar sostén, estabilidad y recursos antes de abordar lo que duele.",
      },
      {
        title: "Entender el impacto sin forzar",
        description:
          "La terapia respeta tus tiempos y no te empuja a hablar de más si aún no hay base suficiente para sostenerlo.",
      },
      {
        title: "Recuperar capacidad de regulación y vínculo",
        description:
          "El objetivo es ayudarte a sentir más seguridad interna y más libertad en tus relaciones y en tu vida cotidiana.",
      },
    ],
    modality: {
      presencial:
        "Sesiones en Madrid en un entorno sanitario cuidado, donde el ritmo y la seguridad del proceso son prioritarios.",
      online:
        "Sesiones online si necesitas flexibilidad, manteniendo la misma mirada gradual y adaptada a tu capacidad de sostén.",
    },
    professionalBlurb:
      "Daniela trabaja trauma psicológico desde una mirada integradora, respetando tiempos, límites y necesidades de seguridad emocional.",
    faqs: [
      {
        question: "¿Tengo que contar todo lo vivido desde la primera sesión?",
        answer:
          "No. El proceso no consiste en contarlo todo de golpe. Se trabaja a partir de tu capacidad de sostén y de lo que sea posible abordar en cada momento.",
      },
      {
        question: "¿La terapia puede ayudar aunque no sepa si lo que viví fue traumático?",
        answer:
          "Sí. No hace falta usar esa palabra con claridad. Si algo sigue afectando a tu forma de sentirte o vincularte, se puede trabajar en terapia.",
      },
      ...commonFaqs,
    ],
  },
  duelo: {
    slug: "duelo",
    path: "/psicologia/duelo",
    navLabel: "Duelo",
    cardTitle: "Procesos de duelo",
    cardDescription:
      "Acompañamiento psicológico para transitar pérdidas, despedidas y cambios vitales con sostén emocional.",
    metaTitle: "Terapia para duelo en Madrid | Psicología Bivalente",
    metaDescription:
      "Psicología para duelo en Madrid con Daniela López Meléndez. Acompañamiento emocional en pérdidas, despedidas y cambios vitales significativos.",
    heroTitle: "Terapia para duelo y pérdida en Madrid",
    heroSubtitle:
      "Un acompañamiento psicológico para transitar pérdidas, despedidas y cambios importantes con más sostén, comprensión y espacio emocional.",
    heroBadges: ["Presencial en Madrid", "Online", "Adultos y adolescentes"],
    introTitle: "Cuándo puede ayudarte la terapia en un proceso de duelo",
    introBody:
      "El duelo no aparece solo ante una muerte. También puede activarse con rupturas, cambios de etapa, enfermedad o pérdidas simbólicas. La terapia ofrece un espacio para sostener lo que duele, entender cómo lo estás viviendo y acompañar el proceso sin invalidarlo.",
    introPoints: [
      "Cuando sientes que la pérdida te está desbordando.",
      "Cuando el duelo se mezcla con culpa, enfado o bloqueo.",
      "Cuando necesitas un espacio donde poder sostenerlo con calma.",
    ],
    symptoms: [
      "Tristeza intensa o sensación de vacío.",
      "Dificultad para aceptar lo ocurrido.",
      "Culpa, rabia o confusión emocional.",
      "Cambios en sueño, apetito o energía.",
      "Aislamiento o sensación de incomprensión.",
      "Dificultad para recolocarte tras la pérdida.",
    ],
    approach: [
      {
        title: "Dar espacio a la pérdida",
        description:
          "La terapia permite poner palabras a lo que ha cambiado y a cómo esa pérdida está afectando tu mundo interno.",
      },
      {
        title: "Sostener emociones complejas",
        description:
          "Se trabaja con tristeza, rabia, culpa o bloqueo sin forzar un cierre artificial ni una respuesta correcta.",
      },
      {
        title: "Recolocar la experiencia",
        description:
          "Poco a poco se busca que la pérdida pueda integrarse de una manera más habitable dentro de tu historia.",
      },
    ],
    modality: {
      presencial:
        "Sesiones en Madrid en un espacio tranquilo para acompañar el proceso con presencia, tiempo y sostén.",
      online:
        "Sesiones online si necesitas continuidad, flexibilidad o prefieres empezar desde un entorno conocido.",
    },
    professionalBlurb:
      "Daniela acompaña procesos de duelo con sensibilidad clínica, respeto por el tiempo emocional y atención a cada historia personal.",
    faqs: [
      {
        question: "¿Es normal sentir emociones muy cambiantes en un duelo?",
        answer:
          "Sí. En un duelo pueden convivir tristeza, rabia, culpa, alivio o bloqueo. No hay una única forma correcta de vivirlo.",
      },
      {
        question: "¿La terapia puede ayudar aunque la pérdida no sea reciente?",
        answer:
          "Sí. A veces el duelo se reactiva con el tiempo o queda sin elaborar. La terapia puede ayudarte también en esos casos.",
      },
      ...commonFaqs,
    ],
  },
  "terapia-pareja": {
    slug: "terapia-pareja",
    path: "/psicologia/terapia-pareja",
    navLabel: "Terapia de pareja",
    cardTitle: "Terapia de pareja",
    cardDescription:
      "Espacio terapéutico para trabajar la comunicación, los conflictos recurrentes y la seguridad relacional.",
    metaTitle: "Terapia de pareja en Madrid | Psicología Bivalente",
    metaDescription:
      "Terapia de pareja en Madrid con Daniela López Meléndez. Sesiones presenciales y online para comunicación, conflictos y vínculo de pareja.",
    heroTitle: "Terapia de pareja en Madrid",
    heroSubtitle:
      "Un espacio para revisar la comunicación, los conflictos y la forma de vincularos, con una mirada clínica clara y respetuosa.",
    heroBadges: ["Presencial en Madrid", "Online", "Pareja y vínculo"],
    introTitle: "Cuándo puede ser útil la terapia de pareja",
    introBody:
      "La terapia de pareja no solo sirve cuando la relación está al límite. También puede ayudar cuando hay distancia emocional, conflictos repetidos, dificultades de comunicación o dudas sobre cómo seguir cuidando el vínculo.",
    introPoints: [
      "Cuando discutís siempre por lo mismo y no encontráis salida.",
      "Cuando la distancia emocional o el desgaste se ha instalado.",
      "Cuando queréis entender mejor qué está pasando en la relación.",
    ],
    symptoms: [
      "Conflictos recurrentes que no terminan de resolverse.",
      "Dificultad para hablar sin entrar en defensa o reproche.",
      "Sensación de distancia, desconexión o soledad dentro de la relación.",
      "Problemas de confianza, límites o acuerdos.",
      "Desgaste por dinámicas repetitivas.",
      "Dudas sobre continuidad, proyecto común o forma de vincularos.",
    ],
    approach: [
      {
        title: "Comprender la dinámica relacional",
        description:
          "Se observa qué está pasando entre vosotros, qué patrones se repiten y cómo se sostiene el conflicto o la distancia.",
      },
      {
        title: "Mejorar la comunicación",
        description:
          "Trabajamos para que podáis expresar necesidades, límites y emociones con más claridad y menos escalada.",
      },
      {
        title: "Tomar decisiones con más conciencia",
        description:
          "La terapia ayuda a cuidar el vínculo o a revisar hacia dónde queréis ir, desde una posición más consciente y menos reactiva.",
      },
    ],
    modality: {
      presencial:
        "Sesiones presenciales en Madrid para trabajar la dinámica de pareja en un entorno neutral, cuidado y estructurado.",
      online:
        "Sesiones online si necesitáis mayor flexibilidad o vivís en lugares distintos, manteniendo un encuadre claro.",
    },
    professionalBlurb:
      "Daniela acompaña procesos de pareja con una mirada integradora, ayudando a ordenar el conflicto sin simplificar la complejidad del vínculo.",
    faqs: [
      {
        question: "¿Tiene sentido ir aunque no haya una crisis muy grave?",
        answer:
          "Sí. La terapia de pareja también puede ser útil cuando queréis prevenir más desgaste o entender mejor cómo estáis funcionando.",
      },
      {
        question: "¿Se puede hacer terapia de pareja online?",
        answer:
          "Sí. La modalidad online también permite trabajar la dinámica relacional con una estructura clara y continuidad.",
      },
      ...commonFaqs,
    ],
  },
  "crisis-emocional": {
    slug: "crisis-emocional",
    path: "/psicologia/crisis-emocional",
    navLabel: "Crisis emocional",
    cardTitle: "Intervención en crisis",
    cardDescription:
      "Atención en momentos de desbordamiento emocional, urgencia psicológica o situaciones vitales especialmente difíciles.",
    metaTitle: "Intervención en crisis emocional en Madrid | Psicología Bivalente",
    metaDescription:
      "Atención psicológica para crisis emocional en Madrid con Daniela López Meléndez. Acompañamiento en momentos de desbordamiento, bloqueo o urgencia emocional.",
    heroTitle: "Intervención en crisis emocional en Madrid",
    heroSubtitle:
      "Un espacio de acompañamiento cuando todo se ha desbordado y necesitas una referencia clínica para empezar a ordenar lo que estás viviendo.",
    heroBadges: ["Presencial en Madrid", "Online", "Acompañamiento cercano"],
    introTitle: "Qué entendemos por crisis emocional",
    introBody:
      "Una crisis emocional puede aparecer tras una ruptura, una pérdida, una situación traumática o un desbordamiento interno difícil de sostener. La terapia ofrece un primer marco de contención, comprensión y orientación para reducir la sensación de caos.",
    introPoints: [
      "Cuando sientes que ya no puedes con lo que estás viviendo.",
      "Cuando hay bloqueo, desesperanza o desregulación intensa.",
      "Cuando necesitas una referencia clara para empezar a ordenarte.",
    ],
    symptoms: [
      "Llanto frecuente o sensación de desbordamiento.",
      "Bloqueo, confusión o dificultad para pensar con claridad.",
      "Sensación de urgencia emocional o pérdida de control.",
      "Agitación, miedo o gran inestabilidad interna.",
      "Dificultad para sostener el día a día.",
      "Necesidad de apoyo rápido y estructurado.",
    ],
    approach: [
      {
        title: "Contener el desbordamiento",
        description:
          "La primera tarea es reducir la sensación de caos y ofrecer un espacio donde puedas bajar un poco la intensidad del momento.",
      },
      {
        title: "Entender qué está pasando",
        description:
          "Vamos ordenando el contexto, los factores de riesgo y los apoyos disponibles para saber qué necesitas ahora.",
      },
      {
        title: "Definir los siguientes pasos",
        description:
          "La intervención busca que salgas con más orientación, más sostén y una base desde la que continuar el proceso.",
      },
    ],
    modality: {
      presencial:
        "Sesiones presenciales en Madrid cuando necesitas un espacio sanitario y contenido donde poder aterrizar lo que está ocurriendo.",
      online:
        "Sesiones online si necesitas apoyo rápido o te resulta más accesible empezar desde tu casa.",
    },
    professionalBlurb:
      "Daniela tiene experiencia en intervención en crisis y acompaña estos momentos con estructura, calma clínica y sensibilidad hacia el ritmo de cada persona.",
    faqs: [
      {
        question: "¿Puedo escribir aunque no sepa explicar bien lo que me pasa?",
        answer:
          "Sí. En momentos de crisis no siempre es fácil poner palabras. Puedes escribir lo que puedas y a partir de ahí se orienta el siguiente paso.",
      },
      {
        question: "¿Esta página sustituye una atención de urgencia?",
        answer:
          "No. Si existe un riesgo inmediato para tu seguridad o la de otra persona, es importante acudir a recursos de urgencia. La terapia aquí actúa como acompañamiento psicológico, no como servicio de emergencias.",
      },
      ...commonFaqs,
    ],
  },
  "psicologia-infanto-juvenil": {
    slug: "psicologia-infanto-juvenil",
    path: "/psicologia/psicologia-infanto-juvenil",
    navLabel: "Psicología infanto-juvenil",
    cardTitle: "Atención infanto-juvenil",
    cardDescription:
      "Trabajo con niños, adolescentes y familias, ofreciendo orientación y pautas adaptadas a cada etapa evolutiva.",
    metaTitle: "Psicología infanto-juvenil en Madrid | Psicología Bivalente",
    metaDescription:
      "Psicología infanto-juvenil en Madrid con Daniela López Meléndez. Atención psicológica para niños, adolescentes y orientación familiar.",
    heroTitle: "Psicología infanto-juvenil en Madrid",
    heroSubtitle:
      "Acompañamiento psicológico para niños, adolescentes y familias, con una mirada sensible a cada etapa evolutiva y al contexto familiar.",
    heroBadges: ["Presencial en Madrid", "Online", "Niños y adolescentes"],
    introTitle: "Cuándo puede ayudar la psicología infanto-juvenil",
    introBody:
      "La terapia infanto-juvenil puede ser útil cuando un niño o adolescente está expresando malestar emocional, dificultades en la conducta, problemas de regulación o situaciones vitales que le están superando. También incluye orientación a madres, padres y cuidadores.",
    introPoints: [
      "Cuando hay cambios emocionales o conductuales que preocupan.",
      "Cuando aparecen dificultades en el colegio, en casa o en relaciones.",
      "Cuando la familia necesita orientación para sostener mejor la situación.",
    ],
    symptoms: [
      "Irritabilidad, tristeza o desregulación emocional frecuente.",
      "Problemas de conducta o conflictos en casa.",
      "Dificultades escolares o sociales.",
      "Ansiedad, miedos o bloqueos en determinadas situaciones.",
      "Cambios de sueño, apetito o motivación.",
      "Necesidad de pautas y orientación familiar.",
    ],
    approach: [
      {
        title: "Comprender el momento evolutivo",
        description:
          "Se valora qué está ocurriendo teniendo en cuenta edad, entorno, vínculos y necesidades del niño o adolescente.",
      },
      {
        title: "Acompañar al menor y orientar a la familia",
        description:
          "El trabajo incluye tanto el espacio terapéutico como la coordinación de pautas cuando es necesario.",
      },
      {
        title: "Favorecer regulación y seguridad",
        description:
          "El objetivo es que el menor cuente con más recursos emocionales y que la familia sepa mejor cómo acompañar.",
      },
    ],
    modality: {
      presencial:
        "Sesiones presenciales en Madrid para trabajo terapéutico con niños, adolescentes y orientación a familias en un entorno cuidado.",
      online:
        "La modalidad online puede valorarse en función de la edad, del motivo de consulta y de la situación concreta.",
    },
    professionalBlurb:
      "Daniela trabaja con población infanto-juvenil y familias adaptando la intervención a cada etapa evolutiva y a cada contexto relacional.",
    faqs: [
      {
        question: "¿La intervención incluye a la familia?",
        answer:
          "Sí, cuando es necesario. En muchos casos se combinan sesiones con el menor y espacios de orientación a madres, padres o cuidadores.",
      },
      {
        question: "¿La terapia online sirve en adolescentes?",
        answer:
          "Depende del caso. Puede ser útil en determinadas situaciones, pero se valora siempre según edad, motivo de consulta y capacidad de sostén.",
      },
      ...commonFaqs,
    ],
  },
};

export function getTreatment(slug) {
  return tratamientosSeo[slug];
}

export function getTreatmentMetadata(slug) {
  const treatment = getTreatment(slug);

  if (!treatment) {
    return {
      title: "Psicología | Bivalente",
      description: "Psicología sanitaria en Madrid con Bivalente.",
    };
  }

  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
  };
}
