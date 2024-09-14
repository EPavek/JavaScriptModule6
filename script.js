function myDogConst (myName, mySound, myBreed, myShow, canTalk) {
  this.name = myName;
  this.sound = mySound;
  this.breed = myBreed;
  this.show = myShow;
  if (canTalk === true) {
    this.talk = "I talk in my show.";
  }
  else {
    this.talk = "I don't talk in my show.";
  }
  return(this);
}

const spike = new myDogConst("Spike", "I am being protective of my owner, Tommy Pickles", "Siberian Tiger Hound", "Rugrats", false);
const beethoven = new myDogConst("Beethoven", "I'm having fun", "St. Bernard", "Beethoven", true);
const milo = new myDogConst("Milo", "I'm trying to convey something", "Jack Russell Terrier", "The Mask: Animated Series", true);

function myGreeting(name) {
  let dog = name;
  return document.write('My name is ' + dog.name + ', and I am a loyal dog in the cartoon show, ' + dog.show + '. I am a ' + dog.breed + ', and when I bark, ' + dog.sound + '. ' + dog.talk + '</br></br>');
}

function information(name) {
  let text = "";
  let keyname;
  let contents;
  for (let key in name) {
    keyname = key;
//    contents = value;
    document.write(keyname + ": " + name[key] + "<br>");
  }
  document.write("<br>");
}

function getSelection() {
  while (true) {
    var name = prompt("Please type the name of the dog you would like to meet: spike, beethoven, or milo").toLowerCase();
    if (name === "spike") {
      myGreeting(spike);
      information(spike);
      return;
    }
    else if (name === "beethoven") {
      myGreeting(beethoven);
      information(beethoven);
      return;
    }
    if (name === "milo") {
      myGreeting(milo);
      information(milo);
      return;
    }
    else {
      alert("No dog of that name in database. Please try again.");
    }
  }
};

getSelection();
