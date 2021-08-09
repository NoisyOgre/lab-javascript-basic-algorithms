//iteration 1: Name and input

const hacker1 = "Gregory";
console.log(`the diver is ${hacker1}`);
const hacker2 = "Guilherme";
console.log(`the navigator  is ${hacker2}`);


//Iteration 2: Conditionals 
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if ( hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else if(hacker1.length === hacker2.length ){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}else{
    console.log("Try again!");
}


//Iteration 3: Loops
let hacker1Capitals = hacker1.toUpperCase()
console.log(hacker1Capitals);
let hacker1SeperatedCapitals = "";

for(let i = 0; i < hacker1Capitals.length; i++){
    hacker1SeperatedCapitals = hacker1SeperatedCapitals + hacker1Capitals[i] + " ";
};
console.log(hacker1SeperatedCapitals);

let hacker2Backwards = "";
for(let i = hacker2.length -1; i>=0; i--){
    hacker2Backwards = hacker2Backwards + hacker2[i];
}
console.log(hacker2Backwards);

if(hacker1 < hacker2){
    console.log("The driver's name goes first.");
}else if ( hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.");
}else {
    console.log("What?! You both have the same name?");
}

//Bonus 1.
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vitae sem volutpat ullamcorper. Mauris vitae libero dolor. Nullam sem risus, suscipit quis rhoncus ac, feugiat sed dui. Suspendisse vitae ipsum sollicitudin augue mollis dapibus. Aliquam hendrerit odio mi, eget tempor elit tristique ut. Vestibulum eu accumsan metus. In viverra venenatis interdum. Nunc id leo tempor, iaculis leo vel, pretium diam.Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec in aliquam mi. Etiam magna sapien, pretium non fermentum et, pellentesque ac augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean risus massa, fermentum nec ullamcorper et, fringilla a odio. Quisque sagittis elementum dolor pulvinar semper. Vivamus ligula libero, tristique a dapibus eu, imperdiet ultricies elit. In eget libero eu nunc sollicitudin varius. Fusce semper neque eget leo laoreet, in dictum leo ultricies. Sed sed sem purus.Phasellus malesuada nibh velit. Etiam elementum, nisl ut placerat ullamcorper, orci purus porttitor felis, eget commodo velit tortor ac nulla. Curabitur semper vitae velit eu ultrices. Nam lacinia dapibus dignissim. Ut a aliquam quam. Nullam ut sem nisi. Etiam tempus semper velit, nec vehicula ex posuere vel. Cras leo ex, molestie ac tellus et, feugiat sollicitudin sapien. Integer interdum orci ut nisl congue sollicitudin. Vivamus elementum neque vel eros placerat, vel lobortis ex aliquam. Maecenas tempor lectus vel enim tempor, in luctus erat fermentum.";

let numberOfWords = 0;
for(let i = 0; i< text.length; i++){
    if(text[i] === " "){
        numberOfWords ++
    }else {
        continue;
    };
};
console.log(numberOfWords + 1);

let numberOfEt = 0;
for (let i =0; i < text.length; i ++){
    if(text[i] === "e" && text[i+1] === "t" ){
        numberOfEt ++
    } else {
        continue;
    };
}
console.log(numberOfEt);

//bonus 2.
