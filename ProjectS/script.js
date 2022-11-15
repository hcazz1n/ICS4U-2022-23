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
let ascendingWinsA, ascendingWinsB, ascendingWinsC, ascendingWinsD = false;

function createTable(teams, tableOfChoice) {
    tableBody = document.querySelector(selectedTable(tableOfChoice));

    let previousTeamWins = -1;
    let firstTeam = true;
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
        td.textContent = ((team.W / (team.W + team.L)) * 100).toFixed(2) + "%";
        row.appendChild(td);

        tableBody.appendChild(row);

        previousTeamWins = team.W;
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
        } else if(data === 'wins'){
            if(ascendingWinsA){
                ascendingWinsA = false;
                groupA = groupA.sort((teamA, teamB) => (teamA.W - teamB.W));
            } else {
                ascendingWinsA = true;
                groupA = groupA.sort((teamA, teamB) => (teamB.W - teamA.W));
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
    document.querySelector('#title').textContent = teams[0].name;
    document.querySelector('#name').textContent = teams[0].name;
    createTeamGames(teams);

    let imgLink = document.querySelector('#team-logo-head');
    imgLink.src = 'images/' + teams[0].id + '.png';

}

function createTeamGames(teams) { 
    gameSect = document.querySelector('#games');

    let count = 0;

    teams[0].games.forEach((game) => {

        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('card-content');
        card.classList.add('my-5');
        card.classList.add('team-games');
        
        let insideCard = teams[0].tag;
        if(teams[0].games[count].win == true){
            insideCard = insideCard + ' | ' + '1' + '-' + '0' + ' | ';
        } else {
            insideCard = insideCard + ' | ' + '0' + '-' + '1' + ' | ';
        }

        let idEnemyTeam = teams[0].games[count].opp;

        teamList = JSON.parse(localStorage.getItem('everyTeam'));
        insideCard = insideCard + teamList[idEnemyTeam - 1].tag;
        console.log(insideCard);
        count++;

        card.textContent = insideCard;

        gameSect.appendChild(card);
    })

}

//functions for the navbar

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
            msg.classList.add("is-success");
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
            msg.classList.add("is-success");
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
