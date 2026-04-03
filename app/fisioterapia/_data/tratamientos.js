import { EMAIL_SECUNDARIO, LOCATION, TELEFONO_SECUNDARIO } from "@/lib/contact";

export const borjaProfile = {
  name: "Borja Estarellas Botín",
  role: "Fisioterapeuta",
  image: "/borja.png",
  heroImageAlt: "Borja Estarellas Botín, fisioterapeuta en Madrid",
  cardImageAlt: "Borja Estarellas Botín, fisioterapeuta de Bivalente",
  recipientEmail: EMAIL_SECUNDARIO,
  phone: TELEFONO_SECUNDARIO,
  location: LOCATION,
  credentials: [
    "Grado en Fisioterapia - Universidad Antonio de Nebrija (2020)",
    "Máster en Fisioterapia Manual Avanzada y Ejercicio Terapéutico - UCM",
    "Máster Experto en ecografía, anatomía palpatoria e investigación del cuerpo humano en vivo - UCM",
  ],
  chips: ["Domicilio", "Deportiva", "Ecografía"],
};

const commonFaqs = [
  {
    question: "¿Trabajas en varias zonas de Madrid?",
    answer:
      "Sí. Borja realiza atención en distintas zonas de Madrid. Si quieres confirmar tu dirección antes de reservar, puedes usar el formulario y se revisa contigo.",
  },
  {
    question: "¿Qué tengo que preparar para una sesión a domicilio?",
    answer:
      "Normalmente basta con un espacio cómodo para poder valorar y tratar con seguridad. Si para tu caso hiciera falta algo concreto, se indicará antes de la sesión.",
  },
  {
    question: "¿Puedo consultar antes de reservar?",
    answer:
      "Sí. Puedes explicar tu caso por formulario para recibir una orientación inicial y valorar si este tratamiento es el adecuado para ti.",
  },
];

export const tratamientosSeo = {
  "fisioterapia-domicilio": {
    slug: "fisioterapia-domicilio",
    path: "/fisioterapia/fisioterapia-domicilio",
    navLabel: "Fisioterapia a domicilio",
    cardTitle: "Fisioterapia a domicilio",
    cardDescription:
      "Servicio de fisioterapia a domicilio en Madrid con valoración, tratamiento manual y ejercicio terapéutico adaptado a tu dolor, tu lesión y tu ritmo de recuperación.",
    metaTitle: "Fisioterapia a domicilio en Madrid | Borja Estarellas",
    metaDescription:
      "Fisioterapia a domicilio en Madrid para dolor, lesiones y recuperación funcional. Tratamiento profesional con Borja Estarellas desde 50 euros.",
    heroTitle: "Fisioterapia a domicilio en Madrid",
    heroSubtitle:
      "Fisioterapia a domicilio en Madrid con Borja Estarellas desde 50 euros. Valoración, tratamiento y ejercicio terapéutico en casa para dolor, lesiones y recuperación funcional.",
    heroBadges: ["Madrid", "Atención a domicilio", "Dolor y recuperación"],
    introTitle: "Cuándo merece la pena pedir fisioterapia a domicilio en Madrid",
    introBody:
      "Este servicio de fisioterapia a domicilio en Madrid está pensado para personas con dolor, lesión, limitación de movimiento o dificultad para desplazarse. La sesión permite valorar tu caso, empezar el tratamiento desde la primera visita y hacerlo con comodidad en casa, sin perder rigor clínico ni personalización.",
    introPoints: [
      "Si buscas un fisio a domicilio en Madrid porque el dolor, la movilidad o la logística hacen difícil acudir a consulta.",
      "Si necesitas un tratamiento claro para dolor cervical, dolor lumbar, contracturas, tendinopatías o molestias musculares y articulares.",
      "Si quieres empezar una rehabilitación a domicilio en Madrid con una primera sesión desde 50 euros y un plan adaptado a tu rutina.",
    ],
    symptoms: [
      "Dolor cervical, dolor lumbar o rigidez que te limita en casa, en el trabajo o al caminar.",
      "Contracturas, sobrecargas y molestias musculares o articulares que se repiten con frecuencia.",
      "Tendinopatías o dolor mecánico en hombro, codo, rodilla, Aquiles o pie.",
      "Fascitis plantar o dolor al apoyar que hace incómodo desplazarte.",
      "Recuperación tras un esguince o después de una lesión deportiva.",
      "Necesidad de tratamiento y pautas claras para avanzar sin depender solo del reposo.",
    ],
    approach: [
      {
        title: "Valoración clínica desde la primera sesión",
        description:
          "Borja revisa tu dolor, tu movilidad, los antecedentes y las limitaciones que tienes ahora mismo para entender qué está pasando y qué necesita tu caso.",
      },
      {
        title: "Tratamiento manual y ejercicio terapéutico",
        description:
          "La sesión combina tratamiento manual, ejercicio terapéutico y educación del paciente para aliviar dolor, mejorar función y darte pautas útiles desde el inicio.",
      },
      {
        title: "Seguimiento adaptado a tu recuperación",
        description:
          "El objetivo no es solo tratar en el momento, sino ayudarte a recuperar movimiento, prevenir recaídas y avanzar con un plan realista y personalizado.",
      },
    ],
    modality: {
      presencial:
        "La atención principal se realiza a domicilio en Madrid, con una sesión adaptada al espacio disponible, a tus síntomas y al momento real de tu recuperación.",
      online:
        "Si hace falta revisar ejercicios o dar continuidad entre sesiones, el seguimiento online puede servir como complemento puntual, sin sustituir el foco principal de la atención a domicilio.",
    },
    professionalBlurb:
      "Borja es fisioterapeuta en Madrid y realiza atención a domicilio con un enfoque profesional, cercano y personalizado para dolor, lesiones y recuperación funcional.",
    professionalHighlights: [
      "Combina valoración, tratamiento manual, ejercicio terapéutico y educación del paciente para adaptar cada sesión a lo que realmente necesitas en ese momento.",
      "La atención a domicilio permite trabajar con más comodidad y ajustar mejor el tratamiento a tu contexto diario, sin perder rigor clínico ni personalización.",
    ],
    faqs: [
      {
        question: "¿Qué incluye una sesión de fisioterapia a domicilio en Madrid?",
        answer:
          "La sesión incluye valoración, tratamiento manual si está indicado, ejercicio terapéutico y pautas para casa. La idea es que salgas con una orientación clara y con un primer paso de tratamiento desde la misma visita.",
      },
      {
        question: "¿Cuánto dura una sesión de fisioterapia a domicilio?",
        answer:
          "La sesión suele durar alrededor de una hora, para poder valorar bien tu caso, tratar con calma y explicarte las pautas más útiles según tu evolución.",
      },
      {
        question: "¿Cuándo se recomienda pedir un fisioterapeuta a domicilio en Madrid?",
        answer:
          "Se recomienda cuando tienes dolor, una lesión, limitación de movimiento o simplemente necesitas una opción más cómoda para empezar tratamiento en casa. Puede ser útil en dolor cervical, dolor lumbar, contracturas, tendinopatías, fascitis plantar o recuperación tras esguince.",
      },
      {
        question: "¿En qué zonas de Madrid haces fisioterapia a domicilio?",
        answer:
          "Borja realiza atención en distintas zonas de Madrid. Si quieres confirmar tu dirección antes de reservar, puedes escribir por el formulario y se revisa contigo si la atención a domicilio encaja en tu zona.",
      },
      {
        question: "¿Hace falta tener material en casa para la sesión?",
        answer:
          "No. Normalmente no necesitas material específico. Si para tu caso hiciera falta algo sencillo para continuar con ejercicios o pautas, Borja te lo indicará de forma clara.",
      },
      {
        question: "¿Cómo puedo reservar una sesión o consultar mi caso?",
        answer:
          "Puedes escribir a través del formulario de esta página y explicar tu dolor o lesión. Se revisa tu caso contigo para orientarte y valorar el siguiente paso más adecuado.",
      },
      {
        question: "¿Cuánto cuesta la sesión de fisioterapia a domicilio en Madrid?",
        answer:
          "La primera sesión de fisioterapia a domicilio tiene un precio de 50 euros. Si necesitas confirmar detalles antes de reservar, puedes consultarlo sin compromiso.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Dolor cervical", href: "/fisioterapia/dolor-cervical" },
      { label: "Dolor lumbar", href: "/fisioterapia/dolor-lumbar" },
      { label: "Esguinces", href: "/fisioterapia/esguinces" },
      { label: "Fascitis plantar", href: "/fisioterapia/fascitis-plantar" },
      { label: "Lesiones deportivas", href: "/fisioterapia/lesiones-deportivas" },
    ],
  },
  "dolor-cervical": {
    slug: "dolor-cervical",
    path: "/fisioterapia/dolor-cervical",
    navLabel: "Dolor cervical",
    cardTitle: "Dolor cervical y cervicalgia",
    cardDescription:
      "Fisioterapia para cervicalgia, rigidez y dolor de cuello con abordaje manual y ejercicio terapéutico adaptado a tu actividad diaria.",
    metaTitle: "Fisioterapia para dolor cervical en Madrid | Bivalente Salud",
    metaDescription:
      "Tratamiento de fisioterapia para dolor cervical en Madrid con Borja Estarellas. Abordaje de cervicalgia, rigidez, sobrecarga y dolor mecánico de cuello.",
    heroTitle: "Fisioterapia para dolor cervical en Madrid",
    heroSubtitle:
      "Tratamiento para cervicalgia, rigidez y sobrecarga de cuello con un enfoque práctico orientado a reducir dolor y recuperar movilidad.",
    heroBadges: ["Domicilio en Madrid", "Cervicalgia", "Movilidad y alivio"],
    introTitle: "Qué tratamos cuando aparece dolor cervical",
    introBody:
      "El dolor cervical puede relacionarse con sobrecarga, estrés físico, posturas mantenidas, rigidez o limitación del movimiento. La fisioterapia ayuda a valorar qué estructuras están implicadas y a recuperar movilidad con un tratamiento adaptado a tu caso.",
    introPoints: [
      "Cuando tienes dolor o rigidez de cuello con frecuencia.",
      "Cuando notas limitación al girar la cabeza o molestias al trabajar.",
      "Cuando el cuello se carga con facilidad y el dolor reaparece.",
    ],
    symptoms: [
      "Rigidez o bloqueo en la zona cervical.",
      "Dolor al girar la cabeza o mantener posturas.",
      "Sensación de sobrecarga en cuello y trapecios.",
      "Molestias que aumentan al final del día.",
      "Dolor mecánico que limita trabajo, descanso o conducción.",
      "Necesidad de pautas para prevenir que vuelva a aparecer.",
    ],
    approach: [
      {
        title: "Valoración del dolor y de la movilidad cervical",
        description:
          "Se revisan los movimientos que molestan, la sensibilidad de la zona y el contexto en el que aparece o empeora el dolor.",
      },
      {
        title: "Tratamiento para descargar y recuperar movilidad",
        description:
          "Combinamos terapia manual, movilidad y ejercicio terapéutico para reducir rigidez y mejorar función.",
      },
      {
        title: "Pautas para evitar recaídas",
        description:
          "Se ajusta el tratamiento a tus hábitos, carga diaria y señales de sobreuso para que la mejoría sea más estable.",
      },
    ],
    modality: {
      presencial:
        "Borja puede valorar y tratar el dolor cervical a domicilio en Madrid, evitando desplazamientos cuando el dolor o la rigidez lo hacen incómodo.",
      online:
        "También se pueden revisar ejercicios y progresiones para continuar el trabajo activo cuando el dolor va mejorando.",
    },
    professionalBlurb:
      "Borja aborda el dolor cervical con una mirada funcional, buscando aliviar la sobrecarga y mejorar la movilidad sin depender solo de tratamiento pasivo.",
    faqs: [
      {
        question: "¿La fisioterapia puede ayudar si el cuello se me carga por trabajo o por postura?",
        answer:
          "Sí. Muchos cuadros de dolor cervical tienen relación con carga mecánica, posturas mantenidas o falta de movilidad. La fisioterapia permite abordarlo de forma individualizada.",
      },
      {
        question: "¿Puedo tratarlo a domicilio?",
        answer:
          "Sí. El tratamiento a domicilio es una opción muy práctica en dolor cervical, especialmente si moverte o desplazarte te resulta molesto.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Fisioterapia a domicilio", href: "/fisioterapia/fisioterapia-domicilio" },
      { label: "Contracturas", href: "/fisioterapia/contracturas" },
      { label: "Dolor lumbar", href: "/fisioterapia/dolor-lumbar" },
    ],
  },
  "dolor-lumbar": {
    slug: "dolor-lumbar",
    path: "/fisioterapia/dolor-lumbar",
    navLabel: "Dolor lumbar",
    cardTitle: "Dolor lumbar y ciática mecánica",
    cardDescription:
      "Fisioterapia para lumbalgia, rigidez lumbar y dolor mecánico con tratamiento orientado a reducir dolor y recuperar confianza al moverte.",
    metaTitle: "Fisioterapia para dolor lumbar en Madrid | Bivalente Salud",
    metaDescription:
      "Tratamiento de fisioterapia para dolor lumbar y lumbalgia en Madrid con Borja Estarellas. Atención a domicilio para dolor mecánico y ciática.",
    heroTitle: "Fisioterapia para dolor lumbar en Madrid",
    heroSubtitle:
      "Abordaje de lumbalgia y dolor lumbar mecánico con tratamiento manual, ejercicio terapéutico y atención a domicilio en Madrid.",
    heroBadges: ["Domicilio en Madrid", "Lumbalgia", "Recupera movimiento"],
    introTitle: "Cuándo puede ayudarte la fisioterapia en dolor lumbar",
    introBody:
      "El dolor lumbar puede aparecer de forma puntual o repetirse con frecuencia al cargar peso, estar mucho tiempo sentado o retomar actividad. La fisioterapia busca reducir dolor, mejorar movilidad y recuperar seguridad al moverte.",
    introPoints: [
      "Cuando tienes lumbalgia recurrente o dolor lumbar agudo.",
      "Cuando agacharte, caminar o estar sentado te resulta incómodo.",
      "Cuando el dolor limita trabajo, descanso o ejercicio.",
    ],
    symptoms: [
      "Dolor en zona lumbar al moverte o mantener postura.",
      "Rigidez al levantarte o al iniciar la marcha.",
      "Molestias al agacharte, cargar o girarte.",
      "Sensación de bloqueo o debilidad por miedo al movimiento.",
      "Dolor que se repite tras esfuerzos o entrenamientos.",
      "Necesidad de pautas claras para volver a la actividad.",
    ],
    approach: [
      {
        title: "Entender qué movimientos limitan tu zona lumbar",
        description:
          "La valoración permite identificar patrones, cargas y situaciones que están sosteniendo el dolor lumbar.",
      },
      {
        title: "Reducir dolor sin perder movimiento",
        description:
          "Se combina tratamiento manual con progresión de ejercicio para recuperar confianza y función.",
      },
      {
        title: "Volver a moverte con más seguridad",
        description:
          "El objetivo es que tu espalda tolere mejor la carga y que no dependas solo del alivio puntual.",
      },
    ],
    modality: {
      presencial:
        "La fisioterapia lumbar a domicilio en Madrid permite empezar el tratamiento en un contexto cómodo y realista para tu día a día.",
      online:
        "También se pueden revisar ejercicios, progresión de carga y pautas cuando la evolución requiere seguimiento.",
    },
    professionalBlurb:
      "Borja trabaja el dolor lumbar con una combinación de tratamiento manual, ejercicio terapéutico y educación para recuperar función con progresión.",
    faqs: [
      {
        question: "¿La fisioterapia es útil si llevo tiempo con dolor lumbar?",
        answer:
          "Sí. Incluso cuando el dolor lumbar lleva tiempo presente, un abordaje estructurado puede ayudarte a entenderlo mejor y recuperar tolerancia al movimiento.",
      },
      {
        question: "¿Se trata también la ciática mecánica?",
        answer:
          "Sí. Cuando la sintomatología tiene un componente mecánico, la fisioterapia puede valorar y orientar el tratamiento según tu caso.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Fisioterapia a domicilio", href: "/fisioterapia/fisioterapia-domicilio" },
      { label: "Contracturas", href: "/fisioterapia/contracturas" },
      { label: "Esguinces", href: "/fisioterapia/esguinces" },
    ],
  },
  tendinopatias: {
    slug: "tendinopatias",
    path: "/fisioterapia/tendinopatias",
    navLabel: "Tendinopatías",
    cardTitle: "Tendinopatías",
    cardDescription:
      "Tratamiento de tendinopatías en hombro, codo, rodilla o Aquiles con enfoque progresivo y adaptado a carga y actividad.",
    metaTitle: "Fisioterapia para tendinopatías en Madrid | Bivalente Salud",
    metaDescription:
      "Fisioterapia para tendinopatías en Madrid con Borja Estarellas. Tratamiento de hombro, codo, rodilla o Aquiles con ejercicio terapéutico y seguimiento.",
    heroTitle: "Fisioterapia para tendinopatías en Madrid",
    heroSubtitle:
      "Abordaje de tendinopatías con tratamiento progresivo para reducir dolor, mejorar carga y volver a moverte con más confianza.",
    heroBadges: ["Domicilio en Madrid", "Hombro, rodilla y Aquiles", "Carga progresiva"],
    introTitle: "Qué hacemos en fisioterapia cuando hay una tendinopatía",
    introBody:
      "Las tendinopatías suelen necesitar una valoración clara de la carga, del dolor y de cómo responde el tejido al movimiento. El tratamiento no consiste solo en descargar, sino en ayudarte a recuperar tolerancia y función de forma progresiva.",
    introPoints: [
      "Cuando tienes dolor persistente en tendón al moverte o entrenar.",
      "Cuando el dolor aparece al cargar, saltar, correr o levantar peso.",
      "Cuando necesitas una progresión clara para volver a la actividad.",
    ],
    symptoms: [
      "Dolor localizado en hombro, codo, rodilla o Aquiles.",
      "Molestias al cargar peso o repetir gestos.",
      "Rigidez inicial al empezar a moverte.",
      "Dolor al entrenar o después del esfuerzo.",
      "Sensación de debilidad o pérdida de rendimiento.",
      "Miedo a que la lesión se cronifique o reaparezca.",
    ],
    approach: [
      {
        title: "Valorar carga, dolor y función",
        description:
          "Se analiza qué movimientos te molestan, cómo responde el tejido y qué nivel de carga toleras ahora mismo.",
      },
      {
        title: "Combinar alivio y progresión",
        description:
          "Se pauta tratamiento manual cuando es útil y se estructura el ejercicio terapéutico para mejorar tolerancia.",
      },
      {
        title: "Volver a tu actividad con criterio",
        description:
          "El tratamiento busca que recuperes función y rendimiento sin volver demasiado pronto a una carga que te reactive.",
      },
    ],
    modality: {
      presencial:
        "Borja puede valorar tendinopatías a domicilio en Madrid y adaptar las pautas al contexto real en el que entrenas o te mueves.",
      online:
        "El seguimiento también sirve para ajustar ejercicios, progresiones y carga según tu evolución.",
    },
    professionalBlurb:
      "Borja trabaja tendinopatías con un enfoque activo y progresivo, buscando mejorar la capacidad del tejido para tolerar movimiento y carga.",
    faqs: [
      {
        question: "¿La fisioterapia ayuda aunque lleve meses con dolor tendinoso?",
        answer:
          "Sí. Muchas tendinopatías necesitan un plan bien estructurado y progresivo más que reposo indefinido. La fisioterapia permite orientar ese proceso.",
      },
      {
        question: "¿Se puede tratar una tendinopatía a domicilio?",
        answer:
          "Sí. Tanto la valoración como gran parte del tratamiento y el ejercicio terapéutico pueden realizarse a domicilio.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Lesiones deportivas", href: "/fisioterapia/lesiones-deportivas" },
      { label: "Fascitis plantar", href: "/fisioterapia/fascitis-plantar" },
      { label: "Fisioterapia a domicilio", href: "/fisioterapia/fisioterapia-domicilio" },
    ],
  },
  contracturas: {
    slug: "contracturas",
    path: "/fisioterapia/contracturas",
    navLabel: "Contracturas",
    cardTitle: "Contracturas y sobrecargas",
    cardDescription:
      "Fisioterapia para contracturas, sobrecargas y síndrome miofascial con tratamiento orientado a descargar y recuperar movimiento.",
    metaTitle: "Fisioterapia para contracturas en Madrid | Bivalente Salud",
    metaDescription:
      "Tratamiento de contracturas y sobrecargas musculares en Madrid con Borja Estarellas. Fisioterapia a domicilio para dolor muscular y puntos gatillo.",
    heroTitle: "Fisioterapia para contracturas y sobrecargas en Madrid",
    heroSubtitle:
      "Tratamiento para dolor muscular, rigidez y síndrome miofascial con un enfoque práctico para aliviar y recuperar movilidad.",
    heroBadges: ["Domicilio en Madrid", "Sobrecargas", "Síndrome miofascial"],
    introTitle: "Cuándo consultar por contracturas o sobrecarga muscular",
    introBody:
      "La sobrecarga muscular y las contracturas pueden limitar el movimiento, alterar el descanso o hacer que cualquier gesto cotidiano resulte incómodo. La fisioterapia ayuda a descargar la zona, mejorar movilidad y revisar por qué se repite.",
    introPoints: [
      "Cuando notas rigidez, dolor muscular o sensación de bloqueo.",
      "Cuando el músculo se sobrecarga con frecuencia en trabajo o ejercicio.",
      "Cuando necesitas aliviar y también prevenir que vuelva a repetirse.",
    ],
    symptoms: [
      "Dolor muscular localizado o difuso.",
      "Rigidez, tirantez o sensación de nudo.",
      "Molestias al mover la zona o estirarla.",
      "Puntos gatillo o dolor referido.",
      "Sobrecarga tras entrenamiento o acumulación de tensión.",
      "Disminución de movilidad o sensación de bloqueo.",
    ],
    approach: [
      {
        title: "Identificar qué está generando la sobrecarga",
        description:
          "Se valora la zona dolorosa, la movilidad y los factores que están manteniendo la tensión o el exceso de carga.",
      },
      {
        title: "Descargar y mejorar la movilidad",
        description:
          "La terapia manual se combina con trabajo activo para que el alivio no sea solo momentáneo.",
      },
      {
        title: "Ajustar hábitos y prevenir recaídas",
        description:
          "Se pautan estrategias sencillas para reducir la recurrencia en tu rutina, trabajo o entrenamiento.",
      },
    ],
    modality: {
      presencial:
        "La atención a domicilio facilita tratar contracturas y sobrecargas sin añadir el esfuerzo de desplazarte cuando la zona está muy cargada.",
      online:
        "También se pueden revisar ejercicios, movilidad y recomendaciones para mantener la mejoría entre sesiones.",
    },
    professionalBlurb:
      "Borja aborda contracturas y síndrome miofascial combinando descarga, movilidad y ejercicio para reducir dolor y mejorar función.",
    faqs: [
      {
        question: "¿La fisioterapia puede ayudar si siempre se me carga la misma zona?",
        answer:
          "Sí. Además de aliviar, la fisioterapia permite revisar qué está haciendo que esa zona se sobrecargue con tanta frecuencia.",
      },
      {
        question: "¿Trabajas puntos gatillo y dolor miofascial?",
        answer:
          "Sí. El síndrome miofascial y los puntos gatillo forman parte del abordaje cuando encajan con tus síntomas y tu exploración.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Dolor cervical", href: "/fisioterapia/dolor-cervical" },
      { label: "Dolor lumbar", href: "/fisioterapia/dolor-lumbar" },
      { label: "Fisioterapia a domicilio", href: "/fisioterapia/fisioterapia-domicilio" },
    ],
  },
  esguinces: {
    slug: "esguinces",
    path: "/fisioterapia/esguinces",
    navLabel: "Esguinces",
    cardTitle: "Esguinces y recuperación post-lesión",
    cardDescription:
      "Fisioterapia para esguinces y recuperación funcional tras lesión, con progresión de carga y vuelta gradual a la actividad.",
    metaTitle: "Fisioterapia para esguinces en Madrid | Bivalente Salud",
    metaDescription:
      "Tratamiento de fisioterapia para esguinces en Madrid con Borja Estarellas. Recuperación post-lesión con trabajo manual, ejercicio y seguimiento.",
    heroTitle: "Fisioterapia para esguinces en Madrid",
    heroSubtitle:
      "Recuperación funcional tras un esguince con tratamiento adaptado a la fase de la lesión y a la actividad que necesitas retomar.",
    heroBadges: ["Domicilio en Madrid", "Recuperación post-lesión", "Vuelta a la actividad"],
    introTitle: "Cómo puede ayudarte la fisioterapia tras un esguince",
    introBody:
      "Después de un esguince es habitual que queden dolor, inflamación, rigidez o inseguridad al apoyar. La fisioterapia orienta la recuperación para que no se quede solo en esperar, sino en recuperar movilidad, estabilidad y confianza paso a paso.",
    introPoints: [
      "Cuando el esguince sigue limitando apoyo o movimiento.",
      "Cuando necesitas volver a caminar, trabajar o entrenar con seguridad.",
      "Cuando quieres evitar recaídas o sensación de inestabilidad.",
    ],
    symptoms: [
      "Dolor al apoyar o mover la articulación.",
      "Inflamación o sensibilidad residual tras la lesión.",
      "Rigidez o limitación funcional.",
      "Sensación de inestabilidad o inseguridad.",
      "Dificultad para retomar deporte o actividad normal.",
      "Miedo a volver a lesionarte.",
    ],
    approach: [
      {
        title: "Valorar fase y estado de la lesión",
        description:
          "Se revisa dolor, apoyo, movilidad y control para adaptar el tratamiento al momento real de recuperación.",
      },
      {
        title: "Recuperar movilidad y estabilidad",
        description:
          "Se combinan técnicas de tratamiento y progresión de ejercicio para que la articulación vuelva a responder mejor.",
      },
      {
        title: "Retomar la actividad con confianza",
        description:
          "El proceso se orienta a que recuperes función y tolerancia antes de volver a exigir de más la zona lesionada.",
      },
    ],
    modality: {
      presencial:
        "La fisioterapia a domicilio es una opción muy útil tras un esguince si apoyar o desplazarte todavía resulta molesto.",
      online:
        "El seguimiento permite revisar ejercicios, carga y evolución para ajustar el trabajo entre sesiones.",
    },
    professionalBlurb:
      "Borja acompaña la recuperación post-lesión con un enfoque progresivo, buscando que la articulación recupere función y tolerancia con seguridad.",
    faqs: [
      {
        question: "¿Se puede empezar fisioterapia aunque el esguince sea reciente?",
        answer:
          "Sí. La fisioterapia puede adaptarse a la fase de la lesión para orientar mejor la recuperación desde el principio.",
      },
      {
        question: "¿La atención a domicilio tiene sentido en un esguince?",
        answer:
          "Sí. Cuando apoyar o caminar es incómodo, la fisioterapia a domicilio puede ser especialmente práctica.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Lesiones deportivas", href: "/fisioterapia/lesiones-deportivas" },
      { label: "Fisioterapia a domicilio", href: "/fisioterapia/fisioterapia-domicilio" },
      { label: "Dolor lumbar", href: "/fisioterapia/dolor-lumbar" },
    ],
  },
  "lesiones-deportivas": {
    slug: "lesiones-deportivas",
    path: "/fisioterapia/lesiones-deportivas",
    navLabel: "Lesiones deportivas",
    cardTitle: "Lesiones deportivas",
    cardDescription:
      "Fisioterapia deportiva para tratar dolor, recuperar función y volver a entrenar con una progresión coherente y segura.",
    metaTitle: "Fisioterapia deportiva en Madrid | Bivalente Salud",
    metaDescription:
      "Fisioterapia deportiva en Madrid con Borja Estarellas. Tratamiento de lesiones, readaptación y vuelta progresiva al entrenamiento.",
    heroTitle: "Fisioterapia deportiva en Madrid",
    heroSubtitle:
      "Tratamiento de lesiones deportivas y readaptación para volver a entrenar con seguridad, criterio y progresión real.",
    heroBadges: ["Domicilio en Madrid", "Deportiva", "Readaptación"],
    introTitle: "Cuándo puede ayudarte la fisioterapia deportiva",
    introBody:
      "La fisioterapia deportiva no solo busca aliviar dolor, sino ayudarte a volver a entrenar con una progresión coherente. Es útil tanto en lesiones agudas como en molestias que te impiden rendir o entrenar con normalidad.",
    introPoints: [
      "Cuando una lesión te ha frenado y quieres volver con seguridad.",
      "Cuando el dolor aparece al entrenar o competir.",
      "Cuando necesitas una readaptación clara y con progresión.",
    ],
    symptoms: [
      "Dolor durante o después del entrenamiento.",
      "Pérdida de rendimiento o sensación de limitación.",
      "Molestias que reaparecen al subir carga.",
      "Rigidez, debilidad o inseguridad en movimientos deportivos.",
      "Recuperación tras lesión muscular, articular o tendinosa.",
      "Necesidad de una vuelta al deporte mejor estructurada.",
    ],
    approach: [
      {
        title: "Valorar la lesión y el gesto deportivo",
        description:
          "Se analiza qué demanda tu deporte, qué limita ahora mismo y cómo plantear una progresión realista.",
      },
      {
        title: "Combinar tratamiento y readaptación",
        description:
          "El tratamiento se integra con trabajo activo para recuperar función y tolerancia a la carga.",
      },
      {
        title: "Volver a entrenar con criterio",
        description:
          "La idea es que puedas retomar la actividad reduciendo el riesgo de recaída y mejorando sensaciones.",
      },
    ],
    modality: {
      presencial:
        "Borja trabaja lesiones deportivas tanto a domicilio como con seguimiento adaptado a tus objetivos de vuelta a la actividad.",
      online:
        "El seguimiento también sirve para ajustar progresiones, carga y ejercicios cuando ya estás en fase activa de readaptación.",
    },
    professionalBlurb:
      "Borja integra fisioterapia deportiva y ejercicio terapéutico para que la recuperación no se quede a medias y puedas volver a entrenar mejor.",
    faqs: [
      {
        question: "¿La fisioterapia deportiva sirve si sigo entrenando con molestias?",
        answer:
          "Sí. Muchas veces no hace falta parar del todo, sino ajustar carga, tratamiento y progresión para que la lesión no empeore.",
      },
      {
        question: "¿Se puede hacer readaptación con atención a domicilio?",
        answer:
          "Sí. Parte de la readaptación y del trabajo activo puede organizarse a domicilio y complementarse con seguimiento.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Tendinopatías", href: "/fisioterapia/tendinopatias" },
      { label: "Esguinces", href: "/fisioterapia/esguinces" },
      { label: "Fisioterapia a domicilio", href: "/fisioterapia/fisioterapia-domicilio" },
    ],
  },
  "fascitis-plantar": {
    slug: "fascitis-plantar",
    path: "/fisioterapia/fascitis-plantar",
    navLabel: "Fascitis plantar",
    cardTitle: "Fascitis plantar",
    cardDescription:
      "Tratamiento de fascitis plantar y dolor de pie con abordaje progresivo para mejorar apoyo, carga y vuelta a la actividad.",
    metaTitle: "Fisioterapia para fascitis plantar en Madrid | Bivalente Salud",
    metaDescription:
      "Fisioterapia para fascitis plantar en Madrid con Borja Estarellas. Tratamiento del dolor de pie y apoyo con ejercicio terapéutico y seguimiento.",
    heroTitle: "Fisioterapia para fascitis plantar en Madrid",
    heroSubtitle:
      "Tratamiento del dolor plantar para mejorar apoyo, carga y tolerancia al caminar, entrenar o estar de pie.",
    heroBadges: ["Domicilio en Madrid", "Dolor de pie", "Carga progresiva"],
    introTitle: "Cómo ayuda la fisioterapia en fascitis plantar",
    introBody:
      "La fascitis plantar puede hacer que apoyar el pie, caminar o levantarte por la mañana resulte doloroso. La fisioterapia permite abordar el dolor y orientar una progresión para que el tejido tolere mejor la carga diaria.",
    introPoints: [
      "Cuando el dolor aparece al apoyar o al dar los primeros pasos.",
      "Cuando caminar o estar mucho tiempo de pie empeora la molestia.",
      "Cuando necesitas un plan claro para recuperarte sin cronificar el dolor.",
    ],
    symptoms: [
      "Dolor plantar al levantarte o al empezar a caminar.",
      "Molestias al estar de pie mucho tiempo.",
      "Sensibilidad en talón o arco plantar.",
      "Dolor al entrenar, correr o subir carga.",
      "Sensación de rigidez en el pie.",
      "Necesidad de una progresión bien pautada para volver a la actividad.",
    ],
    approach: [
      {
        title: "Valorar el apoyo y la tolerancia a la carga",
        description:
          "Se revisa cómo responde el pie al apoyo, al movimiento y a la actividad que realizas en tu día a día.",
      },
      {
        title: "Reducir dolor y mejorar función",
        description:
          "Se combinan estrategias manuales y ejercicio terapéutico para recuperar capacidad de carga en el pie.",
      },
      {
        title: "Volver a caminar o entrenar con menos limitación",
        description:
          "El tratamiento se orienta a mejorar la tolerancia progresivamente y evitar que la molestia se mantenga en el tiempo.",
      },
    ],
    modality: {
      presencial:
        "La fascitis plantar también puede valorarse y tratarse a domicilio en Madrid, ajustando el abordaje a tu actividad y a tu entorno.",
      online:
        "El seguimiento permite revisar progresiones, ejercicios y adaptación de carga cuando el dolor va cambiando.",
    },
    professionalBlurb:
      "Borja trata fascitis plantar con una combinación de valoración funcional, trabajo manual y ejercicio progresivo orientado a recuperar apoyo y movimiento.",
    faqs: [
      {
        question: "¿La fascitis plantar mejora solo con reposo?",
        answer:
          "No siempre. Muchas veces necesita una progresión adecuada de carga y un tratamiento activo para mejorar de forma estable.",
      },
      {
        question: "¿Puedo tratar el dolor plantar sin desplazarme?",
        answer:
          "Sí. La atención a domicilio es una buena opción si el dolor al apoyar o caminar hace incómodo el desplazamiento.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Tendinopatías", href: "/fisioterapia/tendinopatias" },
      { label: "Lesiones deportivas", href: "/fisioterapia/lesiones-deportivas" },
      { label: "Fisioterapia a domicilio", href: "/fisioterapia/fisioterapia-domicilio" },
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
      title: "Fisioterapia en Madrid | Bivalente Salud",
      description: "Fisioterapia a domicilio en Madrid con Bivalente Salud.",
    };
  }

  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
  };
}


