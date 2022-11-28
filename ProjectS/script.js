//The arrays of teams in Groups A-D
let groupA;
let groupB;
let groupC;
let groupD;

//pagination global variables
const paginatedList = document.getElementById("pagination-list"); //the id of the list where the games will be added for pagination.
const paginationLimit = 9; //the limit of scores/page on games.html.
let tabsCreated = false; //checks whether pagination tabs have already been created.
let sortingByDate = false; //checks whether pagination is currently sorting by date.
let currentPage = 1; //the current page for pagination
let onTeamPage = false; //checks if on a team page instead of the games.html page.

//*
//the arrays that will be put in the localStorage
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
team['games'] = [{gameId : 5, opp : 2, win : true, duration : 1915, date : '10-07'}, {gameId : 9, opp : 3, win : false, duration : 1915, date : '10-08'}, {gameId : 16, opp : 4, win : true, duration : 1915, date : '10-09'}, {gameId : 26, opp : 3, win : true, duration : 1915, date : '10-13'}, {gameId : 29, opp : 4, win : true, duration : 1915, date : '10-13'}, {gameId : 30, opp : 2, win : true, duration : 1915, date : '10-13'}];
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
team['games'] = [{gameId : 5, opp : 1, win : false, duration : 2008, date : '10-07'}, {gameId : 10, opp : 4, win : true, duration : 2008, date : '10-08'}, {gameId : 15, opp : 3, win : true, duration : 2008, date : '10-09'}, {gameId : 27, opp : 4, win : true, duration : 2008, date : '10-13'}, {gameId : 28, opp : 3, win : true, duration : 2008, date : '10-13'}, {gameId : 30, opp : 1, win : false, duration : 2008, date : '10-13'}];
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
team['games'] = [{gameId : 1, opp : 4, win : true, duration : 1849, date : '10-07'}, {gameId : 9, opp : 1, win : true, duration : 1849, date : '10-08'}, {gameId : 15, opp : 2, win : false, duration : 1849, date : '10-09'}, {gameId : 25, opp : 4, win : false, duration : 1849, date : '10-13'}, {gameId : 26, opp : 1, win : false, duration : 1849, date : '10-13'}, {gameId : 28, opp : 2, win : false, duration : 1849, date : '10-13'}];
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
team['games'] = [{gameId : 1, opp : 3, win : false, duration : 1632, date : '10-07'}, {gameId : 10, opp : 2, win : false, duration : 1632, date : '10-08'}, {gameId : 16, opp : 1, win : false, duration : 1632, date : '10-09'}, {gameId : 25, opp : 3, win : true, duration : 1632, date : '10-13'}, {gameId : 27, opp : 2, win : false, duration : 1632, date : '10-13'}, {gameId : 29, opp : 1, win : false, duration : 1632, date : '10-13'}];
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
team['games'] = [{gameId : 4, opp : 7, win : true, duration : 1884, date : '10-07'}, {gameId : 12, opp : 6, win : true, duration : 1884, date : '10-08'}, {gameId : 19, opp : 8, win : true, duration : 1884, date : '10-10'}, {gameId : 32, opp : 7, win : true, duration : 1884, date : '10-14'}, {gameId : 34, opp : 8, win : true, duration : 1884, date : '10-14'}, {gameId : 36, opp : 6, win : false, duration : 1884, date : '10-14'}, {gameId : 37, opp : 6, win : true, duration : 1884, date : '10-14'}];
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
team['games'] = [{gameId : 2, opp : 7, win : true, duration : 1896, date : '10-07'}, {gameId : 12, opp : 5, win : false, duration : 1896, date :'10-08'}, {gameId : 21, opp : 8, win : true, duration : 1896, date : '10-10'}, {gameId : 33, opp : 7, win : true, duration : 1896, date : '10-14'}, {gameId : 35, opp : 8, win : true, duration : 1896, date : '10-14'}, {gameId : 36, opp : 7, win : true, duration : 1896, date : '10-14'},{gameId : 37, opp : 5, win : false, duration : 1896, date : '10-14'}]; 
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
team['games'] = [{gameId : 4, opp : 5, win : false, duration : 1725, date : '10-07'}, {gameId : 8, opp : 8, win : false, duration : 1725, date : '10-08'}, {gameId : 21, opp : 6, win : false, duration : 1725, date : '10-10'}, {gameId : 31, opp : 8, win : true, duration : 1725, date : '10-14'}, {gameId : 32, opp : 5, win : false, duration : 1725, date : '10-14'}, {gameId : 35, opp : 6, win : false, duration : 1725, date : '10-14'}];
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
team['games'] = [{gameId : 2, opp : 6, win : false, duration : 1808, date : '10-07'}, {gameId : 8, opp : 7, win : true, duration : 1808, date : '10-08'}, {gameId : 19, opp : 5, win : false, duration : 1808, date : '10-10'}, {gameId : 31, opp : 7, win : false, duration : 1808, date : '10-14'}, {gameId : 33, opp : 6, win : false, duration : 1808, date : '10-14'}, {gameId : 34, opp : 5, win : false, duration : 1808, date : '10-14'}];
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
team['games'] = [{gameId : 7, opp : 10, win : false, duration : 2068, date : '10-08'}, {gameId : 18, opp : 11, win : true, duration : 2068, date : '10-09'}, {gameId : 24, opp : 12, win : true, duration : 2068, date : '10-10'}, {gameId : 40, opp : 10, win : true, duration : 2068, date : '10-15'}, {gameId : 41, opp : 12, win : true, duration : 2068, date : '10-15'}, {gameId : 43, opp : 11, win : false, duration : 2068, date : '10-15'}, {gameId : 44, opp : 10, win : true, duration : 2068, date : '10-15'}];
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
team['games'] = [{gameId : 7, opp : 9, win : true, duration : 1860, date : '10-08'}, {gameId : 13, opp : 12, win : true, duration : 1860, date : '10-09'}, {gameId : 20, opp : 11, win : true, duration : 1860, date : '10-10'}, {gameId : 38, opp : 12, win : true, duration : 1860, date : '10-15'}, {gameId : 40, opp : 9, win : false, duration : 1860, date : '10-15'}, {gameId : 42, opp : 11, win : false, duration : 1860, date : '10-15'}, {gameId : 44, opp : 9, win : false, duration : 1860, date : '10-15'}];
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
team['games'] = [{gameId : 11, opp : 12, win : true, duration : 1890, date : '10-08'}, {gameId : 18, opp : 9, win : false, duration : 1890, date : '10-09'}, {gameId : 20, opp : 10, win : false, duration : 1890, date : '10-10'}, {gameId : 39, opp : 12, win : false, duration : 1890, date : '10-15'}, {gameId : 42, opp : 10, win : true, duration : 1890, date : '10-15'}, {gameId : 43, opp : 9, win : true, duration : 1890, date : '10-15'}];
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
team['games'] = [{gameId : 11, opp : 11, win : false, duration : 1897, date : '10-08'}, {gameId : 13, opp : 10, win : false, duration : 1897, date : '10-09'}, {gameId : 24, opp : 9, win : false, duration : 1897, date : '10-10'}, {gameId : 38, opp : 10, win : false, duration : 1897, date : '10-15'}, {gameId : 39, opp : 11, win : true, duration : 1897, date : '10-15'}, {gameId : 41, opp : 9, win : false, duration : 1897, date : '10-15'}];
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
team['games'] = [{gameId : 6, opp : 14, win : false, duration : 1884, date : '10-07'}, {gameId : 14, opp : 16, win : true, duration : 1884, date : '10-09'}, {gameId : 23, opp : 15, win : true, duration : 1884, date : '10-10'}, {gameId : 46, opp : 15, win : true, duration : 1884, date : '10-16'}, {gameId : 48, opp : 16, win : true, duration : 1884, date : '10-16'}, {gameId : 50, opp : 14, win : true, duration : 1884, date : '10-16'}, {gameId : 51, opp : 14, win : true, duration : 1884, date : '10-16'}];
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
team['games'] = [{gameId : 6, opp : 13, win : true, duration : 1895, date : '10-07'}, {gameId : 17, opp : 15, win : true, duration : 1895, date : '10-09'}, {gameId : 22, opp : 16, win : true, duration : 1895, date : '10-10'}, {gameId : 47, opp : 16, win : true, duration : 1895, date : '10-16'}, {gameId : 49, opp : 15, win : true, duration : 1895, date : '10-16'}, {gameId : 50, opp : 13, win : false, duration : 1895, date : '10-16'}, {gameId : 51, opp : 13, win : false, duration : 1895, date : '10-16'}];
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
team['games'] = [{gameId : 3, opp : 16, win : true, duration : 1902, date : '10-07'}, {gameId : 17, opp : 14, win : false, duration : 1902, date : '10-09'}, {gameId : 23, opp : 13, win : false, duration : 1902, date : '10-10'}, {gameId : 45, opp : 16, win : false, duration : 1902, date : '10-16'}, {gameId : 46, opp : 13, win : false, duration : 1902, date : '10-16'}, {gameId : 49, opp : 14, win : false, duration : 1902, date : '10-16'}];
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
team['games'] = [{gameId : 3, opp : 15, win : false, duration : 1844, date : '10-07'}, {gameId : 14, opp : 13, win : false, duration : 1844, date : '10-09'}, {gameId : 22, opp : 14, win : false, duration : 1844, date : '10-10'}, {gameId : 45, opp : 15, win : true, duration : 1844, date : '10-16'}, {gameId : 47, opp : 14, win : false, duration : 1844, date : '10-16'}, {gameId : 48, opp : 13, win : false, duration : 1844, date : '10-16'}];
teamsGroupD.push(team); 
everyTeam.push(team);

function initData(){ //takes the arrays of teams and puts them into localStorage. Done with different groups and an array with all teams.
    localStorage.setItem('teamsGroupA', JSON.stringify(teamsGroupA));
    localStorage.setItem('teamsGroupB', JSON.stringify(teamsGroupB));
    localStorage.setItem('teamsGroupC', JSON.stringify(teamsGroupC));
    localStorage.setItem('teamsGroupD', JSON.stringify(teamsGroupD));
    localStorage.setItem('everyTeam', JSON.stringify(everyTeam));
}

initData(); //this gets called and commented out along with the all the other initialization stuff
//*/

function getTeams() { //gets the localStorage array of teams of the 4 groups and creates the tables on standings.html
    groupA = JSON.parse(localStorage['teamsGroupA']);
    groupB = JSON.parse(localStorage['teamsGroupB']);
    groupC = JSON.parse(localStorage['teamsGroupC']);
    groupD = JSON.parse(localStorage['teamsGroupD']);

    createTables();
}

function createTables(){ //creates the 4 tables with the 4 groups
    createTable(groupA, 'A');
    createTable(groupB, 'B');
    createTable(groupC, 'C');
    createTable(groupD, 'D');
}

let ascendingRankA, ascendingRankB, ascendingRankC, ascendingRankD = true;
let ascendingNameA, ascendingNameB, ascendingNameC, ascendingNameD = false;
let ascendingWinsA, ascendingWinsB, ascendingWinsC, ascendingWinsD = false;
let ascendingTimeA, ascendingTimeB, ascendingTimeC, ascendingTimeD = false;
let ascendingLossesA, ascendingLossesB, ascendingLossesC, ascendingLossesD = false;

function createTable(teams, tableOfChoice) { //creates a table with the desired info from each team. teams - the array of teams in specific group. tableOfChoice - the table to be selected which is hardcoded when the function is called in html.
    tableBody = document.querySelector(selectedTable(tableOfChoice));

    let previousTeamWins = -1;
    tableBody.replaceChildren();
    teams.forEach((team) => { //creates every team in the table with the data from the JSON.
        let row = document.createElement('tr');
        let td = document.createElement('td');
        let link = document.createElement('a');
        link.classList.add('team-link');
        let logo = document.createElement('img');
        logo.classList.add('logo-standings');

        td.classList.add('has-text-weight-bold');
        if(team.W == previousTeamWins){
            td.textContent = '-';
        }
        else{
            td.textContent = team.rank;
        }
        row.appendChild(td);

        td = document.createElement('td');
        logo.src = 'images/' + team.id + '.png';
        if(team.id === 6 || team.id === 7 || team.id === 8 || team.id === 13 || team.id === 16){ //dark variants of logos
            logo.src = 'images/' + team.id + 'dark.png';
        }
        td.appendChild(logo);
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

        team.duration = Math.round(totalDuration/count); //rounds the number before putting it into the team's duration

        let seconds = -1;
        if(team.duration % 60 < 10 && team.duration % 60 > 0){ //converts seconds into mm:ss format
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
        } else if(data === 'losses'){
            if(ascendingLossesA){
                ascendingLossesA = false;
                groupA = groupA.sort((teamA, teamB) => (teamA.L - teamB.L));
            } else {
                ascendingLossesA = true;
                groupA = groupA.sort((teamA, teamB) => (teamB.L - teamA.L));
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
        } else if(data === 'losses'){
            if(ascendingLossesB){
                ascendingLossesB = false;
                groupB = groupB.sort((teamA, teamB) => (teamA.L - teamB.L));
            } else {
                ascendingLossesB = true;
                groupB = groupB.sort((teamA, teamB) => (teamB.L - teamA.L));
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
        } else if(data === 'losses'){
            if(ascendingLossesC){
                ascendingLossesC = false;
                groupC = groupC.sort((teamA, teamB) => (teamA.L - teamB.L));
            } else {
                ascendingLossesC = true;
                groupC = groupC.sort((teamA, teamB) => (teamB.L - teamA.L));
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
        } else if(data === 'losses'){
            if(ascendingLossesD){
                ascendingLossesD = false;
                groupD = groupD.sort((teamA, teamB) => (teamA.L - teamB.L));
            } else {
                ascendingLossesD = true;
                groupD = groupD.sort((teamA, teamB) => (teamB.L - teamA.L));
            }
        }
    }
    /*sorts only a specific table depending on which header in which table was clicked*/
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

function start(){ //code called on start of teamPage to load unique name, stats, games, and logo
    let teams = JSON.parse(localStorage.getItem('everyTeam'));
    let params = (new URL(document.location)).searchParams;

    teams = teams.filter(team => team.id == params.get('id'));
    document.querySelector('#title').textContent = teams[0].name;
    document.querySelector('#name').textContent = teams[0].name;
    createTeamGames(teams);

    let imgLink = document.querySelector('#team-logo-head');
    imgLink.src = 'images/' + teams[0].id + '.png';
}

function createTeamGames(teams) { //creates and displays the cards for ONE specific team, called when clicking on a team from the standings page. teams - sorted array of teams, with teams[0] being the desired team.
    gameSect = document.querySelector('#gamesC1');

    let gameColumns = document.getElementById('game-columns');

    let column1 = document.createElement('div');
    let column2 = document.createElement('div');
    let column3 = document.createElement('div');

    column1.classList.add('column', 'is-4');
    column2.classList.add('column', 'is-4');
    column3.classList.add('column', 'is-4');
    
    column1.setAttribute('id', 'gamesC1');
    column2.setAttribute('id', 'gamesC2');
    column3.setAttribute('id', 'gamesC3');

    gameColumns.append(column1);
    gameColumns.append(column2);
    gameColumns.append(column3);

    let totalGameCount = 1;
    let count = 0;

    teams[0].games.forEach(() => {
        let card = document.createElement('div');
        card.classList.add('card', 'card-content', 'my-5', 'team-games');

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

        if(totalGameCount > ((paginationLimit * currentPage) - paginationLimit) && totalGameCount <= (paginationLimit * currentPage)){
            card.append(outcome);
            card.append(datePlayed);
            gameSect.appendChild(card);
        }

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

    if(!tabsCreated){
        //headerStats(teams); //since this if statment only happens at the beginning, calls this function in here so it doesn't duplicate.
        createPaginationTabs(totalGameCount); //calls createPaginationTabs with the total # of games played.
        tabsCreated = true;
    }
}

function createColumns(){
    
}

function headerStats(teams){ //Adds cards with the teams W/L stats in the header
    sectHero = document.querySelector('section');

    // columns = document.createElement('div');
    // div.classList.add('columns');

    let winCard = document.createElement('div');
    winCard.classList.add('card', 'card-content', 'my-5', 'team-games', 'has-background-white');

    let lossCard = document.createElement('div');
    lossCard.classList.add('card', 'card-content', 'my-5', 'team-games', 'has-background-white');

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

function hide(){ //hides the red popup when X is clicked
    let popup = document.querySelector("article");
    popup.remove();
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
        msg.textContent = 'Welcome, Admin!';

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

function changeWLSelect(outcome){ //changes whether win or loss button is selected.
    let win = document.getElementById('outcome-win');
    let loss = document.getElementById('outcome-loss');

    if(outcome === 'w'){
        if(win.classList[2] === 'is-outlined'){
            win.classList.remove('is-outlined');
            if(loss.classList[2] !== 'is-outlined'){
                loss.classList.add('is-outlined');
            }
        }
    } else if(outcome === 'l') {
        if(loss.classList[2] === 'is-outlined'){
            loss.classList.remove('is-outlined');
            if(win.classList[2] !== 'is-outlined'){
                win.classList.add('is-outlined');
            }
        }
    }
}

function canSubmit(){ //checks if all fields have proper information and un-disables the submit button.
    if(checkAdminName() && checkTeamTag() && checkOppTeamTag() && checkDuration() && checkDateEntered()){
        if(document.getElementById('outcome-win').classList[2] === 'is-outlined' && document.getElementById('outcome-loss').classList[2] === 'is-outlined'){
            window.alert('Please indicate the outcome of the game.');
        } else if(document.getElementById('outcome-win').classList[2] !== 'is-outlined'){
            submit('w');
        } else {
            submit('l');
        }
    } else {
        window.alert('Please enter all necessary information.');
    }
}

function clear1(){ //clears the text fields, un-highlights the buttons, and makes another check to change messages. 
    let name = document.getElementById('name');
    let team = document.getElementById('team');
    let opp = document.getElementById('opp');
    let dur = document.getElementById('dur');
    let date = document.getElementById('date');

    let win = document.getElementById('outcome-win');
    let loss = document.getElementById('outcome-loss');

    name.value = '';
    team.value = '';
    opp.value = '';
    dur.value = '';
    date.value = '';

    if(name.classList.contains('is-danger')){
        name.classList.remove('is-danger');
    } else if(name.classList.contains('is-success')){
        name.classList.remove('is-success');
    }
    document.getElementById('name-msg').querySelector('p').remove();

    if(team.classList.contains('is-danger')){
        team.classList.remove('is-danger');
    } else if(team.classList.contains('is-success')){
        team.classList.remove('is-success');
    }
    document.getElementById('team-msg').querySelector('p').remove();

    if(opp.classList.contains('is-danger')){
        opp.classList.remove('is-danger');
    } else if(opp.classList.contains('is-success')){
        opp.classList.remove('is-success');
    }
    document.getElementById('opp-msg').querySelector('p').remove();

    if(dur.classList.contains('is-danger')){
        dur.classList.remove('is-danger');
    } else if(dur.classList.contains('is-success')){
        dur.classList.remove('is-success');
    }
    document.getElementById('dur-msg').querySelector('p').remove();

    if(date.classList.contains('is-danger')){
        date.classList.remove('is-danger');
    } else if(date.classList.contains('is-success')){
        date.classList.remove('is-success');
    }
    document.getElementById('date-msg').querySelector('p').remove();

    if(!win.classList.contains('is-outlined')){
        win.classList.add('is-outlined');
    } else if(!loss.classList.contains('is-outlined')){
        loss.classList.add('is-outlined');
    }
}

function submit(outcome){ //pushes the information to the localStorage to update stats
    //{gameId : 1, opp : 2, win : true, duration : 1915, date : '10-07'}
    let teamTag = document.getElementById('team').value;
    let opponent = document.getElementById('opp').value;
    let dur = document.getElementById('dur').value;
    let datePlayed = document.getElementById('date').value;
    let wL;

    let teams = JSON.parse(localStorage.getItem('everyTeam'));

    if(outcome === 'w'){ //win or loss for the team
        wL = true;
    } else {
        wL = false;
    }

    convertedDuration = parseInt(dur.substring(0, 2)) * 60 + parseInt(dur.substring(3)); //converts mm:ss to seconds

    let countTeam = 1;
    let foundTeam = false;
    teams.forEach((team) => { //this for loop searches for the id of the team entered on the admin page. It is used when creating a new game for the opponent.
        if(team.tag === teamTag.toUpperCase()){
            foundTeam = true;
        }
        if(!foundTeam){
            countTeam++;
        }
    })

    let countOpp = 1;
    let foundOpp = false;
    teams.forEach((opp) => { //this for loop obtains the id of the team entered for the opponent on admin page and updates the opponent's scores and games.
        if(opp.tag === opponent.toUpperCase()){
            let newObj = {gameId : 1, opp : countTeam, win : !wL, duration : convertedDuration, date : datePlayed.substring(5)};
            opp.games.push(newObj);
            let updatedOpp = {};
            updatedOpp['name'] = opp.name;
            updatedOpp['id'] = opp.id;
            updatedOpp['tag'] = opp.tag;
            if(outcome === 'w'){ //outcome is used for the team entered. If the team wins, then the opponent loses and vice versa, so code is switched.
                updatedOpp['L'] = opp.L + 1;
                updatedOpp['W'] = opp.W;
            } else {
                updatedOpp['W'] = opp.W + 1;
                updatedOpp['L'] = opp.L;
            }
            updatedOpp['rank'] = opp.rank;
            updatedOpp['duration'] = 0;
            updatedOpp['games'] = opp.games;

            teams.splice(opp.id - 1, 1, updatedOpp);
            everyTeam = teams;
            localStorage.setItem('everyTeam', JSON.stringify(everyTeam));

            if(opp.id > 0 && opp.id < 5){ 
                groupA = JSON.parse(localStorage['teamsGroupA']);
                groupA.splice(opp.id - 1, 1, updatedOpp);
                teamsGroupA = groupA;
                localStorage.setItem('teamsGroupA', JSON.stringify(teamsGroupA));
            } else if(opp.id > 4 && opp.id < 9){ 
                groupB = JSON.parse(localStorage['teamsGroupB']);
                groupB.splice(opp.id - 5, 1, updatedOpp);
                teamsGroupB = groupB;
                localStorage.setItem('teamsGroupB', JSON.stringify(teamsGroupB));
            } else if(opp.id > 8 && opp.id < 13){ 
                groupC = JSON.parse(localStorage['teamsGroupC']);
                groupC.splice(opp.id - 9, 1, updatedOpp);
                teamsGroupC = groupC;
                localStorage.setItem('teamsGroupC', JSON.stringify(teamsGroupC));
            } else {
                groupD = JSON.parse(localStorage['teamsGroupD']);
                groupD.splice(opp.id - 13, 1, updatedOpp);
                teamsGroupD = groupD;
                localStorage.setItem('teamsGroupD', JSON.stringify(teamsGroupD));
            }
            foundOpp = true;
        }
        if(!foundOpp){
            countOpp++;
        }
    })

    teams.forEach((team) => {
        if(team.tag === teamTag.toUpperCase()){
            let newObj = {gameId : 1, opp : countOpp, win : wL, duration : convertedDuration, date : datePlayed.substring(5)};
            team.games.push(newObj);

            let updatedTeam = {}; //creation of the team with the updated stats to be pushed back into localStorage for the array with all teams and their specific group
            updatedTeam['name'] = team.name;
            updatedTeam['id'] = team.id;
            updatedTeam['tag'] = team.tag;
            if(outcome === 'w'){
                updatedTeam['W'] = team.W + 1;
                updatedTeam['L'] = team.L;
            } else {
                updatedTeam['L'] = team.L + 1;
                updatedTeam['W'] = team.W;
            }
            updatedTeam['rank'] = team.rank;
            updatedTeam['duration'] = 0;
            updatedTeam['games'] = team.games;

            teams.splice(team.id - 1, 1, updatedTeam);
            everyTeam = teams;
            localStorage.setItem('everyTeam', JSON.stringify(everyTeam));

            if(team.id > 0 && team.id < 5){ //if the team is in group A (ids 1-4)
                groupA = JSON.parse(localStorage['teamsGroupA']);
                groupA.splice(team.id - 1, 1, updatedTeam);
                teamsGroupA = groupA;
                localStorage.setItem('teamsGroupA', JSON.stringify(teamsGroupA));
            } else if(team.id > 4 && team.id < 9){ //if the team is in group B (ids 5-8)
                groupB = JSON.parse(localStorage['teamsGroupB']);
                groupB.splice(team.id - 5, 1, updatedTeam);
                teamsGroupB = groupB;
                localStorage.setItem('teamsGroupB', JSON.stringify(teamsGroupB));
            } else if(team.id > 8 && team.id < 13){ //if the team is in group C (ids 9-12)
                groupC = JSON.parse(localStorage['teamsGroupC']);
                groupC.splice(team.id - 9, 1, updatedTeam);
                teamsGroupC = groupC;
                localStorage.setItem('teamsGroupC', JSON.stringify(teamsGroupC));
            } else { //if the team is in grouop D (ids 13-16)
                groupD = JSON.parse(localStorage['teamsGroupD']);
                groupD.splice(team.id - 13, 1, updatedTeam);
                teamsGroupD = groupD;
                localStorage.setItem('teamsGroupD', JSON.stringify(teamsGroupD));
            }
        }

    })
    
}

//code below for games.html | the functions relating to pagination are also used by teamGames.html

function startGames(){
    let teams = JSON.parse(localStorage.getItem('everyTeam'));
    createAllTeamGames(teams, false);
}

function createAllTeamGames(teams, dateSort) {  //creates every game from every team and displays them based on pagination system. teams - list of all teams. dateSort - T/F variable on whether the cards should be sorted by date.
    if(dateSort && !sortingByDate){ //code to replace the games with games within the specificed date range. Will only call once for the same date range.
        deleteGames();
        let oldLi = document.querySelectorAll('li');
        oldLi.forEach((li) => {
            li.remove();
        })
        tabsCreated = false;
        sortingByDate = true;
    }
    
    let gameColumns = document.getElementById('game-columns');

    let column1 = document.createElement('div');
    let column2 = document.createElement('div');
    let column3 = document.createElement('div');

    column1.classList.add('column', 'is-4');
    column2.classList.add('column', 'is-4');
    column3.classList.add('column', 'is-4');
    
    column1.setAttribute('id', 'gamesC1');
    column2.setAttribute('id', 'gamesC2');
    column3.setAttribute('id', 'gamesC3');

    gameColumns.append(column1);
    gameColumns.append(column2);
    gameColumns.append(column3);

    gameSect = document.querySelector('#gamesC1');
    let displayedIds = [];
    let totalGameCount = 1;

    teams.forEach((team) => {
        let count = 0;
        team.games.forEach(() => {
            if(!displayedIds.includes(team.games[count].gameId)){
                displayedIds.push(team.games[count].gameId);
                let card = document.createElement('div');
                card.classList.add('card', 'card-content', 'my-5', 'team-games');
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

                let date = team.games[count].date;
                date = '2022-' + date;
        
                outcome.textContent = scoreline;
                datePlayed.textContent = date;

                if(dateSort){
                    let date1 = document.getElementById('date1').value;
                    let date2 = document.getElementById('date2').value;
                    if((parseInt(date.substring(5, 7)) > parseInt(date1.substring(5, 7)) || parseInt(date.substring(5, 7)) == parseInt(date1.substring(5, 7))) && (parseInt(date.substring(5, 7)) < parseInt(date2.substring(5, 7)) || parseInt(date.substring(5, 7)) == parseInt(date2.substring(5, 7)))){
                        if((parseInt(date.substring(8)) > parseInt(date1.substring(8)) || parseInt(date.substring(8)) == parseInt(date1.substring(8))) && (parseInt(date.substring(8)) < parseInt(date2.substring(8)) || parseInt(date.substring(8)) == parseInt(date2.substring(8)))){
                            if(totalGameCount > ((paginationLimit * currentPage) - paginationLimit) && totalGameCount <= (paginationLimit * currentPage)){ //display the games in intervals of nine
                                card.append(outcome); 
                                card.append(datePlayed);
                                gameSect.appendChild(card);
                                /*Code that cycles through the columns when adding a game to the page*/
                                if(gameSect == document.querySelector('#gamesC1')){
                                    gameSect = document.querySelector('#gamesC2');
                                } else if(gameSect == document.querySelector('#gamesC2')){
                                    gameSect = document.querySelector('#gamesC3');
                                } else{
                                    gameSect = document.querySelector('#gamesC1');
                                }
                            }
                            totalGameCount++;
                        }
                    }
                } else {
                    if(totalGameCount > ((paginationLimit * currentPage) - paginationLimit) && totalGameCount <= (paginationLimit * currentPage)){ //display the games in intervals of nine
                        card.append(outcome); 
                        card.append(datePlayed);
                        gameSect.appendChild(card);
                    }
                    totalGameCount++;
                    if(gameSect == document.querySelector('#gamesC1')){
                        gameSect = document.querySelector('#gamesC2');
                    } else if(gameSect == document.querySelector('#gamesC2')){
                        gameSect = document.querySelector('#gamesC3');
                    } else{
                        gameSect = document.querySelector('#gamesC1');
                    }
                }
        }
            count++;
        })
    })

    if(!tabsCreated){
        createPaginationTabs(totalGameCount); //calls createPaginationTabs with the total # of games played.
        tabsCreated = true;
    }
}

function deleteGames(){
    let column1 = document.getElementById('gamesC1');
    let column2 = document.getElementById('gamesC2');
    let column3 = document.getElementById('gamesC3');
    column1.remove();
    column2.remove();
    column3.remove();
}

function createPaginationTabs(totalGameCount){ //creates the page # selectors for pagination. totalGameCount - param that holds the total number of games played.
    let pageCount = Math.ceil(totalGameCount / paginationLimit);
    let ul = document.querySelector('ul'); //creation of the list to store the buttons

    //creates the left arrow
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.classList.add('pagination-link');
    a.addEventListener('click', ()=>{if(currentPage != 1){setCurrentPage(currentPage - 1)}});
    a.textContent = '«';
    li.append(a);
    ul.append(li);  

    //creates the numbered pages
    for(i=0; i<pageCount; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.classList.add('pagination-link');
        a.addEventListener('click', ()=>{setCurrentPage(Number(a.textContent))});
        a.textContent = i+1;
        li.append(a);
        ul.append(li);  
    }

    //creates the right arrow
    li = document.createElement('li');
    a = document.createElement('a');
    a.classList.add('pagination-link');
    a.addEventListener('click', ()=>{if(currentPage != pageCount){setCurrentPage(currentPage + 1)}});
    a.textContent = '»';
    li.append(a);
    ul.append(li); 

    activePageNumber();
}

function setCurrentPage(pageNum){
    let teams = JSON.parse(localStorage.getItem('everyTeam'));
    let params = (new URL(document.location)).searchParams;

    currentPage = pageNum;
    activePageNumber();
    deleteGames();

    if(document.URL.includes('games.html')){
        if(sortingByDate){
            createAllTeamGames(teams, true);
        } else {
            createAllTeamGames(teams, false);
        }
    } else if(document.URL.includes('teamPage.html')){
        teams = teams.filter(team => team.id == params.get('id'));
        createTeamGames(teams);
    }
}

function activePageNumber(){
    document.querySelectorAll('a.pagination-link').forEach((a) => {
        if(a.classList.contains('has-text-white')){
            a.classList.replace('tan-background', 'has-background-white');
            a.classList.remove('has-text-light', 'has-text-black');
        }
        if(a.textContent == currentPage){
            if(!a.classList.contains('tan-background')){
                a.classList.add('has-background-white');
                a.classList.add('has-text-black');
            }
            a.classList.replace('has-background-white', 'tan-background');
            a.classList.replace('has-text-black', 'has-text-white');
        } else {
            a.classList.add('has-background-white');
            a.classList.add('has-text-black');
        }
    })
}

function dateRange(){
    let date1 = document.getElementById('date1').value;
    let date2 = document.getElementById('date2').value;
    
    if(date1.length == 10 && date1.substring(0, 1) != 0 && date2.length == 10 && date2.substring(0, 1) != 0){
        if(parseInt(date1.substring(0, 4)) > parseInt(date2.substring(0, 4)) || parseInt(date1.substring(5, 7)) > parseInt(date2.substring(5, 7)) || parseInt(date1.substring(8)) > parseInt(date2.substring(8))) {
            window.alert('Please enter a valid date range!');
        }
    }
}

function submitDateRange(){ //submits the date range to filter games. Does not let you submit if both dates aren't fully entered
    let date1 = document.getElementById('date1').value;
    let date2 = document.getElementById('date2').value;
    let teams = JSON.parse(localStorage.getItem('everyTeam'));

    if(date1.length < 10 || date2.length < 10){
        window.alert('To sort by date, enter the starting date on the left and the ending date on the right!');
    } else {
        createAllTeamGames(teams, true);
    }
}




