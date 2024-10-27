### API REST para usar no Community

Aqui é onde configuramos as APIs que chamam o banco de dados

As tecnologias são JAVA 23 e Springboot gerenciado por Maven com Banco de Dados PostgreSQL.
Desenvolvido usando o IntelliJ IDEA 2022

Algumas fontes que usei para criar foram
- [Vídeos de API REST com SPRINGBOOT](https://www.youtube.com/playlist?list=PL8iIphQOyG-D2FP9wkg12AavzmVRWEcnJ)
  - Exceto o Swagger, no quinto vídeo, esse mini curso é muito antigo (de 2018) e ela recomenda o uso do módulo `Springfox`, mas ele está completamente obsoleto, nem tem manutenção ativa mais, então troquei para o módulo `SpringDoc`, mantém a essência do tutorial mas mudam métodos e notações
- [PostgreSQL](https://hcode.com.br/blog/o-que-e-o-postgresql-instalando-e-criando-primeiro-banco-de-dados)
- [Spring Initializer](https://start.spring.io/)

### Um pouco sobre as tecnologias que usei e a versão:
- [Spring Boot 3.3.5](https://spring.io/projects/spring-boot): um Framework para desenvolvimento em JAVA, ele é super simples de usar, flexível e dá muitas opções pré configuradas para facilitar o desenvolvimento. As dependências do Spring que coloquei no projeto:
  - [DevTools](https://docs.spring.io/spring-boot/reference/using/devtools.html): algumas ferramentas para deixar o desenvolvimento ainda mais prático, por exemplo a ferramenta de auto reload da aplicação depois de toda alteração
  - [Web](https://docs.spring.io/spring-boot/reference/web/index.html): para criar a base das chamadas de API RESTful para conectar com o banco de dados
  - [JPA](https://spring.io/projects/spring-data-jpa): para auxiliar com o SQL, esse módulo tem pré programado uma série de buscas SQL mais básicas e não precisamos construir todas as buscas SQL que vamos usar
  - [PostgreSQL Driver](https://docs.spring.io/spring-cloud-dataflow/docs/1.1.2.RELEASE/reference/html/configuration-rdbms.html): módulo para configurar a conexão com a base de dados PostgreSQL, que optamos para esse projeto
  - [Maven](https://mvnrepository.com/artifact/org.springframework/spring-core): o gerenciador de módulos do Spring que foi escolhido para esse projeto, ele usa o arquivo de gerenciamento `pom.xml` para gerenciar as dependências JAVA e Spring
- [JAVA 23](https://www.oracle.com/br/java/technologies/downloads/): usar a JDK mais recente e moderna do JAVA para construir nosso app
- [PostgreSQL](https://www.postgresql.org/): para gerenciamento de banco de dados, uma interface fera para interagir e visualizar o banco de dados
- [SWAGGER](https://swagger.io/): distribuir as APIs criadas e ter uma interface para visualizar e testar as apis, com `Swagger2 v2.7.0` e `SwaggerUI v2.7.0`, a interface roda em `http://localhost:8080/swagger-ui/index.html`