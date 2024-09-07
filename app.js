// Inicializa o mapa
const map = L.map('map').setView([-8.0476, -34.877], 12); // Coordenadas de Recife

// Adiciona o tile do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ícone de marcador padrão (cor azul ou padrão do Leaflet)
const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Ícone de marcador vermelho para os resultados da busca
const redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Função para adicionar marcadores no mapa
function adicionarMarcador(doador, icon = defaultIcon) {
    const marker = L.marker([doador.latitude, doador.longitude], { icon: icon }).addTo(map);
    marker.bindPopup(`<b>${doador.nome}</b><br>${doador.tipoAlimento}<br>${doador.endereco}`);
}

// Itera sobre os doadores e adiciona marcadores no mapa
doadores.forEach(doador => {
    adicionarMarcador(doador); // Usa o ícone padrão
});

// Atualizar a lógica para cadastrar novos doadores
document.getElementById('form-doador').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const tipoAlimento = document.getElementById('tipo-alimento').value;
    const horario = document.getElementById('horario').value;
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);

    const novoDoador = {
        nome,
        telefone,
        endereco,
        cep: endereco.split('-').pop().trim(),
        tipoAlimento,
        horario,
        latitude,
        longitude
    };

    doadores.push(novoDoador);

    // Adiciona o novo marcador no mapa usando o ícone padrão
    adicionarMarcador(novoDoador);

    alert("Doador cadastrado com sucesso!");
});

// Atualiza a lógica de busca para marcar os resultados com ícones vermelhos
document.getElementById('form-busca').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cep = document.getElementById('cep').value.trim();
    const locaisProximos = doadores.filter(doador => doador.cep.startsWith(cep.substring(0, 5)));
    
    const listaLocais = document.getElementById('lista-locais');
    listaLocais.innerHTML = '';

    if (locaisProximos.length === 0) {
        listaLocais.innerHTML = '<li>Nenhum local encontrado</li>';
    } else {
        locaisProximos.slice(0, 5).forEach(doador => {
            // Exibe informações no HTML
            const item = document.createElement('li');
            item.innerHTML = `<strong>${doador.nome}</strong><br>
                              Tipo de Alimento: ${doador.tipoAlimento}<br>
                              Horário: ${doador.horario}<br>
                              Endereço: ${doador.endereco}<br>
                              Telefone: ${doador.telefone}`;
            listaLocais.appendChild(item);

            // Adiciona o marcador no mapa com ícone vermelho
            adicionarMarcador(doador, redIcon);
        });
    }
});