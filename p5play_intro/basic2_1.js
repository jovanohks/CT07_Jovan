let nouninput,verbinput,adjinput,adverb,place;
let genstory;
function setup(){
    createCanvas(600,600);
    nouninput = createInput("noun")
    textSize(12)
    nouninput.position(120,80);
    verbinput = createInput("verb")
    verbinput.position(120,130);
    adjinput = createInput("adjetive")
    adjinput.position(120,180);
    adverb = createInput("adverb")    
    adverb.position(120,230);
    place = createInput("place")    
    place.position(120,280);
    genstory = createButton("gen story")
    genstory.position(120,330)
    genstory.mouseClicked(updatenoun)
}
function draw(){
    text('Enter a noun',10,80);
    text('Enter a verb',10,130);
    text('Enter a adjetive',10,180);
    text('Enter a adverb',10,230);
    text('Enter a place',10,280);
}
function updatenoun(){
    console.log(nouninput.value());
    console.log(verbinput.value());
    console.log(adjinput.value());
    console.log(adverb.value());
    console.log(place.value());
    background("white");
    textSize(20);
    textAlign(CENTER,CENTER);
    text(nouninput.value(),120,360);
    text(verbinput.value(),120,380);
    text(adjinput.value(),120,400);
    text(adverb.value(),120,420);
    text(place.value(),120,440)
}