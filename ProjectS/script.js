let teamData;

function getTeams() {
   teamData = JSON.parse(localStorage['teams']);
}


let teams = [];

let team = {};
team['name'] = '100 Thieves';
team['id'] = 1;
team['tag'] = '100';
team['W'] = 1;
team['L'] = 5;
team['winrate'] = 17;
team['killsPerGame'] = 8.8;
team['duration'] = 1819;
team['goldDiffPerMin'] = -264;
team['games'] = [{'opp': 'CFO'}, {'opp': 'GEN'}, {'opp': 'RNG'}, {'opp': 'CFO'}, {'opp': 'RNG'}, {'opp': 'GEN'}, ];
teams.push(team);

let team = {};
team['name'] = 'Cloud9';
team['id'] = 2;
team['tag'] = 'C9';
team['W'] = 1;
team['L'] = 5;
team['winrate'] = 17;
team['killsPerGame'] = 6.7;
team['duration'] = 1632;
team['goldDiffPerMin'] = -360;
team['games'] = [{'opp': 'FNC'}, {'opp': 'EDG'}, {'opp': 'T1'}, {'opp': 'FNC'}, {'opp': 'EDG'}, {'opp': 'T1'}, ];
teams.push(team);    

let team = {};
team['name'] = 'CTBC Flying Oyster';
team['id'] = 3;
team['tag'] = 'CFO';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);  

let team = {};
team['name'] = 'DRX';
team['id'] = 4;
team['tag'] = 'DRX';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);  

let team = {};
team['name'] = 'DWG KIA';
team['id'] = 5;
team['tag'] = 'DK';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);  

let team = {};
team['name'] = 'Edward Gaming';
team['id'] = 6;
team['tag'] = 'EDG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);  

let team = {};
team['name'] = 'Evil Geniuses';
team['id'] = 7;
team['tag'] = 'EG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);  

let team = {};
team['name'] = 'Fnatic';
team['id'] = 8;
team['tag'] = 'FNC';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);  

let team = {};
team['name'] = 'G2 Esports';
team['id'] = 9;
team['tag'] = 'G2';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'GAM Esports';
team['id'] = 10;
team['tag'] = 'GAM';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'Gen. G eSports';
team['id'] = 11;
team['tag'] = 'GEN';
team['W'] = 10;
team['L'] = 6;
team['winrate'] = 63;
team['killsPerGame'] = 0;


team['duration'] = 1884;
team['goldDiffPerMin'] = 111;
team['games'] = [{
        'opp': 14
    }, {
        'opp': 1
    }];
teams.push(team); 

let team = {};
team['name'] = 'JD Gaming';
team['id'] = 12;
team['tag'] = 'JDG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'Rogue';
team['id'] = 13;
team['tag'] = 'RGE';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'Royal Never Give Up';
team['id'] = 14;
team['tag'] = 'RNG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'T1';
team['id'] = 15;
team['tag'] = 'T1';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'Top Esports';
team['id'] = 16;
team['tag'] = 'TES';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['killsPerGame'] = 0;


team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

