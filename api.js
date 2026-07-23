const matchesDiv = document.getElementById("matches");

async function loadMatches() {
    try {
        const response = await fetch("https://api.openligadb.de/getmatchdata/bl1");
        const data = await response.json();

        matchesDiv.innerHTML = "";

        data.forEach(match => {
            matchesDiv.innerHTML += `
                <div class="card">
                    <div class="league">🇩🇪 الدوري الألماني</div>

                    <div class="match">
                        <div class="team">${match.Team1.TeamName}</div>

                        <div class="score">
                            ${match.MatchResults?.length
                                ? `${match.MatchResults[0].PointsTeam1} - ${match.MatchResults[0].PointsTeam2}`
                                : "vs"}
                        </div>

                        <div class="team">${match.Team2.TeamName}</div>
                    </div>

                    <div class="time">
                        ${new Date(match.MatchDateTime).toLocaleString("ar-IQ")}
                    </div>
                </div>
            `;
        });

    } catch (e) {
        matchesDiv.innerHTML = "<p>❌ تعذر تحميل المباريات</p>";
    }
}

loadMatches();
