const drumKit = (function () {
  const _data = [
    {
      name: "Boom",
      sound: "boom",
    },
    {
      name: "Clap",
      sound: "clap",
    },
    {
      name: "Hihat",
      sound: "hihat",
    },
    {
      name: "Kick",
      sound: "kick",
    },
    {
      name: "Open Hat",
      sound: "openhat",
    },
    {
      name: "Ride",
      sound: "ride",
    },
    {
      name: "Snare",
      sound: "snare",
    },
    {
      name: "Tink",
      sound: "tink",
    },
    {
      name: "Tom",
      sound: "tom",
    },
  ];

  const getBoxes = function () {
    return document.querySelectorAll(".boxes");
  };

  const clickPlay = function () {
    const boxes = getBoxes();
    const sounds = getSounds();

  //   for (let i = 0; i < boxes.length; i++) {
  //     boxes[i].addEventListener("click", function (e) {
  //       const soundElement = document.querySelectorAll(".boxes");
  //       let clickSounds="";
  //         // clickSounds.push(soundElement[i].id);
  //         clickSounds+=  soundElement.id;
  //       console.log(soundElement)
  //       console.log(clickSounds)

  //       if (soundElement) {
  //         soundElement.play();
  //       }
  //     });
  //   }
  // };
  
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function (e) {
      const soundId = _data.name;
      const soundElement = document.getElementById(soundId);    
      if (soundElement) {
        soundElement.play();
      }
      console.log(soundId)
    });
  }
};

  const getSounds = function () {
    return document.querySelectorAll("audio");
  };

  const keyEvents = function () {
    const sounds = getSounds();
    for (let i = 0; i < sounds.length; i++) {
      document.addEventListener("keydown", function (e) {
        if (e.key == "a") {
          sounds[0].play();
        } else if (e.key == "s") {
          sounds[1].play();
        } else if (e.key == "d") {
          sounds[2].play();
        } else if (e.key == "f") {
          sounds[3].play();
        } else if (e.key == "g") {
          sounds[4].play();
        } else if (e.key == "h") {
          sounds[5].play();
        } else if (e.key == "j") {
          sounds[6].play();
        } else if (e.key == "k") {
          sounds[7].play();
        } else if (e.key == "l") {
          sounds[8].play();
        }
      });
    }
  };
  const init = function () {
    getSounds();
    keyEvents();
    clickPlay();
  };

  init();
})();
