const btn = document.querySelector(".btn"),
  quote = document.querySelector(".quotes"),
  author = document.querySelector(".author");

const quotes = [
  {
    quot:
      "Программирование сегодня — это гонка разработчиков программ, стремящихся писать программы больше и с лучшей идиотоустойчивостью, и вселенной, которая пытается создавать больших и лучших идиотов. Пока вселенная побеждает.",
    author: "— Rick Cook",
  },
  {
    quot: "Lisp — это не язык, а строительный материал.",
    author: "— Alan Kay",
  },
  {
    quot: "Они больше не делают баги, как Bugs Bunny.",
    author: "— Olav Mjelde.",
  },
  {
    quot:
      "Ходить по воде и разрабатывать программы, следуя спецификации, очень просто… если они заморожены.",
    author: "— Edward V Berard",
  },
  {
    quot:
      "Когда кто-то говорит: «Я хочу язык программирования, который может делать все, что ему скажу», то я даю этому человеку леденец.",
    author: "— Alan J. Perlis.",
  },
  {
    quot: "В хорошем дизайне добавление вещи стоит дешевле, чем сама эта вещь.",
    author: "— Thomas C. Gale",
  },
];

btn.addEventListener("click", rand);

function rand() {
  let rand = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[rand].quot; 
  author.innerHTML = quotes[rand].author;
}
