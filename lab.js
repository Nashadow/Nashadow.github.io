function wrong(id)
{
    document.getElementById(id).style.backgroundColor = 'red';
    document.getElementById(id).innerHTML = "Errou!";
    document.getElementById(id).style.fontSize = "250%";
    document.getElementById(id).style.paddingRight = "1%";
    document.getElementById(id).style.paddingLeft = "1%";
    
}

function right(id)
{
    document.getElementById(id).style.background = "lightgreen";
    document.getElementById(id).innerHTML = "Acertou!";
    document.getElementById(id).style.fontSize = "250%";
    document.getElementById(id).style.paddingRight = "1%";
    document.getElementById(id).style.paddingLeft = "1%";

}

function wrong_box()
{
    document.getElementById('box').style.backgroundColor = "red";
}

function right_box()
{
    document.getElementById('box').style.backgroundColor = "lightgreen";
}
function qsel()
{
    document.querySelector('#submit').style.color = "green";
    var text = document.querySelector('#box').value;
    text = text.replaceAll(/,|\./g,'');
    if (text == "4294967296") //4294967296
    {
        var button = document.querySelector('#pop_button');
        var div = document.querySelector('#pop_up');  
        button.style.backgroundColor = "lightgreen";
        button.innerHTML = "Correct";
        div.style.display = 'inline'; //show        
        
    }
    else
    {
        var button = document.querySelector('#pop_button');
        var div = document.querySelector('#pop_up');
        button.style.backgroundColor = "red";
        button.innerHTML = "Incorrect";
        div.style.display = 'inline';
         //show
    }
}