import leSai from '../assets/collections/histoire-naturelle/le-sai-391x600.jpg';

const histoireNaturelle = {
  title: 'Histoire Naturelle des Singes et des Makis',
  exhibitUrl: 'histoire-naturelle-des-singes-et-des-makis',
  description:
    'Histoire Naturelle de Singes et des Makis written and illustrated by Jean-Baptiste Audebert.',
  singleArtist: true,
  aboutSingleArtist: {
    credit: 'Jean-Baptiste Audebert (French, 1759-1800)',
    text: "Histoire Naturelle de Singes et des Makis [Natural History of Apes and Monkeys] is regarded as one of the pioneering works of the golden age of French natural history publication. It is Audebert's first monograph. He was responsible for the text and the extraordinary illustrations, dividing the monkeys into six families, each illustrated with superb colour plates renowned for their accuracy and for the revolutionary technique he used. In each he not only captures the monkey's form and anatomy but also its characteristics and mannerisms, thus reflecting many of the evolution theories posited by his contemporary Frenchmen and which lay the foundations to Charles Darwin's great writings.",
  },
  items: [
    {
      title: 'Le Sai a gorge blanche (1797)',
      credit: 'Jean-Baptiste Audebert (French, 1759-1800)',
      image: leSai,
      alt: 'Illustration of le Sai a gorge blanche',
    },
    {
      title: 'Le Sajou cornu (1797)',
      credit: 'Jean-Baptiste Audebert (French, 1759-1800)',
      image: null,
      alt: 'Illustration of le Sajou cornu',
    },
    {
      title: 'Le Maki à front blanc (1797)',
      credit: 'Jean-Baptiste Audebert (French, 1759-1800)',
      image: null,
      alt: 'Illustration of le Maki à front blanc',
    },
    {
      title: 'Le Papion, variété B (1797)',
      credit: 'Jean-Baptiste Audebert (French, 1759-1800)',
      image: null,
      alt: 'Illustration of le Papion',
    },
  ],
};

export default histoireNaturelle;
