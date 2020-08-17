const facts = ["A soviet prevented nuclear war and was fired for it.", "There are Marvel Cinematic Universe ... comics.", "Lego's the biggest tires manufacturer.", "The Big Bang wasn't a bang, I'm sorry.", "Beethoven disliked his Moonlight Sonata.", "French painter Claude Monet was able to see ultraviolets.", "Metropolis is a german movie about fascism released a few year before... that fascism took the power in Germany.", "We all are Charlemagne's children. Maths said it.", "The longest palindrome is saippuakivikauppias (soapstone vendor in Finnish)."];
var usedFacts = new SizedArray(3);

function rdmFact() {
    //select a random, not recently used fact
    let selectFact;
    do {
        selectFact = facts[Math.floor(Math.random() * facts.length)];
    } while(usedFacts.includes(selectFact));
    usedFacts.addFirst(selectFact);
    
    //Montrer la ligne du fact
    $("#ul_fact").show();
    
    //Remplir la ligne de texte
    $("#li_fact").text(selectFact);
}

function setEvents() {
    $("img").hover(
    function() {
        $(this).parent().children("span").show();
    },
    function() {
        $(this).parent().children("span").hide();
    });
}