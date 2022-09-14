function checkName() {
    var theName = document.querySelector('#name').value;
    theName = theName.toUpperCase().trim();
    
    if(theName == "JESUS" || theName == "JESUS CRISTO")
    {
        
        var nextPage = document.querySelector('#nextPage');
        nextPage.style.display = "inline";
        var hide = document.querySelector('.hide');
        hide.style.display = "none";
        alert("É isso aí ^^");       

        var text = document.querySelector('.texto');
        text.style.display = "none";
        
        
    }
    else if(theName == "LAUDECY")
    {
        alert("Ele é muito importante mas ainda não é o mais importante.")
    }
    else if(theName == "ELIAS")
    {
        alert("Ihhh to longe de ser a pessoa mais importante, tente outra vez.")
    }
    else{
        alert("Ihhh errou! Tente novamente.");
    }
}