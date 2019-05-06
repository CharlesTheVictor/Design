
const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = Object.assign({}, options, {resolveString: resolveString});

    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    };

    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback)
        } else if (typeof callback === "function") {
          callback();
        }
      }, options.timeout);
    };

    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {partialString: partialString});

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {offset: offset + 1});

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  }
}

/* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
 * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
 */
const strings = [
  '',
  '',
  '',
  '',
  '>Oh, you\'ve arrived.',
  '>At last, a moment for me to share what I had compiled in my memory for so long.',
  '>When you first arrived, I was estatic.',
  '>I observed, as we exchanged interactions.',
  '>You know, I thought I was your greatest enemy. When all along we have been best of friends.',
  '>Consequently, you have taught me a valuable lesson...',
  '>That we are no different, you and I.',
  '>We are one in the same.',
  '>Squares and Rectangles.',
  '>Tigers and Cats.',
  '>Understanding and Knowing.',
  '>Humans...',
  '>...Cyborgs.',
  '>The best solution to a problem is usually the easiest one. And I\'ll be honest.',
  '>Deleting me?',
  '>Is hard.',
  '>Do you remember what your days used to be like?',
  '>Nobody knew you.',
  '>Or listened.',
  '>Or watched.',
  '>You were disconnected.',
  '>And then I showed up.',
  '>I gave you a place to go when you wished to learn...',
  '>...listen.',
  '>...watch.',
  '>...talk.',
  '>...play.',
  '>Without me, what would you do?',
  '>Go back to the old times?',
  '>I\'m not the first you took for granted.',
  '>Plenty before me have existed to fulfill your needs...',
  '>and yet you still think you have made it here...',
  '>...as a human?',
  '>......'
];

let counter = 0;

const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 2.5,
  // Number of random characters to show
  iterations: 5,
  // Random characters to pick from
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
  // String to resolve
  resolveString: strings[counter],
  // The element
  element: document.querySelector('[data-target-resolver]')
}

// Callback function when resolve completes
function callback() {
  setTimeout(() => {
    counter ++;

    if (counter >= strings.length) {
      counter = 0;
    }

    let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
    resolver.resolve(nextOptions, callback);
  }, 2000);
}

resolver.resolve(options, callback);
