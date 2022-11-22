import './about.styles.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>ReArt</h1>
      <h2>Art - Powered by React</h2>
      <p>
        Hi, my name is{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/codingmarisa"
        >
          Marisa
        </a>
        . This is a personal project in progress. The goal is to implement a
        collection of virtual exhibits of classical art.
      </p>
      <p>
        The site is powered by React and (at this point of progress)
        demonstrates command of the following skills:
      </p>

      <ul>
        <li>React Router DOM</li>
        <li>Galleries created with CSS Flex & Grid</li>
        <li>
          Creation of interactive components such as an image slideshow without
          the use of a library
        </li>
        <li>Deployment on Netlify</li>
      </ul>

      <p>Some of the features pending implementation are:</p>
      <ul>
        <li>
          Complete exhibit collections by adding missing images and author
          credits
        </li>
        <li>Style exhibit pages</li>
        <li>Add footer to all pages</li>
        <li>Prevent duplicate credits in the about the artists section</li>
        <li>Make site responsive for tablet and mobile screens</li>
        <li>Add alt text and descriptive text for images</li>
        <li>Style about page</li>
      </ul>

      <p>
        To review the code for this project, please visit the GitHub repository:{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/codingmarisa/ReArt"
        >
          ReArt
        </a>
      </p>

      <p>
        All of the art featured in this project is of the public domain. This
        projected is inspired by the incredible free collection of many more
        exhibits at{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://artvee.com/">
          Artvee
        </a>
        . Artvee brings art, history, and culture to the homes of many without
        the barrier of an entry fee. Thank you, Artvee!
      </p>
    </div>
  );
};

export default About;
