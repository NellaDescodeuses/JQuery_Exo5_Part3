// $(document).ready(function () {
//     //au focus de mon input,
//     $('input').focusin(function () {
//         //lorque que la touche est activé sur mon body
//         $('body').keydown(function (e) {
//             var windowHeight = $(window).height() -20;
//             var windowWidth = $(window).width() -20;
//             //La propriété event.which renvoie la touche du clavier ou le bouton de la souris enfoncé pour l'événement.
//             //37 38 39 et 40 correspont au key code des touches clavier
//             switch (e.which) {
//                 case 37:    // flèche gauche
//                     //La méthode finish () arrête les animations en cours d'exécution, 
//                     //supprime toutes les animations en file d'attente 
//                     //et termine toutes les animations pour les éléments sélectionnés.
//                     $("#coloredDiv").finish().animate({
//                         // -=10 correspont à 10 espacement de caractères du clavier
//                         left: "-=10"
//                     });
//                     break;
//                 case 38:    // flèche haut
//                     $("#coloredDiv").finish().animate({
//                         top: "-=10"
//                     });
//                     break;
//                 case 39:    // flèche droite
//                     $("#coloredDiv").finish().animate({
//                         left: "+=10"
//                     });
//                     break;
//                 case 40:    // flèche du bas
//                     $("#coloredDiv").finish().animate({
//                         top: "+=10"
//                     });
//                     break;
//             }
//         });
//     });
// });


//2nd méthode , en ajoutant de limite de déplacement pas rapport a la div qui lui sert de container.


// variables de la position initiale de la div
var positionDivX = 0;
var positionDivY = 0;

$(document).ready(function () {
    //au focus de mon input,
    $('input').keydown(function (e) {
        // ces variables correspondent à la largeur et la hauteur de la div #containerDiv moins celles de la div.
        var windowHeight = $('#containerDiv').height() -40;
        var windowWidth = $('#containerDiv').width() -90;

        switch (e.which) {
            case 37:    // flèche gauche
            
                positionDivX = positionDivX -10;
                if (positionDivX > 0) {
                    $('#coloredDiv').css('margin-left', positionDivX);
                 // si la div sort de l'écran à gauche, elle réapparait de l'autre côté de l'écran a droit  
                }else if(positionDivX < 0){
                    positionDivX = windowWidth;// largeur de la fenêtre - 90px de la div 
                    $('#coloredDiv').css('margin-left', positionDivX);
                }
            break;

            case 39: // flèche droite
                positionDivX = positionDivX +10;
                // if (windowWidth > positionDivX){
                    if( positionDivX < windowWidth){
                    $('#coloredDiv').css('margin-left', positionDivX);
                 // si la taille de ma fenêtre est inférieur à la position de ma div   
                // }else if (windowWidth < positionDivX){
                }else if (positionDivX > windowWidth){
                    positionDivX = 0;
                }
            break;

            case 40: //flèche bas
                positionDivY = positionDivY +10;
                //si la div est à l'intérieur de la fenêtre
                if (positionDivY < windowHeight){
                    //la position de ma div est de +10 margin top
                    $('#coloredDiv').css('margin-top', positionDivY);
                    //sinon si la position de la div passe à l'extérieur de la fenêtre
                }else if (positionDivY > windowHeight){
                    //la div repasse en position 0.
                    positionDivY = 0;
                }
            break;

            case 38: //flèche haut
            positionDivY = positionDivY -10;
            if (positionDivY > 0){
                $('#coloredDiv').css('margin-top', positionDivY);
            }else if (positionDivY < 0){
                positionDivY = windowHeight;
            }
            break;
        
            default:
                break;
        };
    });
});
// pour récupéré  la largeur, la hauteur, les positions top et left 
var maDiv = document.getElementById('containerDiv');
console.log(maDiv.clientWidth);
console.log(maDiv.clientHeight);
console.log(maDiv.clientTop);
console.log(maDiv.clientLeft);

