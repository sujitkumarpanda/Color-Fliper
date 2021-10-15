const colors = ["Yellow","Blue","Red",
"Green","Black","Brown", "Azure",
    "Ivory","Teal","Silver",
    "Purple","Navy blue",
    "Pea green","Gray","Orange","Maroon",
    "Charcoal",    "Aquamarine", 
       "Coral",    "Fuchsia",    "Wheat", 
          "Lime",    "Crimson",    "Khaki",  
            "Hot pink",    "Magenta",    "Olden", 
               "Plum",    "Olive",    "Cyan"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click', function(){
const randomNumber = getRandomNumber();
console.log(randomNumber);
document.body.style.backgroundColor =colors[randomNumber];
color.textContent = colors[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()* colors.length);
}