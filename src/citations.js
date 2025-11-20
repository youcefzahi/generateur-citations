// Fonction utilitaire pour générer une citation aléatoire à partir d'une liste prédéfinie.

/**
 * Sélectionne une citation de manière aléatoire.
 * @returns {{ texte: string, auteur: string } | null} Un objet contenant le texte et l'auteur,
 * ou null si aucune citation n'est disponible.
 */
function genererCitationAleatoire() {
  // Chargement tardif pour faciliter le mock en tests et éviter le cache des modules.
  const citations = require('./donnees/citations');

  // Si la liste est vide, on retourne immédiatement null pour éviter une erreur de sélection.
  if (!Array.isArray(citations) || citations.length === 0) {
    return null;
  }

  // Calcul de l'index aléatoire en utilisant la longueur du tableau.
  const indexAleatoire = Math.floor(Math.random() * citations.length);
  const citation = citations[indexAleatoire];

  // On retourne un nouvel objet pour éviter toute mutation accidentelle de la source.
  return {
    texte: citation.texte,
    auteur: citation.auteur
  };
}

module.exports = {
  genererCitationAleatoire
};
