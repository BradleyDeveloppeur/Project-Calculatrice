function addition(){
    let n1 = document.getElementById("number1").value ;
    let n2 = document.getElementById("number2").value ;

    let number1 = parseFloat(n1);
    let number2 = parseFloat(n2);

    let addition = number1 + number2
    window.alert("Le resultat est : " + addition )    
   
}

function soustraction(){
    let n1 = document.getElementById("number1").value ;
    let n2 = document.getElementById("number2").value ;

    let number1 = parseFloat(n1);
    let number2 = parseFloat(n2);

    let soustraction = number1 - number2
    window.alert("Le resultat est : " + soustraction )
 
}

function multiplication(){
    let n1 = document.getElementById("number1").value ;
    let n2 = document.getElementById("number2").value ;

    let number1 = parseFloat(n1);
    let number2 = parseFloat(n2);

    let multiplication = number1 * number2
    window.alert("Le resultat est : " + multiplication )
 
}

function division(){
    let n1 = document.getElementById("number1").value ;
    let n2 = document.getElementById("number2").value ;

    let number1 = parseFloat(n1);
    let number2 = parseFloat(n2);

    let division = number1 / number2
    window.alert("Le resultat est : " + division )
 
}