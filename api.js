async function getMatches(){

const url = "https://api.openligadb.de/getmatchdata/bl1/2026";

const response = await fetch(url);

const matches = await response.json();


const box = document.getElementById("matches");


matches.forEach(match => {

box.innerHTML += `

<div class="card">

<div class="league">
🏆 الدوري الألماني
</div>

<div class="match">

<div class="team">
${match.team1.teamName}
</div>

<div>

<div class="score">
${match.matchResults?.[0]?.pointsTeam1 || 0} - 
${match.matchResults?.[0]?.pointsTeam2 || 0}
</div>

<div class="time">
${match.matchDateTime}
</div>

</div>

<div class="team">
${match.team2.teamName}
</div>

</div>

</div>

`;

});

}


getMatches();
