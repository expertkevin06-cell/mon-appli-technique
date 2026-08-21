// Logos SVG officiels des marques automobiles
const LOGOS_SVG = {
  "Renault": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 20 L160 80 L160 140 L100 180 L40 140 L40 80 Z" fill="#FFCC33" stroke="#000" stroke-width="3"/>
    <path d="M100 35 L145 80 L145 130 L100 165 L55 130 L55 80 Z" fill="none" stroke="#000" stroke-width="2"/>
    <text x="100" y="110" font-family="Arial" font-size="22" font-weight="bold" text-anchor="middle" fill="#000">RENAULT</text>
  </svg>`,
"Alpine": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="60" width="160" height="80" rx="10" fill="#0055A4"/><text x="100" y="115" font-family="Arial" font-size="40" font-weight="bold" text-anchor="middle" fill="#fff">ALPINE</text></svg>`,
  "Peugeot": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="85" fill="#1B3A6B"/>
    <path d="M60 130 Q70 100 90 95 Q100 92 105 100 Q110 108 100 115 Q90 120 80 118" fill="none" stroke="#FFD700" stroke-width="4"/>
    <path d="M95 95 L110 70 L115 75 L100 100 Z" fill="#FFD700"/>
    <path d="M110 70 L125 65 L128 70 L113 75 Z" fill="#FFD700"/>
    <circle cx="108" cy="72" r="3" fill="#FFD700"/>
    <text x="100" y="165" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="#FFD700">PEUGEOT</text>
  </svg>`,

  "Mercedes": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="85" fill="#333" stroke="#C0C0C0" stroke-width="3"/>
    <circle cx="100" cy="100" r="75" fill="none" stroke="#C0C0C0" stroke-width="2"/>
    <path d="M100 30 L100 100" stroke="#C0C0C0" stroke-width="4"/>
    <path d="M100 100 L35 140" stroke="#C0C0C0" stroke-width="4"/>
    <path d="M100 100 L165 140" stroke="#C0C0C0" stroke-width="4"/>
    <circle cx="100" cy="100" r="8" fill="#C0C0C0"/>
  </svg>`,

  "BMW": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="85" fill="#000"/>
    <circle cx="100" cy="100" r="75" fill="#fff"/>
    <path d="M100 25 L100 100 L175 100 A75 75 0 0 0 100 25 Z" fill="#0066B1"/>
    <path d="M100 175 L100 100 L25 100 A75 75 0 0 0 100 175 Z" fill="#0066B1"/>
    <circle cx="100" cy="100" r="75" fill="none" stroke="#000" stroke-width="2"/>
    <text x="100" y="20" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">BMW</text>
  </svg>`,

  "Audi": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="55" cy="100" r="30" fill="none" stroke="#BB0A30" stroke-width="6"/>
    <circle cx="95" cy="100" r="30" fill="none" stroke="#BB0A30" stroke-width="6"/>
    <circle cx="135" cy="100" r="30" fill="none" stroke="#BB0A30" stroke-width="6"/>
    <circle cx="175" cy="100" r="30" fill="none" stroke="#BB0A30" stroke-width="6"/>
  </svg>`,

  "Volkswagen": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="85" fill="#001E50" stroke="#fff" stroke-width="4"/>
    <path d="M40 60 L100 140 L160 60" fill="none" stroke="#fff" stroke-width="8" stroke-linejoin="round"/>
    <path d="M55 60 L100 120 L145 60" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round"/>
  </svg>`,

  "Ford": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="100" rx="85" ry="55" fill="#003478" stroke="#C0C0C0" stroke-width="3"/>
    <text x="100" y="115" font-family="Georgia" font-size="42" font-weight="bold" font-style="italic" text-anchor="middle" fill="#fff">Ford</text>
  </svg>`,

  "Toyota": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="100" rx="80" ry="50" fill="none" stroke="#EB0A1E" stroke-width="5"/>
    <ellipse cx="100" cy="100" rx="40" ry="60" fill="none" stroke="#EB0A1E" stroke-width="5"/>
    <ellipse cx="100" cy="75" rx="55" ry="20" fill="none" stroke="#EB0A1E" stroke-width="5"/>
  </svg>`,

  "Nissan": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" fill="#C3002F"/>
    <rect x="30" y="85" width="140" height="30" fill="#C0C0C0" rx="5"/>
    <text x="100" y="107" font-family="Arial" font-size="22" font-weight="bold" text-anchor="middle" fill="#C3002F">NISSAN</text>
  </svg>`,

  "Hyundai": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="100" rx="80" ry="55" fill="#002C5F"/>
    <text x="100" y="115" font-family="Arial" font-size="50" font-weight="bold" font-style="italic" text-anchor="middle" fill="#C0C0C0">H</text>
  </svg>`,

  "Kia": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="100" rx="80" ry="50" fill="#05141F"/>
    <text x="100" y="115" font-family="Arial" font-size="45" font-weight="bold" text-anchor="middle" fill="#fff">KIA</text>
  </svg>`,

  "Tesla": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 60 Q100 40 160 60 L150 70 Q100 55 50 70 Z" fill="#CC0000"/>
    <path d="M100 60 L100 160" stroke="#CC0000" stroke-width="8"/>
    <path d="M70 80 L130 80" stroke="#CC0000" stroke-width="6"/>
  </svg>`,

  "Dacia": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 80 L160 80 L160 130 L40 130 Z" fill="#003DA5"/>
    <path d="M50 80 L100 50 L150 80" fill="none" stroke="#003DA5" stroke-width="6"/>
    <text x="100" y="115" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="#fff">DACIA</text>
  </svg>`,

  "Fiat": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" fill="#9D0A0E"/>
    <text x="100" y="115" font-family="Arial" font-size="40" font-weight="bold" text-anchor="middle" fill="#fff">FIAT</text>
  </svg>`,

  "Opel": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" fill="#FFD700"/>
    <path d="M30 100 L170 100" stroke="#000" stroke-width="8"/>
    <path d="M100 30 L100 170" stroke="#000" stroke-width="8"/>
  </svg>`,

  "Volvo": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="75" fill="none" stroke="#003057" stroke-width="8"/>
    <path d="M100 25 L100 175" stroke="#003057" stroke-width="8"/>
    <path d="M100 100 L175 100" stroke="#003057" stroke-width="8"/>
    <path d="M155 80 L175 100 L155 120" fill="none" stroke="#003057" stroke-width="8"/>
  </svg>`,

  "Mazda": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="100" rx="80" ry="55" fill="#B00D1E"/>
    <path d="M50 100 Q100 50 150 100 Q100 130 50 100" fill="#C0C0C0"/>
    <path d="M70 100 Q100 70 130 100" fill="none" stroke="#B00D1E" stroke-width="3"/>
  </svg>`,

  "Honda": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="50" width="140" height="100" rx="10" fill="#CC0000"/>
    <text x="100" y="125" font-family="Arial" font-size="70" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
  </svg>`,

  "Seat": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="160" height="80" rx="10" fill="#FFD700"/>
    <text x="100" y="115" font-family="Arial" font-size="40" font-weight="bold" text-anchor="middle" fill="#000">SEAT</text>
  </svg>`,

  "Skoda": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" fill="#4BA82E"/>
    <path d="M60 100 L100 60 L140 100 L100 140 Z" fill="#fff"/>
    <path d="M70 100 L100 70 L130 100" fill="none" stroke="#4BA82E" stroke-width="3"/>
  </svg>`,

  "Mini": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="100" rx="80" ry="50" fill="#000"/>
    <text x="100" y="115" font-family="Arial" font-size="40" font-weight="bold" text-anchor="middle" fill="#fff">MINI</text>
  </svg>`,

  "Alfa Romeo": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" fill="#fff" stroke="#8B0000" stroke-width="6"/>
    <circle cx="70" cy="100" r="30" fill="#8B0000"/>
    <path d="M130 70 L130 130 M115 100 L145 100" stroke="#8B0000" stroke-width="6"/>
    <path d="M120 80 L140 100 L120 120" fill="#8B0000"/>
  </svg>`,

  "Jaguar": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" fill="#000"/>
    <path d="M50 100 Q100 50 150 100" fill="none" stroke="#FFD700" stroke-width="6"/>
    <path d="M130 80 L150 100 L130 100" fill="#FFD700"/>
  </svg>`,

  "Chevrolet": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 100 L80 80 L170 80 L170 120 L80 120 Z" fill="#D4AF37"/>
    <path d="M80 80 L30 100 L80 120" fill="#D4AF37"/>
  </svg>`,

  "BYD": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="160" height="80" rx="10" fill="#003DA5"/>
    <text x="100" y="115" font-family="Arial" font-size="45" font-weight="bold" text-anchor="middle" fill="#fff">BYD</text>
  </svg>`,

  "Xpeng": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" fill="#00A0E9"/>
    <text x="100" y="120" font-family="Arial" font-size="35" font-weight="bold" text-anchor="middle" fill="#fff">XPENG</text>
  </svg>`,

  "Jaecoo": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="160" height="80" rx="10" fill="#1A1A1A"/>
    <text x="100" y="115" font-family="Arial" font-size="35" font-weight="bold" text-anchor="middle" fill="#FFD700">JAECOO</text>
  </svg>`,

  "NIO": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" fill="#0066CC"/>
    <text x="100" y="120" font-family="Arial" font-size="50" font-weight="bold" text-anchor="middle" fill="#fff">NIO</text>
  </svg>`,

  "Li Auto": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="160" height="80" rx="10" fill="#FF6B00"/>
    <text x="100" y="115" font-family="Arial" font-size="35" font-weight="bold" text-anchor="middle" fill="#fff">LI AUTO</text>
  </svg>`,

  "Zeekr": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="160" height="80" rx="10" fill="#000"/>
    <text x="100" y="115" font-family="Arial" font-size="40" font-weight="bold" text-anchor="middle" fill="#fff">ZEEKR</text>
  </svg>`,

  "Polestar": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" fill="#FFD700"/>
    <path d="M100 30 L100 170 M30 100 L170 100" stroke="#000" stroke-width="8"/>
  </svg>`,

  "Lucid": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="160" height="80" rx="10" fill="#000"/>
    <text x="100" y="115" font-family="Arial" font-size="40" font-weight="bold" text-anchor="middle" fill="#fff">LUCID</text>
  </svg>`,

  "Rivian": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="160" height="80" rx="10" fill="#00A651"/>
    <text x="100" y="115" font-family="Arial" font-size="35" font-weight="bold" text-anchor="middle" fill="#fff">RIVIAN</text>
  </svg>`,

  "Jeep": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="160" height="80" rx="10" fill="#1E5631"/>
    <text x="100" y="115" font-family="Arial" font-size="45" font-weight="bold" text-anchor="middle" fill="#FFD700">JEEP</text>
  </svg>`
};

// Fonction pour obtenir le logo SVG d'une marque
function getLogoSVG(marque) {
  if (LOGOS_SVG[marque]) {
    return LOGOS_SVG[marque];
  }
  // Logo par défaut
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" fill="#555"/>
    <text x="100" y="115" font-family="Arial" font-size="30" font-weight="bold" text-anchor="middle" fill="#fff">${marque.substring(0, 3).toUpperCase()}</text>
  </svg>`;
}
