import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar.btn");
const telaInicial = document.querySelector(".tela-inicial");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?"
        alternativas: [
    {
        texto: "Isso é assustador!",
        afirmacao: [
            "No início ficou com medo do que essa tecnologia pode fazer.",
            "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
        ],
        proxima: 1;
    },
    {
        texto: "Isso é maravilhoso!",
        afirmacao: [
            "Quis saber como usar IA no seu dia a dia.",
            "Pensou que IA pode ajudar em tarefas da sua vida."
        ], 
        proxima: 2,
    }
]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
               texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
               afirmacao:
               ["Conseguir utilizar a IA para buscar informações úteis."
               "Percebeu que a IA pode ajudar a encontra informações úteis na internet de maneira fácile rápido."
                "Percebeu que a IA consegue aplicar termso complicados de forma simplificada e criativa."
               ],
               proxima: 3,
            },
            {
               texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
               afirmacao:
               ["Sentiu mais facilidade em utilizar seus próprios recursos para escrever seus trabalhos."
                "Achou que era muito mais fácil procurar por respostas utilizando alguns meio convecionais como artigos e livros."
                "Sentiu um pouco de medo de quais dados pessoais seus a IA poderia utilizar em trabalhos."
               ],
               proxima: 4,
            },
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?"
        alternativas: [

            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: 
                ["Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais, mas também vem substituindo outras profissões."
                "Participa ativamente do desenvolvimento de soluções criativas e na melhoria no mercado de trabalho, facilitando e protegendo a vida dos trabalhadores."
                ],
                proxima: 5,
            },
            {
    
                 texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhoria habiilidades humanas.",
                afirmacao:
                ["Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
                "Criou grupos de ética voltado para IA e busca ativamente reduzir desigualdades trabalhistas e mais acessibilidade para o acesso a IA."
                ],
                proxima: 6,
            },
            {
                 texto:  "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
                 afirmacao:
                ["Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais, mas também vem substituindo outras profissões."
                "Participa ativamente do desenvolvimento de soluções criativas e na melhoria no mercado de trabalho, facilitando e protegendo a vida dos trabalhadores."
                ],
                proxima: 5,
            },
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                 texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                 afirmacao: 
                   ["Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais como Paint e tem certas dificuldades."
                   "Ainda acha que os meios de desenho tradicionais são mais eficazes para a criatividade do wue a utilização da IA para isso."
                   ],
                   proxima: 5,
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA."
                afirmacao: 
                   ["Acelerou o processo de criação de trabalhos utilizando geradores de imagens."
                    "Compartilhou artes em redes sociais como forma de ensinar como se comunicar através do IA."
                    "Percebeu que muitas pessoas têm dificuldads em expressar suas ideias desenhando, então a IA é uma excelente ajuda para auxiliar nisso."
                    ],
                 proxima: 6,
            },
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: 
                   ["Tem dificuldade em expressar opiniões muito aprofundadas sobre algum assunto por muito tempo, então a IA é uma boa ferramenta para uma pesquisa rápida mais complexa, mas sempre vendo se as informações são verdadeiras."
                    "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sentiu muito dependente em relação a IA, por causa disso se sente menos confiante em determinados assuntos por não pesquisar mais afundo."
                   ],
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: 
                    ["Percebeu que toda IA reproduz orientações baseadas na empresa que programa a produz, por isso parece wue todos os textos utilizam as mesmas palavras chaves e estruturas semelhantes."
                    ],
             },
         ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatoria(opcaoSelecionado.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    if(opcaoSelecionada.proxima != underfined) {
       atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049,${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    CaixaResultado.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function aleatorio(lista) {
     const posicao = Math.floor(Math.random()* lista.length);
     return lista(posicao):
}

function jogaNovamente(){
    atual = 0;
     historiaFinal = "";
     caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function substituiNome(){
    for(const pergunta of perguntas){
       pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

substituiNome();


