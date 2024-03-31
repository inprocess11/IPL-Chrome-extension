async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=99bb66d9-9275-46a8-adae-271053bc96db&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success") return;

            const matchlist = data.data;

            if (!matchlist) return [];

            const relevantData = matchlist.filter(match => match.series_id == "76ae85e2-88e5-4e99-83e4-5f352108aebc").map(match => `${match.name}, ${match.status}`);

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join(' ');
            return relevantData;
        })

        .catch(e => console.log(e));

}

getMatchData();