var tittle = document.getElementsByTagName("h1")[0];

tittle.style.color = "blue";

var currentActionWrapper = document.getElementById('currentAction')
var currentAction = 'sem compromisso'

var currentTextWrapper = document.getElementById('text')




function incrementAction() {
    currentAction = '' + currentTextWrapper
    currentActionWrapper.innerHTML = currentAction

    
}