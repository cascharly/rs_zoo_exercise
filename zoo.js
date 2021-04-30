// Zoo exercise

class Animal {
  speak(phrase) {
    if (phrase === undefined)
      throw new Error("Message Required in .speak method");
    let word = phrase.trim(); // delete whitespaces
    word = word + " "; // add 1 trailing space
    word = word.split(" "); // Split into array
    word = word.join(` ${this.sound} `); // Create message
    word = word.trim(); // delete trailing whitespaces
    console.log(word);
  }
}

class Lion extends Animal {
  sound = "roar";
}

class Tiger extends Animal {
  sound = "grrr";
}

class Parrot extends Animal {
  sound = "prrr";
}

const lion = new Lion();
lion.speak("I'm a Lion");

const tiger = new Tiger();
tiger.speak("Lions suck");

const parrot = new Parrot();
parrot.speak("Hello Tiger and Lion");

// Output
// I'm roar a roar Lion roar
// Lions grrr suck grrr
// Hello prrr Tiger prrr and prrr Lion prrr
