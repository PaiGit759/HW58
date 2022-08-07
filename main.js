let button_press = false;

//var input_date;
var number_date;

var result = "";

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var d = new Date();


function button_onclick()
{
 
    input_date = new Date(document.getElementById("fild_for_input").value);
    number_date = input_date.getDay();

    document.getElementById("exsamp").style.background = 'rgb(138, 212, 212)';
    document.getElementById("exsamp").style.color = "black";
    document.getElementById("exsamp").innerText = number_date;


switch (number_date) {

    case  0 : {
    result = "This is a Sunday";
    break;
}
    case  1 : {
        result = "This is a Monday";
        break;
    }
    case  2 : {
        result = "This is a Tuesday";
        break;
    }
    case  3 : {
        result = "This is a Wednesday";
        break;
    }
    case  4 : {
        result = "This is a Thursday";
        break;
    }
    case  5 : {
        result = "This is a Friday";
        break;
    }
    case  6 : {
        result = "This is a Saturday";
        break;
    }

}


document.getElementById("exsamp").innerHTML = "<b>" + result + "</b>";
}


function button1_onclick()
{
    if (!button_press)
    {
    document.getElementById("exsamp").style.border = "solid 5px red";
    button_press = true;
    }
    else 
    {
        document.getElementById("exsamp").style.border = "none";
        button_press = false;
    } 
}
