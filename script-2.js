const petsModule = (function () {
  const _data = [
    {
      image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
      name: "Sam",
      type: "Golden Retriever/St. Bernard Mix",
      sound: "bark",
      soundText: "Bark - type b",
    },
    {
      image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
      name: "Mellie",
      type: "Domestic Shorthair",
      sound: "meow",
      soundText: "Meow - type m",
    },
  ];
  const $tbodyEl = document.querySelector("tbody");
  const $buttons = document.querySelectorAll("button");

  const getButtons = function () {
    return document.querySelectorAll("button");
  };
  const createPetElement = function (pet) {
    return (
      "<tr><td><img class='pet-image' src='" +
      pet.image +
      "' /></td><td>" +
      pet.name +
      "</td><td>" +
      pet.type +
      "</td><td><button data-sound='" +
      pet.sound +
      "'>" +
      pet.soundText +
      "</button></td></tr>"
    );
  };

  const addToTable = function (content) {
    $tbodyEl.innerHTML += content;
  };

  const putPetsInHtml = function () {
    for (let i = 0; i < _data.length; i++) {
      addToTable(createPetElement(_data[i]));
    }
  };

  const bindEvents = function () {
    const buttons = getButtons();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        const soundId = this.dataset.sound;
        const soundElement = document.getElementById(soundId);
        if (soundElement) {
          soundElement.play();
        }
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
        if (e.key == "b") {
          sounds[0].play();
        } else if (e.key == "m") {
          sounds[1].play();
        }
      });
    }
  };
  const getRows = function () {
    return document.querySelectorAll("tr");
  };
  
  const changeRowBg = function () {
    const rows = getRows();
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener(
        "click",
        function (e) {
            rows[i].style.background ="#a8d9ec79";
   

        }
      );
    }
  };

  const init = function () {
    putPetsInHtml();
    bindEvents();
    keyEvents();
    getRows();
    changeRowBg();
  };

  return {
    init: init,
  };
})();
