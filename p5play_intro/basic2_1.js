let nouninput,verbinput,adjinput,adverb,place;
function setup(){
    createCanvas(600,400);
    nouninput = createInput("noun")
    nouninput.position(120,80);
    verbinput = createInput("verb")
    verbinput.position(120,130);
    adjinput = createInput("adjetive")
    adjinput.position(120,180);
    adverb = createInput("adverb")    
    adverb.position(120,230);
    place = createInput("place")    
    place.position(120,280);
    let genstory = createButton("gen story")
    genstory.position(120,330)
    genstory.mouseClicked(updatenoun)
}
function updatenoun(){
    console.log(nouninput.value());
    console.log(verbinput.value());
    console.log(adjinput.value());
    console.log(adverb.value());
    console.log(place.value());
    background(20);
    textSize(20);
    textalign(CENTER,CENTER);
    text(nouninput.value(),300,120);
    text(verbinput.value(),320,120);
    text()
}