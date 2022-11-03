let teamData;

function getTeams() {
   teamData = JSON.parse(localStorage['teams']);
}

let teamsGroupA = [];
let teamsGroupB = [];
let teamsGroupC = [];
let teamsGroupD = [];

let team = {};
team['name'] = '100 Thieves';
team['id'] = 'D4';
team['tag'] = '100';
team['W'] = 1;
team['L'] = 5;
team['winrate'] = 17;
team['duration'] = 0;
team['killsPerGame'] = 8.8;
team['goldDiffPerMin'] = -264;
team['games'] = [{'opp': 'CFO'}, {'opp': 'GEN'}, {'opp': 'RNG'}, {'opp': 'CFO'}, {'opp': 'RNG'}, {'opp': 'GEN'}, ];
teamsGroupD.push(team);

let team = {};
team['name'] = 'Cloud9';
team['id'] = 'A4';
team['tag'] = 'C9';
team['W'] = 1;
team['L'] = 5;
team['winrate'] = 17;
team['duration'] = 0;
team['killsPerGame'] = 6.7;
team['goldDiffPerMin'] = -360;
team['games'] = [{'opp': 'FNC'}, {'opp': 'EDG'}, {'opp': 'T1'}, {'opp': 'FNC'}, {'opp': 'EDG'}, {'opp': 'T1'}, ];
teamsGroupA.push(team);    

let team = {};
team['name'] = 'CTBC Flying Oyster';
team['id'] = 'D3';
team['tag'] = 'CFO';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupD.push(team);  

let team = {};
team['name'] = 'DRX';
team['id'] = 'C1';
team['tag'] = 'DRX';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupC.push(team);  

let team = {};
team['name'] = 'DWG KIA';
team['id'] = 'B2';
team['tag'] = 'DK';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupB.push(team);  

let team = {};
team['name'] = 'Edward Gaming';
team['id'] = 'A2';
team['tag'] = 'EDG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupA.push(team);  

let team = {};
team['name'] = 'Evil Geniuses';
team['id'] = 'B3';
team['tag'] = 'EG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupB.push(team);  

let team = {};
team['name'] = 'Fnatic';
team['id'] = 'A3';
team['tag'] = 'FNC';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupA.push(team);  

let team = {};
team['name'] = 'G2 Esports';
team['id'] = 'B4';
team['tag'] = 'G2';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupB.push(team); 

let team = {};
team['name'] = 'GAM Esports';
team['id'] = 'C4';
team['tag'] = 'GAM';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupC.push(team); 

let team = {};
team['name'] = 'Gen. G eSports';
team['id'] = 'D1';
team['tag'] = 'GEN';
team['W'] = 10;
team['L'] = 6;
team['winrate'] = 63;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 111;
team['games'] = [{
        'opp': 14
    }, {
        'opp': 1
    }];
teamsGroupD.push(team); 

let team = {};
team['name'] = 'JD Gaming';
team['id'] = 'B1';
team['tag'] = 'JDG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupB.push(team); 

let team = {};
team['name'] = 'Rogue';
team['id'] = 'C1';
team['tag'] = 'RGE';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupC.push(team); 

let team = {};
team['name'] = 'Royal Never Give Up';
team['id'] = 'D2';
team['tag'] = 'RNG';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupD.push(team); 

let team = {};
team['name'] = 'T1';
team['id'] = 'A1';
team['tag'] = 'T1';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupA.push(team); 

let team = {};
team['name'] = 'Top Esports';
team['id'] = 'C3';
team['tag'] = 'TES';
team['W'] = 0;
team['L'] = 0;
team['winrate'] = 0;
team['duration'] = 0;
team['killsPerGame'] = 0;
team['goldDiffPerMin'] = 0;
team['games'] = [{
        'opp': 1
    }, {
        'opp': 2
    }];
teamsGroupC.push(team); 

