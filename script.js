const box = document.querySelector(".boxPic");
const faqTitles = document.querySelectorAll(".faq-question");

faqTitles.forEach((faq) => {
  faq.addEventListener("mouseenter", () => {
    box.style.transform = "translateX(-75%)";
  });
});
faqTitles.forEach((faq) => {
  faq.addEventListener("mouseleave", () => {
    box.style.transform = "translateX(-65%)";
  });
});
