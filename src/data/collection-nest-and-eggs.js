import frontispiece from '../assets/collections/nest-and-eggs/frontispiece-443x600.jpg';

const nestAndEggs = {
  title: 'Nests and Eggs of Birds of the United States',
  exhibitUrl: 'nests-and-eggs-of-birds-of-the-united-states',
  exhibitDetails: {
    description:
      "Nests and Eggs Birds of the United State's by Thomas G. Gentry, Illustrated by Edwin Sheppard.",
    singleArtist: true,
    aboutSingleArtist: {
      credit: 'Edwin L. Sheppard (American, ?-1904)',
      text: "Nests and Eggs Birds of the United State's by Thomas G. Gentry (1882). Illustrated with detailed chromolithographic title page and 54 chromolithographs of birds and their nests with eggs, nearly all protected with a tissue guards. Illustrated by Mr. Edwin Sheppard of the Academy of Natural Sciences of Philadelphia, acknowledged as the best ornithological artist in America at the time.",
    },
  },
  items: [
    {
      //TODO: ALT TEXT
      title: 'Frontispiece (1882)',
      credit: 'Edwin L. Sheppard (American, ?-1904)',
      image: frontispiece,
      alt: '',
    },
    {
      title: 'Prairie Warbler (1882)',
      credit: 'Edwin L. Sheppard (American, ?-1904)',
      image: null,
      alt: 'Illustration of Prairie Warbler',
    },
    {
      title: 'Razor-billed Auk (1882)',
      credit: 'Edwin L. Sheppard (American, ?-1904)',
      image: null,
      alt: 'Illustration of Razor-billed Auk',
    },
    {
      title: 'Barn Swallow (1882)',
      credit: 'Edwin L. Sheppard (American, ?-1904)',
      image: null,
      alt: 'Illustration of Barn Swallow',
    },
  ],
};

export default nestAndEggs;
