# RestMysqlNode
 
 API REST desenvolvida em Node.js em um banco de dados My Sql para criar, editar, deletar e vizualizar atendimentos de uma rede de Pet Shop.
 
 Sobre o projeto:
 
 Para utilizar baixa clonar o repositório e inicar com npm init. 
 
 É necessário realizar a alteração da conexão do banco de dados para um banco de dados localizado na sua máquina utilizando as suas credenciais.
 
 Na pasta config está as configurações do Express.
 
 Nos arquivo atendimentos.js da pasta Controllers está as configurações das nossas rotas e ações a serem tomadas seguindo os padrões REST.
 
 Já na sessão de infraestrutura contamos com dois arquivos: Conexão.js que faz a conexão com nosso banco de dados (onde você deve alterar para conectar com o seu próprio banco) e o arquivo Tabelas.js responsável pela criação das tabelas do nosso sistema.
 
 Na pasta models encontramos o arquivo atendimentos.js que está direcionando nossos métodos  e criando as Querys que serão utilizadas durante o agendamento, é aqui que se encontra o que cada método REST está relacionado.
 
 Por fim, na raiz do nosso sistema, o arquivo index.js fica responsável de subir e rodar nosso servidor!
 
 Qualquer dúvida estou a disposição, até mais!
