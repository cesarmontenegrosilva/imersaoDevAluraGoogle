Plataforma de Doação de Alimentos

site: https://doacao-alimentos-met-rec.netlify.app/
site vercel: https://imersao-dev-alura-google.vercel.app/

Descrição

A Plataforma de Doação de Alimentos tem como objetivo conectar doadores de alimentos (pessoas ou estabelecimentos) com famílias e instituições que precisam. A aplicação visa reduzir o desperdício de alimentos e combater a insegurança alimentar nas comunidades.

Funcionalidades

1. Cadastro de Doadores:
   - Permite que os doadores registrem informações como:
     - Nome (pessoa ou estabelecimento)
     - Telefone
     - Endereço
     - Tipo de alimento doado
     - Horário disponível para doação
     - Latitude e longitude (para exibir a localização no mapa)
   - Após o cadastro, o estabelecimento será mostrado no mapa com um marcador padrão.

2. Busca por Locais de Doação:
   - O usuário pode inserir seu CEP e buscar os três estabelecimentos de doação mais próximos.
   - A aplicação filtrará os doadores com base no CEP, exibindo-os em uma lista com:
     - Nome do estabelecimento
     - Tipo de alimento
     - Horário de doação
     - Endereço
     - Telefone
   - Os resultados da busca serão destacados no mapa com marcadores vermelhos, diferenciando-os dos marcadores padrões dos outros doadores.

Exemplos de CEP para testar: 
50050450
51020071
50020330
51130300

Tecnologias Utilizadas

- HTML: Estrutura da interface da aplicação.
- CSS: Estilização do aplicativo, com um design escuro e moderno.
- JavaScript: Lógica de programação para o cadastro de doadores, busca de estabelecimentos e exibição no mapa.
- Leaflet.js: Biblioteca JavaScript para mapas interativos.
- OpenStreetMap: Camada de mapa usada no Leaflet.js.

Estrutura de Arquivos

- index.html: Contém a interface principal da aplicação, com formulários de cadastro de doadores e de busca.
- styles.css: Define o estilo visual da aplicação, com cores escuras e layout responsivo.
- app.js: Lógica da aplicação:
  - Lida com o cadastro de novos doadores.
  - Exibe os marcadores no mapa (com ícones vermelhos para os resultados da busca).
  - Filtra os doadores com base no CEP inserido.
- dados.js: Banco de dados fictício de doadores, com informações de 60 estabelecimentos em Recife, incluindo nome, telefone, tipo de alimento, endereço, horário e coordenadas (latitude e longitude).

Como Funciona

1. Cadastro de Doadores:
   - Na seção "Cadastro de Doador", o usuário deve preencher os campos do formulário (nome, telefone, endereço, tipo de alimento, horário, latitude e longitude).
   - Após o envio do formulário, o doador é registrado no banco de dados e um marcador é exibido no mapa.
   - O doador é exibido com o ícone padrão (azul).

2. Busca de Locais Próximos:
   - Na seção "Buscar Doações Próximas", o usuário insere seu CEP.
   - A aplicação filtra os doadores com base nos 5 primeiros dígitos do CEP e exibe até 3 resultados.
   - Cada resultado é exibido em uma lista com nome, tipo de alimento, horário, endereço e telefone do estabelecimento.
   - Os locais exibidos na busca são marcados no mapa com ícones vermelhos, para facilitar a identificação visual.

3. Mapa Interativo:
   - A aplicação usa a biblioteca Leaflet.js para exibir um mapa centrado em Recife.
   - Todos os doadores cadastrados são exibidos no mapa com marcadores.
   - Ao clicar em um marcador, uma janela pop up mostra o nome do doador, o tipo de alimento e o endereço.

Como Rodar o Projeto

1. Clonar o repositório:
   git clone https://github.com/cesarmontenegrosilva/imersaoDevAluraGoogle.git

2. Abrir o arquivo index.html no navegador:
   - Simplesmente abra o arquivo index.html em qualquer navegador para rodar a aplicação.
   
3. Testar funcionalidades:
   - Cadastre doadores usando o formulário.
   - Busque locais de doação mais próximos inserindo um CEP no campo de busca.
   - Navegue pelo mapa interativo para visualizar os marcadores dos doadores.

Possíveis Melhorias

1. Autenticação de Usuários:
   - Adicionar uma funcionalidade para que doadores e beneficiários possam se registrar e acessar suas informações.
   
2. API de Geocodificação:
   - Integrar uma API de geocodificação para calcular automaticamente as coordenadas (latitude e longitude) com base no endereço do doador.

3. Banco de Dados Real:
   - Implementar um banco de dados real (como Firebase ou MongoDB) para salvar as informações dos doadores de forma persistente.

4. Notificações:
   - Implementar um sistema de notificações para informar os beneficiários sobre novas doações disponíveis.

Conclusão

A Plataforma de Doação de Alimentos é uma solução simples e eficiente para conectar doadores de alimentos com quem precisa. Através de uma interface fácil de usar e de um mapa interativo, o aplicativo ajuda a combater o desperdício de alimentos e a insegurança alimentar nas comunidades.
