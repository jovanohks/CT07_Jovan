function setup(){
    createCanvas(600,400);
    let nouninput = createInput("noun")
    nouninput.position(120,80);
    let verbinput = createInput("noun")
    verbinput.position(120,130);
    let adjinput = createInput("noun")
    adjinput.position(120,180);
    let adverb = createInput("adverb")    
    adverb.position(120,230);
    let place = createInput("adverb")    
    place.position(120,280);
    let genstory = createButton("gen story")
    genstory.position(120,330)
    genstory.mouseClicked(update)
}
function updatenoun(){
    console.log(.value());
}