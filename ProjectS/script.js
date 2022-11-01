let teamData;

function getTeams() {
   teamData = JSON.parse(localStorage['teams']);
}


let teams = [];

let team = {};
team['name'] = '100 Thieves';
team['id'] = 1;
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);

let team = {};
team['name'] = '100 Thieves';
team['id'] = 1;
team['W'] = 0;
team['L'] = 0;
team['percent'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);