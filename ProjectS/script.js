//The arrays of teams in Groups A-D

let groupA;
let groupB;
let groupC;
let groupD;

let teamsGroupA = [];
let teamsGroupB = [];
let teamsGroupC = [];
let teamsGroupD = [];
let everyTeam = [];

let team = {};
team['name'] = 'T1';
team['id'] = 1;
team['tag'] = 'T1';
team['W'] = 5;
team['L'] = 1;
team['rank'] = 1;   
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 2, win : true, duration : 1915, date : '10-07'}, {gameId : 1, opp : 3, win : false, duration : 1915, date : '10-08'}, {gameId : 1, opp : 4, win : true, duration : 1915, date : '10-09'}, {gameId : 1, opp : 3, win : true, duration : 1915, date : '10-13'}, {gameId : 1, opp : 4, win : true, duration : 1915, date : '10-13'}, {gameId : 1, opp : 2, win : true, duration : 1915, date : '10-13'}];
teamsGroupA.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'Edward Gaming';
team['id'] = 2;
team['tag'] = 'EDG';
team['W'] = 4;
team['L'] = 2;
team['rank'] = 2;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 1, win : false, duration : 2008, date : '10-07'}, {gameId : 1, opp : 4, win : true, duration : 2008, date : '10-08'}, {gameId : 1, opp : 3, win : true, duration : 2008, date : '10-09'}, {gameId : 1, opp : 4, win : true, duration : 2008, date : '10-13'}, {gameId : 1, opp : 3, win : true, duration : 2008, date : '10-13'}, {gameId : 1, opp : 1, win : false, duration : 2008, date : '10-13'}];
teamsGroupA.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'Fnatic';
team['id'] = 3;
team['tag'] = 'FNC';
team['W'] = 2;
team['L'] = 4;
team['rank'] = 3;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 4, win : true, duration : 1849, date : '10-07'}, {gameId : 1, opp : 1, win : true, duration : 1849, date : '10-08'}, {gameId : 1, opp : 2, win : false, duration : 1849, date : '10-09'}, {gameId : 1, opp : 4, win : false, duration : 1849, date : '10-13'}, {gameId : 1, opp : 1, win : false, duration : 1849, date : '10-13'}, {gameId : 1, opp : 2, win : false, duration : 1849, date : '10-13'}];
teamsGroupA.push(team);  
everyTeam.push(team);

team = {};
team['name'] = 'Cloud9';
team['id'] = 4;
team['tag'] = 'C9';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 4;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 3, win : false, duration : 1632, date : '10-07'}, {gameId : 1, opp : 2, win : false, duration : 1632, date : '10-08'}, {gameId : 1, opp : 1, win : false, duration : 1632, date : '10-09'}, {gameId : 1, opp : 3, win : true, duration : 1632, date : '10-13'}, {gameId : 1, opp : 2, win : false, duration : 1632, date : '10-13'}, {gameId : 1, opp : 1, win : false, duration : 1632, date : '10-13'}];
teamsGroupA.push(team);   
everyTeam.push(team);

team = {};
team['name'] = 'JD Gaming';
team['id'] = 5;
team['tag'] = 'JDG';
team['W'] = 6;
team['L'] = 1;
team['rank'] = 1;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 7, win : true, duration : 1884, date : '10-07'}, {gameId : 1, opp : 6, win : true, duration : 1884, date : '10-08'}, {gameId : 1, opp : 8, win : true, duration : 1884, date : '10-10'}, {gameId : 1, opp : 7, win : true, duration : 1884, date : '10-14'}, {gameId : 1, opp : 8, win : true, duration : 1884, date : '10-14'}, {gameId : 1, opp : 6, win : false, duration : 1884, date : '10-14'}, {gameId : 1, opp : 6, win : true, duration : 1884, date : '10-14'}];
teamsGroupB.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'DWG KIA';
team['id'] = 6;
team['tag'] = 'DK';
team['W'] = 5;
team['L'] = 2;
team['rank'] = 2;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 7, win : true, duration : 1896, date : '10-07'}, {gameId : 1, opp : 6, win : false, duration : 1896, date :'10-08'}, {gameId : 1, opp : 8, win : true, duration : 1896, date : '10-10'}, {gameId : 1, opp : 7, win : true, duration : 1896, date : '10-14'}, {gameId : 1, opp : 8, win : true, duration : 1896, date : '10-14'}, {gameId : 1, opp : 6, win : true, duration : 1896, date : '10-14'},{gameId : 1, opp : 6, win : false, duration : 1896, date : '10-14'}]; 
teamsGroupB.push(team);  
everyTeam.push(team);

team = {};
team['name'] = 'Evil Geniuses';
team['id'] = 7;
team['tag'] = 'EG';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 3;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 6, win : false, duration : 1725, date : '10-07'}, {gameId : 1, opp : 8, win : false, duration : 1725, date : '10-08'}, {gameId : 1, opp : 7, win : false, duration : 1725, date : '10-10'}, {gameId : 1, opp : 8, win : true, duration : 1725, date : '10-14'}, {gameId : 1, opp : 6, win : false, duration : 1725, date : '10-14'}, {gameId : 1, opp : 7, win : false, duration : 1725, date : '10-14'}];
teamsGroupB.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'G2 Esports';
team['id'] = 8;
team['tag'] = 'G2';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 4;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 6, win : false, duration : 1808, date : '10-07'}, {gameId : 1, opp : 7, win : true, duration : 1808, date : '10-08'}, {gameId : 1, opp : 5, win : false, duration : 1808, date : '10-10'}, {gameId : 1, opp : 7, win : false, duration : 1808, date : '10-14'}, {gameId : 1, opp : 6, win : false, duration : 1808, date : '10-14'}, {gameId : 1, opp : 5, win : false, duration : 1808, date : '10-14'}];
teamsGroupB.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'DRX';
team['id'] = 9;
team['tag'] = 'DRX';
team['W'] = 5;
team['L'] = 2;
team['rank'] = 1;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 10, win : false, duration : 2068, date : '10-08'}, {gameId : 1, opp : 11, win : true, duration : 2068, date : '10-09'}, {gameId : 1, opp : 12, win : true, duration : 2068, date : '10-10'}, {gameId : 1, opp : 10, win : true, duration : 2068, date : '10-15'}, {gameId : 1, opp : 12, win : true, duration : 2068, date : '10-15'}, {gameId : 1, opp : 11, win : false, duration : 2068, date : '10-15'}, {gameId : 1, opp : 10, win : true, duration : 2068, date : '10-15'}];
teamsGroupC.push(team);   
everyTeam.push(team);

team = {};
team['name'] = 'Rogue';
team['id'] = 10;
team['tag'] = 'RGE';
team['W'] = 4;
team['L'] = 3;
team['rank'] = 2;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 9, win : true, duration : 1860, date : '10-08'}, {gameId : 1, opp : 12, win : true, duration : 1860, date : '10-09'}, {gameId : 1, opp : 11, win : true, duration : 1860, date : '10-10'}, {gameId : 1, opp : 12, win : true, duration : 1860, date : '10-15'}, {gameId : 1, opp : 9, win : false, duration : 1860, date : '10-15'}, {gameId : 1, opp : 11, win : false, duration : 1860, date : '10-15'}, {gameId : 1, opp : 9, win : false, duration : 1860, date : '10-15'}];
teamsGroupC.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'Top Esports';
team['id'] = 11;
team['tag'] = 'TES';
team['W'] = 3;
team['L'] = 3;
team['rank'] = 3;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 12, win : true, duration : 1890, date : '10-08'}, {gameId : 1, opp : 9, win : false, duration : 1890, date : '10-09'}, {gameId : 1, opp : 10, win : false, duration : 1890, date : '10-10'}, {gameId : 1, opp : 12, win : false, duration : 1890, date : '10-15'}, {gameId : 1, opp : 10, win : true, duration : 1890, date : '10-15'}, {gameId : 1, opp : 9, win : true, duration : 1890, date : '10-15'}];
teamsGroupC.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'GAM Esports';
team['id'] = 12;
team['tag'] = 'GAM';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 4;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 11, win : false, duration : 1897, date : '10-08'}, {gameId : 1, opp : 10, win : false, duration : 1897, date : '10-09'}, {gameId : 1, opp : 9, win : false, duration : 1897, date : '10-10'}, {gameId : 1, opp : 10, win : false, duration : 1897, date : '10-15'}, {gameId : 1, opp : 11, win : true, duration : 1897, date : '10-15'}, {gameId : 1, opp : 9, win : false, duration : 1897, date : '10-15'}];
teamsGroupC.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'Gen. G eSports';
team['id'] = 13;
team['tag'] = 'GEN';
team['W'] = 6;
team['L'] = 1;
team['rank'] = 1;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 14, win : false, duration : 1884, date : '10-07'}, {gameId : 1, opp : 16, win : true, duration : 1884, date : '10-09'}, {gameId : 1, opp : 15, win : true, duration : 1884, date : '10-10'}, {gameId : 1, opp : 15, win : true, duration : 1884, date : '10-16'}, {gameId : 1, opp : 16, win : true, duration : 1884, date : '10-16'}, {gameId : 1, opp : 14, win : true, duration : 1884, date : '10-16'}, {gameId : 1, opp : 14, win : true, duration : 1884, date : '10-16'}];
teamsGroupD.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'Royal Never Give Up';
team['id'] = 14;
team['tag'] = 'RNG';
team['W'] = 5;
team['L'] = 2;
team['rank'] = 2;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 13, win : true, duration : 1895, date : '10-07'}, {gameId : 1, opp : 15, win : true, duration : 1895, date : '10-09'}, {gameId : 1, opp : 16, win : true, duration : 1895, date : '10-10'}, {gameId : 1, opp : 16, win : true, duration : 1895, date : '10-16'}, {gameId : 1, opp : 15, win : true, duration : 1895, date : '10-16'}, {gameId : 1, opp : 13, win : false, duration : 1895, date : '10-16'}, {gameId : 1, opp : 13, win : false, duration : 1895, date : '10-16'}];
teamsGroupD.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'CTBC Flying Oyster';
team['id'] = 15;
team['tag'] = 'CFO';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 3;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 16, win : true, duration : 1902, date : '10-07'}, {gameId : 1, opp : 14, win : false, duration : 1902, date : '10-09'}, {gameId : 1, opp : 13, win : false, duration : 1902, date : '10-10'}, {gameId : 1, opp : 16, win : false, duration : 1902, date : '10-16'}, {gameId : 1, opp : 13, win : false, duration : 1902, date : '10-16'}, {gameId : 1, opp : 14, win : false, duration : 1902, date : '10-16'}];
teamsGroupD.push(team); 
everyTeam.push(team);

team = {};
team['name'] = '100 Thieves';
team['id'] = 16;
team['tag'] = '100';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 4;
team['duration'] = 0;
team['games'] = [{gameId : 1, opp : 15, win : false, duration : 1844, date : '10-07'}, {gameId : 1, opp : 13, win : false, duration : 1844, date : '10-09'}, {gameId : 1, opp : 14, win : false, duration : 1844, date : '10-10'}, {gameId : 1, opp : 15, win : true, duration : 1844, date : '10-16'}, {gameId : 1, opp : 14, win : false, duration : 1844, date : '10-16'}, {gameId : 1, opp : 13, win : false, duration : 1844, date : '10-16'}];
teamsGroupD.push(team); 
everyTeam.push(team);

function initData(){
    localStorage.setItem('teamsGroupA', JSON.stringify(teamsGroupA));
    localStorage.setItem('teamsGroupB', JSON.stringify(teamsGroupB));
    localStorage.setItem('teamsGroupC', JSON.stringify(teamsGroupC));
    localStorage.setItem('teamsGroupD', JSON.stringify(teamsGroupD));
    localStorage.setItem('everyTeam', JSON.stringify(everyTeam));
}

initData();

function getTeams() {
    groupA = JSON.parse(localStorage['teamsGroupA']);
    groupB = JSON.parse(localStorage['teamsGroupB']);
    groupC = JSON.parse(localStorage['teamsGroupC']);
    groupD = JSON.parse(localStorage['teamsGroupD']);

    createTables();
}

function createTables(){
    createTable(groupA, 'A');
    createTable(groupB, 'B');
    createTable(groupC, 'C');
    createTable(groupD, 'D');
}

let ascendingRankA, ascendingRankB, ascendingRankC, ascendingRankD = true;
let ascendingNameA, ascendingNameB, ascendingNameC, ascendingNameD = false;
let ascendingWinsA, ascendingWinsB, ascendingWinsC, ascendingWinsD = false;
let ascendingTimeA, ascendingTimeB, ascendingTimeC, ascendingTimeD = false;

function createTable(teams, tableOfChoice) {
    tableBody = document.querySelector(selectedTable(tableOfChoice));

    let previousTeamWins = -1;
    tableBody.replaceChildren();
    teams.forEach((team) => {
        let row = document.createElement('tr');
        let td = document.createElement('td');
        let link = document.createElement('a');
        td.classList.add('has-text-weight-bold');
        if(team.W == previousTeamWins){
            td.textContent = '-';
        }
        else{
            td.textContent = team.rank;
        }
        row.appendChild(td);

        td = document.createElement('td');
        link.href = 'teamPage.html?id=' + team.id;
        link.target = '_blank';
        link.textContent = team.name + ' (' + team.tag + ')';
        td.appendChild(link);
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = team.W;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = team.L;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = ((team.W / (team.W + team.L)) * 100).toFixed(1);
        row.appendChild(td);

        td = document.createElement('td');

        let count = 0;
        let totalDuration = 0;
        team.games.forEach(() => {
            let duration = team.games[count].duration;
            totalDuration = totalDuration + duration;
            count++;
        })

        team.duration = totalDuration/count;

        let seconds = -1;
        if(team.duration % 60 < 10 && team.duration % 60 > 0){
            seconds = '0' + team.duration % 60;
        } else if(team.duration % 60 === 0){
            seconds = team.duration % 60 + '0';
        } else {
            seconds = team.duration % 60;
        }

        td.textContent = parseInt(team.duration / 60) + ':' + seconds;
        row.appendChild(td);

        tableBody.appendChild(row);

        previousTeamWins = team.W;
    });
}

function selectedTable(table) { //grabs the id of the table and the tbody based on the selected table. table - param for the selected table.
    if(table == 'A'){
        return '#groupA tbody';
    } else if(table == 'B'){
        return '#groupB tbody';
    } else if(table == 'C'){
        return '#groupC tbody';
    } else {
        return '#groupD tbody';
    }
}

function sort(data, table){ //uses the higher order array sort function to sort values. data - value entered when called to indicate what is being sorted. table - value entered when called to indicate which table is being sorted.
    if(table == 'A'){
        if(data === 'rank'){
            if(ascendingRankA){
                ascendingRankA = false;
                groupA = groupA.sort((teamA, teamB) => (teamB.rank - teamA.rank));
            } else {
                ascendingRankA = true;
                groupA = groupA.sort((teamA, teamB) => teamA.rank - teamB.rank);
            }
        } else if(data === 'name'){
            if(ascendingNameA){
                ascendingNameA = false;
                groupA = groupA.sort((teamA, teamB) => {return (teamA.name > teamB.name) ? -1 : 1});
            } else {
                ascendingNameA = true;
                groupA = groupA.sort((teamA, teamB) => {return (teamA.name < teamB.name) ? -1 : 1});
            }
        } else if(data === 'wins'){
            if(ascendingWinsA){
                ascendingWinsA = false;
                groupA = groupA.sort((teamA, teamB) => (teamA.W - teamB.W));
            } else {
                ascendingWinsA = true;
                groupA = groupA.sort((teamA, teamB) => (teamB.W - teamA.W));
            }
        } else if(data === 'duration'){
            if(ascendingTimeA){
                ascendingTimeA = false;
                groupA = groupA.sort((teamA, teamB) => (teamA.duration - teamB.duration));
            } else {
                ascendingTimeA = true;
                groupA = groupA.sort((teamA, teamB) => (teamB.duration - teamA.duration));
            }
        }
    } else if(table == 'B'){
        if(data === 'rank'){
            if(ascendingRankB){
                ascendingRankB = false;
                groupB = groupB.sort((teamA, teamB) => (teamB.rank - teamA.rank));
            } else {
                ascendingRankB = true;
                groupB = groupB.sort((teamA, teamB) => teamA.rank - teamB.rank);
            }
        } else if(data === 'name'){
            if(ascendingNameB){
                ascendingNameB = false;
                groupB = groupB.sort((teamA, teamB) => {return (teamA.name > teamB.name) ? -1 : 1});
            } else {
                ascendingNameB = true;
                groupB = groupB.sort((teamA, teamB) => {return (teamA.name < teamB.name) ? -1 : 1});
            }
        } else if(data === 'wins'){
            if(ascendingWinsB){
                ascendingWinsB = false;
                groupB = groupB.sort((teamA, teamB) => (teamA.W - teamB.W));
            } else {
                ascendingWinsB = true;
                groupB = groupB.sort((teamA, teamB) => (teamB.W - teamA.W));
            }
        } else if(data === 'duration'){
            if(ascendingTimeB){
                ascendingTimeB = false;
                groupB = groupB.sort((teamA, teamB) => (teamA.duration - teamB.duration));
            } else {
                ascendingTimeB = true;
                groupB = groupB.sort((teamA, teamB) => (teamB.duration - teamA.duration));
            }
        }
    } else if(table == 'C'){
        if(data === 'rank'){
            if(ascendingRankC){
                ascendingRankC = false;
                groupC = groupC.sort((teamA, teamB) => (teamB.rank - teamA.rank));
            } else {
                ascendingRankC = true;
                groupC = groupC.sort((teamA, teamB) => teamA.rank - teamB.rank);
            }
        } else if(data === 'name'){
            if(ascendingNameC){
                ascendingNameC = false;
                groupC = groupC.sort((teamA, teamB) => {return (teamA.name > teamB.name) ? -1 : 1});
            } else {
                ascendingNameC = true;
                groupC = groupC.sort((teamA, teamB) => {return (teamA.name < teamB.name) ? -1 : 1});
            }
        } else if(data === 'wins'){
            if(ascendingWinsC){
                ascendingWinsC = false;
                groupC = groupC.sort((teamA, teamB) => (teamA.W - teamB.W));
            } else {
                ascendingWinsC = true;
                groupC = groupC.sort((teamA, teamB) => (teamB.W - teamA.W));
            }
        } else if(data === 'duration'){
            if(ascendingTimeC){
                ascendingTimeC = false;
                groupC = groupC.sort((teamA, teamB) => (teamA.duration - teamB.duration));
            } else {
                ascendingTimeC = true;
                groupC = groupC.sort((teamA, teamB) => (teamB.duration - teamA.duration));
            }
        }
    } else {
        if(data === 'rank'){
            if(ascendingRankD){
                ascendingRankD = false;
                groupD = groupD.sort((teamA, teamB) => (teamB.rank - teamA.rank));
            } else {
                ascendingRankD = true;
                groupD = groupD.sort((teamA, teamB) => teamA.rank - teamB.rank);
            }
        } else if(data === 'name'){
            if(ascendingNameD){
                ascendingNameD = false;
                groupD = groupD.sort((teamA, teamB) => {return (teamA.name > teamB.name) ? -1 : 1});
            } else {
                ascendingNameD = true;
                groupD = groupD.sort((teamA, teamB) => {return (teamA.name < teamB.name) ? -1 : 1});
            }
        } else if(data === 'wins'){
            if(ascendingWinsD){
                ascendingWinsD = false;
                groupD = groupD.sort((teamA, teamB) => (teamA.W - teamB.W));
            } else {
                ascendingWinsD = true;
                groupD = groupD.sort((teamA, teamB) => (teamB.W - teamA.W));
            }
        } else if(data === 'duration'){
            if(ascendingTimeD){
                ascendingTimeD = false;
                groupD = groupD.sort((teamA, teamB) => (teamA.duration - teamB.duration));
            } else {
                ascendingTimeD = true;
                groupD = groupD.sort((teamA, teamB) => (teamB.duration - teamA.duration));
            }
        }
    }

    if(table == 'A')
        createTable(groupA, 'A');
    else if(table == 'B')
        createTable(groupB, 'B');
    else if(table == 'C')
        createTable(groupC, 'C');
    else
        createTable(groupD, 'D');

}

//code below is for teamPage.html

function start(){
    let teams = JSON.parse(localStorage.getItem('everyTeam'));
    let params = (new URL(document.location)).searchParams;

    teams = teams.filter(team => team.id == params.get('id'));
    document.querySelector('#title').textContent = teams[0].name;
    document.querySelector('#name').textContent = teams[0].name;
    createTeamGames(teams);

    let imgLink = document.querySelector('#team-logo-head');
    imgLink.src = 'images/' + teams[0].id + '.png';
}

function createTeamGames(teams) { 
    gameSect = document.querySelector('#gamesC1');

    let count = 0;

    teams[0].games.forEach(() => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('card-content');
        card.classList.add('my-5');
        card.classList.add('team-games');

        let outcome = document.createElement('p');
        let datePlayed = document.createElement('p');
        outcome.classList.add('is-size-3');
        datePlayed.classList.add('is-size-5');

        let scoreline = teams[0].tag;
        let idEnemyTeam = teams[0].games[count].opp;
        if(teams[0].games[count].win == true){
            scoreline = scoreline + ' | ' + '1' + '-' + '0' + ' | ';
        } else {
            scoreline = scoreline + ' | ' + '0' + '-' + '1' + ' | ';
        }
        teamList = JSON.parse(localStorage.getItem('everyTeam'));
        scoreline = scoreline + teamList[idEnemyTeam - 1].tag;

        outcome.textContent = scoreline;

        let date = teams[0].games[count].date;
        date = '2022-' + date;

        datePlayed.textContent = date;

        card.append(outcome);
        card.append(datePlayed);

        gameSect.appendChild(card);

        /*Code that cycles through the columns when adding a game to the page*/
        if(gameSect == document.querySelector('#gamesC1')){
            gameSect = document.querySelector('#gamesC2');
        } else if(gameSect == document.querySelector('#gamesC2')){
            gameSect = document.querySelector('#gamesC3');
        } else {
            gameSect = document.querySelector('#gamesC1');
        }

        count++;
    })

    headerStats(teams)
}

function headerStats(teams){
    sectHero = document.querySelector('section');

    // columns = document.createElement('div');
    // div.classList.add('columns');

    let winCard = document.createElement('div');
    winCard.classList.add('card');
    winCard.classList.add('card-content');
    winCard.classList.add('my-5');
    winCard.classList.add('team-games');
    winCard.classList.add('has-background-white');

    let lossCard = document.createElement('div');
    lossCard.classList.add('card');
    lossCard.classList.add('card-content');
    lossCard.classList.add('my-5');
    lossCard.classList.add('team-games');
    lossCard.classList.add('has-background-white');

    let winHeader = document.createElement('p');
    winHeader.classList.add('is-size-5');
    winHeader.textContent = 'Wins';
    let lossHeader = document.createElement('p');
    lossHeader.classList.add('is-size-5');
    lossHeader.textContent = 'Losses';

    let wins = document.createElement('p');
    wins.classList.add('is-size-2');
    let losses = document.createElement('p');
    losses.classList.add('is-size-2');

    let winCounter = 0;
    let lossCounter = 0;
    teams[0].games.forEach((game) => {
        if(game.win == true){
            winCounter++;
        } else {
            lossCounter++;
        }
    })

    wins.textContent = winCounter;
    losses.textContent = lossCounter;

    winCard.append(winHeader);
    winCard.append(wins);
    lossCard.append(lossHeader);
    lossCard.append(losses);

    sectHero.appendChild(winCard);
    sectHero.appendChild(lossCard);
} 

//logo swap functions

function swapLogo(){ //swaps the logo from black to blue
    let img = document.getElementById("logo").src = 'images/lolesportsblue.png';
}

function swapLogo2(){ //swaps the logo from blue to black
    let img = document.getElementById("logo").src = 'images/lolesports.png';
}

//code below is for admin.html

function hide(){ //hides the red popup
    let popup = document.querySelector("article");
    popup.remove();
}

function test(){
    let name = document.getElementById("name").value;
    console.log(name);
}

function checkAdminName(){ //checks if the entered name is the admin's name (Harrison)
    let canSubmit = false;

    let name = document.getElementById("name").value;
    let nameCompVal = name.toUpperCase();

    let sect = document.getElementById("name-msg");
    let msg = document.createElement("p");
    msg.classList.add("help");

    let icon = document.getElementById('icon-verify-name');
    icon.classList.add('icon');
    icon.classList.add('is-small');
    icon.classList.add('is-right');
    let i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add('fa-solid');

    if(nameCompVal != "HARRISON"){ //if the name doesnt equal HARRISON, red text, red box, X icon - also causes the function to return false, making form unable to submit
        document.getElementById("name").classList.add("is-danger")
        msg.classList.add("is-danger")
        sect.replaceChildren();
        msg.textContent = 'You should not be on this page...';

        icon.replaceChildren();
        i.classList.add('fa-xmark');
    } else { //if the name equals HARRISON, green text, green box, check icon
        document.getElementById("name").classList.replace("is-danger", "is-success");
        msg.classList.add("is-success");
        sect.replaceChildren();
        msg.textContent = 'Welcome, Admin :)';

        icon.replaceChildren();
        i.classList.remove('fa-xmark');
        i.classList.add('fa-check')

        canSubmit = true;
    }

    sect.append(msg);
    icon.append(i);

    return canSubmit;
}

function checkTeamTag(){ //checks if the team's tag matches with an actual team in the local storage
    let canSubmit = false;

    let teams = JSON.parse(localStorage.getItem('everyTeam'));
    let team = document.getElementById('team').value;
    let teamCompVal = team.toUpperCase();

    let sect = document.getElementById("team-msg");
    let msg = document.createElement("p");
    msg.classList.add("help");

    let icon = document.getElementById('icon-verify-team');
    icon.classList.add('icon');
    icon.classList.add('is-small');
    icon.classList.add('is-right');
    let i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add('fa-solid');

    validTeam = false;
    teams.forEach((team) => { //searches through every team's tag and compares it to the value from the input
        if(teamCompVal === team.tag){
            validTeam = true;
        }
    })

    if(!validTeam){ //if validTeam is false, red text, red box, X icon - also causes the function to return false, making form unable to submit
        document.getElementById("team").classList.add("is-danger")
        msg.classList.add("is-danger")
        sect.replaceChildren();
        msg.textContent = 'That is not a team.';

        icon.replaceChildren();
        i.classList.add('fa-xmark');
    } else { //if validTeam is true, green text, green box, check icon
        firstTeam = (document.getElementById("opp").value).toUpperCase();
        if(firstTeam == teamCompVal){
            document.getElementById("team").classList.add("is-danger")
            msg.classList.add("is-danger")
            sect.replaceChildren();
            msg.textContent = 'The teams cannot be the same.';
        } else {
            document.getElementById("team").classList.replace("is-danger", "is-success");   
            sect.replaceChildren();

            icon.replaceChildren();
            i.classList.remove('fa-xmark');
            i.classList.add('fa-check')

            canSubmit = true;
        }
    }

    sect.append(msg);
    icon.append(i);

    return canSubmit;
}

function checkOppTeamTag(){ //checks if the team's tag matches with an actual team in the local storage
    let canSubmit = false;

    let teams = JSON.parse(localStorage.getItem('everyTeam'));
    let opp = document.getElementById('opp').value;
    let oppCompVal = opp.toUpperCase();

    let sect = document.getElementById("opp-msg");
    let msg = document.createElement("p");
    msg.classList.add("help");

    let icon = document.getElementById('icon-verify-opp');
    icon.classList.add('icon');
    icon.classList.add('is-small');
    icon.classList.add('is-right');
    let i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add('fa-solid');

    validTeam = false;
    teams.forEach((team) => { //searches through every team's tag and compares it to the value from the input
        if(oppCompVal === team.tag){
            validTeam = true;
        }
    })

    if(!validTeam){ //if validTeam is false, red text, red box, X icon - also causes the function to return false, making form unable to submit
        document.getElementById("opp").classList.add("is-danger")
        msg.classList.add("is-danger")
        sect.replaceChildren();
        msg.textContent = 'That is not a team.';

        icon.replaceChildren();
        i.classList.add('fa-xmark');
    } else { //if validTeam is true, green text, green box, check icon - also make sure the opponent isn't the same as the team
        firstTeam = (document.getElementById("team").value).toUpperCase();
        if(firstTeam == oppCompVal){
            document.getElementById("opp").classList.add("is-danger")
            msg.classList.add("is-danger")
            sect.replaceChildren();
            msg.textContent = 'The teams cannot be the same.';
        } else {
            document.getElementById("opp").classList.replace("is-danger", "is-success");
            sect.replaceChildren();

            icon.replaceChildren();
            i.classList.remove('fa-xmark');
            i.classList.add('fa-check')

            canSubmit = true;
        }
    }

    sect.append(msg);
    icon.append(i);

    return canSubmit;
}

function checkDuration(){
    let canSubmit = false;

    let duration = document.getElementById('dur').value;

    let sect = document.getElementById("dur-msg");
    let msg = document.createElement("p");
    msg.classList.add("help");

    let icon = document.getElementById('icon-verify-dur');
    icon.classList.add('icon');
    icon.classList.add('is-small');
    icon.classList.add('is-right');
    let i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add('fa-solid');

    if(isNaN(parseInt(duration.substring(0, 1))) || isNaN(parseInt(duration.substring(1, 2))) || duration.substring(2, 3) != ':' || 
    isNaN(parseInt(duration.substring(3, 4))) || isNaN(parseInt(duration.substring(4)))){
        document.getElementById("dur").classList.add("is-danger");
        msg.classList.add("is-danger");
        sect.replaceChildren();
        msg.textContent = 'You must format the time as (mm:ss).';

        icon.replaceChildren();
        i.classList.add('fa-xmark');
    } else {
        document.getElementById("dur").classList.replace("is-danger", "is-success");
        sect.replaceChildren();

        icon.replaceChildren();
        i.classList.remove('fa-xmark');
        i.classList.add('fa-check');

        canSubmit = true;
    }

    sect.append(msg);
    icon.append(i);

    return canSubmit;
}

function checkDateEntered(){ //checks if there is a date entered - no other verification or factors
    let canSubmit = false;

    let date = document.getElementById('date').value;

    let sect = document.getElementById("date-msg");
    let msg = document.createElement("p");
    msg.classList.add("help");
    console.log(date);
    if(date.substring(0, 4) != 2022){
        document.getElementById("date").classList.add('is-danger');
        msg.classList.add("is-danger");
        sect.replaceChildren();
        msg.textContent = 'Please enter a date from 2022.';
    } else {
        document.getElementById("date").classList.replace('is-danger', 'is-success');
        sect.replaceChildren();

        canSubmit = true;
    }

    sect.append(msg);

    return canSubmit;
}

function checkWLSelect(outcome){ //returns true when win button is pressed
    let canSubmit = false;

    let win = document.getElementById('outcome-win');
    let loss = document.getElementById('outcome-loss');

    if(outcome === 'w'){
        if(win.classList[2] === 'is-outlined'){
            win.classList.remove('is-outlined');
            if(loss.classList[2] !== 'is-outlined'){
                loss.classList.add('is-outlined');
            }
        }
        canSubmit = true;
    } else if(outcome === 'l') {
        if(loss.classList[2] === 'is-outlined'){
            loss.classList.remove('is-outlined');
            if(win.classList[2] !== 'is-outlined'){
                win.classList.add('is-outlined');
            }
        }
        canSubmit = true;
    }
    
    return canSubmit;
}


function canSubmit(outcome){ //checks if all fields have proper information and un-disables the submit button. outcome - param to know if win or loss
    let button = document.getElementById('submit-button');
    if(checkAdminName() && checkTeamTag() && checkOppTeamTag() && checkDuration() && checkDateEntered() && checkWLSelect(outcome)){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled');
    }
}

function clear1(){ //clears the text fields and un-highlights the buttons
    console.log('A');
    document.getElementById('name').textContent = '';
    document.getElementById('team').textContent = '';
    document.getElementById('opp').textContent = '';
    document.getElementById('dur').textContent = '';
    document.getElementById('date').textContent = '';
}

function submit(outcome){ //pushes the information to the localStorage to update stats
    getTeams();

    let team = document.getElementById('team').value;
    let opp = document.getElementById('opp').value;
    let duration = document.getElementById('dur').value;
    let date = document.getElementById('date').value;
    let wL = outcome;

    if(team.id > 0 && team.id < 5){
        let teams = JSON.parse(localStorage.getItem('everyTeam'));
        teams = teams.filter(team => team.id == params.get('id'));
        
    } else if(team.id > 4 && team.id < 9){

    } else if(team.id > 8 && team.id < 13){

    } else {

    }
}

//code below is for games.html

const paginatedList = document.getElementById("pagination-list");
const paginationLimit = 9;
let currentPage = 1;

function startGames(){
    let teams = JSON.parse(localStorage.getItem('everyTeam'));
    createAllTeamGames(teams);
}

function createAllTeamGames(teams) { 
    gameSect = document.querySelector('#gamesC1');
    let totalGameCount = 0;

    teams.forEach((team) => {
        let count = 0;
        team.games.forEach(() => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('card-content');
            card.classList.add('my-5');
            card.classList.add('team-games');
    
            let outcome = document.createElement('p');
            let datePlayed = document.createElement('p');
            outcome.classList.add('is-size-3');
            datePlayed.classList.add('is-size-5');
    
            let scoreline = team.tag;
            let idEnemyTeam = team.games[count].opp;
            if(team.games[count].win == true){
                scoreline = scoreline + ' | ' + '1' + '-' + '0' + ' | ';
            } else {
                scoreline = scoreline + ' | ' + '0' + '-' + '1' + ' | ';
            }
            teamList = JSON.parse(localStorage.getItem('everyTeam'));
            scoreline = scoreline + teamList[idEnemyTeam - 1].tag;
    
            outcome.textContent = scoreline;
    
            let date = team.games[count].date;
            date = '2022-' + date;
    
            datePlayed.textContent = date;
            
            if(totalGameCount < paginationLimit){ //only displays games within the allowed numebr of games/page.
                card.append(outcome);
                card.append(datePlayed);
                gameSect.appendChild(card);
            }

            count++;
            totalGameCount++;
            
            /*Code that cycles through the columns when adding a game to the page*/
            if(gameSect == document.querySelector('#gamesC1')){
                gameSect = document.querySelector('#gamesC2');
            } else if(gameSect == document.querySelector('#gamesC2')){
                gameSect = document.querySelector('#gamesC3');
            } else {
                gameSect = document.querySelector('#gamesC1');
            }
        })
    })

    createPaginationTabs(totalGameCount); //calls createPaginationTabs with the total # of games played.
}

function createPaginationTabs(totalGameCount){ //creates the page # selectors for pagination. totalGameCount - param that holds the total number of games played.
    let pageCount = Math.ceil(totalGameCount / paginationLimit);
    let ul = document.querySelector('ul');

    for(i=0; i<pageCount; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.classList.add('pagination-link');
        a.addEventListener('click', ()=>{setCurrentPage(Number(a.textContent))});
        a.textContent = i+1;
        li.append(a);
        ul.append(li);  
    }
    activePageNumber();
}

function setCurrentPage(pageNum){
    currentPage = pageNum;
    activePageNumber();
}

function activePageNumber(){
    document.querySelectorAll('a.pagination-link').forEach((a) => {
        if(a.classList.contains('has-text-white')){
            a.classList.replace('has-background-link', 'has-background-white');
            a.classList.remove('has-text-light', 'has-text-black');
        }
        if(a.textContent == currentPage){
            if(!a.classList.contains('has-background-link')){
                a.classList.add('has-background-white');
                a.classList.add('has-text-black');
            }
            a.classList.replace('has-background-white', 'has-background-link');
            a.classList.replace('has-text-black', 'has-text-white');
        } else {
            a.classList.add('has-background-white');
            a.classList.add('has-text-black');
        }
    })
}


