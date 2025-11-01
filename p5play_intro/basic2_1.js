let nouninput,verbinput,adjinput,adverb,place;
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
*/}
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
}