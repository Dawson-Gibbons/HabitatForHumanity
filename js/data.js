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
      intro: 'A fresh filter keeps your air clean and helps your furnace run efficiently. These five steps walk you through a clean swap.',
      steps: [
        {
          headline: 'Locate the Slot',
          body: 'Find the filter service door on the side or bottom of your furnace unit—it’s usually a narrow slot where the return air duct meets the main cabinet.',
          illustration: '🔍',
          tip: null
        },
        {
          headline: 'Check the Size',
          body: 'Slide the old filter out and look at the dimensions printed on the side (like 16x25x1) so you buy the perfect match.',
          illustration: '📏',
          tip: null
        },
        {
          headline: 'Note the Arrow',
          body: 'Look for the "Airflow" arrow on the new filter; it must point toward the furnace and away from the return ducts.',
          illustration: '➡️',
          tip: null
        },
        {
          headline: 'Slide and Secure',
          body: 'Slide the fresh filter into the slot, making sure it’s flush and not crumpled, then pop the cover back on.',
          illustration: '✅',
          tip: null
        },
        {
          headline: 'Mark the Date',
          body: 'Use a sharpie to write the date on the edge of the filter; you should be swapping these out every 3 months to keep the motor happy.',
          illustration: '🖊️',
          tip: null
        }
      ]
    }
  },
  'thermostat-basics': {
    en: {
      title: 'Thermostat Basics',
      intro: 'A few simple habits with your thermostat save energy and keep every room comfortable.',
      steps: [
        {
          headline: 'Check the Batteries',
          body: 'If the screen is blank or acting glitchy, pop the faceplate off and swap the AA or AAA batteries—most people forget they even have them!',
          illustration: '🔋',
          tip: null
        },
        {
          headline: 'Level and Dust',
          body: 'Ensure the unit is level on the wall (tilted thermostats can give wonky readings) and use a soft brush to whisk away dust from the internal sensors.',
          illustration: '📐',
          tip: null
        },
        {
          headline: 'Set a Schedule',
          body: 'Program your "Home," "Away," and "Sleep" settings to save energy; aim for a 7- to 10-degree difference when you’re out of the house.',
          illustration: '🗓️',
          tip: null
        },
        {
          headline: 'Mind the Placement',
          body: 'Ensure no lamps, TVs, or sunny windows are right next to the thermostat, or it’ll think the whole house is a sauna.',
          illustration: '📍',
          tip: null
        },
        {
          headline: 'The "Fan" Setting',
          body: 'Keep the fan on "Auto" so it only runs when heating or cooling; "On" runs it 24/7, which is great for air filtration but expensive for your bill.',
          illustration: '🌀',
          tip: null
        }
      ]
    }
  },
  'air-vents': {
    en: {
      title: 'Air Vents — Cleaning & Unblocking',
      intro: 'Open, clean vents mean stronger airflow and lower energy bills in every season.',
      steps: [
        {
          headline: 'Clear the Path',
          body: 'Walk through every room and make sure no rugs, curtains, or fabulous furniture are blocking your supply or return vents.',
          illustration: '🚪',
          tip: null
        },
        {
          headline: 'Remove the Grille',
          body: 'Use a screwdriver to remove the vent covers from the floor, wall, or ceiling so you can get deep into the "drama."',
          illustration: '🪛',
          tip: null
        },
        {
          headline: 'Vacuum the Boots',
          body: 'Use a shop vac or a long hose attachment to suck out the dust, pet hair, and "mystery crumbs" lurking in the first few feet of the ductwork.',
          illustration: '🧹',
          tip: null
        },
        {
          headline: 'Wash the Vents',
          body: 'Take the metal covers to the sink and scrub them with warm, soapy water to remove the sticky film that traps dust.',
          illustration: '🧼',
          tip: null
        },
        {
          headline: 'Adjust the Louvers',
          body: 'Once reinstalled, ensure the louvers are open and angled to distribute air toward the center of the room, not just hitting the wall.',
          illustration: '🎛️',
          tip: null
        }
      ]
    }
  },
  'hvac-when-to-call': {
    en: {
      title: 'When to Call an HVAC Technician',
      intro: 'Some HVAC problems are DIY; these five are signals to step back and call a professional.',
      steps: [
        {
          headline: 'Listen for Drama',
          body: 'If your unit is screeching, grinding, or thumping, shut it down immediately; those are "call a professional" sounds.',
          illustration: '👂',
          tip: null
        },
        {
          headline: 'Check the Air',
          body: 'If the air coming out of the vents isn\'t ice-cold (AC) or toasty (Heat), you likely have a refrigerant leak or a dead compressor.',
          illustration: '🌬️',
          tip: null
        },
        {
          headline: 'Sniff Around',
          body: 'Any "electric" burning smells or gas odors near the furnace are immediate red flags for a technician.',
          illustration: '👃',
          tip: null
        },
        {
          headline: 'Short Cycling',
          body: 'If the unit turns on and off every few minutes without reaching the temp, your thermostat or sensors are having a meltdown.',
          illustration: '🔁',
          tip: null
        },
        {
          headline: 'Puddles',
          body: 'Water pooling around an indoor unit usually means a clogged condensate line or a cracked drain pan that needs expert eyes.',
          illustration: '💧',
          tip: null
        }
      ]
    }
  },
  'water-shutoff': {
    en: {
      title: 'Water Main Shutoff',
      intro: 'Knowing how to kill the water main in seconds can save you thousands in flood damage.',
      steps: [
        {
          headline: 'Locate the Valve',
          body: 'Find your main water line where it enters the house—usually in the basement, a crawlspace, or a utility closet near the front of the foundation.',
          illustration: '🔍',
          tip: null
        },
        {
          headline: 'Identify the Type',
          body: 'Look for either a Gate Valve (a round wheel handle) or a Ball Valve (a straight lever handle).',
          illustration: '🔧',
          tip: null
        },
        {
          headline: 'The Big Twist',
          body: 'For a lever handle, turn it 90 degrees so it’s perpendicular to the pipe; for a wheel, turn it clockwise until it stops.',
          illustration: '🔄',
          tip: null
        },
        {
          headline: 'Release the Pressure',
          body: 'After shutting it off, go to the lowest faucet in the house and turn it on to drain the remaining water out of the pipes.',
          illustration: '🚰',
          tip: null
        },
        {
          headline: 'Clear the Area',
          body: 'Make sure there isn\'t any clutter or "storage drama" blocking the valve so you can reach it in a split second during an emergency.',
          illustration: '🧹',
          tip: null
        }
      ]
    }
  },
  'unclog-drains': {
    en: {
      title: 'Unclogging Drains',
      intro: 'Work through these five approaches in order — most slow drains clear without chemicals.',
      steps: [
        {
          headline: 'Plunge First',
          body: 'Use a cup plunger for sinks and create a tight seal; give it several vigorous heaves to break the clog.',
          illustration: '🪠',
          tip: null
        },
        {
          headline: 'Zip It Up',
          body: 'Insert a plastic drain snake (the ones with the little teeth) to pull out hair clogs—it’s gross, but so satisfying.',
          illustration: '🐍',
          tip: null
        },
        {
          headline: 'Baking Soda & Vinegar',
          body: 'Pour half a cup of baking soda followed by half a cup of vinegar; let it fizz for 15 minutes to dissolve organic gunk.',
          illustration: '🧪',
          tip: null
        },
        {
          headline: 'Check the P-Trap',
          body: 'Place a bucket under the sink, unscrew the U-shaped pipe, and clear out whatever is stuck inside manually.',
          illustration: '🪣',
          tip: null
        },
        {
          headline: 'Boiling Water',
          body: 'Finish with a kettle of boiling water to flush out any remaining oils or soap scum (but only if you have metal pipes!).',
          illustration: '♨️',
          tip: null
        }
      ]
    }
  },
  'running-toilet': {
    en: {
      title: 'Fixing a Running Toilet',
      intro: 'A toilet that runs all night wastes water and money. Here are the five usual suspects.',
      steps: [
        {
          headline: 'Check the Chain',
          body: 'Ensure the lift chain isn\'t too long (getting caught under the flapper) or too short (keeping it propped open).',
          illustration: '⛓️',
          tip: null
        },
        {
          headline: 'Test the Flapper',
          body: 'Push down on the rubber flapper at the bottom; if the hissing stops, the flapper is old and needs a $5 replacement.',
          illustration: '🧼',
          tip: null
        },
        {
          headline: 'Adjust the Float',
          body: 'If water is pouring into the overflow tube, turn the adjustment screw on the float arm to lower the water level.',
          illustration: '📏',
          tip: null
        },
        {
          headline: 'Clean the Seat',
          body: 'Feel the rim where the flapper sits; if it’s slimy or gritty, wipe it down so the seal is airtight.',
          illustration: '🧽',
          tip: null
        },
        {
          headline: 'Replace the Fill Valve',
          body: 'If the water won\'t stop and the float is fine, the fill valve is toast—clip on a new one and reconnect the tube.',
          illustration: '🔧',
          tip: null
        }
      ]
    }
  },
  'undersink-valves': {
    en: {
      title: 'Under-Sink Shutoff Valves',
      intro: 'The small valves under each sink let you isolate a leak without shutting off the whole house.',
      steps: [
        {
          headline: 'Locate the Handles',
          body: 'Look for the small oval handles under your sink; the one on the left is usually hot, and the right is cold.',
          illustration: '🚿',
          tip: null
        },
        {
          headline: 'The "Righty-Tighty" Rule',
          body: 'Turn the handle clockwise until it stops to shut off the water; don\'t yank it, just a firm twist.',
          illustration: '➡️',
          tip: null
        },
        {
          headline: 'Test the Tap',
          body: 'Open the faucet above to ensure no water is coming out; this confirms the valve actually works.',
          illustration: '🚰',
          tip: null
        },
        {
          headline: 'Loosen with Care',
          body: 'If the valve is stuck, spray a little WD-40 on the stem and wait ten minutes before trying again gently.',
          illustration: '🧴',
          tip: null
        },
        {
          headline: 'Check for Leaks',
          body: 'After turning it back on, wipe it with a dry tissue; if it gets wet, tighten the packing nut behind the handle slightly.',
          illustration: '🧻',
          tip: null
        }
      ]
    }
  },
  'water-heater': {
    en: {
      title: 'Water Heater Basics',
      intro: 'Flushing sediment once a year keeps your water heater efficient and extends its life.',
      steps: [
        {
          headline: 'Turn Off Power',
          body: 'Flip the breaker for electric heaters or turn the gas knob to "Pilot" before you start playing with water.',
          illustration: '⚡',
          tip: null
        },
        {
          headline: 'Connect a Hose',
          body: 'Attach a standard garden hose to the drain valve at the bottom and run the other end to a floor drain or outside.',
          illustration: '🌿',
          tip: null
        },
        {
          headline: 'Open the Valve',
          body: 'Open the drain valve and a hot water faucet upstairs to break the vacuum and let the water flow.',
          illustration: '🔓',
          tip: null
        },
        {
          headline: 'Flush the Sediment',
          body: 'Let it run until the water looks crystal clear; this removes the "calcium crunchies" that make it inefficient.',
          illustration: '💦',
          tip: null
        },
        {
          headline: 'Refill & Power Up',
          body: 'Close the drain valve, let the tank fill completely before turning the power back on (or you\'ll fry the heating element!).',
          illustration: '🔌',
          tip: null
        }
      ]
    }
  },
  'frozen-pipes': {
    en: {
      title: 'Preventing Frozen Pipes',
      intro: 'When a hard freeze is coming, a few small moves keep your pipes from bursting.',
      steps: [
        {
          headline: 'The Drip Method',
          body: 'When it\'s freezing, leave your furthest faucet on a tiny, pencil-lead-thin drip to keep water moving.',
          illustration: '💧',
          tip: null
        },
        {
          headline: 'Open the Cabinets',
          body: 'Open the doors under your sinks to let the warm air from the room reach the "shy" pipes hiding in the walls.',
          illustration: '🚪',
          tip: null
        },
        {
          headline: 'Identify the Freeze',
          body: 'If no water comes out of the tap, leave the faucet open so pressure can escape as the ice thaws.',
          illustration: '🧊',
          tip: null
        },
        {
          headline: 'Apply Gentle Heat',
          body: 'Use a hair dryer or a heating pad on the frozen section—never use a torch unless you want a house fire.',
          illustration: '💨',
          tip: null
        },
        {
          headline: 'Work Toward the Tap',
          body: 'Always start thawing from the faucet side and work your way back toward the main so the melting water has an exit.',
          illustration: '🚰',
          tip: null
        }
      ]
    }
  },
  'breaker-box': {
    en: {
      title: 'Breaker Box Basics',
      intro: 'Your breaker box is the nerve center of your home’s electricity — learn to use it before you need to.',
      steps: [
        {
          headline: 'Find the Panel',
          body: 'Locate your main service panel (usually in the garage, basement, or a closet) and open the metal door.',
          illustration: '🔍',
          tip: null
        },
        {
          headline: 'Identify the Trip',
          body: 'Look for a switch that isn\'t fully "On" or "Off"—it’ll be hanging out in the middle, sometimes showing a red or orange sliver.',
          illustration: '🎚️',
          tip: null
        },
        {
          headline: 'Reset the Switch',
          body: 'Flip that moody breaker all the way to "Off" until it clicks, then flip it firmly back to "On."',
          illustration: '🔁',
          tip: null
        },
        {
          headline: 'Label Everything',
          body: 'Use a permanent marker or a label maker to name each circuit so you aren\'t guessing which switch kills the kitchen lights.',
          illustration: '🏷️',
          tip: null
        },
        {
          headline: 'Check for Heat',
          body: 'If a breaker feels hot to the touch or smells like a burnt circuit board, leave it off and call an electrician immediately.',
          illustration: '🌡️',
          tip: null
        }
      ]
    }
  },
  'gfci-outlets': {
    en: {
      title: 'GFCI Outlets',
      intro: 'The outlets with Test and Reset buttons protect you from shocks near water. Check them monthly.',
      steps: [
        {
          headline: 'Locate the Buttons',
          body: 'Find the "Test" and "Reset" buttons on outlets near water (kitchens, bathrooms, or outdoors).',
          illustration: '🔘',
          tip: null
        },
        {
          headline: 'Press "Test"',
          body: 'Push the test button; you should hear a "snap," and anything plugged into it should lose power immediately.',
          illustration: '🧪',
          tip: null
        },
        {
          headline: 'Press "Reset"',
          body: 'Push the reset button back in until it clicks to restore the flow of juice to the outlet.',
          illustration: '↩️',
          tip: null
        },
        {
          headline: 'Test Monthly',
          body: 'These little lifesavers can fail silently, so make it a habit to click through them once a month.',
          illustration: '📅',
          tip: null
        },
        {
          headline: 'Replace if Stubborn',
          body: 'If the button won\'t stay in or doesn\'t "snap" when tested, the internal safety mechanism is dead—time for a new outlet.',
          illustration: '🔄',
          tip: null
        }
      ]
    }
  },
  'light-switch': {
    en: {
      title: 'Changing a Light Switch or Outlet',
      intro: 'With the power off, swapping a worn switch is a quick, safe, rewarding fix.',
      steps: [
        {
          headline: 'Kill the Power',
          body: 'Go to your breaker box and flip the switch for that room; try the light to make 100% sure it’s dead.',
          illustration: '⚡',
          tip: null
        },
        {
          headline: 'Remove the Plate',
          body: 'Unscrew the decorative cover and the two screws holding the switch to the wall box, then gently pull it out.',
          illustration: '🔩',
          tip: null
        },
        {
          headline: 'Label the Wires',
          body: 'Take a photo or use tape to mark which wire goes to which screw (usually a black "hot" wire and a white "neutral").',
          illustration: '📸',
          tip: null
        },
        {
          headline: 'Swap the Switch',
          body: 'Loosen the screws, move the wires to the same positions on your new switch, and tighten them down securely.',
          illustration: '🔁',
          tip: null
        },
        {
          headline: 'Tuck and Screw',
          body: 'Gently fold the wires back into the box, screw the switch into place, and pop the cover back on.',
          illustration: '🧰',
          tip: null
        }
      ]
    }
  },
  'electrical-when-to-call': {
    en: {
      title: 'When to Call an Electrician',
      intro: 'Electricity is unforgiving. These five warning signs mean stop and call a licensed electrician.',
      steps: [
        {
          headline: 'Flicker & Fade',
          body: 'If your lights dim whenever the fridge kicks on, your home’s wiring is struggling to handle the load.',
          illustration: '💡',
          tip: null
        },
        {
          headline: 'The "Bzzz" Factor',
          body: 'Any humming, buzzing, or sizzling sounds coming from your walls or outlets are a major fire risk.',
          illustration: '🔊',
          tip: null
        },
        {
          headline: 'Discolored Plates',
          body: 'If an outlet cover looks charred, melted, or discolored, the wires behind it are overheating.',
          illustration: '🔌',
          tip: null
        },
        {
          headline: 'Sparking',
          body: 'A tiny blue spark when plugging something in is okay, but a big yellow pop or smoke means you\'ve got a short.',
          illustration: '✨',
          tip: null
        },
        {
          headline: 'Aluminum Wiring',
          body: 'If your home was built in the late 60s/early 70s and has aluminum wiring, have an expert check the connections.',
          illustration: '🏠',
          tip: null
        }
      ]
    }
  },
  'gutters': {
    en: {
      title: 'Gutters — Cleaning & Maintenance',
      intro: 'Clean gutters send rainwater where it belongs — away from your roof, siding, and foundation.',
      steps: [
        {
          headline: 'Ladder Safety',
          body: 'Use a sturdy extension ladder and have a friend hold the base; never lean out too far to the side.',
          illustration: '🪜',
          tip: null
        },
        {
          headline: 'Scoop the Gunk',
          body: 'Use a plastic gutter scoop or an old spatula to clear out leaves and "roof sludge" into a bucket.',
          illustration: '🍂',
          tip: null
        },
        {
          headline: 'Flush the Line',
          body: 'Take a garden hose and spray water toward the downspouts to clear out any remaining fine debris.',
          illustration: '💦',
          tip: null
        },
        {
          headline: 'Clear the Downspouts',
          body: 'If water backs up, your downspout is clogged; spray the hose up from the bottom to break the "clump."',
          illustration: '⬇️',
          tip: null
        },
        {
          headline: 'Check the Slope',
          body: 'Ensure the gutters aren\'t sagging; water should always flow toward the downspouts, not sit in puddles.',
          illustration: '📐',
          tip: null
        }
      ]
    }
  },
  'caulking-windows': {
    en: {
      title: 'Caulking Windows & Doors',
      intro: 'A fresh bead of caulk seals out drafts and keeps your heating and cooling inside.',
      steps: [
        {
          headline: 'Prep the Surface',
          body: 'Use a putty knife to scrape away old, peeling caulk and wipe the area clean with a damp rag.',
          illustration: '🧽',
          tip: null
        },
        {
          headline: 'Cut the Tip',
          body: 'Cut the nozzle of your caulk tube at a 45-degree angle—the smaller the hole, the cleaner your bead will be.',
          illustration: '✂️',
          tip: null
        },
        {
          headline: 'The Steady Pull',
          body: 'Hold the caulk gun at a 45-degree angle and pull it steadily along the gap while applying even pressure.',
          illustration: '🎯',
          tip: null
        },
        {
          headline: 'The Wet Finger Trick',
          body: 'Dip your finger in water (or use a smoothing tool) and run it over the bead to press it into the gap.',
          illustration: '💧',
          tip: null
        },
        {
          headline: 'Seal the Gaps',
          body: 'Check both the top and sides of the window frame; keeping air out saves you a fortune on your electric bill.',
          illustration: '🪟',
          tip: null
        }
      ]
    }
  },
  'roof-basics': {
    en: {
      title: 'Roof Basics',
      intro: 'You can learn a lot about your roof from the ground. Here’s what to look for.',
      steps: [
        {
          headline: 'The Ground View',
          body: 'Use binoculars to look for missing, cracked, or "curling" shingles without ever leaving the grass.',
          illustration: '🔭',
          tip: null
        },
        {
          headline: 'Granule Check',
          body: 'Check your gutter runoff; if you see tons of sandy "shingle crumbs," your roof is losing its protective layer.',
          illustration: '🪨',
          tip: null
        },
        {
          headline: 'Flash Inspection',
          body: 'Look at the metal "flashing" around chimneys and vents; if it’s rusted or gapping, that’s where leaks start.',
          illustration: '⚙️',
          tip: null
        },
        {
          headline: 'Sag Check',
          body: 'Stand back and look at the ridgeline; if the roof looks like it’s "dipping," you may have structural moisture damage.',
          illustration: '📉',
          tip: null
        },
        {
          headline: 'Inside the Attic',
          body: 'During a heavy rain, go into the attic with a flashlight to look for damp rafters or pinpricks of light.',
          illustration: '🔦',
          tip: null
        }
      ]
    }
  },
  'driveway-repair': {
    en: {
      title: 'Driveway & Sidewalk Crack Repair',
      intro: 'Small cracks grow fast in freeze-thaw weather. Fill them early and the driveway lasts decades.',
      steps: [
        {
          headline: 'Clean the Crack',
          body: 'Use a wire brush and a leaf blower to get every bit of dirt and grass out of the crack.',
          illustration: '🧹',
          tip: null
        },
        {
          headline: 'Apply Filler',
          body: 'For thin cracks, use a liquid "crack filler"; for holes, use a "cold patch" compound from a bag.',
          illustration: '🧴',
          tip: null
        },
        {
          headline: 'Tamp it Down',
          body: 'Use a heavy tamper or the end of a 4x4 post to pack the patch material down until it’s rock hard and level.',
          illustration: '🔨',
          tip: null
        },
        {
          headline: 'Let it Cure',
          body: 'Give the patch at least 24 hours (or whatever the label says) before driving your car over it.',
          illustration: '⏲️',
          tip: null
        },
        {
          headline: 'Seal the Deal',
          body: 'Every few years, roll on a fresh coat of driveway sealer to protect the surface from UV rays and oil spills.',
          illustration: '🛡️',
          tip: null
        }
      ]
    }
  },
  'grading-drainage': {
    en: {
      title: 'Grading & Drainage',
      intro: 'Water should always travel away from your foundation. These five checks keep your basement dry.',
      steps: [
        {
          headline: 'The 10-Foot Rule',
          body: 'Ensure the ground slopes away from your house at a rate of 1 inch per foot for the first 10 feet.',
          illustration: '📐',
          tip: null
        },
        {
          headline: 'Fill the Low Spots',
          body: 'Use "clean fill" dirt (not mulch!) to build up areas where water puddles against your foundation.',
          illustration: '🪣',
          tip: null
        },
        {
          headline: 'Extend Downspouts',
          body: 'Add plastic extensions to your downspouts so they discharge water at least 5 feet away from the house.',
          illustration: '⬇️',
          tip: null
        },
        {
          headline: 'Check the Swales',
          body: 'If your yard has a natural "valley" (a swale), keep it clear of debris so it can funnel water to the street.',
          illustration: '🌾',
          tip: null
        },
        {
          headline: 'Watch the Rain',
          body: 'During a storm, grab an umbrella and walk around to see exactly where the "rivers" are forming in your yard.',
          illustration: '☔',
          tip: null
        }
      ]
    }
  },
  'lawn-calendar': {
    en: {
      title: 'Seasonal Lawn Care Calendar',
      intro: 'Healthy grass is about timing. Follow the seasons and the lawn practically takes care of itself.',
      steps: [
        {
          headline: 'Early Spring Wake-up',
          body: 'Apply a pre-emergent herbicide before the soil hits 55°F to stop crabgrass before it even thinks about sprouting.',
          illustration: '🌱',
          tip: null
        },
        {
          headline: 'Late Spring Feeding',
          body: 'Use a slow-release fertilizer to give your grass the nutrients it needs for the summer "growth spurt."',
          illustration: '🌿',
          tip: null
        },
        {
          headline: 'Fall Aeration',
          body: 'Rent a core aerator in September to pull "plugs" from the soil; this lets oxygen and water reach the roots.',
          illustration: '🍂',
          tip: null
        },
        {
          headline: 'Overseeding',
          body: 'Right after aerating in the fall, spread new seed over thin spots to keep the lawn thick and lush for next year.',
          illustration: '🌾',
          tip: null
        },
        {
          headline: 'Winter Dormancy',
          body: 'Mow one last time on a lower setting in late fall and clear all leaves so they don\'t suffocate the grass over winter.',
          illustration: '❄️',
          tip: null
        }
      ]
    }
  },
  'mowing': {
    en: {
      title: 'Mowing Technique & Blade Height',
      intro: 'The way you mow matters more than how often. These habits build a thicker, greener lawn.',
      steps: [
        {
          headline: 'Height Matters',
          body: 'Set your mower deck high (usually 3–4 inches); taller grass has deeper roots and shades out those pesky weeds.',
          illustration: '📏',
          tip: null
        },
        {
          headline: 'The 1/3 Rule',
          body: 'Never trim more than one-third of the grass height at a time, or you’ll "shock" the lawn and turn it yellow.',
          illustration: '✂️',
          tip: null
        },
        {
          headline: 'Keep it Sharp',
          body: 'Sharpen your mower blades every season; dull blades "shred" the grass, making it prone to disease.',
          illustration: '🔪',
          tip: null
        },
        {
          headline: 'Alternate Patterns',
          body: 'Change the direction you mow each time (North-South then East-West) to prevent the grass from leaning and soil from compacting.',
          illustration: '↔️',
          tip: null
        },
        {
          headline: 'Leave the Clippings',
          body: 'Unless they are clumping, leave the grass clippings on the lawn—they act as a free, natural fertilizer!',
          illustration: '🌾',
          tip: null
        }
      ]
    }
  },
  'watering': {
    en: {
      title: 'Watering Basics',
      intro: 'Smart watering goes deeper, less often, and at the right time of day.',
      steps: [
        {
          headline: 'Early Bird Special',
          body: 'Water between 4 AM and 10 AM so the grass dries before evening, preventing fungus and mold from moving in.',
          illustration: '🌅',
          tip: null
        },
        {
          headline: 'Deep and Infrequent',
          body: 'Aim for 1 inch of water per week in one or two long sessions rather than a little bit every day.',
          illustration: '💧',
          tip: null
        },
        {
          headline: 'The Tuna Can Test',
          body: 'Place an empty tuna can on the lawn; once it’s full, you’ve hit your 1-inch goal for the week.',
          illustration: '🥫',
          tip: null
        },
        {
          headline: 'Check the Soil',
          body: 'Stick a screwdriver into the ground; if it goes in easily, you’re hydrated. If it’s a struggle, your lawn is thirsty.',
          illustration: '🪛',
          tip: null
        },
        {
          headline: 'Dormancy is Okay',
          body: 'During extreme heat, it’s fine to let the lawn go "brown" and dormant; it will bounce back when the rain returns.',
          illustration: '🌞',
          tip: null
        }
      ]
    }
  },
  'mulching': {
    en: {
      title: 'Mulching & Garden Bed Care',
      intro: 'A good mulch layer holds moisture, blocks weeds, and gives beds a finished look.',
      steps: [
        {
          headline: 'Clear the Area',
          body: 'Pull all weeds and rake away old, matted mulch before you start spreading the fresh stuff.',
          illustration: '🧹',
          tip: null
        },
        {
          headline: 'Edge the Bed',
          body: 'Use a spade to cut a clean, 3-inch deep "trench" around the garden bed to keep the mulch from creeping onto the grass.',
          illustration: '🪓',
          tip: null
        },
        {
          headline: 'Two-Inch Rule',
          body: 'Spread a layer about 2 to 3 inches thick; any thinner and weeds get through, any thicker and you’ll choke the plants.',
          illustration: '📏',
          tip: null
        },
        {
          headline: 'No Volcanoes',
          body: 'Keep mulch a few inches away from tree trunks and stems; piling it against the bark causes rot and invites "critters."',
          illustration: '🌳',
          tip: null
        },
        {
          headline: 'Smooth it Out',
          body: 'Use a hard rake to level the surface, then lightly water the mulch to settle it and keep it from blowing away.',
          illustration: '🧃',
          tip: null
        }
      ]
    }
  },
  'winterize-faucets': {
    en: {
      title: 'Winterizing Outdoor Faucets & Hoses',
      intro: 'Before the first hard freeze, spend ten minutes protecting your outdoor faucets and hoses.',
      steps: [
        {
          headline: 'Disconnect Hoses',
          body: 'Remove all garden hoses and sprayers; if you leave them attached, trapped water will freeze and burst the pipe.',
          illustration: '🧵',
          tip: null
        },
        {
          headline: 'Drain the Line',
          body: 'If you have an indoor shut-off valve for the outdoor tap, turn it off and open the outdoor faucet to drain any remaining water.',
          illustration: '🚰',
          tip: null
        },
        {
          headline: 'Check the Drip',
          body: 'Ensure the faucet is fully closed and not dripping; even a tiny leak can create a massive ice block inside your wall.',
          illustration: '💧',
          tip: null
        },
        {
          headline: 'Install the "Hat"',
          body: 'Place an insulated foam cover (the "Styrofoam igloos") over the faucet and tighten the loop to keep it cozy.',
          illustration: '🧣',
          tip: null
        },
        {
          headline: 'Storage',
          body: 'Roll up your hoses and store them in the garage or basement so the rubber doesn\'t crack in the freezing temps.',
          illustration: '📦',
          tip: null
        }
      ]
    }
  },
  'patch-drywall': {
    en: {
      title: 'Patching Drywall',
      intro: 'With a little patience and the right compound, drywall holes disappear for good.',
      steps: [
        {
          headline: 'Clean the Hole',
          body: 'Trim away any frayed paper or loose drywall bits with a utility knife to create a clean "crater."',
          illustration: '🪓',
          tip: null
        },
        {
          headline: 'Apply the Patch',
          body: 'For small dents, use spackle; for holes, apply a self-adhesive mesh patch over the opening.',
          illustration: '🩹',
          tip: null
        },
        {
          headline: 'The First Coat',
          body: 'Use a putty knife to spread a thin layer of joint compound over the patch, "feathering" the edges outward so it’s flat.',
          illustration: '🔹',
          tip: null
        },
        {
          headline: 'Sand it Smooth',
          body: 'Once dry, use a fine-grit sanding sponge to smooth it down until you can’t feel the edge with your fingertips.',
          illustration: '🧽',
          tip: null
        },
        {
          headline: 'Prime and Paint',
          body: 'Don\'t skip the primer! Drywall compound is "thirsty" and will soak up paint, leaving a dull spot if you don\'t prime first.',
          illustration: '🎨',
          tip: null
        }
      ]
    }
  },
  'painting': {
    en: {
      title: 'Painting a Room',
      intro: 'Good prep makes good paint. These five steps take a room from dingy to crisp.',
      steps: [
        {
          headline: 'The Prep Work',
          body: 'Wash the walls with a damp cloth and use painter’s tape to protect your baseboards, ceiling, and outlets.',
          illustration: '🧻',
          tip: null
        },
        {
          headline: 'Cutting In',
          body: 'Use a brush to paint a 2-inch border around the edges of the wall and around the trim where a roller can\'t reach.',
          illustration: '🖌️',
          tip: null
        },
        {
          headline: 'The "W" Technique',
          body: 'Dip your roller and lay down a large "W" on the wall, then fill it in without lifting the roller to ensure even coverage.',
          illustration: '🎨',
          tip: null
        },
        {
          headline: 'Light Layers',
          body: 'Two thin coats are always better (and more professional) than one thick, gloopy coat that drips.',
          illustration: '🪶',
          tip: null
        },
        {
          headline: 'Pull the Tape',
          body: 'Remove the painter\'s tape while the paint is still slightly tacky to get those crisp, sharp lines we love.',
          illustration: '✂️',
          tip: null
        }
      ]
    }
  },
  'squeaky-door': {
    en: {
      title: 'Fixing a Squeaky or Sticking Door',
      intro: 'A squeaky door is almost always a dry hinge. Five minutes and it’s gone.',
      steps: [
        {
          headline: 'Identify the Hinge',
          body: 'Open and close the door slowly to find exactly which hinge is doing the "singing."',
          illustration: '👂',
          tip: null
        },
        {
          headline: 'Tap the Pin',
          body: 'Use a hammer and a nail (or a screwdriver) to tap the hinge pin up about an inch—you don\'t have to take it all the way out.',
          illustration: '🔨',
          tip: null
        },
        {
          headline: 'Lubricate',
          body: 'Apply a drop of silicone spray, white lithium grease, or even a bit of dish soap to the pin.',
          illustration: '🛢️',
          tip: null
        },
        {
          headline: 'Work it In',
          body: 'Tap the pin back down and swing the door back and forth several times to spread the lubricant through the hinge.',
          illustration: '🔁',
          tip: null
        },
        {
          headline: 'Wipe the Excess',
          body: 'Use a rag to catch any drips immediately so you don\'t stain your beautiful wood trim or carpet.',
          illustration: '🧻',
          tip: null
        }
      ]
    }
  },
  'caulk-tub': {
    en: {
      title: 'Caulking a Tub or Shower',
      intro: 'Resealing the tub keeps water out of your walls and mildew out of your bathroom.',
      steps: [
        {
          headline: 'The Great Strip',
          body: 'Use a caulk removal tool or a plastic scraper to pull up every bit of the old, moldy caulk.',
          illustration: '🧽',
          tip: null
        },
        {
          headline: 'Disinfect',
          body: 'Wipe the gap with rubbing alcohol or a bleach solution to kill any lingering mold spores so they don\'t grow under the new bead.',
          illustration: '🧴',
          tip: null
        },
        {
          headline: 'The Weight Trick',
          body: 'Fill the bathtub with water before you start; the weight "settles" the tub so the caulk won\'t crack when you take your first bath.',
          illustration: '🛁',
          tip: null
        },
        {
          headline: 'The Smooth Bead',
          body: 'Apply a continuous line of silicone caulk, then use a wet finger or a caulk tool to smooth it in one steady motion.',
          illustration: '✨',
          tip: null
        },
        {
          headline: 'The Long Dry',
          body: 'Let it cure for at least 24 hours before you empty the water or use the shower—patience is a virtue!',
          illustration: '⏲️',
          tip: null
        }
      ]
    }
  },
  'replace-tile': {
    en: {
      title: 'Replacing a Flooring Tile',
      intro: 'Pulling a cracked tile and setting a new one is a weekend-morning job if you take your time.',
      steps: [
        {
          headline: 'Clear the Grout',
          body: 'Use a grout saw or a rotary tool to carefully remove the grout around the broken tile so you don\'t crack the neighbors.',
          illustration: '🪚',
          tip: null
        },
        {
          headline: 'The "X" Mark',
          body: 'Use a hammer and center punch to gently tap a hole in the middle of the tile, then carefully pry the pieces up.',
          illustration: '✖️',
          tip: null
        },
        {
          headline: 'Scrape the Floor',
          body: 'Use a chisel to remove all the old, hardened adhesive from the floor until the surface is totally flat.',
          illustration: '🧱',
          tip: null
        },
        {
          headline: 'Set the New Tile',
          body: 'Apply "thin-set" mortar to the back of the new tile (buttering it like toast) and press it firmly into place.',
          illustration: '🧈',
          tip: null
        },
        {
          headline: 'Grout and Clean',
          body: 'After 24 hours, fill the gaps with matching grout, let it sit for 15 minutes, and wipe the haze off with a damp sponge.',
          illustration: '🪣',
          tip: null
        }
      ]
    }
  },
  'smoke-co-detectors': {
    en: {
      title: 'Smoke & CO Detector Placement',
      intro: 'Working detectors are the cheapest life insurance in your house. Keep them honest with these checks.',
      steps: [
        {
          headline: 'The Monthly Tap',
          body: 'Press the "Test" button on every unit once a month; if it doesn\'t scream at you, it\'s not working.',
          illustration: '👆',
          tip: null
        },
        {
          headline: 'Annual Refresh',
          body: 'Change the batteries every single year, even if they aren\'t chirping yet—pick a memorable date like New Year\'s.',
          illustration: '🔋',
          tip: null
        },
        {
          headline: 'Vacuum the Dust',
          body: 'Use a vacuum attachment to suck out dust and cobwebs from the vents; debris can cause annoying false alarms.',
          illustration: '🧹',
          tip: null
        },
        {
          headline: 'Check the Date',
          body: 'Flip the unit over to check the manufacture date; smoke detectors expire after 10 years, and CO detectors after 5–7.',
          illustration: '📅',
          tip: null
        },
        {
          headline: 'Strategic Placement',
          body: 'Ensure you have at least one on every level of the home and specifically inside (or right outside) every bedroom.',
          illustration: '📍',
          tip: null
        }
      ]
    }
  },
  'fire-extinguisher': {
    en: {
      title: 'Fire Extinguisher Basics',
      intro: 'When a fire starts, PASS is the four-step method that stops it before it spreads.',
      steps: [
        {
          headline: 'Pull the Pin',
          body: 'Hold the extinguisher upright and pull the metal pin out to break the plastic tamper seal.',
          illustration: '📌',
          tip: null
        },
        {
          headline: 'Aim at the Base',
          body: 'Point the nozzle or hose at the very bottom of the fire; aiming at the flames won\'t put out the fuel source.',
          illustration: '🎯',
          tip: null
        },
        {
          headline: 'Squeeze the Lever',
          body: 'Grip the handle firmly to release the extinguishing agent in a controlled burst.',
          illustration: '✊',
          tip: null
        },
        {
          headline: 'Sweep Side-to-Side',
          body: 'Move the spray back and forth across the base of the fire until it appears completely extinguished.',
          illustration: '↔️',
          tip: null
        },
        {
          headline: 'Monitor the Area',
          body: 'Stay back and watch the spot for a few minutes to ensure the fire doesn\'t reignite from the heat.',
          illustration: '👀',
          tip: null
        }
      ]
    }
  },
  'emergency-kit': {
    en: {
      title: 'Home Emergency Kit',
      intro: 'A basic kit should carry your family through 72 hours without power, water, or a grocery run.',
      steps: [
        {
          headline: 'Water & Food',
          body: 'Stash one gallon of water per person per day and a 3-day supply of non-perishables (and a manual can opener!).',
          illustration: '🥫',
          tip: null
        },
        {
          headline: 'Light & Power',
          body: 'Include a high-powered flashlight, a hand-crank radio, and a portable power bank for your phone.',
          illustration: '🔦',
          tip: null
        },
        {
          headline: 'First Aid Plus',
          body: 'Pack a standard medical kit but add a backup supply of any personal medications you take daily.',
          illustration: '🩹',
          tip: null
        },
        {
          headline: 'The Paper Trail',
          body: 'Keep copies of ID, insurance policies, and emergency contacts in a waterproof "go-bag."',
          illustration: '📄',
          tip: null
        },
        {
          headline: 'The Little Luxuries',
          body: 'Toss in some extra cash, a deck of cards for boredom, and a warm emergency blanket.',
          illustration: '🎴',
          tip: null
        }
      ]
    }
  },
  'power-outage': {
    en: {
      title: 'What to Do When the Power Goes Out',
      intro: 'A few calm habits during an outage protect your food, your electronics, and your home.',
      steps: [
        {
          headline: 'Unplug the Goodies',
          body: 'Disconnect computers and TVs; when the power "surges" back on, it can fry your expensive electronics.',
          illustration: '🔌',
          tip: null
        },
        {
          headline: 'Keep it Cold',
          body: 'Open the fridge and freezer as little as possible—an unopened fridge keeps food safe for 4 hours; a freezer for 48.',
          illustration: '🧊',
          tip: null
        },
        {
          headline: 'Safe Lighting',
          body: 'Use flashlights or LED lanterns rather than candles to avoid accidental fire "drama" in the dark.',
          illustration: '🔦',
          tip: null
        },
        {
          headline: 'The "Wait" Period',
          body: 'Once the lights flicker back on, wait 5–10 minutes before plugging things back in to ensure the grid is stable.',
          illustration: '⏲️',
          tip: null
        },
        {
          headline: 'Report the Issue',
          body: 'Don\'t assume the neighbors called it in; notify your utility provider immediately so they know where the "dark zone" is.',
          illustration: '📞',
          tip: null
        }
      ]
    }
  },
  'utility-contacts': {
    en: {
      title: 'Knowing Your Utility Contacts',
      intro: 'The moment you need a utility number is the worst moment to go looking for it.',
      steps: [
        {
          headline: 'Gather the Numbers',
          body: 'Look up the emergency/outage lines for your electric, gas, and water companies.',
          illustration: '🔢',
          tip: null
        },
        {
          headline: 'Print it Out',
          body: 'Do not rely on your phone for this; write the numbers down on a physical card in case your battery dies.',
          illustration: '🖨️',
          tip: null
        },
        {
          headline: 'Include the Gas Line',
          body: 'Know the specific "smell gas, act fast" number for your local natural gas provider.',
          illustration: '🔥',
          tip: null
        },
        {
          headline: 'Post it Publicly',
          body: 'Tape the list to the inside of a kitchen cabinet or near your breaker box where everyone can see it.',
          illustration: '📌',
          tip: null
        },
        {
          headline: 'Add Local Heroes',
          body: 'Include the non-emergency numbers for your local police and fire departments for quick access.',
          illustration: '🚓',
          tip: null
        }
      ]
    }
  },
  'fridge-coils': {
    en: {
      title: 'Cleaning Refrigerator Coils',
      intro: 'Dusty coils make the fridge work harder. A quick clean every year pays for itself in power savings.',
      steps: [
        {
          headline: 'Pull it Out',
          body: 'Gently shimmy the fridge away from the wall (it\'s a great workout!) and unplug it for safety.',
          illustration: '💪',
          tip: null
        },
        {
          headline: 'Locate the Coils',
          body: 'Depending on your model, the coils are either a black grid on the back or hidden behind a plate at the bottom front.',
          illustration: '🔍',
          tip: null
        },
        {
          headline: 'Vacuum Away',
          body: 'Use a narrow vacuum attachment to suck up the "dust bunnies" that make the motor work overtime.',
          illustration: '🧹',
          tip: null
        },
        {
          headline: 'Brush the Grime',
          body: 'Use a coil brush or a long, soft brush to loosen the stubborn hair and lint between the loops.',
          illustration: '🖌️',
          tip: null
        },
        {
          headline: 'Restore and Plug',
          body: 'Push it back into place, ensuring you aren\'t pinching the water line or the cord, and plug it back in.',
          illustration: '🔌',
          tip: null
        }
      ]
    }
  },
  'dryer-vent': {
    en: {
      title: 'Dryer Vent Cleaning',
      intro: 'A clogged dryer vent is the leading cause of laundry fires. Clean it out yearly.',
      steps: [
        {
          headline: 'Unplug and Detach',
          body: 'Pull the dryer out and disconnect the large silver "accordion" duct from the back of the machine.',
          illustration: '🔌',
          tip: null
        },
        {
          headline: 'Vacuum the Tube',
          body: 'Use a vacuum to reach into the back of the dryer and as far into the wall duct as you can.',
          illustration: '🧹',
          tip: null
        },
        {
          headline: 'The Snake Method',
          body: 'Use a dryer vent cleaning brush (a long flexible rod) to scrub the entire length of the duct leading outside.',
          illustration: '🧵',
          tip: null
        },
        {
          headline: 'Check the Exterior',
          body: 'Go outside and make sure the vent flap opens freely and isn\'t blocked by lint or bird nests.',
          illustration: '🏠',
          tip: null
        },
        {
          headline: 'Reattach Securely',
          body: 'Clamp the duct back on tightly; a loose vent leaks hot, moist air (and lint!) behind your walls.',
          illustration: '🔗',
          tip: null
        }
      ]
    }
  },
  'dishwasher': {
    en: {
      title: 'Dishwasher Filter & Spray Arm',
      intro: 'A little monthly care keeps your dishwasher cleaning well and smelling fresh.',
      steps: [
        {
          headline: 'Clean the Filter',
          body: 'Remove the cylindrical filter at the bottom, rinse it under hot water, and scrub it with a soft brush to remove "food funk."',
          illustration: '🧽',
          tip: null
        },
        {
          headline: 'Clear the Arms',
          body: 'Use a toothpick to poke out any seeds or hard water deposits clogging the tiny holes in the spray arms.',
          illustration: '🪥',
          tip: null
        },
        {
          headline: 'The Vinegar Wash',
          body: 'Place a bowl of white vinegar on the top rack and run a hot cycle to dissolve grease and lime scale.',
          illustration: '🍶',
          tip: null
        },
        {
          headline: 'The Baking Soda Finish',
          body: 'Sprinkle a cup of baking soda on the bottom and run one more short cycle to deodorize and brighten.',
          illustration: '🧂',
          tip: null
        },
        {
          headline: 'Wipe the Seal',
          body: 'Clean the rubber gasket around the door with a damp cloth to prevent leaks and moldy smells.',
          illustration: '🚪',
          tip: null
        }
      ]
    }
  },
  'garbage-disposal': {
    en: {
      title: 'Garbage Disposal Care',
      intro: 'A few simple habits keep the disposal odor-free and running smoothly for years.',
      steps: [
        {
          headline: 'Ice and Salt',
          body: 'Toss in a handful of ice cubes and a half-cup of kosher salt; run it with cold water to "scrub" the blades.',
          illustration: '🧊',
          tip: null
        },
        {
          headline: 'Citrus Refresh',
          body: 'Grind up a few lemon or orange peels to neutralize odors and leave your sink smelling like a spa.',
          illustration: '🍋',
          tip: null
        },
        {
          headline: 'The Brush Down',
          body: 'Use a long-handled scrub brush to clean the underside of the black rubber splash guard—that\'s where the slime hides!',
          illustration: '🖌️',
          tip: null
        },
        {
          headline: 'Cold Water Only',
          body: 'Always run cold water when using the disposal; hot water melts grease, which then clogs your pipes further down.',
          illustration: '❄️',
          tip: null
        },
        {
          headline: 'No "Hard" Stuff',
          body: 'Never put bones, pits, or fibrous things like celery down there—they are the ultimate disposal mood-killers.',
          illustration: '🚫',
          tip: null
        }
      ]
    }
  },
  'deep-clean': {
    en: {
      title: 'Deep Cleaning Basics',
      intro: 'A periodic deep clean of your major appliances makes them work better and last longer.',
      steps: [
        {
          headline: 'The Oven Ritual',
          body: 'Remove the racks and soak them in soapy water; use a paste of baking soda and water on the oven floor overnight.',
          illustration: '🍞',
          tip: null
        },
        {
          headline: 'Microwave Steam',
          body: 'Heat a bowl of water and lemon slices for 5 minutes; the steam softens the "splatters" so they wipe right off.',
          illustration: '♨️',
          tip: null
        },
        {
          headline: 'Washing Machine Refresh',
          body: 'Run an empty hot cycle with a cup of bleach or a specialized cleaner to kill "gym clothes" bacteria.',
          illustration: '🧺',
          tip: null
        },
        {
          headline: 'Under-Appliance Sweep',
          body: 'Use a flat duster to reach under the stove and dishwasher; you\'d be shocked at what collects under there.',
          illustration: '🧹',
          tip: null
        },
        {
          headline: 'The Exterior Shine',
          body: 'Finish by wiping down all handles and control panels with a microfiber cloth to remove those pesky fingerprints.',
          illustration: '✨',
          tip: null
        }
      ]
    }
  }
};

const SAMPLE_STEPS = MODULE_STEPS['water-shutoff'];
