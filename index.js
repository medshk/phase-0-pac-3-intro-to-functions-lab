const shout = (arg) => arg.toUpperCase();

const whisper = (arg) => arg.toLowerCase();

const logShout = (arg) => console.log(shout(arg));

const logWhisper = (arg) => console.log(whisper(arg));

const sayHiToHeadphonedRoommate = (arg) => {
  if (arg === whisper(arg)) {
    return "I can't hear you!";
  } else if (arg === shout(arg)) {
    return "YES INDEED!";
  } else if (arg === "Let's have dinner together!") {
    return "I would love to!";
  } else return "none";
};
