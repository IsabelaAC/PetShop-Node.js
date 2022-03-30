# <h1 align="center"> API Pet Shop- Atendimento V2 </h1> 

Continuação do projeto que se encontra na branch Master seguindo o curso de NodeJS: Streaming de dados e Repositório da plataforma Alura.

##  :sunglasses: Atualizações feitas durante essa branch do projeto:

- Criada a pasta repositório para organizar melhor nossos dados e arquivos e separar suas funcionalidades;

- Criada a pasta serviços onde fazemos uma requisição de uma API externa de CPF dos clientes para que possamos pesquisar as informações por CPF;

- Na pasta infraestrutura contamos agora com duas subpastas: 
    - Arquivos - que contém o arquivo que fará  o upload / streaming das imagens dos animais cadastrados
    - Database -  onde estão os arquivos Conexao.js e Tabela.js juntamente com o arquivo queries.js que define a querie utilizada no nosso banco de dados, esse arquivo foi criado para retirar algumas funções do nosso models.

- Pasta assets onde se encontram as imagens que foram cadastradas por nós nas quais o nosso upload fez um streaming salvando as mesmas.

- Foram feitas alterações nos arquivos de atendimento do  nosso controller e models para que o código não ficasse sobrecarregado em um só arquivo como acontecia anteriormente.

## :sparkles: Otimização do código

A otimização do código anterior contou com a utilização de:
     *Promisses, 
  *Separação do código por responsabilidade,
  *Uso buffer e streams do fs para manipular arquivos,
  *Consumo de API externa com Axios
  *Aplicado o padrão de repositórios no seu projeto
  *Validação dos dados antes de enviar para o banco de dados
   *Envio erros descritivos para o  usuário

 ## :computer: Tecnologias utilizadas
 -`Node.js`
 -`My Sql`
 -`JavaScript`
 
 🚧 Projeto finalizado ✅
 
 
 ## :woman: Desenvolvedora
 
 [<img src="https://avatars.githubusercontent.com/u/66324902?s=400&u=6d21db611880cf437c25d3e4c5445ad80a642a8f&v=4" width=115><br><sub>Isabela Assis Cardoso</sub>](https://github.com/IsabelaAC)
