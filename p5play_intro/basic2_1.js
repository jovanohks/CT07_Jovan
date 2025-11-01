let nouninput,verbinput,adjinput,adverb,place;
let genstory;
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
    genstory.mouseClicked(updatenoun)
}
function draw(){
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
    background("white");
    textSize(12);
    textAlign(CENTER,CENTER);
    text(nouninput.value(),120,360);
    text(verbinput.value(),120,380);
    text(adjinput.value(),120,400);
    text(adverb.value(),120,420);
    text(place.value(),120,440)
}