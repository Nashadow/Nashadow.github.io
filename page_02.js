function checkName() {
    var theName = document.querySelector('#name').value;
    theName = theName.toUpperCase().trim();
    
    if(theName == "JESUS" || theName == "JESUS CRISTO")
    {
        
        var nextPage = document.querySelector('#nextPage');
        nextPage.style.display = "inline";
        alert(theName);
        var hide = document.querySelector('.hide');
        hide.style.display = "none";

        var text = document.querySelector('.texto');
        text.style.display = "none";
        
    }
    else{
        alert("Errou! Tente novamente.");
    }
}