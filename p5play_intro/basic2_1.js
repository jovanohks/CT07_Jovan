/*let nouninput,verbinput,adjinput,adverb,place;
let genstory;
let storytemplates,storytext;
let template;
function setup(){
    createCanvas(600,600);
    nouninput = createInput("noun")
    textSize(12)
    nouninput.position(200,80);
    verbinput = createInput("verb")
    verbinput.position(200,130);
    adjinput = createInput("adjetive")
    adjinput.position(200,180);
    adverb = createInput("adverb")    
    adverb.position(200,230);
    place = createInput("place")    
    place.position(200,280);
    genstory = createButton("gen story")
    genstory.position(200,330)
    genstory.mouseClicked(updatenoun);
    storytemplates = {
        "A  {adjetive} {noun} decided to {verb} {adv}  at {place}":
        "one day, A {adjetive} {noun} wanted to {verb} {adv} at {place}"     
    };
    template = random(storytemplates);
    /*storytext = templates.replace('{noun}',"dog")
                         .replace("{adjetive}","happy")
                         .replace("{verb}","jump")
                         .replace("{adv}","quickly")
                         .replace("{place}","ang mo kio");
*/
/*function draw(){
    text('Enter a noun',50,80);
    text('Enter a verb',50,130);
    text('Enter a adjetive',50,180);
    text('Enter a adverb',50,230);
    text('Enter a place',50,280);
}
function updatenoun(){
    console.log(nouninput.value());
    console.log(verbinput.value());
    console.log(adjinput.value());
    console.log(adverb.value());
    console.log(place.value());
    console.log(storytext);
    storytext = template.replace("{noun}",nouninput.value()).replace("{verb}",verbinput.value()).replace("{adjetive}",adjinput.value()).replace("{adv}",adverb.value()).replace("{place}",place.value())                    
    background("220");
    textSize(12);
    textAlign(CENTER,CENTER);
    
 /*   text(verbinput.value(),120,380);
    text(adjinput.value(),120,400);
    text(adverb.value(),120,420);
    text(place.value(),120,440)
   */ 
//}

let inputbox;
let submitButton;
let inputtext;
let words;
let selectedWord;
let displayHint;
let attempt;

function setup(){
    createCanvas(600,400);
    textsize(24);
    textAlign(CENTER,CENTER);
    inputbox = createInput();
    inputbox.size(150,30);
    inputbox.style("font-size","20px");
    inputbox.position(width /2 -80 , height /2 - 100);
    attempt = 0;
    displayHint = selectedWord[0].toUpperCase()+" "+ "_".repeat(selectedWord.length - 1);
    words =["hello","cat","moon","plane"];
    selectedWord = random(words);
    submitButton = createButton('guess');
    submitButton.position(width /2 - 100, height /2 - 100);
    submitButton.size(150,30);
    submitButton.style("font-size",'10px');
    submitButton.mousePresed(checkGuess);

}
function draw(){
    background(220);
    textSize(24);
    textAlign(CENTER,CENTER);
    text("guess the hidden word",150,20)
    text("Attempts: " +attempt,150,55 )
    text("Hint: "+ displayHint,150,85);
    //submitButton.mousePresed(checkGuess);
    //text(inputbox.value(),150,50);
    if (attempts <10){
        text("Game Over! ")
    }
}
function checkGuess(){
    
    let guess = inputbox.value().toLowerCase();
    attempts++
    console.log(getCorrectLetters(guess,selectedWord));
    if (guess = hiddenword){
        message = "correct! the wprd was "+hiddenword.toUpperCase +"!"

    }else if (guess.length >6){
        message = "too many letters"
    }else{
        let corectLetter = getCorrectLetters(guess,selectedWord);
        message = "Wrong! Correct Letters: "+correctletter;
    }
}
function getCorrectLetters(guess,word){
    let correctletter ="";
    for(let i = 0; i<word.length; i++){
        if (word.include(guess[i])&& !getCorrectLetters.includes(guess[i].toUpperCase)){
            correctletter +=guess[i].toUpperCase()+ " ";

        }
    }
    return correctletter;
}