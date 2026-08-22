// Logos SVG simplifiés
function getLogoSVG(marque) {
  return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#3498db"/><text x="50" y="58" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="white">' + (marque ? marque.substring(0,2).toUpperCase() : '??') + '</text></svg>';
}
