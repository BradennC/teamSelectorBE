const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let heroes = [
  {
    "name": "Ana",
    "role": "support",
    "id": 1,
    "pic": "https://i.ytimg.com/vi/7goo_Km5TvU/maxresdefault.jpg"
  },
  {
    "name": "Mercy",
    "role": "support",
    "id": 2,
    "pic": "https://cdn.gamer-network.net/2016/usgamer/Overwatch-Guide-Mercy-Header.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/21-12-2017-overwatch-how-to-play-mercy.jpg"
  },
  {
    "name": "Baptiste",
    "role": "support",
    "id": 3,
    "pic": "https://assets.vg247.com/current//2019/02/overwatch_baptiste-screenshot-001-2-600x339.jpg"
  },
  {
    "name": "Lucio",
    "role": "support",
    "id": 4,
    "pic": "https://cdn1.dotesports.com/wp-content/uploads/2018/08/11174512/e40d2d95-b509-411f-8f4c-bf7f69e14bff.jpg"
  },
  {
    "name": "Moira",
    "role": "support",
    "id": 5,
    "pic": "https://cdnb.artstation.com/p/assets/images/images/008/455/617/large/gelar-esapria-kharisma-moira.jpg?1512915136"
  },
  {
    "name": "Brigitte",
    "role": "support",
    "id": 6,
    "pic": "https://d.newsweek.com/en/full/846959/brigitte.jpg"
  },
  {
    "name": "Zenyatta",
    "role": "support",
    "id": 18,
    "pic": "https://i.pinimg.com/originals/54/23/09/542309a4aba601df1424256ac70b578a.jpg"
  },
  {
    "name": "Reinhart",
    "role": "tank",
    "id": 7,
    "pic": "https://blog.gamersensei.com/wp-content/uploads/2017/05/Rein-Header1080.png"
  },
  {
    "name": "D.va",
    "role": "tank",
    "id": 8,
    "pic": "https://cdn1.dotesports.com/wp-content/uploads/2019/05/30120843/dva-screenshot-0011.jpg"
  },
  {
    "name": "Orisa",
    "role": "tank",
    "id": 9,
    "pic": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltcd0d4f0fd047e78d/5cef22d6486d1c3d0af7240c/orisa-screenshot-004.jpg?auto=webp"
  },
  {
    "name": "Zarya",
    "role": "tank",
    "id": 10,
    "pic": "https://i.ytimg.com/vi/aYb54PnxRL8/maxresdefault.jpg"
  },
  {
    "name": "Roadhog",
    "role": "tank",
    "id": 11,
    "pic": "https://www.dexerto.com/wp-content/uploads/2019/12/Overwatch-Roadhog.png"
  },
  {
    "name": "Wrecking Ball",
    "role": "tank",
    "id": 12,
    "pic": "https://img.redbull.com/images/c_crop,w_3240,h_2160,x_600,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2018/07/23/b26cfbab-298a-4e7f-bc1e-55437f746e06/wrecking-ball-overwatch"
  },
  {
    "name": "Sigma",
    "role": "tank",
    "id": 13,
    "pic": "https://cdn.vox-cdn.com/thumbor/T7Zguj7tbZ8lOb4f4cjlECIHwV8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/18329371/OVR_H31_Web_SigmaHeroShot_JPA_003b.png"
  },
  {
    "name": "Winston",
    "role": "tank",
    "id": 14,
    "pic": "https://cdn1.dotesports.com/wp-content/uploads/2018/08/11164753/4bd4444f-27c6-464c-b192-5e4cb8b5e84b.png"
  },
  {
    "name": "Mecree",
    "role": "dps",
    "id": 15,
    "pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6av7V8-TZBs8QC-fgI9ibCwC3cPMX_ppflw&usqp=CAU"
  },
  {
    "name": "Tracer",
    "role": "dps",
    "id": 16,
    "pic": "https://lh3.googleusercontent.com/proxy/SKoMPVZ6cxVm-rC4949jmSVWupgjjozxhFXbiXaMxt7HJsukBU8lekT-lTm1TtEeuy8ifED9V519C8pa-9Qg1ca8Niz1JzL5aT0uF7vbfpXMaW3o-F0_mpf4cNoI0OdQ1CK3vMOq-2z6_oUR0wzD3GQNbJkx4FXsfg"
  },
  {
    "name": "Ashe",
    "role": "dps",
    "id": 17,
    "pic": "https://pbs.twimg.com/media/Ey8nf9PVgAMWJ_N.jpg"
  },
  {
    "name": "Echo",
    "role": "dps",
    "id": 19,
    "pic": "https://i.redd.it/3ytlqxmxknv51.png"
  },
  {
    "name": "Pharah",
    "role": "dps",
    "id": 20,
    "pic": "https://beinkemen.com/wp-content/uploads/2020/03/9330AC26-2B8B-405E-A1D1-B117ADE8DDD1-731x1024.jpeg"
  },
  {
    "name": "Soldier 76",
    "role": "dps",
    "id": 21,
    "pic": "https://i.pinimg.com/originals/1e/ab/2a/1eab2a33c192789834c0f98fdfa2abd4.jpg"
  },
  {
    "name": "Junkrat",
    "role": "dps",
    "id": 22,
    "pic": "https://i.pinimg.com/474x/aa/a4/da/aaa4da69ac54e8ddfb4c9964717b9e13.jpg"
  },
  {
    "name": "Hanzo",
    "role": "dps",
    "id": 23,
    "pic": "https://i.pinimg.com/736x/13/a2/8d/13a28dde3ea355812e51fa0d733ace74.jpg"
  },
  {
    "name": "Widowmaker",
    "role": "dps",
    "id": 24,
    "pic": "https://i.pinimg.com/originals/7b/25/85/7b258501836601c3b322cb2266bdee08.jpg"
  },
  {
    "name": "Genji",
    "role": "dps",
    "id": 25,
    "pic": "https://i.pinimg.com/originals/71/1e/09/711e09a858ed404f0bd3c281c5c07c56.png"
  },
  {
    "name": "Torbjorn",
    "role": "dps",
    "id": 26,
    "pic": "https://pbs.twimg.com/media/Cs505PGUIAALluO.jpg"
  },
  {
    "name": "Symmetra",
    "role": "dps",
    "id": 27,
    "pic": "https://i.pinimg.com/originals/7c/e5/60/7ce5609c3977766ac2519adf2a529dda.jpg"
  },
  {
    "name": "Sombra",
    "role": "dps",
    "id": 28,
    "pic": "https://i.gadgets360cdn.com/large/overwatch_1478294317083.jpeg"
  },
  {
    "name": "Mei",
    "role": "dps",
    "id": 29,
    "pic": "https://cdna.artstation.com/p/assets/images/images/003/528/412/large/rodrigo-ramos-mei.jpg?1474678962"
  },
  {
    "name": "Bastion",
    "role": "dps",
    "id": 30,
    "pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_JLGpYciePQmh2FyPiMJL6urs_5q53VjpA&usqp=CAU"
  },
  {
    "name": "Reaper",
    "role": "dps",
    "id": 31,
    "pic": "https://i.pinimg.com/originals/8f/33/c6/8f33c6247ca737ff85bd44641a2e2faa.jpg"
  },
  {
    "name": "Doomfist",
    "role": "dps",
    "id": 32,
    "pic": "https://i.pinimg.com/736x/40/a7/4d/40a74d7c3f1b658721c1ff16a9c962cd.jpg"
  }
];

  let team = [
    
  ];

  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

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

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);