const express = require('express');
const app = express();

app.use(express.json())

let heroes = [
    {
      "name": "Ana",
      "role": "support",
      "id": 1
    },
    {
      "name": "Mercy",
      "role": "support",
      "id": 2
    },
    {
      "name": "Baptiste",
      "role": "support",
      "id": 3
    },
    {
      "name": "Lucio",
      "role": "support",
      "id": 4
    },
    {
      "name": "Moira",
      "role": "support",
      "id": 5
    },
    {
      "name": "Brigitte",
      "role": "support",
      "id": 6
    },
    {
      "name": "Zenyatta",
      "role": "support",
      "id": 18
    },
    {
      "name": "Reinhart",
      "role": "tank",
      "id": 7
    },
    {
      "name": "D.va",
      "role": "tank",
      "id": 8
    },
    {
      "name": "Orisa",
      "role": "tank",
      "id": 9
    },
    {
      "name": "Zarya",
      "role": "tank",
      "id": 10
    },
    {
      "name": "Roadhog",
      "role": "tank",
      "id": 11
    },
    {
      "name": "Wrecking Ball",
      "role": "tank",
      "id": 12
    },
    {
      "name": "Sigma",
      "role": "tank",
      "id": 13
    },
    {
      "name": "Winston",
      "role": "tank",
      "id": 14
    },
    {
      "name": "Mecree",
      "role": "dps",
      "id": 15
    },
    {
      "name": "Tracer",
      "role": "dps",
      "id": 16
    },
    {
      "name": "Ashe",
      "role": "dps",
      "id": 17
    },
    {
      "name": "Echo",
      "role": "dps",
      "id": 19
    },
    {
      "name": "Pharah",
      "role": "dps",
      "id": 20
    },
    {
      "name": "Soldier 76",
      "role": "dps",
      "id": 21
    },
    {
      "name": "Junkrat",
      "role": "dps",
      "id": 22
    },
    {
      "name": "Hanzo",
      "role": "dps",
      "id": 23
    },
    {
      "name": "Widowmaker",
      "role": "dps",
      "id": 24
    },
    {
      "name": "Genji",
      "role": "dps",
      "id": 25
    },
    {
      "name": "Torbjorn",
      "role": "dps",
      "id": 26
    },
    {
      "name": "Symmetra",
      "role": "dps",
      "id": 27
    },
    {
      "name": "Sombra",
      "role": "dps",
      "id": 28
    },
    {
      "name": "Mei",
      "role": "dps",
      "id": 29
    },
    {
      "name": "Bastion",
      "role": "dps",
      "id": 30
    },
    {
      "name": "Reaper",
      "role": "dps",
      "id": 31
    },
    {
      "name": "Doomfist",
      "role": "dps",
      "id": 32
    }
  ];

  let team = [
    {
      "name": "Doomfist",
      "role": "dps",
      "id": 32
    },
    {
      "name": "Sombra",
      "role": "dps",
      "id": 28
    },
    {
      "name": "Junkrat",
      "role": "dps",
      "id": 22
    }
  ];

app.get('/api/heroes', (request, response) => {
    response.json(heroes);
});

app.get('/api/team', (request, response) => {
    response.json(team);
});

app.get('/api/heroes/:id', (request, response) => {
    const id = Number(request.params.id);
    const hero = heroes.find(hero => hero.id === id);

    response.json(hero);
});

app.get('/api/team/:id', (request, response) => {
    const id = Number(request.params.id);
    const teamMember = team.find(hero => hero.id === id);

    (teamMember)
    ? response.json(teamMember)
    : response.status(404).end();
});

app.post('/api/team', (request, response) => {
    const body = request.body;
    console.log(body)
    
    if (!body.name) {
        return response.status(400).json({
            error : "content missing"
        })
    }

    const hero = {
        name: body.name,
        role: body.role,
        id: body.id
    };

    team = team.concat(hero);

    response.json(hero)
})

app.delete('/api/team/:id', (request, response) => {
    const id = Number(request.params.id);
    team = team.filter(hero => hero.id !== id);

    response.status(204).end();
});

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)