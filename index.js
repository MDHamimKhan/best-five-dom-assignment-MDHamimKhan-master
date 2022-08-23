
var playerCount = 0;

function playerCountIf(playerName){

  if(playerCount === 5){
    playerCount = 5;
  } else{
    playerCount++;

    const mainLi = document.getElementById('mainLi');

    const clonenode = mainLi.cloneNode(true);
    clonenode.children[0].innerHTML = `${playerCount}.&nbsp;&nbsp;`;
    clonenode.children[1].innerHTML = playerName;
    clonenode.style.display = "block";

    const ul_selected = document.getElementById('ul-selected');
    ul_selected.appendChild(clonenode);
  }
};

document.getElementById('btn1-lionel').addEventListener('click', function() {
  const playerName = 'Lionel Messi';
  playerCountIf(playerName);
})

document.getElementById('btn2-neymar').addEventListener('click', function() {
  const playerName = 'Neymar Jr';
  playerCountIf(playerName);
})

document.getElementById('btn3-kylian').addEventListener('click', function() {
  const playerName = 'Kylian Mbappé';
  playerCountIf(playerName);
})

document.getElementById('btn4-vitor').addEventListener('click', function() {
  const playerName = 'Vítor Machado';
  playerCountIf(playerName);
})

document.getElementById('btn5-sergio').addEventListener('click', function() {
  const playerName = 'Sergio Ramos';
  playerCountIf(playerName);
})

document.getElementById('btn6-renato').addEventListener('click', function() {
  const playerName = 'Renato Sanches';
  playerCountIf(playerName);
})

// calculate Button
let playerExpenses;
document.getElementById('btn-calculate').addEventListener('click', function(){
  const perPlayerString =  document.getElementById('perPlayer').value;
  const perPlayerInt = parseInt(perPlayerString);
  const perPlayerCalculateSpan = document.getElementById('perPlayerCalculateSpan');

  perPlayerCalculateSpan.innerHTML = `${perPlayerInt*playerCount}`;
  playerExpenses = `${perPlayerInt*playerCount}`;
})
// calculate total Button
document.getElementById('btn-calculateTotal').addEventListener('click', function(){
  const manegar =  document.getElementById('manegar').value;
  const coach =  document.getElementById('coach').value;
  const totalExpensesSpan = document.getElementById('total-expensesSpan');

  const manegarInt = parseInt(manegar);
  const coachInt = parseInt(coach);
  const playerExpensesInt = parseInt(playerExpenses);

  totalExpensesSpan.innerHTML = `${playerExpensesInt+manegarInt+coachInt}`;

})

