//The arrays of teams in Groups A-D

let groupA;
let groupB;
let groupC;
let groupD;

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

function createTable(teams, tableOfChoice) {
    tableBody = document.querySelector(selectedTable(tableOfChoice));

    tableBody.replaceChildren();
    teams.forEach((team) => {
        let row = document.createElement('tr');
        let td = document.createElement('td');
        let link = document.createElement('a');
        td.classList.add('has-text-weight-bold');
        td.textContent = team.rank;
        row.appendChild(td);

        td = document.createElement('td');
        link.href = 'teamPage.html?id=' + team.id;
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
        td.textContent = ((team.W / (team.W + team.L)) * 100).toFixed(2) + "%";
        row.appendChild(td);

        td = document.createElement('KPG');
        td.textContent = team.killsPerGame;
        row.appendChild(td);

        tableBody.appendChild(row);
    });
}

function selectedTable(table) {
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

function sort(data, table){
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

function start() {
    let teams = JSON.parse(localStorage.getItem('everyTeam'));
    let params = (new URL(document.location)).searchParams;

    teams = teams.filter(team => team.id == params.get('id'));
    document.querySelector('#test').textContent = teams[0].name;
}