// If u find yourself here. This is the code graveyard,
// all the code that I don't want to use or is just broken will go here.
// This works so that if I want to use this code in the future I can just pull it from here.
//    /(-_-)/ -- I'm working on ittt


const hoverImage = document.getElementById('frame'); // hover card logic
const targetText = document.getElementById('frametext');
const originalText = targetText.textContent;


hoverImage.addEventListener('mouseenter', () => { // change elements
  targetText.textContent = "View";
  targetText.style.color = "#00FFF0";
  targetText.style.border = "10px solid #00FFFF";
});

hoverImage.addEventListener('mouseleave', () => {
  targetText.textContent = originalText;
  targetText.style.color = "#FFFF00";
  targetText.style.borderColor = "#FFFF00";
  targetText.style.border = "5px solid #FFFF00";
});

targetText.addEventListener('mouseenter', () => {
  targetText.textContent = "View";
  targetText.style.color = "#00FFF0";

});

targetText.addEventListener('mouseleave', () => {
  targetText.textContent = originalText;
  targetText.style.color = "#FFFF00";
  hoverImage.style.borderColor = "#FFFF00";
  hoverImage.style.border = "5px solid #FFFF00";
  targetText.style.borderColor = "#FFFF00";
  targetText.style.border = "5px solid #FFFF00";
});



hoverImage.addEventListener('mouseenter', () => { // image style  (vvv)
  targetText.textContent = "View";
  targetText.style.color = "#00FFF0";
  targetText.style.border = "10px solid #00FFFF";

});

hoverImage.addEventListener('mouseleave', () => {
  targetText.textContent = originalText;
  targetText.style.color = "#FFFF00";
  targetText.style.borderColor = "#FFFF00";
  targetText.style.border = "5px solid #FFFF00";
});

targetText.addEventListener('mouseenter', () => { // text style  (vvv)
  targetText.textContent = "View";
  targetText.style.color = "#00FFF0";
  targetText.style.border = "10px solid #00FFFF";
});

targetText.addEventListener('mouseleave', () => {
  targetText.textContent = originalText;
  targetText.style.color = "#FFFF00";
  targetText.style.border = "5px solid #FFFF00";
});

