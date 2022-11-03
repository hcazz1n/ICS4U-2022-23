let teamData;

function getTeams() {
   teamData = JSON.parse(localStorage['teams']);
}


let teams = [];

let team = {};
team['name'] = '100 Thieves';
team['id'] = 1;
team['tag'] = '100';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);

let team = {};
team['name'] = 'Cloud9';
team['id'] = 2;
team['tag'] = 'C9';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);    

let team = {};
team['name'] = 'CTBC Flying Oyster';
team['id'] = 3;
team['tag'] = 'CFO';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'JD Gaming';
team['id'] = 12;
team['tag'] = 'JDG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
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
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'Beyond Gaming';
team['id'] = 17;
team['tag'] = 'BYG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'Chief Esports Club';
team['id'] = 18;
team['tag'] = 'CHF';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'Detonation FocusMe';
team['id'] = 19;
team['tag'] = 'DFM';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team);

let team = {};
team['name'] = 'Istanbul Wildcats';
team['id'] = 20;
team['tag'] = 'IW';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'Isurus';
team['id'] = 21;
team['tag'] = 'ISG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'LOUD';
team['id'] = 22;
team['tag'] = 'LLL';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'MAD Lions';
team['id'] = 23;
team['tag'] = 'MAD';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

let team = {};
team['name'] = 'Saigon Buffalo';
team['id'] = 24;
team['tag'] = 'SGB';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['kills'] = 0;
team['deaths'] = 0;
team['assists'] = 0;
team['duration'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teams.push(team); 

