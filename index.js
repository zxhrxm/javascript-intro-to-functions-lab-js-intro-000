function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.whisper())
}

function sayHiToGrandma(string) {
  switch(string) {
      case string === whisper(string) || log.whisper(string):
        return "I can't hear you!"
        break;
      case string === shout(string) || log.shout(string):
        return "YES INDEED!"
        break;
      case string === "I love you, Grandma.":
        return "Ilove you, too."
        break;
  }
}
