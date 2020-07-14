document.addEventListener('DOMContentLoaded', (event) => {
const player_container = document.querySelector('.player-container');
const player_div = document.createElement('div')


	/***** Deliverable 1 *****/
	const header = document.querySelector('h1#header');
	console.log("Here's your header:", header)


	/***** Deliverable 2 ***** change color to rerd */ 

	header.style.color = "red";


	/***** Deliverable 3 *****/

	// const player_name = document.querySelector('.player-container p');
	// player_name.innerHTML = PLAYERS[1].name;

	// const player_nickname = document.querySelector('.player-container em');
	// player_nickname.innerHTML = PLAYERS[1].nickname;

	// const player_image = document.querySelector('.player-container img');
	// player_image.innerHTML = PLAYERS[1].photo;

	function playerLoop(player){
			player_div.className = 'player'
			player_div.dataset.number = player.number
			player_div.innerHTML = `<h3>
    	${player.name} (<em>${player.nickname}</em>)
  		</h3>
 			<img src="${player.photo}" alt="${player.name}">`
			player_container.append(player_div)
	}

	PLAYERS.forEach(player => {
		console.log(player)
		playerLoop(player)});
		console.log(PLAYERS)

});
