var player = 1 // Déclare une variable globale pour pouvoir identifier les joueurs 

function newgame()
{
    //function execute avec bouton New game
    // On fait apparaitre les boutons Roll Dice & Hold
    document.getElementById('btn_roll_dice').hidden = false
    document.getElementById('btn_hold').hidden = false
    
    //Mise à 0 des scores
    document.getElementById('ROUND_Player1').innerHTML  = 0
    document.getElementById('ROUND_Player2').innerHTML  = 0
    document.getElementById('GLOBAL_Score_Player1').innerHTML=0
    document.getElementById('GLOBAL_Score_Player2').innerHTML=0

    // On fait apparaitre le jeton du player one
    document.getElementById('jeton1').hidden=false
    document.getElementById('jeton2').hidden=true
    
    // Player 1 initialisation
    player = 1
}

function rolldice_click()
    //function execute avec bouton roll dice
    //pour lancer le de et verifier si il y a un gagnant ou un perdant 
{
    let valeur_de 
    valeur_de = getRandomInt(1,7)


    document.getElementById('De').innerHTML = '<i class="bi bi-dice-'+valeur_de+'">'
    

    //si le de = 1 on change de joueur et rien n'est ajoute dans le hold
    if (valeur_de === 1) {
        valeur_de = 0
        player_change()
    } 

    //ici on va verifier pour les 2 joueurs que on ne depasse pas 100 ou que un des joueurs n' a pas gagne avec une somme totale de 100
    let somme = 0
    if (player === 1) {
        somme = parseInt(document.getElementById('ROUND_Player1').innerHTML) + valeur_de
        document.getElementById('ROUND_Player1').innerHTML = somme
        if (somme + parseInt(document.getElementById('GLOBAL_Score_Player1').innerHTML) > 100) {
            win_or_lose('player '+player,' lose')    
        }
        if (somme + parseInt(document.getElementById('GLOBAL_Score_Player1').innerHTML) == 100) {
            win_or_lose('player '+player, ' win')    
        }
    } else {
        somme = parseInt(document.getElementById('ROUND_Player2').innerHTML) + valeur_de
        document.getElementById('ROUND_Player2').innerHTML = somme
        if (somme + parseInt(document.getElementById('GLOBAL_Score_Player2').innerHTML) > 100) {
            win_or_lose('player '+' lose')    
        }
        if (somme + parseInt(document.getElementById('GLOBAL_Score_Player2').innerHTML) == 100) {
            win_or_lose('player '+' win')    
        }
    }

    if (somme > 100) {
        win_or_lose('player '+ 'lose')
    }   
}

function hold_click()
    //function execute avec bouton hold 
{
    if (player === 1) {
        document.getElementById('GLOBAL_Score_Player1').innerHTML = parseInt(document.getElementById('GLOBAL_Score_Player1').innerHTML) + parseInt(document.getElementById('ROUND_Player1').innerHTML)
        player_change()
    } else {
        document.getElementById('GLOBAL_Score_Player2').innerHTML = parseInt(document.getElementById('GLOBAL_Score_Player2').innerHTML) + parseInt(document.getElementById('ROUND_Player2').innerHTML)
        player_change()
    }
}

function player_change ()
{
    if (player === 1) {
        player = 2
        document.getElementById('jeton1').hidden=true
        document.getElementById('jeton2').hidden=false
    } else {
        player = 1
        document.getElementById('jeton1').hidden=false
        document.getElementById('jeton2').hidden=true
    }
    document.getElementById('ROUND_Player1').innerHTML = 0
    document.getElementById('ROUND_Player2').innerHTML = 0 
}

function win_or_lose(player,win_or_lose)
{
    alert(player + win_or_lose) 
    document.getElementById('btn_roll_dice').hidden = true
    document.getElementById('btn_hold').hidden = true  
}


function getRandomInt(min, max) {
    //function qui calcule un nombre aleatoire compris entre 1 et 6
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

