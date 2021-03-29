var player = 1 // Déclare une variable globale pour pouvoir identifier les joueurs 


window.onload = init()

function init()
{
    //On désactive les boutons à l'ouverture du document

}

function newgame()
{
    // On fait apparaitre les boutons Roll Dice & Hold
    document.getElementById('btn_roll_dice').hidden = false
    document.getElementById('btn_hold').hidden = false
    
    //On active les boutons Roll Dice & Hold
    document.getElementById('btn_roll_dice').disabled = false
    document.getElementById('btn_hold').disabled = false

    //Mise à 0 des scores
    document.getElementById('ROUND_Player1').innerHTML  = 0
    document.getElementById('ROUND_Player2').innerHTML  = 0
    document.getElementById('GLOBAL_Score_Player1').innerHTML=0
    document.getElementById('GLOBAL_Score_Player2').innerHTML=0

    // On fait apparaitre le jeton du player one
    document.getElementById('jeton1').hidden=false
    document.getElementById('jeton2').hidden=true
}

function rolldice()
{
    let valeur_de 
    valeur_de = getRandomInt(1,7)

    //alert (valeur_de)

    if (valeur_de === 1) {
        document.getElementById('ROUND_Player1').innerHTML = 0 
        valeur_de = 0
        player_change()
    } 

    if (player === 1) {
        document.getElementById('ROUND_Player1').innerHTML = parseInt(document.getElementById('ROUND_Player1').innerHTML) + valeur_de
        if (parseInt(document.getElementById('ROUND_Player1').innerHTML)>100){
            alert("Player 1 à perdu")   
           
        }
    } else {
        document.getElementById('ROUND_Player2').innerHTML = parseInt(document.getElementById('ROUND_Player2').innerHTML) + valeur_de
        if (parseInt(document.getElementById('ROUND_Player2').innerHTML)>100){
            alert("Player 2 à perdu")
            
        }
    }
    
}


function player_change () 
{
    //alert(player)
    if (player = 1) {
        player = 2
        document.getElementById('jeton1').hidden=true
        document.getElementById('jeton2').hidden=false
    } else {
        player = 1
        document.getElementById('jeton1').hidden=false
        document.getElementById('jeton2').hidden=true
    }
}





function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }