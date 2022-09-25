import jackAndTheBeanstalk from '../assets/collections/fairy-tale-illustrations/jack-and-the-beanstalk-475x600.jpg';
import cinderella from '../assets/collections/fairy-tale-illustrations/cinderella-473x600.jpg';
import pussInBoots from '../assets/collections/fairy-tale-illustrations/puss-in-boots-476x600.jpg';
import threeLittlePigs from '../assets/collections/fairy-tale-illustrations/the-three-little-pigs-475x600.jpg';
import tomThumb from '../assets/collections/fairy-tale-illustrations/tom-thumb-476x600.jpg';

const collectionFairyTale = {
  title: 'Fairy Tale Illustrations',
  exhibitUrl: 'fairy-tale-illustrations',
  description:
    'A Series of posters created as part of the Home and School Series by Elizabeth Tyler for the National Child Welfare Association, Inc.',
  singleArtist: true,
  aboutSingleArtist: {
    credit: 'Elizabeth Tyler Wolcott (American, 1892-1952)',
    text: 'Elizabeth Tyler Wolcott was known for her fanciful illustrations, featured in "Flags of the United Nations," among other publications. She also painted a mural for the Brooklyn Botanical Garden. Tyler was married to Wallace Wolcott, architect with the renowned firm McKim, Mead & White',
  },
  items: [
    {
      title: 'Jack And the Bean-Stalk (1918)',
      credit: 'Elizabeth Tyler Wolcott (American, 1892-1952)',
      image: jackAndTheBeanstalk,
      alt: 'Illustration for Jack And the Bean-Stalk',
    },
    {
      title: 'Cinderella (1918)',
      credit: 'Elizabeth Tyler Wolcott (American, 1892-1952)',
      image: cinderella,
      alt: 'Illustration for Cinderella',
    },
    {
      title: 'The Three Little Pigs (1920)',
      credit: 'Elizabeth Tyler Wolcott (American, 1892-1952)',
      image: threeLittlePigs,
      alt: 'Illustration for The Three Little Pigs',
    },
    {
      title: 'Puss In Boots (1921)',
      credit: 'Elizabeth Tyler Wolcott (American, 1892-1952)',
      image: pussInBoots,
      alt: 'Illustration for Puss In Boots',
    },
    {
      title: 'Tom Thumb (1920)',
      credit: 'Elizabeth Tyler Wolcott (American, 1892-1952)',
      image: tomThumb,
      alt: 'Illustration for Tom Thumb',
    },
  ],
};

export default collectionFairyTale;
