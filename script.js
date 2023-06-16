function preencherFichas(filmes) {
    const filmesContainer = document.getElementById('filmes-container');
  
    filmes.forEach(filme => {
      const fichaApresentacao = document.createElement('div');
      fichaApresentacao.classList.add('ficha');
  
      const titulo = document.createElement('h2');
      titulo.textContent = filme.titulo;
  
      const resumo = document.createElement('p');
      resumo.textContent = filme.resumo;
  
      const figura = document.createElement('img');
      figura.src = filme.figura;
  
      const classificacaoEtaria = document.createElement('p');
      classificacaoEtaria.textContent = `Classificação etária: ${filme.classificacao}`;
  
      const generos = document.createElement('p');
      generos.textContent = `Gêneros: ${filme.generos.join(', ')}`;
  
      const titulosSemelhantes = document.createElement('p');
      titulosSemelhantes.textContent = `Títulos Semelhantes: ${filme.titulosSemelhantes.join(', ')}`;
  
      const elenco = document.createElement('p');
      elenco.textContent = `Elenco: ${filme.elenco.join(', ')}`;
  
      const opinioes = document.createElement('div');
      opinioes.classList.add('opinioes');
  
      filme.opinioes.forEach(opiniao => {
        const opiniaoElement = document.createElement('div');
        opiniaoElement.classList.add('opiniao');
  
        const rating = document.createElement('p');
        rating.textContent = `Rating: ${opiniao.rating}`;
  
        const descricao = document.createElement('p');
        descricao.textContent = `Descrição: ${opiniao.descricao}`;
  
        opiniaoElement.appendChild(rating);
        opiniaoElement.appendChild(descricao);
        opinioes.appendChild(opiniaoElement);
      });
  
      fichaApresentacao.appendChild(titulo);
      fichaApresentacao.appendChild(resumo);
      fichaApresentacao.appendChild(figura);
      fichaApresentacao.appendChild(classificacaoEtaria);
      fichaApresentacao.appendChild(generos);
      fichaApresentacao.appendChild(titulosSemelhantes);
      fichaApresentacao.appendChild(elenco);
      fichaApresentacao.appendChild(opinioes);
  
      filmesContainer.appendChild(fichaApresentacao);
    });
  }
  
  // Dados de exemplo
  const filmes = [
    {
      "id": 1,
      "titulo": "Better Call Saul",
      "resumo": "Jimmy era um advogado qualquer até a vida o transformar em Saul, o cara que coloca criminosos dentro da lei.",
      "generos": [
        "Séries",
        "Séries dos EUA",
        "Séries Cômicas",
        "Séries Dramáticas"
      ],
      "titulosSemelhantes": [
        2,
        3
      ],
      "classificacao": 18,
      "figura": "https://rafaelescalfoni.github.io/desenv_web/img/betterCallSaul.jpg",
      "elenco": [
        "Bob Odenkirk",
        "Jonathan Banks",
        "Michael McKean",
        "Rhea Seehorn"
      ],
      "opinioes": [
        {
          "rating": 5,
          "descricao": "Estou ansioso pelos próximos episódios. Sou fã de Breaking Bad e estou confiante que essa série será um grande sucesso."
        },
        {
          "rating": 5,
          "descricao": "Ansioso para ver. Vai ser demais! \"Advogados são como planos de saúde, você espera nunca precisar, mas cara... Não ter um ... NÃO!\" \\o/ "
        }
      ]
    },
    {
        "id": 7,
        "titulo": "Uma Família da Pesada",
        "resumo": "Nesta série animada sem escrúpulos de Seth MacFarlane, o cômico Peter Griffin e sua família problemática passam por desventuras tresloucadas.",
        "generos": [
            "Séries",
            "Séries dos EUA",
            "Séries cômicas"
        ],
        "titulosSemelhantes": [
            1,
            2
        ],
        "classificacao": 12,
        "figura": "https://rafaelescalfoni.github.io/desenv_web/img/familyGuy.png",
        "elenco": [
            "Seth MacFarlane",
            "Alex Borstein"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Coloquem novas temporadas, por favor!"
            }
        ]
    },
    {
        "id": 8,
        "titulo": "Valente",
        "resumo": "Após enfurecer três lordes poderosos e ter um pedido impensado atendido, uma indomável princesa escocesa começa sua jornada para reparar os estragos que causou.",
        "generos": [
            "Filmes para a família e crianças",
            "Filmes para 4 a 7 anos"
        ],
        "titulosSemelhantes": [
            5,
            6
        ],
        "classificacao": 0,
        "figura": "https://rafaelescalfoni.github.io/desenv_web/img/valente.png",
        "elenco": [
            "Kelly Macdonald",
            "Billy Connolly",
            "Emma Thompson"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Ótimo filme! Adoro filmes assim"
            },
            {
                "rating": 4,
                "descricao": "ótimo filme! Encantador, prende a atenção o tempo todo!"
            }
        ]
    },
    {
        "id": 9,
        "titulo": "Friends",
        "resumo": "Esta série de enorme sucesso acompanha as aventuras de seis amigos que enfrentam as armadilhas da vida, do trabalho e do amor nos anos 1990.",
        "generos": [
            "Séries",
            "Séries dos EUA",
            "Séries cômicas",
            "sitcoms"
        ],
        "titulosSemelhantes": [
            14
        ],
        "classificacao": 12,
        "figura": "https://rafaelescalfoni.github.io/desenv_web/img/friends.png",
        "elenco": [
            "Jennifer Aniston",
            "Courteney Cox",
            "Lisa Kudrow",
            "Matt LeBlanc",
            "Matthew Perry",
            "David Schwimmer"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Estou sentido falta das primeiras temporadas!"
            },
            {
                "rating": 3,
                "descricao": "Boa série... dos anos 1990!!!"
            }
        ]
    },
    {
        "id": 10,
        "titulo": "House",
        "resumo": "Hugh Laurie é o mal-humorado Dr. Gregory House, um médico que odeia seus pacientes mas que é um gênio ao tratar doenças misteriosas.",
        "generos": [
            "Séries",
            "Séries dos EUA",
            "Séries dramáticas"
        ],
        "titulosSemelhantes": [],
        "classificacao": 14,
        "figura": "https://rafaelescalfoni.github.io/desenv_web/img/house.png",
        "elenco": [
            "Hugh Laurie",
            "Omar Epps",
            "Robert Sean Leonard"
        ],
        "opinioes": [
            {
                "rating": 4,
                "descricao": "Boa pedida!"
            }
        ]
    },
    {
        "id": 11,
        "titulo": "Mãos talentosas",
        "resumo": "Cuba Gooding Jr. é um cirurgião pediátrico que supera grandes obstáculos para estudar medicina e salvar vidas no Hospital Johns Hopkins.",
        "generos": [
            "Dramas",
            "Dramas biográficos",
            "Dramas baseados em fatos reais"
        ],
        "titulosSemelhantes": [],
        "classificacao": 12,
        "figura": "https://rafaelescalfoni.github.io/desenv_web/img/maosTalentosas.png",
        "elenco": [
            "Seth MacFarlane",
            "Alex Borstein"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Coloquem novas temporadas, por favor!"
            }
        ]
    },
    {
        "id": 12,
        "titulo": "Família Moderna",
        "resumo": "Esta série vencedora do Emmy acompanha a vida de Jay Pritchett e sua eclética família enquanto lidam com os desafios da vida contemporânea em Los Angeles.",
        "generos": [
            "Séries",
            "Séries dos EUA",
            "Séries cômicas"
        ],
        "titulosSemelhantes": [
            14,
            9
        ],
        "classificacao": 10,
        "figura": "https://rafaelescalfoni.github.io/desenv_web/img/modernFamily.png",
        "elenco": [
            "Ed O'Neill",
            "Sofia Vergara",
            "Julie Bowen"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Coloquem novas temporadas, por favor!"
            }
        ]
    },
    {
        "id": 13,
        "titulo": "Scarface",
        "resumo": "Um chefão do tráfico da Flórida comete o erro fatal de \"abusar do seu próprio suprimento\", nesta refilmagem do diretor Brian de Palma do original de 1932.",
        "generos": [
            "Ação e aventura",
            "Suspenses de ação",
            "Clássicos de ação e aventura"
        ],
        "titulosSemelhantes": [],
        "classificacao": 18,
        "figura": "https://rafaelescalfoni.github.io/desenv_web/img/scarface.png",
        "elenco": [
            "Al Pacino",
            "Steven Bauer",
            "Michelle Pfeiffer"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Coloquem novas temporadas, por favor!"
            }
        ]
    },
    {
        "id": 14,
        "titulo": "That '70s show",
        "resumo": "Jovens ",
        "generos": [
            "Séries",
            "Séries dos EUA",
            "Séries cômicas"
        ],
        "titulosSemelhantes": [
            1,
            2
        ],
        "classificacao": 12,
        "figura": "https://rafaelescalfoni.github.io/desenv_web/img/that70s.png",
        "elenco": [
            "Topher Grace",
            "Mila Kunis",
            "Ashton Kutcher",
            "Danny Masterson",
            "Laura Prepon",
            "Wilmer Valderrama",
            "Debra Jo Rupp",
            "Kurtwood Smith",
            "Don Stark",
            "Tanya Roberts"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Já estava na hora de adicioná-la! Muito boa!!!"
            }
        ]
    },
    {
        "id": 15,
        "titulo": "Zumbilândia",
        "resumo": "Tentando sobreviver em um mundo dominado por zumbis, um universitário se une a um desordeiro e duas irmãs golpistas.",
        "generos": [
            "Comédias",
            "Comédias obscuras"
        ],
        "titulosSemelhantes": [],
        "classificacao": 16,
        "figura": "https://rafaelescalfoni.github.io/desenv_web/img/zumbilandia.png",
        "elenco": [
            "Jesse Eisenberg",
            "Woody Harrelson",
            "Emma Stone"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Excelente filme! Irreverente!"
            }
        ]
    }

  ];
  
  preencherFichas(filmes);
  