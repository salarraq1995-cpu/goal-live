async function getMatches(){

    const url = "https://api.openligadb.de/getmatchdata/bl1/2026";

    const response = await fetch(url);

    const matches = await response.json();

    console.log(matches);

}

getMatches();
