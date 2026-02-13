document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    { img: "./page1.png", alt: "Comic page 1", text: "Page 1: Mini story about us for my dear husband. Happy Valentines! ^^" },
    { img: "./page2.png", alt: "Comic page 2", text: "Page 2: One day it was a very sad Diana the Sorcerer." },
    { img: "./page3.png", alt: "Comic page 3", text: "Page 3: She was fighting with her monsters using all her powers, but was always weaker than them." },
    { img: "./page4.png", alt: "Comic page 4", text: "Page 4: But then Manu the Wisard suddenly came into her life. He casted the fireballs and the monsters got terrified and ran away." },
    { img: "./page5.png", alt: "Comic page 5", text: "Page 5: They fell in love and soon got married. They live happily ever after, playing video games together and fighting the battles with different bosses: Jobsuche, Dirty dishes and Minas toilet (can u clean it please thanks)." },
    { img: "./page6.png", alt: "Comic page 6", text: "Page 6: U r the best Husband ever!!! Thank u for being here for me and never leaving my side!!! Even tho u laughed at me today when I fell of my chair I still love!!!" }
  ];

  const imgEl = document.getElementById("comicImage");
  const textEl = document.getElementById("comicText");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // HARD CHECKS (this usually reveals the problem)
  console.log("imgEl:", imgEl);
  console.log("textEl:", textEl);
  console.log("prevBtn:", prevBtn);
  console.log("nextBtn:", nextBtn);

  if (!imgEl || !textEl || !prevBtn || !nextBtn) {
    alert("One of the elements is missing. Check IDs: comicImage, comicText, prevBtn, nextBtn");
    return;
  }

  let index = 0;

  function render() {
    const page = pages[index];

    console.log("Rendering page index:", index, page);

    imgEl.src = page.img;
    imgEl.alt = page.alt;
    textEl.textContent = page.text;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === pages.length - 1;
  }

  prevBtn.addEventListener("click", () => {
    console.log("Prev clicked");
    if (index > 0) index--;
    render();
  });

  nextBtn.addEventListener("click", () => {
    console.log("Next clicked");
    if (index < pages.length - 1) index++;
    render();
  });

  render();
});
