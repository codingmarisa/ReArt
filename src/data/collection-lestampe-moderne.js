import theKiss from '../assets/collections/lestampe-moderne/the-kiss-429x600.jpg';

//TODO: ALT TEXT

const lestampeModerne = {
  title: "L'Estampe Moderne",
  exhibitUrl: 'lestampe-moderne',
  exhibitDetails: {
    description:
      "L'Estampe Moderne appeared in 1897-1899 as a series of 24 monthly fascicles, each of 4 original lithographs, priced at 3 francs 50 centimes and printed by Imprimerie Champenois of Paris. Many accomplished European Art Nouveau painters contributed works to this publication.",
    singleArtist: false,
    aboutSingleArtist: {
      credit: '',
      text: '',
    },
  },
  items: [
    {
      title: 'The Kiss (Le Baiser) (1898)',
      credit: 'Victor Emile Prouvé (French, 1858-1943)',
      image: theKiss,
      alt: '',
      aboutArtist:
        'Victor Prouvé was a French painter, sculptor and engraver of the Art Nouveau École de Nancy.',
    },
    {
      title: 'Portrait (1877)',
      credit: 'Félix Bracquemond (French, 1833-1914)',
      image: null,
      alt: '',
      aboutArtist:
        'Félix Henri Bracquemond was a French painter and etcher. He played a key role in the revival of printmaking, encouraging artists such as Édouard Manet, Edgar Degas and Camille Pissarro to use this technique. Unusually for a prominent artist of this period, he also designed pottery for a number of French factories, in an innovative style that marks the beginning of Japonisme in France.',
    },
    {
      title: 'The Laundress (1897)',
      credit: 'Camille Félix Bellanger (French, 1853 - 1923)',
      image: null,
      alt: '',
      aboutArtist:
        'Camille Félix Bellanger was the brilliant student of Alexandre Cabanel and William Bouguereau at the Ecole des Beaux-Arts (School of Fine Art). While working as a drawing teacher at the Saint-Cyr military academy, he depicted the Breton countryside and its inhabitants in his paintings and produced large canvases in the academic style idealising the reality of rural life.',
    },
  ],
};

export default lestampeModerne;
