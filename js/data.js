// Content data for the Habitat for Humanity Omaha Home Guide showcase.
// All content is bilingual. UI chrome strings live in translations.js.
//
// youtube_url: each module links to a YouTube search URL (deterministic —
// always returns real results). Swap in specific video URLs as they are
// curated by Habitat staff or volunteers.

const CATEGORIES = [
  {
    id: 'hvac',
    icon: '🌡️',
    name_en: 'HVAC & Air Quality',
    name_es: 'Clima y Calidad del Aire',
    blurb_en: 'Keep your air clean and your home comfortable.',
    blurb_es: 'Mantén tu aire limpio y tu hogar cómodo.'
  },
  {
    id: 'plumbing',
    icon: '💧',
    name_en: 'Plumbing',
    name_es: 'Plomería',
    blurb_en: 'Water shutoffs, drains, and everyday fixes.',
    blurb_es: 'Llaves de agua, desagües y arreglos diarios.'
  },
  {
    id: 'electrical',
    icon: '⚡',
    name_en: 'Electrical',
    name_es: 'Electricidad',
    blurb_en: 'Breakers, outlets, and when to call for help.',
    blurb_es: 'Breakers, enchufes y cuándo pedir ayuda.'
  },
  {
    id: 'exterior',
    icon: '🏠',
    name_en: 'Exterior & Structure',
    name_es: 'Exterior y Estructura',
    blurb_en: 'Protect the outside of your home year-round.',
    blurb_es: 'Protege el exterior de tu hogar todo el año.'
  },
  {
    id: 'lawn',
    icon: '🌱',
    name_en: 'Lawn & Outdoor',
    name_es: 'Césped y Exteriores',
    blurb_en: 'Grow a healthy yard without the guesswork.',
    blurb_es: 'Cultiva un jardín sano sin complicaciones.'
  },
  {
    id: 'interior',
    icon: '🔨',
    name_en: 'Interior Maintenance',
    name_es: 'Mantenimiento Interior',
    blurb_en: 'Drywall, paint, doors, and simple repairs.',
    blurb_es: 'Drywall, pintura, puertas y reparaciones simples.'
  },
  {
    id: 'safety',
    icon: '🛟',
    name_en: 'Safety & Preparedness',
    name_es: 'Seguridad y Preparación',
    blurb_en: 'Be ready for the unexpected at home.',
    blurb_es: 'Prepárate para lo inesperado en casa.'
  },
  {
    id: 'appliances',
    icon: '🧺',
    name_en: 'Cleaning & Appliances',
    name_es: 'Limpieza y Electrodomésticos',
    blurb_en: 'Make your appliances last longer.',
    blurb_es: 'Haz que tus electrodomésticos duren más.'
  }
];

const YT = 'https://www.youtube.com/results?search_query=';

const MODULES = [
  // HVAC
  { id: 'furnace-filter', category: 'hvac', type: 'steps', minutes: 10,
    title_en: 'Furnace Filter Replacement', title_es: 'Reemplazo del Filtro de la Caldera',
    summary_en: 'Swap your furnace filter in under ten minutes.',
    summary_es: 'Cambia el filtro de tu caldera en menos de diez minutos.',
    tags_en: ['furnace', 'filter', 'air quality'], tags_es: ['caldera', 'filtro', 'calidad del aire'],
    youtube_id: 'sOcfx5o9-B4',
    youtube_url: 'https://www.youtube.com/watch?v=sOcfx5o9-B4' },
  { id: 'thermostat-basics', category: 'hvac', type: 'steps', minutes: 8,
    title_en: 'Thermostat Basics', title_es: 'Conceptos Básicos del Termostato',
    summary_en: 'Learn the settings that save money and keep you comfortable.',
    summary_es: 'Aprende las configuraciones que ahorran dinero y te mantienen cómodo.',
    tags_en: ['thermostat', 'heat', 'cool'], tags_es: ['termostato', 'calor', 'frío'],
    youtube_id: 'Z4T9H-6VPtI', youtube_start: 91,
    youtube_url: 'https://www.youtube.com/watch?v=Z4T9H-6VPtI&t=91s' },
  { id: 'air-vents', category: 'hvac', type: 'steps', minutes: 15,
    title_en: 'Air Vents — Cleaning & Unblocking', title_es: 'Rejillas de Aire — Limpieza y Desbloqueo',
    summary_en: 'Keep air flowing freely through every room.',
    summary_es: 'Mantén el aire circulando bien por cada habitación.',
    tags_en: ['vents', 'airflow', 'dust'], tags_es: ['rejillas', 'flujo de aire', 'polvo'],
    youtube_id: 'Vqdw-_fOQrw',
    youtube_url: 'https://www.youtube.com/watch?v=Vqdw-_fOQrw' },
  { id: 'hvac-when-to-call', category: 'hvac', type: 'checklist', minutes: 5,
    title_en: 'When to Call an HVAC Technician', title_es: 'Cuándo Llamar a un Técnico de HVAC',
    summary_en: 'A quick checklist for problems beyond a DIY fix.',
    summary_es: 'Una lista rápida para problemas más allá del arreglo casero.',
    tags_en: ['technician', 'emergency', 'repair'], tags_es: ['técnico', 'emergencia', 'reparación'],
    youtube_id: 'UJWwwLEEfTw',
    youtube_url: 'https://www.youtube.com/watch?v=UJWwwLEEfTw' },

  // Plumbing
  { id: 'water-shutoff', category: 'plumbing', type: 'drag-scene', minutes: 5,
    title_en: 'Water Main Shutoff', title_es: 'Llave Principal de Agua',
    summary_en: 'Know exactly where to turn off water in a flood.',
    summary_es: 'Sabe exactamente dónde cerrar el agua en una inundación.',
    tags_en: ['emergency', 'water', 'shutoff', 'flood'], tags_es: ['emergencia', 'agua', 'llave', 'inundación'],
    youtube_id: 'AFIKsZOw8QQ',
    youtube_url: 'https://www.youtube.com/watch?v=AFIKsZOw8QQ' },
  { id: 'unclog-drains', category: 'plumbing', type: 'steps', minutes: 15,
    title_en: 'Unclogging Drains', title_es: 'Destapar Desagües',
    summary_en: 'Clear slow sinks and tubs without harsh chemicals.',
    summary_es: 'Destapa fregaderos y tinas sin químicos fuertes.',
    tags_en: ['drain', 'clog', 'sink'], tags_es: ['desagüe', 'tapón', 'fregadero'],
    youtube_id: 'hySkwXMn0pA',
    youtube_url: 'https://www.youtube.com/watch?v=hySkwXMn0pA' },
  { id: 'running-toilet', category: 'plumbing', type: 'steps', minutes: 20,
    title_en: 'Fixing a Running Toilet', title_es: 'Arreglar un Inodoro que No Para',
    summary_en: 'Stop the water from running and save on your bill.',
    summary_es: 'Detén el agua que corre y ahorra en tu factura.',
    tags_en: ['toilet', 'running', 'flapper'], tags_es: ['inodoro', 'agua', 'tapa'],
    youtube_id: 'NQ2AXvqgfPM',
    youtube_url: 'https://www.youtube.com/watch?v=NQ2AXvqgfPM' },
  { id: 'undersink-valves', category: 'plumbing', type: 'drag-scene', minutes: 5,
    title_en: 'Under-Sink Shutoff Valves', title_es: 'Llaves Debajo del Lavabo',
    summary_en: 'Find the small valves that save sinks from leaks.',
    summary_es: 'Encuentra las llaves pequeñas que evitan fugas.',
    tags_en: ['valve', 'sink', 'leak'], tags_es: ['llave', 'lavabo', 'fuga'],
    youtube_id: 'tuWc4oSR_LI',
    youtube_url: 'https://www.youtube.com/watch?v=tuWc4oSR_LI' },
  { id: 'water-heater', category: 'plumbing', type: 'steps', minutes: 15,
    title_en: 'Water Heater Basics', title_es: 'Conceptos Básicos del Calentador de Agua',
    summary_en: 'Safe temperature, flushing, and warning signs.',
    summary_es: 'Temperatura segura, drenaje y señales de advertencia.',
    tags_en: ['water heater', 'temperature'], tags_es: ['calentador', 'temperatura'],
    youtube_id: 'w7okqeaS1sU',
    youtube_url: 'https://www.youtube.com/watch?v=w7okqeaS1sU' },
  { id: 'frozen-pipes', category: 'plumbing', type: 'checklist', minutes: 5,
    title_en: 'Preventing Frozen Pipes', title_es: 'Prevenir Tuberías Congeladas',
    summary_en: 'A winter checklist to keep your pipes safe.',
    summary_es: 'Una lista de invierno para proteger tus tuberías.',
    tags_en: ['winter', 'frozen', 'pipes'], tags_es: ['invierno', 'congeladas', 'tuberías'],
    youtube_id: 'BVItL66doqw',
    youtube_url: 'https://www.youtube.com/watch?v=BVItL66doqw' },

  // Electrical
  { id: 'breaker-box', category: 'electrical', type: 'drag-scene', minutes: 5,
    title_en: 'Breaker Box Basics', title_es: 'Conceptos Básicos de la Caja de Breakers',
    summary_en: 'Find and label the switches that control your home.',
    summary_es: 'Encuentra y etiqueta los interruptores que controlan tu hogar.',
    tags_en: ['breaker', 'power', 'electrical'], tags_es: ['breaker', 'energía', 'electricidad'],
    youtube_id: 'bGZVILwbyLo',
    youtube_url: 'https://www.youtube.com/watch?v=bGZVILwbyLo' },
  { id: 'gfci-outlets', category: 'electrical', type: 'steps', minutes: 5,
    title_en: 'GFCI Outlets', title_es: 'Enchufes GFCI',
    summary_en: 'Test and reset the outlets near water.',
    summary_es: 'Prueba y reinicia los enchufes cerca del agua.',
    tags_en: ['gfci', 'outlet', 'bathroom'], tags_es: ['gfci', 'enchufe', 'baño'],
    youtube_id: 'Uop79H_iqoQ',
    youtube_url: 'https://www.youtube.com/watch?v=Uop79H_iqoQ' },
  { id: 'light-switch', category: 'electrical', type: 'steps', minutes: 25,
    title_en: 'Changing a Light Switch or Outlet', title_es: 'Cambiar un Interruptor o Enchufe',
    summary_en: 'Replace a switch or outlet the safe way.',
    summary_es: 'Reemplaza un interruptor o enchufe de forma segura.',
    tags_en: ['switch', 'outlet', 'wiring'], tags_es: ['interruptor', 'enchufe', 'cables'],
    youtube_id: '1JK0-yoNaWo',
    youtube_url: 'https://www.youtube.com/watch?v=1JK0-yoNaWo' },
  { id: 'electrical-when-to-call', category: 'electrical', type: 'checklist', minutes: 5,
    title_en: 'When to Call an Electrician', title_es: 'Cuándo Llamar a un Electricista',
    summary_en: 'Warning signs that mean stop and call a pro.',
    summary_es: 'Señales que significan parar y llamar a un profesional.',
    tags_en: ['electrician', 'safety'], tags_es: ['electricista', 'seguridad'],
    youtube_id: 'XWTTeKTr-hg',
    youtube_url: 'https://www.youtube.com/shorts/XWTTeKTr-hg' },

  // Exterior
  { id: 'gutters', category: 'exterior', type: 'steps', minutes: 60,
    title_en: 'Gutters — Cleaning & Maintenance', title_es: 'Canaletas — Limpieza y Mantenimiento',
    summary_en: 'Keep water flowing away from your foundation.',
    summary_es: 'Mantén el agua lejos de tu cimentación.',
    tags_en: ['gutters', 'rain', 'roof'], tags_es: ['canaletas', 'lluvia', 'techo'],
    youtube_id: 'IX-pv3cH6Y4',
    youtube_url: 'https://www.youtube.com/watch?v=IX-pv3cH6Y4' },
  { id: 'caulking-windows', category: 'exterior', type: 'steps', minutes: 30,
    title_en: 'Caulking Windows & Doors', title_es: 'Sellar Ventanas y Puertas',
    summary_en: 'Seal drafts and stop heat from escaping.',
    summary_es: 'Sella corrientes y evita que escape el calor.',
    tags_en: ['caulk', 'seal', 'drafts'], tags_es: ['sellador', 'aire', 'corrientes'],
    youtube_id: 'EVYYihCzVEc',
    youtube_url: 'https://www.youtube.com/watch?v=EVYYihCzVEc' },
  { id: 'roof-basics', category: 'exterior', type: 'checklist', minutes: 10,
    title_en: 'Roof Basics', title_es: 'Conceptos Básicos del Techo',
    summary_en: 'What to look for without climbing a ladder.',
    summary_es: 'Qué buscar sin subirte a una escalera.',
    tags_en: ['roof', 'shingles', 'inspection'], tags_es: ['techo', 'tejas', 'inspección'],
    youtube_id: '4z0_QHE7a4w',
    youtube_url: 'https://www.youtube.com/watch?v=4z0_QHE7a4w' },
  { id: 'driveway-repair', category: 'exterior', type: 'steps', minutes: 45,
    title_en: 'Driveway & Sidewalk Crack Repair', title_es: 'Reparar Grietas en Entrada y Acera',
    summary_en: 'Stop small cracks from becoming big problems.',
    summary_es: 'Evita que grietas pequeñas crezcan.',
    tags_en: ['concrete', 'driveway', 'cracks'], tags_es: ['concreto', 'entrada', 'grietas'],
    youtube_id: 'xk2lT9D_0wY',
    youtube_url: 'https://www.youtube.com/watch?v=xk2lT9D_0wY' },
  { id: 'grading-drainage', category: 'exterior', type: 'steps', minutes: 30,
    title_en: 'Grading & Drainage', title_es: 'Nivelación y Drenaje',
    summary_en: 'Direct rainwater away from your home.',
    summary_es: 'Dirige el agua de lluvia lejos de tu casa.',
    tags_en: ['grading', 'drainage', 'yard'], tags_es: ['nivelación', 'drenaje', 'jardín'],
    youtube_id: 'dcqHbw1EkcY',
    youtube_url: 'https://www.youtube.com/watch?v=dcqHbw1EkcY' },

  // Lawn
  { id: 'lawn-calendar', category: 'lawn', type: 'checklist', minutes: 5,
    title_en: 'Seasonal Lawn Care Calendar', title_es: 'Calendario Estacional del Césped',
    summary_en: 'Know what your yard needs each season.',
    summary_es: 'Sabe qué necesita tu jardín cada temporada.',
    tags_en: ['lawn', 'seasonal', 'calendar'], tags_es: ['césped', 'temporada', 'calendario'],
    youtube_id: 'pE6PaJ0_hXk',
    youtube_url: 'https://www.youtube.com/watch?v=pE6PaJ0_hXk' },
  { id: 'mowing', category: 'lawn', type: 'steps', minutes: 10,
    title_en: 'Mowing Technique & Blade Height', title_es: 'Técnica de Cortar Césped y Altura',
    summary_en: 'The right cut makes a healthier lawn.',
    summary_es: 'El corte correcto hace un césped más sano.',
    tags_en: ['mowing', 'grass', 'lawn'], tags_es: ['cortar', 'césped', 'pasto'],
    youtube_id: 'P6lwyRmOk30',
    youtube_url: 'https://www.youtube.com/watch?v=P6lwyRmOk30' },
  { id: 'watering', category: 'lawn', type: 'steps', minutes: 5,
    title_en: 'Watering Basics', title_es: 'Conceptos Básicos de Riego',
    summary_en: 'Water deeply and less often for strong roots.',
    summary_es: 'Riega profundo y menos seguido para raíces fuertes.',
    tags_en: ['water', 'lawn', 'garden'], tags_es: ['riego', 'césped', 'jardín'],
    youtube_id: 'PoB2yt5L7Ag',
    youtube_url: 'https://www.youtube.com/watch?v=PoB2yt5L7Ag' },
  { id: 'mulching', category: 'lawn', type: 'steps', minutes: 20,
    title_en: 'Mulching & Garden Bed Care', title_es: 'Mantillo y Cuidado de Jardineras',
    summary_en: 'Hold moisture in and keep weeds out.',
    summary_es: 'Retén humedad y evita malas hierbas.',
    tags_en: ['mulch', 'garden', 'bed'], tags_es: ['mantillo', 'jardín', 'jardinera'],
    youtube_id: 'MBobxICT_Po',
    youtube_url: 'https://www.youtube.com/watch?v=MBobxICT_Po' },
  { id: 'winterize-faucets', category: 'lawn', type: 'steps', minutes: 15,
    title_en: 'Winterizing Outdoor Faucets & Hoses', title_es: 'Preparar Grifos Exteriores para Invierno',
    summary_en: 'Protect outside faucets before the first freeze.',
    summary_es: 'Protege los grifos exteriores antes del primer hielo.',
    tags_en: ['winter', 'faucet', 'hose'], tags_es: ['invierno', 'grifo', 'manguera'],
    youtube_id: '3OIRri67YT8',
    youtube_url: 'https://www.youtube.com/watch?v=3OIRri67YT8' },

  // Interior
  { id: 'patch-drywall', category: 'interior', type: 'steps', minutes: 40,
    title_en: 'Patching Drywall', title_es: 'Parchar Drywall',
    summary_en: 'Fix holes big and small with a clean finish.',
    summary_es: 'Arregla hoyos grandes y pequeños con acabado limpio.',
    tags_en: ['drywall', 'hole', 'patch'], tags_es: ['drywall', 'hoyo', 'parche'],
    youtube_id: 'uvQK7WTkKpI',
    youtube_url: 'https://youtu.be/uvQK7WTkKpI' },
  { id: 'painting', category: 'interior', type: 'steps', minutes: 120,
    title_en: 'Painting a Room', title_es: 'Pintar una Habitación',
    summary_en: 'Prep, paint, and clean up like a pro.',
    summary_es: 'Preparar, pintar y limpiar como un profesional.',
    tags_en: ['paint', 'room', 'color'], tags_es: ['pintura', 'habitación', 'color'],
    youtube_id: 'bLbUIevOxzY',
    youtube_url: 'https://youtu.be/bLbUIevOxzY' },
  { id: 'squeaky-door', category: 'interior', type: 'steps', minutes: 10,
    title_en: 'Fixing a Squeaky or Sticking Door', title_es: 'Arreglar una Puerta que Chirría',
    summary_en: 'End the squeak and get doors gliding again.',
    summary_es: 'Termina con el chirrido y haz que las puertas se deslicen.',
    tags_en: ['door', 'hinge', 'squeak'], tags_es: ['puerta', 'bisagra', 'chirrido'],
    youtube_id: 'ZgOVwbnHx3A',
    youtube_url: 'https://youtu.be/ZgOVwbnHx3A' },
  { id: 'caulk-tub', category: 'interior', type: 'steps', minutes: 30,
    title_en: 'Caulking a Tub or Shower', title_es: 'Sellar una Tina o Regadera',
    summary_en: 'Seal edges and prevent water damage.',
    summary_es: 'Sella los bordes y evita daños por agua.',
    tags_en: ['caulk', 'tub', 'bathroom'], tags_es: ['sellador', 'tina', 'baño'],
    youtube_id: 'z8tdp0lLfCw',
    youtube_url: 'https://youtu.be/z8tdp0lLfCw' },
  { id: 'replace-tile', category: 'interior', type: 'steps', minutes: 60,
    title_en: 'Replacing a Flooring Tile', title_es: 'Reemplazar una Loseta del Piso',
    summary_en: 'Swap a cracked tile without redoing the floor.',
    summary_es: 'Cambia una loseta rota sin rehacer todo el piso.',
    tags_en: ['tile', 'floor', 'grout'], tags_es: ['loseta', 'piso', 'lechada'],
    youtube_id: 'z8ktZ01HblY',
    youtube_url: 'https://youtu.be/z8ktZ01HblY' },

  // Safety
  { id: 'smoke-co-detectors', category: 'safety', type: 'checklist', minutes: 10,
    title_en: 'Smoke & CO Detector Placement', title_es: 'Detectores de Humo y CO',
    summary_en: 'Put detectors where they will save your family.',
    summary_es: 'Coloca detectores donde salven a tu familia.',
    tags_en: ['smoke', 'detector', 'safety'], tags_es: ['humo', 'detector', 'seguridad'],
    youtube_id: 'jknv9KqKoeA',
    youtube_url: 'https://www.youtube.com/watch?v=jknv9KqKoeA' },
  { id: 'fire-extinguisher', category: 'safety', type: 'steps', minutes: 10,
    title_en: 'Fire Extinguisher Basics', title_es: 'Conceptos Básicos del Extintor',
    summary_en: 'Know how to use PASS when seconds matter.',
    summary_es: 'Aprende el método PASS cuando cada segundo cuenta.',
    tags_en: ['fire', 'extinguisher', 'emergency'], tags_es: ['fuego', 'extintor', 'emergencia'],
    youtube_id: 'GVBamXXVD30',
    youtube_url: 'https://www.youtube.com/watch?v=GVBamXXVD30' },
  { id: 'emergency-kit', category: 'safety', type: 'checklist', minutes: 15,
    title_en: 'Home Emergency Kit', title_es: 'Kit de Emergencia del Hogar',
    summary_en: 'Pack what your family needs for 72 hours.',
    summary_es: 'Empaca lo que tu familia necesita por 72 horas.',
    tags_en: ['emergency', 'kit', 'preparedness'], tags_es: ['emergencia', 'kit', 'preparación'],
    youtube_id: 'wmqydBGErZE',
    youtube_url: 'https://www.youtube.com/watch?v=wmqydBGErZE' },
  { id: 'power-outage', category: 'safety', type: 'steps', minutes: 10,
    title_en: 'What to Do When the Power Goes Out', title_es: 'Qué Hacer Cuando No Hay Luz',
    summary_en: 'Stay safe and comfortable without electricity.',
    summary_es: 'Mantente seguro y cómodo sin electricidad.',
    tags_en: ['power', 'outage', 'emergency'], tags_es: ['luz', 'apagón', 'emergencia'],
    youtube_id: 'NqaZWnV7JZA',
    youtube_url: 'https://www.youtube.com/watch?v=NqaZWnV7JZA' },
  { id: 'utility-contacts', category: 'safety', type: 'checklist', minutes: 5,
    title_en: 'Knowing Your Utility Contacts', title_es: 'Contactos de Servicios Públicos',
    summary_en: 'Save the numbers you need before you need them.',
    summary_es: 'Guarda los números que necesitas antes de necesitarlos.',
    tags_en: ['utility', 'contact', 'phone'], tags_es: ['servicios', 'contacto', 'teléfono'],
    youtube_id: 'xt_Ijh-mqUI',
    youtube_url: 'https://www.youtube.com/watch?v=xt_Ijh-mqUI' },

  // Appliances
  { id: 'fridge-coils', category: 'appliances', type: 'steps', minutes: 20,
    title_en: 'Cleaning Refrigerator Coils', title_es: 'Limpiar los Serpentines del Refrigerador',
    summary_en: 'A simple clean that lowers your power bill.',
    summary_es: 'Una limpieza simple que baja tu factura de luz.',
    tags_en: ['fridge', 'coils', 'clean'], tags_es: ['refrigerador', 'serpentines', 'limpiar'],
    youtube_id: '1csTysFNcgc',
    youtube_url: 'https://www.youtube.com/watch?v=1csTysFNcgc' },
  { id: 'dryer-vent', category: 'appliances', type: 'steps', minutes: 30,
    title_en: 'Dryer Vent Cleaning', title_es: 'Limpieza del Ducto de la Secadora',
    summary_en: 'Prevent the #1 cause of dryer fires.',
    summary_es: 'Previene la causa #1 de incendios de secadora.',
    tags_en: ['dryer', 'vent', 'fire'], tags_es: ['secadora', 'ducto', 'fuego'],
    youtube_id: 'tcSYoBnK6No',
    youtube_url: 'https://www.youtube.com/watch?v=tcSYoBnK6No' },
  { id: 'dishwasher', category: 'appliances', type: 'steps', minutes: 15,
    title_en: 'Dishwasher Filter & Spray Arm', title_es: 'Filtro y Brazo del Lavavajillas',
    summary_en: 'Get your dishes truly clean again.',
    summary_es: 'Haz que tus platos salgan realmente limpios.',
    tags_en: ['dishwasher', 'filter', 'clean'], tags_es: ['lavavajillas', 'filtro', 'limpiar'],
    youtube_id: 'v7bj85ltraY',
    youtube_url: 'https://www.youtube.com/watch?v=v7bj85ltraY' },
  { id: 'garbage-disposal', category: 'appliances', type: 'steps', minutes: 10,
    title_en: 'Garbage Disposal Care', title_es: 'Cuidado del Triturador de Basura',
    summary_en: 'Keep the disposal running for years.',
    summary_es: 'Mantén el triturador funcionando por años.',
    tags_en: ['disposal', 'sink', 'kitchen'], tags_es: ['triturador', 'fregadero', 'cocina'],
    youtube_id: 'kIDH16LctjE',
    youtube_url: 'https://www.youtube.com/watch?v=kIDH16LctjE' },
  { id: 'deep-clean', category: 'appliances', type: 'checklist', minutes: 90,
    title_en: 'Deep Cleaning Basics', title_es: 'Conceptos Básicos de Limpieza Profunda',
    summary_en: 'Room-by-room checklist for a full clean.',
    summary_es: 'Lista por habitación para una limpieza completa.',
    tags_en: ['clean', 'deep', 'home'], tags_es: ['limpieza', 'profunda', 'hogar'],
    youtube_id: '0rNMpFcebcc',
    youtube_url: 'https://www.youtube.com/watch?v=0rNMpFcebcc' }
];

// Seasonal checklist — pulled straight from spec Section 6.
const SEASONAL = {
  en: {
    months: {
      1:  ['Test smoke detectors', 'Check furnace filter'],
      2:  ['Check for ice dams on roof', 'Test GFCI outlets'],
      3:  ['Check window and door caulking', 'Inspect sump pump'],
      4:  ['Turn on outdoor faucets', 'Clean gutters', 'Service lawn mower'],
      5:  ['Check AC unit before summer', 'Inspect roof for winter damage'],
      6:  ['Clean dryer vent', 'Check fire extinguishers'],
      7:  ['Water deeply and less frequently', 'Inspect deck or patio'],
      8:  ['Clean refrigerator coils', 'Check weatherstripping'],
      9:  ['Service furnace before winter', 'Overseed lawn if needed'],
      10: ['Winterize outdoor faucets', 'Reverse ceiling fans', 'Clean gutters'],
      11: ['Test carbon monoxide detectors', 'Check insulation in attic'],
      12: ['Know your utility emergency contacts', 'Check emergency kit supplies']
    },
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December']
  },
  es: {
    months: {
      1:  ['Probar detectores de humo', 'Revisar filtro de la caldera'],
      2:  ['Revisar presas de hielo en el techo', 'Probar enchufes GFCI'],
      3:  ['Revisar sellador de ventanas y puertas', 'Inspeccionar la bomba de sumidero'],
      4:  ['Abrir grifos exteriores', 'Limpiar canaletas', 'Dar servicio al cortacésped'],
      5:  ['Revisar aire acondicionado antes del verano', 'Inspeccionar el techo por daños de invierno'],
      6:  ['Limpiar ducto de la secadora', 'Revisar extintores'],
      7:  ['Riega profundo y menos seguido', 'Inspeccionar terraza o patio'],
      8:  ['Limpiar serpentines del refrigerador', 'Revisar burletes'],
      9:  ['Dar servicio a la caldera antes del invierno', 'Resembrar césped si es necesario'],
      10: ['Preparar grifos exteriores para invierno', 'Invertir ventiladores de techo', 'Limpiar canaletas'],
      11: ['Probar detectores de monóxido de carbono', 'Revisar aislamiento en el ático'],
      12: ['Conocer contactos de emergencia de servicios', 'Revisar suministros del kit de emergencia']
    },
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
  }
};

// Emergency quick-access tiles (from stretch feature in spec §14).
// `link` points to a module id — rendered as #/module/{id} by render.js.
const EMERGENCIES = [
  { id: 'flood', icon: '🌊', label_en: 'Flooding', label_es: 'Inundación', link: 'water-shutoff' },
  { id: 'power', icon: '💡', label_en: 'Power out', label_es: 'Sin luz', link: 'power-outage' },
  { id: 'gas',   icon: '⚠️', label_en: 'Gas smell', label_es: 'Olor a gas', link: 'utility-contacts' },
  { id: 'fire',  icon: '🔥', label_en: 'Smoke or fire', label_es: 'Humo o fuego', link: 'fire-extinguisher' }
];

// Step-by-step content keyed by module id. Modules without an entry fall
// back to a "coming soon" block on their detail page. The landing-page
// preview (#sample) reads water-shutoff via SAMPLE_STEPS below.
const MODULE_STEPS = {
  'furnace-filter': {
    en: {
      title: 'Furnace Filter Replacement',
      intro: 'A fresh filter keeps your air clean and helps your furnace run efficiently. Check monthly and replace at least every three months.',
      steps: [
        {
          headline: 'Turn off the furnace',
          body: 'Switch the thermostat to Off, or flip the power switch on the side of the furnace. This keeps the blower from pulling dust while the filter is out.',
          illustration: '🔌',
          tip: 'If you cannot find a switch, turn off the breaker labeled "Furnace" in your electrical panel.'
        },
        {
          headline: 'Find and remove the old filter',
          body: 'The filter sits in a slot on the side of the furnace or inside the return air grille on a wall or ceiling. Slide the old filter straight out.',
          illustration: '🔍',
          tip: 'Write the size printed on the cardboard frame on your phone before you head to the store.'
        },
        {
          headline: 'Check the airflow arrow',
          body: 'Every filter has an arrow on its edge. That arrow must point toward the furnace — the direction air is traveling into the blower.',
          illustration: '➡️',
          tip: 'If you install it backward, the filter will not trap dust properly and may collapse.'
        },
        {
          headline: 'Slide in the new filter',
          body: 'Push the new filter all the way into the slot with the arrow pointing the right way. Close the cover and turn the furnace back on.',
          illustration: '✅',
          tip: 'Write today\'s date on the filter frame with a marker so you know when to change it next.'
        }
      ]
    },
    es: {
      title: 'Reemplazo del Filtro de la Caldera',
      intro: 'Un filtro nuevo mantiene tu aire limpio y ayuda a que tu caldera funcione eficientemente. Revísalo cada mes y cámbialo al menos cada tres meses.',
      steps: [
        {
          headline: 'Apaga la caldera',
          body: 'Pon el termostato en Off, o apaga el interruptor al lado de la caldera. Esto evita que el ventilador jale polvo mientras el filtro está afuera.',
          illustration: '🔌',
          tip: 'Si no encuentras un interruptor, apaga el breaker marcado "Furnace" en tu caja de breakers.'
        },
        {
          headline: 'Encuentra y saca el filtro viejo',
          body: 'El filtro está en una ranura al lado de la caldera o dentro de la rejilla de retorno en una pared o techo. Jala el filtro viejo hacia afuera.',
          illustration: '🔍',
          tip: 'Apunta el tamaño impreso en el marco de cartón en tu teléfono antes de ir a la tienda.'
        },
        {
          headline: 'Revisa la flecha de flujo de aire',
          body: 'Todo filtro tiene una flecha en el borde. Esa flecha debe apuntar hacia la caldera — la dirección en que el aire entra al ventilador.',
          illustration: '➡️',
          tip: 'Si lo pones al revés, no atrapará el polvo bien y podría colapsarse.'
        },
        {
          headline: 'Coloca el filtro nuevo',
          body: 'Empuja el filtro nuevo hasta el fondo con la flecha en la dirección correcta. Cierra la tapa y prende la caldera otra vez.',
          illustration: '✅',
          tip: 'Escribe la fecha de hoy en el marco del filtro con un marcador para saber cuándo cambiarlo.'
        }
      ]
    }
  },
  'thermostat-basics': {
    en: {
      title: 'Thermostat Basics',
      intro: 'Your thermostat controls heating and cooling. Learning a few settings can keep you comfortable and cut your energy bill.',
      steps: [
        {
          headline: 'Set the date and time',
          body: 'Before anything else, set the current date and time. Your thermostat uses this to follow a schedule and switch between day and night temperatures.',
          illustration: '⏰',
          tip: 'Check the time again after a power outage — some thermostats reset.'
        },
        {
          headline: 'Pick heat, cool, or auto mode',
          body: 'Heat runs the furnace. Cool runs the AC. Auto lets the thermostat switch between them based on the room temperature.',
          illustration: '🌡️',
          tip: 'Use Auto year-round if the weather swings between warm and cold in the same week.'
        },
        {
          headline: 'Choose a comfortable temperature',
          body: 'In winter, aim for 68°F when you are home and awake. In summer, set it as high as is comfortable. Lower the heat or raise the AC when you sleep or leave.',
          illustration: '🏠',
          tip: 'Dropping the thermostat 7–10°F for 8 hours a day can save about 10% on your energy bill.'
        },
        {
          headline: 'Use the schedule (if programmable)',
          body: 'A programmable thermostat lets you set different temperatures for morning, day, evening, and night. Set it once and it adjusts for you.',
          illustration: '📅',
          tip: 'The "Hold" button pauses the schedule — useful on weekends or when sick at home.'
        }
      ]
    },
    es: {
      title: 'Conceptos Básicos del Termostato',
      intro: 'Tu termostato controla la calefacción y el aire acondicionado. Aprender unas cuantas configuraciones te mantiene cómodo y baja tu factura de energía.',
      steps: [
        {
          headline: 'Configura la fecha y la hora',
          body: 'Antes de todo, configura la fecha y la hora actuales. El termostato las usa para seguir un horario y cambiar entre temperaturas de día y de noche.',
          illustration: '⏰',
          tip: 'Revisa la hora de nuevo después de un apagón — algunos termostatos se reinician.'
        },
        {
          headline: 'Elige modo calor, frío o auto',
          body: 'Calor (Heat) prende la caldera. Frío (Cool) prende el aire. Auto cambia entre los dos según la temperatura del cuarto.',
          illustration: '🌡️',
          tip: 'Usa Auto todo el año si el clima cambia entre calor y frío en la misma semana.'
        },
        {
          headline: 'Escoge una temperatura cómoda',
          body: 'En invierno, 68°F cuando estés despierto en casa. En verano, lo más alto que sea cómodo. Bájale al calor o súbele al aire cuando duermas o salgas.',
          illustration: '🏠',
          tip: 'Bajar el termostato 7–10°F por 8 horas al día puede ahorrar cerca del 10% en tu factura.'
        },
        {
          headline: 'Usa el horario (si es programable)',
          body: 'Un termostato programable te deja poner temperaturas distintas para la mañana, tarde, noche y madrugada. Lo programas una vez y él ajusta solo.',
          illustration: '📅',
          tip: 'El botón "Hold" pausa el horario — útil en fines de semana o cuando estás enfermo en casa.'
        }
      ]
    }
  },
  'air-vents': {
    en: {
      title: 'Air Vents — Cleaning & Unblocking',
      intro: 'Dusty or blocked vents make your furnace and AC work harder. A quick clean every few months keeps air flowing freely.',
      steps: [
        {
          headline: 'Turn off the HVAC system',
          body: 'Set your thermostat to Off before you remove any vent covers. This keeps the blower from pulling dust into the ducts while you work.',
          illustration: '🔌',
          tip: 'Wait a minute after turning it off so the blower fully stops.'
        },
        {
          headline: 'Remove the vent covers',
          body: 'Unscrew the grille covers on the wall, ceiling, or floor. Keep the screws in a small dish so you do not lose them.',
          illustration: '🔩',
          tip: 'Take a photo of each vent before you remove it — makes lining it up easier when you put it back.'
        },
        {
          headline: 'Wash the covers and vacuum inside',
          body: 'Soak the covers in warm soapy water, scrub with a sponge, and dry them off. Use a vacuum hose with a brush attachment to clean as far into the duct as you can reach.',
          illustration: '🧽',
          tip: 'A long-handled dust brush reaches where the vacuum hose will not.'
        },
        {
          headline: 'Reinstall and clear the path',
          body: 'Put the dry covers back on. Check that no rugs, furniture, or curtains are blocking the vents in any room.',
          illustration: '🪑',
          tip: 'Blocked vents can trip your furnace\'s safety sensor and shut it down on cold nights.'
        }
      ]
    },
    es: {
      title: 'Rejillas de Aire — Limpieza y Desbloqueo',
      intro: 'Las rejillas sucias o bloqueadas hacen que la caldera y el aire trabajen más. Una limpieza rápida cada pocos meses mantiene el aire fluyendo.',
      steps: [
        {
          headline: 'Apaga el sistema HVAC',
          body: 'Pon el termostato en Off antes de quitar rejillas. Esto evita que el ventilador jale polvo mientras trabajas.',
          illustration: '🔌',
          tip: 'Espera un minuto después de apagarlo para que el ventilador se detenga por completo.'
        },
        {
          headline: 'Quita las rejillas',
          body: 'Desatornilla las cubiertas de las rejillas en paredes, techos o pisos. Guarda los tornillos en un plato chico para no perderlos.',
          illustration: '🔩',
          tip: 'Toma una foto de cada rejilla antes de quitarla — así es más fácil alinearla al ponerla de nuevo.'
        },
        {
          headline: 'Lava las cubiertas y aspira adentro',
          body: 'Remoja las cubiertas en agua tibia con jabón, frótalas con una esponja y sécalas. Usa la manguera de la aspiradora con cepillo para limpiar dentro del ducto lo más lejos posible.',
          illustration: '🧽',
          tip: 'Un cepillo de mango largo alcanza donde la aspiradora no llega.'
        },
        {
          headline: 'Vuelve a poner y despeja el paso',
          body: 'Coloca las cubiertas secas. Revisa que ningún tapete, mueble o cortina esté tapando las rejillas en los cuartos.',
          illustration: '🪑',
          tip: 'Las rejillas tapadas pueden activar el sensor de seguridad de la caldera y apagarla en noches frías.'
        }
      ]
    }
  },
  'water-shutoff': {
    en: {
      title: 'Water Main Shutoff',
      intro: 'A preview of a step-by-step module. Every module in the real app works just like this — large pictures, short text, no pressure.',
      steps: [
        {
          headline: 'Find the shutoff valve',
          body: 'The main shutoff is usually near the front foundation wall in the basement, or outside near the water meter.',
          illustration: '🔍',
          tip: 'Mark it with a bright tag so you can find it fast in an emergency.'
        },
        {
          headline: 'Turn the handle clockwise',
          body: 'Turn the valve handle all the way to the right. It should stop when the water is fully off.',
          illustration: '🔧',
          tip: 'If the handle feels stuck, do not force it. A broken valve is worse than a slow leak.'
        },
        {
          headline: 'Open a faucet to release pressure',
          body: 'Open the lowest faucet in the house to drain the remaining water in the pipes.',
          illustration: '🚰',
          tip: null
        },
        {
          headline: 'Call for help when needed',
          body: 'Once the water is off, take a breath. Call a plumber or your Habitat contact to plan the next step.',
          illustration: '📞',
          tip: 'Save your plumber and utility numbers in your phone today — not during the emergency.'
        }
      ]
    },
    es: {
      title: 'Llave Principal de Agua',
      intro: 'Una muestra de un módulo paso a paso. Cada módulo en la app real funciona así — imágenes grandes, texto corto, sin presión.',
      steps: [
        {
          headline: 'Encuentra la llave principal',
          body: 'La llave principal suele estar cerca de la pared frontal del sótano, o afuera cerca del medidor de agua.',
          illustration: '🔍',
          tip: 'Márcala con una etiqueta brillante para encontrarla rápido en una emergencia.'
        },
        {
          headline: 'Gira la manija a la derecha',
          body: 'Gira la manija completamente a la derecha. Debe detenerse cuando el agua esté cerrada.',
          illustration: '🔧',
          tip: 'Si la manija no se mueve, no la fuerces. Una llave rota es peor que una fuga lenta.'
        },
        {
          headline: 'Abre un grifo para liberar presión',
          body: 'Abre el grifo más bajo de la casa para drenar el agua que queda en las tuberías.',
          illustration: '🚰',
          tip: null
        },
        {
          headline: 'Pide ayuda cuando sea necesario',
          body: 'Una vez cerrada el agua, respira. Llama a un plomero o a tu contacto de Habitat para planear el siguiente paso.',
          illustration: '📞',
          tip: 'Guarda los números de tu plomero y servicios hoy — no durante la emergencia.'
        }
      ]
    }
  }
};

const SAMPLE_STEPS = MODULE_STEPS['water-shutoff'];
