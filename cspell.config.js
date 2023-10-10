// cSpell Settings
/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
const cspell = {
  flagWords: ['hte'],

  // Version of the setting file.  Always 0.2
  ignorePaths: ['node_modules/**'],
  // language - current active spelling language
  language: 'en',
  // words - list of words to be always considered correct
  version: '0.2',
  // flagWords - list of words to be always considered incorrect
  // This is useful for offensive words and common spelling errors.
  // For example "hte" should be "the"
  words: [
    'cspell',
    'mkdirp',
    'tsmerge',
    'githubusercontent',
    'streetsidesoftware',
    'vsmarketplacebadge',
    'visualstudio',
    'ANILIST',
    'minifiable',
    'tailwindcss',
  ],
  dictionaries: ['project'],
  dictionaryDefinitions: [
    {
      name: 'project',
      path: './.cspell/project.txt',
    },
  ],
};

module.export = cspell;
