import no from '@internal/components/src/_locales/no';

export default {
  ...no,
  frontpage: {
    heading: 'Designsystemet hjelper deg å lage gode digitale tjenester',
    'for-designers': {
      title: 'For designere',
      description:
        'Lær hvordan du kommer i gang med Designsystemet som designer.',
    },
    'for-developers': {
      title: 'For utviklere',
      description:
        'Lær hvordan du kommer i gang med Designsystemet som utvikler.',
    },
    components: {
      title: 'Komponenter',
      description: 'Se oversikten over UI-komponentene som er laget i react.',
    },
    toolbox: {
      title: 'En felles digital verktøykasse',
      description:
        'Designsystemet er en felles verktøykasse med grunnleggende UI-komponenter, retningslinjer og mønstre, som du kan bruke når du utvikler digitale tjenester. Designsystemet bidrar til effektiv produktutvikling og helhetlige brukeropplevelser.',
      link: 'Les mer om Designsystemet',
    },
    'components-section': {
      title: 'Tilgjengelige og fleksible komponenter',
      description:
        'Når vi lager de mest grunnleggende komponentene bare én gang, sikrer vi god kvalitet. Komponenten blir godt testet, og vi ivaretar kravene til tilgjengelighet. Komponentene er laget i Figma og i React. Du kan sette dem sammen på mange ulike måter og i forskjellige mønstre.',
      fallbackImgAlt:
        'Designskisse av en mobiltelefon som har komponenter fra Designsystemet i seg.',
    },
    'theme-section': {
      title: 'Bruk egne tema',
      description:
        'Designsystemet støtter ulike identiteter gjennom tema. På denne måten kan alle ta utgangspunkt i samme designsystem, men tilpasse til ulike avsenderidentiteter.',
      fallbackImgAlt:
        'Designskisse av en nettside som viser hvordan Designsystemet kan tilpasses ulike identiteter.',
    },
    'latest-news': {
      title: 'Siste nytt fra Designsystemet',
    },
    'join-section': {
      title: 'Bli med å utvikle Designsystemet!',
      description:
        'Ved å samarbeide om Designsystemet kan vi lage mer gjenkjennelige brukeropplevelser på tvers av offentlig sektor. Samtidig sparer vi oss for å gjøre de samme oppgavene flere ganger. Designsystemet skal være et felles hjem for gjenbrukbare komponenter, god praksis, interaksjonsmønstre, brukerdialog, innsikt og mer. Vil du høre mer eller hjelpe? Ta kontakt med oss!',
      buttons: {
        slack: 'Bli med på Slack',
        github: 'Bidra på GitHub',
        email: 'Send en epost',
      },
    },
    meta: {
      title: 'En felles digital verktøykasse',
      description:
        'Designsystemet er en felles verktøykasse med grunnleggende UI-komponenter, retningslinjer og mønstre, som du kan bruke når du utvikler digitale tjenester. Designsystemet bidrar til effektiv produktutvikling og helhetlige brukeropplevelser.',
    },
  },
  blog: {
    tag: 'Bloggen',
    title: 'Bloggen',
    description:
      'Her deler vi nyheter, tips og erfaringer fra utviklingen av Designsystemet. Vi ønsker å dele kunnskap og erfaringer med hverandre, og bidra til å gjøre det enklere å lage gode digitale tjenester.',
    write: {
      title: 'Vil du skrive for bloggen?',
      description:
        'Har du noe du ønsker å dele med andre i fellesskapet? Kontakt oss på ',
      slack: 'Slack',
      or: 'eller via',
      email: 'e-post',
    },
  },
  sidebar: {
    Components: 'Komponenter',
    Blogg: 'Blogg',
    Tokens: 'Tokens',
    categories: {
      'Getting Started': 'Kom i gang',
      'Design Principles': 'Designprinsipper',
      'For Designers': 'For designere',
      'For Developers': 'For utviklere',
      About: 'Om',
    },
    items: {
      Introduction: 'Introduksjon',
      Installation: 'Installasjon',
      Typography: 'Typografi',
      Colors: 'Farger',
      Layout: 'Layout',
      Accessibility: 'Tilgjengelighet',
      Contribution: 'Bidrag',
    },
    show: 'Vis',
    hide: 'Skjul',
    sidebar: 'sidemeny',
  },
  navigation: {
    fundamentals: 'Grunnleggende',
    'best-practices': 'God praksis',
    patterns: 'Mønstre',
    blog: 'Bloggen',
    components: 'Komponenter',
    'theme-builder': 'Temabygger',
  },
  accessibility: {
    'skip-link': 'Hopp til hovedinnhold',
  },
  errors: {
    default: {
      title: 'Oops!',
      details: 'En uventet feil oppstod.',
    },
    '404': {
      title: '404',
      details: 'Siden du leter etter finnes ikke.',
    },
    generic: {
      title: 'Feil',
      'go-to-homepage': 'Gå til forsiden',
    },
  },
  components: {
    title: 'Komponenter',
    description:
      'Designsystemet inneholder grunnleggende komponenter som kan settes sammen på mange ulike måter og i forskjellige mønstre.',
  },
  patterns: {
    meta: {
      title: 'Mønstre',
      description:
        'Mønstre er retningslinjer og anbefalinger for hvordan interaksjon og gjentagende brukeroppgaver skal løses. Når de samme mønstrene brukes på tvers, skaper vi gjenkjennelighet i tjenestene.',
    },
    title: 'Mønstre',
    description:
      'Mønstre er retningslinjer og anbefalinger for hvordan interaksjon og gjentagende brukeroppgaver skal løses. Når de samme mønstrene brukes på tvers, skaper vi gjenkjennelighet i tjenestene.',
  },
  fundamentals: {
    title: 'Grunnleggende',
    description:
      'Lær mer om Designsystemet, de grunnleggende designelementene, og hvordan du kommer i gang som designer eller utvikler.',
  },
  'best-practices': {
    title: 'God praksis',
    description:
      'Her deler vi god praksis med hverandre. Råd og veiledning som kan bidra til å lage bedre helhetlige tjenester samles her.',
    back: 'Tilbake',
    'breadcrumbs-label': 'Du er her:',
  },
  mdx: {
    error: {
      loading: 'Kunne ikke laste innhold',
    },
  },
  video: {
    'watch-video': 'Se video på {{url}}',
  },
  'image-banner': {
    'play-video': 'Spill av video',
    'pause-video': 'Sett video på pause',
  },
};
