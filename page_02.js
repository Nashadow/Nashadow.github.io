function checkName() {
    var theName = document.querySelector('#name').value;
    theName = theName.toUpperCase();
    
    if(theName == "JESUS")
    {
        
        var nextPage = document.querySelector('#nextPage');
        nextPage.style.display = "inline";
        alert(theName);
        var hide = document.querySelector('.hide').style.display = "none";
        hide.style.display = "none";
        
    }
    else{
        alert("não foi");
    }
}