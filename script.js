const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");
const ball = document.querySelector("#ball-png");
const message = document.querySelector("#crystal-message");
// Hide the nav when a link is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.add("hidden");
    setTimeout(() => {
      nav.classList.remove("hidden");
    }, 1000); // 2 seconds delay
  });
});
const messages = [
  "Your energy shines brightest at dawn.",
  "The answers you seek are closer than you think.",
  "A great transformation is on the horizon.",
  "Trust the journey; the destination is worth it.",
  "Your intuition will guide you to success.",
  "Paradise is always where love dwells.",
  "The one you love is closer than you think.",
  "Love is like wildflowers…it is often found in the most unlikely places.",
  "In dreams and in love there are no impossibilities.",
  "Love isn't something you find. Love is something that finds you.",
  "True love is not something that comes everyday, follow your heart, it knows the right answer.",
  "A closed mouth gathers no feet.",
  "He who throws dirt is losing ground.",
  "Borrow money from a pessimist. They don't expect it back.",
  "Life is what happens to you while you are busy making other plans.",
  "Help! I'm being held prisoner in a fortune cookie factory.",
  "Do not be afraid of competition.",
  "An exciting opportunity lies ahead of you.",
  "You love peace.",
  "Get your mind set…confidence will lead you on.",
  "You will always be surrounded by true friends.",
  "Sell your ideas-they have exceptional merit.",
  "You should be able to undertake and complete anything.",
  "You are kind and friendly.",
  "You are wise beyond your years.",
  "Your ability to juggle many tasks will take you far.",
  "A routine task will turn into an enchanting adventure.",
  "Beware of all enterprises that require new clothes.",
  "Be true to your work, your word, and your friend.",
  "Goodness is the only investment that never fails.",
  "A journey of a thousand miles begins with a single step.",
  "Forget injuries; never forget kindnesses.",
  "Respect yourself and others will respect you.",
  "A man cannot be comfortable without his own approval.",
  "Always do right. This will gratify some people and astonish the rest.",
  "It is easier to stay out than to get out.",
  "Sing everyday and chase the mean blues away.",
  "You will receive money from an unexpected source.",
  "Attitude is a little thing that makes a big difference.",
  "Plan for many pleasures ahead.",
  "Experience is the best teacher.",
  "You will be happy with your spouse.",
  "Expect the unexpected.",
  "Stay healthy. Walk a mile.",
  "The family that plays together stays together.",
  "Eat chocolate to have a sweeter life.",
  "Once you make a decision the universe conspires to make it happen.",
  "Make yourself necessary to someone.",
  "The only way to have a friend is to be one.",
  "Nothing great was ever achieved without enthusiasm.",
  "Dance as if no one is watching.",
  "Live this day as if it were your last.",
  "Your life will be happy and peaceful.",
  "Reach for joy and all else will follow.",
  "Move in the direction of your dreams.",
  "Bloom where you are planted.",
  "Appreciate. Appreciate. Appreciate.",
  "Happy News is on its way.",
];
ball.addEventListener("click", () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  message.textContent = randomMessage;
  ball.classList.add("active");
  setTimeout(() => ball.classList.remove("active"), 500);
  setTimeout(() => {
    message.textContent = "Click the ball for a message...";
  }, 5000);
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 70; // Adjust this value for your fixed navbar height
    const topPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  });
});
