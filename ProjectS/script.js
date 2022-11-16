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
team['duration'] = 1915;
team['killsPerGame'] = 0;
team['games'] = [{opp : 2, win : true}, {opp : 3, win : false}, {opp : 4, win : true}, {opp : 3, win : true}, {opp : 4, win : true}, {opp : 2, win : true}];
teamsGroupA.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'Edward Gaming';
team['id'] = 2;
team['tag'] = 'EDG';
team['W'] = 4;
team['L'] = 2;
team['rank'] = 2;
team['duration'] = 2008;
team['killsPerGame'] = 0;
team['games'] = [{opp : 1, win : false}, {opp : 4, win : true}, {opp : 3, win : true}, {opp : 4, win : true}, {opp : 3, win : true}, {opp : 1, win : false}];
teamsGroupA.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'Fnatic';
team['id'] = 3;
team['tag'] = 'FNC';
team['W'] = 2;
team['L'] = 4;
team['rank'] = 3;
team['duration'] = 1849;
team['killsPerGame'] = 0;
team['games'] = [{opp : 4, win : true}, {opp : 1, win : true}, {opp : 2, win : false}, {opp : 4, win : false}, {opp : 1, win : false}, {opp : 2, win : false}];
teamsGroupA.push(team);  
everyTeam.push(team);

team = {};
team['name'] = 'Cloud9';
team['id'] = 4;
team['tag'] = 'C9';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 4;
team['duration'] = 1632;
team['killsPerGame'] = 0;
team['games'] = [{opp : 3, win : false}, {opp : 2, win : false}, {opp : 1, win : false}, {opp : 3, win : true}, {opp : 2, win : false}, {opp : 1, win : false}];
teamsGroupA.push(team);   
everyTeam.push(team);

team = {};
team['name'] = 'JD Gaming';
team['id'] = 5;
team['tag'] = 'JDG';
team['W'] = 6;
team['L'] = 1;
team['rank'] = 1;
team['duration'] = 1884;
team['killsPerGame'] = 0;
team['games'] = [{opp : 7, win : true}, {opp : 6, win : true}, {opp : 8, win : true}, {opp : 7, win : true}, {opp : 8, win : true}, {opp : 6, win : false}, {opp : 6, win : true}];
teamsGroupB.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'DWG KIA';
team['id'] = 6;
team['tag'] = 'DK';
team['W'] = 5;
team['L'] = 2;
team['rank'] = 2;
team['duration'] = 1896;
team['killsPerGame'] = 0;
team['games'] = [{opp : 7, win : true}, {opp : 6, win : false}, {opp : 8, win : true}, {opp : 7, win : true}, {opp : 8, win : true}, {opp : 6, win : true},{opp : 6, win : false}]; 
teamsGroupB.push(team);  
everyTeam.push(team);

team = {};
team['name'] = 'Evil Geniuses';
team['id'] = 7;
team['tag'] = 'EG';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 3;
team['duration'] = 1725;
team['killsPerGame'] = 0;
team['games'] = [{opp : 6, win : false}, {opp : 8, win : false}, {opp : 7, win : false}, {opp : 8, win : true}, {opp : 6, win : false}, {opp : 7, win : false}];
teamsGroupB.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'G2 Esports';
team['id'] = 8;
team['tag'] = 'G2';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 4;
team['duration'] = 1808;
team['killsPerGame'] = 0;
team['games'] = [{opp : 6, win : false}, {opp : 7, win : true}, {opp : 5, win : false}, {opp : 7, win : false}, {opp : 6, win : false}, {opp : 5, win : false}];
teamsGroupB.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'DRX';
team['id'] = 9;
team['tag'] = 'DRX';
team['W'] = 5;
team['L'] = 2;
team['rank'] = 1;
team['duration'] = 2068;
team['killsPerGame'] = 0;
team['games'] = [{opp : 10, win : false}, {opp : 11, win : true}, {opp : 12, win : true}, {opp : 10, win : true}, {opp : 12, win : true}, {opp : 11, win : false}, {opp : 10, win : true}];
teamsGroupC.push(team);   
everyTeam.push(team);

team = {};
team['name'] = 'Rogue';
team['id'] = 10;
team['tag'] = 'RGE';
team['W'] = 4;
team['L'] = 3;
team['rank'] = 2;
team['duration'] = 1860;
team['killsPerGame'] = 0;
team['games'] = [{opp : 9, win : true}, {opp : 12, win : true}, {opp : 11, win : true}, {opp : 12, win : true}, {opp : 9, win : false}, {opp : 11, win : false}, {opp : 9, win : false}];
teamsGroupC.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'Top Esports';
team['id'] = 11;
team['tag'] = 'TES';
team['W'] = 3;
team['L'] = 3;
team['rank'] = 3;
team['duration'] = 1890;
team['killsPerGame'] = 0;
team['games'] = [{opp : 12, win : true}, {opp : 9, win : false}, {opp : 10, win : false}, {opp : 12, win : false}, {opp : 10, win : true}, {opp : 9, win : true}];
teamsGroupC.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'GAM Esports';
team['id'] = 12;
team['tag'] = 'GAM';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 4;
team['duration'] = 1897;
team['killsPerGame'] = 0;
team['games'] = [{opp : 11, win : false}, {opp : 10, win : false}, {opp : 9, win : false}, {opp : 10, win : false}, {opp : 11, win : true}, {opp : 9, win : false}];
teamsGroupC.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'Gen. G eSports';
team['id'] = 13;
team['tag'] = 'GEN';
team['W'] = 6;
team['L'] = 1;
team['rank'] = 1;
team['duration'] = 1884;
team['killsPerGame'] = 0;
team['games'] = [{opp : 14, win : false}, {opp : 16, win : true}, {opp : 15, win : true}, {opp : 15, win : true}, {opp : 16, win : true}, {opp : 14, win : true}, {opp : 14, win : true}];
teamsGroupD.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'Royal Never Give Up';
team['id'] = 14;
team['tag'] = 'RNG';
team['W'] = 5;
team['L'] = 2;
team['rank'] = 2;
team['duration'] = 1895;
team['killsPerGame'] = 0;
team['games'] = [{opp : 13, win : true}, {opp : 15, win : true}, {opp : 16, win : true}, {opp : 16, win : true}, {opp : 15, win : true}, {opp : 13, win : false}, {opp : 13, win : false}];
teamsGroupD.push(team); 
everyTeam.push(team);

team = {};
team['name'] = 'CTBC Flying Oyster';
team['id'] = 15;
team['tag'] = 'CFO';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 3;
team['duration'] = 1902;
team['killsPerGame'] = 0;
team['games'] = [{opp : 16, win : true}, {opp : 14, win : false}, {opp : 13, win : false}, {opp : 16, win : false}, {opp : 13, win : false}, {opp : 14, win : false}];
teamsGroupD.push(team); 
everyTeam.push(team);

team = {};
team['name'] = '100 Thieves';
team['id'] = 16;
team['tag'] = '100';
team['W'] = 1;
team['L'] = 5;
team['rank'] = 4;
team['duration'] = 1844;
team['killsPerGame'] = 8.8;
team['games'] = [{opp : 15, win : false}, {opp : 13, win : false}, {opp : 14, win : false}, {opp : 15, win : true}, {opp : 14, win : false}, {opp : 13, win : false}];
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
        td.textContent = ((team.W / (team.W + team.L)) * 100).toFixed(1) + "%";
        row.appendChild(td);

        td = document.createElement('td');

        let seconds = -1;
        if(team.duration % 60 < 10 && team.duration % 60 > 0){
            seconds = '0' + team.duration % 60;
        }else if(team.duration % 60 === 0){
            seconds = team.duration % 60 + '0';
        }else{
            seconds = team.duration % 60;
        }

        td.textContent = parseInt(team.duration / 60) + ':' + seconds;
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

function checkDuration(){
    let canSubmit = false;

    let teams = JSON.parse(localStorage.getItem('everyTeam'));
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
        msg.classList.add("is-success");
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
