const matchesDiv = document.getElementById("matches");

async function loadMatches() {

    const response = await fetch(
        "https://goaal-live-api.joud07511.workers.dev"
    );

    const data = await response.json();

    matchesDiv.innerHTML = "";

    data.forEach(match => {

        matchesDiv.innerHTML += `

        <div class="card">

            <div class="league">
            ⚽ الدوري الألماني
            </div>

            <div class="match">

                <div class="team">
                ${match.Team1.TeamName}
                </div>

                <div class="score">
                ${match.MatchResults?.[0]
                ? match.MatchResults[0].PointsTeam1 + " - " + match.MatchResults[0].PointsTeam2
                : "vs"}
                </div>

                <div class="team">
                ${match.Team2.TeamName}
                </div>

            </div>

        </div>

        `;

    });

}

loadMatches();

loadMatches();
