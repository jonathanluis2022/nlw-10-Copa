

function createGame(player1 , hour , player2) {
    return `

   <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong> ${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bnadeira do ${player2}">
   </li>
    
    `
}

let delay = -0.3 ;
function createCard(date ,day , games ) {
    delay = delay + 1 // 1º = 0 , 2º = 4 , 3º = 8
    return `
    <div class="card" style"animation-delay: ${delay}s">
     <h2> ${date} <span>${day}</span></h2>

     <ul>
     ${games}
     
     </ul>
   </div>
    
  `
}

document.querySelector("#cards").innerHTML = `



<main id="cards">

${createCard('24/11' , 'Quinta-Feira',createGame('brazil','16:00','serbia'))}
${createCard('28/11' , 'Segunda-Feira', createGame('switzerland','13:00','brazil'))}
${createCard('02/12' , 'Sexta-Feira', createGame('brazil','16:00','cameroon'))}

</main>

`