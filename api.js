const matchesDiv = document.getElementById("matches");

async function loadMatches() {

    try {

        const response = await fetch(
            "https://goaal-live-api.joud07511.workers.dev"
        );

        const data = await response.json();

        matchesDiv.innerHTML = "";

        data.forEach(match => {

            const score = match.MatchResults?.[0]
                ? `${match.MatchResults[0].PointsTeam1} - ${match.MatchResults[0].PointsTeam2}`
                : "-";

            matchesDiv.innerHTML += `

            <div class="card">

                <div class="league">
                    🏆 كرة القدم
                </div>

                <div class="match">

                    <div class="team">
                        ${match.Team1.TeamName}
                    </div>

                    <div class="score">
                        ${score}
                    </div>

                    <div class="team">
                        ${match.Team2.TeamName}
                    </div>

                </div>

                <div class="time">
                    ${match.MatchDateTime 
                    ? new Date(match.MatchDateTime).toLocaleDateString("ar-IQ")
                    : ""}
                </div>

            </div>

            `;

        });

    } catch(error){

        matchesDiv.innerHTML = `
        <p>❌ تعذر تحميل النتائج</p>
        `;

    }

}


loadMatches();


// الأخبار الرياضية

async function loadNews(){

    const newsDiv = document.getElementById("news");

    try {

        const response = await fetch(
            "https://goaal-live-api.joud07511.workers.dev"
        );

        const data = await response.json();

        newsDiv.innerHTML = "";

        if(data.articles){

            data.articles.slice(0,10).forEach(article => {

                newsDiv.innerHTML += `

                <div class="card">

                    <h3>${article.title}</h3>

                    <p>
                    ${article.description || ""}
                    </p>

                    <small>
                    📰 ${article.source.name}
                    </small>

                </div>

                `;

            });

        }

    } catch(error){

        newsDiv.innerHTML = `
        <p>❌ تعذر تحميل الأخبار</p>
        `;

    }

}


loadNews();

        `;

    });

}

loadNews();
