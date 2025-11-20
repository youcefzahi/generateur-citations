const citations = require('../src/donnees/citations');

describe('genererCitationAleatoire', () => {
  afterEach(() => {
    // Supprime tout mock résiduel et réinitialise le cache des modules.
    jest.dontMock('../src/donnees/citations');
    jest.resetModules();
    jest.clearAllMocks();
  });

  test('retourne null lorsque la liste de citations est vide', () => {
    jest.doMock('../src/donnees/citations', () => []);
    const { genererCitationAleatoire } = require('../src/citations');

    expect(genererCitationAleatoire()).toBeNull();
  });

  test('renvoie toujours un objet citation valide lorsque la liste n\'est pas vide', () => {
    const { genererCitationAleatoire } = require('../src/citations');

    for (let i = 0; i < 20; i += 1) {
      const citation = genererCitationAleatoire();

      expect(citation).not.toBeNull();
      expect(typeof citation.texte).toBe('string');
      expect(typeof citation.auteur).toBe('string');
      expect(citation.texte.length).toBeGreaterThan(0);
      expect(citation.auteur.length).toBeGreaterThan(0);
      expect(citations).toContainEqual(citation);
    }
  });
});
