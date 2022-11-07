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

ascendingRank = true;

function createTable(teams, tableOfChoice) {
    tableBody = document.querySelector(selectedTable(tableOfChoice));

    tableBody.replaceChildren();
    teams.forEach((team) => {
        let row = document.createElement('tr');
        let td = document.createElement('td');
        td.classList.add('has-text-weight-bold');
        td.textContent = team.rank;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = team.name + ' (' + team.tag + ')';
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

        td = document.createElement('GDM');
        td.textContent = team.GDM;
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

function sort(data){
    if(data === 'rank'){
        if(ascendingRank){
            console.log('apple');
            ascendingRank = false;
            data = teamsGroupA.sort((teamA, teamB) => (teamB.rank - teamA.rank));
        } else {
            ascendingRank = true;
            data = teamsGroupA.sort((teamA, teamB) => teamA.rank - teamB.rank);
        }
    }
}
