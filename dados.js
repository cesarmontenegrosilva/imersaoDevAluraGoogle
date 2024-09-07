const doadores = [
    {
        nome: "Restaurante Sabor do Recife",
        telefone: "(81) 98765-4321",
        endereco: "Rua da Alegria, 123 - Recife",
        cep: "50050450",
        tipoAlimento: "Comida pronta",
        horario: "10h às 14h",
        latitude: -8.0522,
        longitude: -34.9286
    },
    {
        nome: "Padaria Pão de Mel",
        telefone: "(81) 98234-5678",
        endereco: "Av. Boa Viagem, 456 - Recife",
        cep: "51020071",
        tipoAlimento: "Pães e doces",
        horario: "7h às 10h",
        latitude: -8.1160,
        longitude: -34.9017
    },
    {
        nome: "Mercadinho Bom Preço",
        telefone: "(81) 98123-9876",
        endereco: "Rua da Praia, 789 - Recife",
        cep: "51011190",
        tipoAlimento: "Frutas e verduras",
        horario: "8h às 12h",
        latitude: -8.1152,
        longitude: -34.9067
    },
    {
        nome: "Restaurante Maré Alta",
        telefone: "(81) 98111-2233",
        endereco: "Rua da Aurora, 88 - Recife",
        cep: "50050990",
        tipoAlimento: "Frutos do mar",
        horario: "11h às 15h",
        latitude: -8.0621,
        longitude: -34.8712
    },
    {
        nome: "Lanchonete Recanto",
        telefone: "(81) 98222-3344",
        endereco: "Rua do Sol, 45 - Recife",
        cep: "50020330",
        tipoAlimento: "Lanches e sucos",
        horario: "9h às 12h",
        latitude: -8.0675,
        longitude: -34.8780
    },
    {
        nome: "Pastelaria Boa Massa",
        telefone: "(81) 98777-6655",
        endereco: "Av. Conselheiro Aguiar, 1000 - Recife",
        cep: "51011020",
        tipoAlimento: "Pastéis e salgados",
        horario: "8h às 11h",
        latitude: -8.1230,
        longitude: -34.9005
    },
    {
        nome: "Mercado Verde Vida",
        telefone: "(81) 98444-5566",
        endereco: "Rua Setúbal, 300 - Recife",
        cep: "51130300",
        tipoAlimento: "Orgânicos e verduras",
        horario: "7h às 12h",
        latitude: -8.1167,
        longitude: -34.8943
    },
    {
        nome: "Restaurante Sabor da Casa",
        telefone: "(81) 98555-7788",
        endereco: "Rua dos Navegantes, 678 - Recife",
        cep: "51021000",
        tipoAlimento: "Comida caseira",
        horario: "10h às 14h",
        latitude: -8.1201,
        longitude: -34.9000
    },
    {
        nome: "Pizzaria Recanto Italiano",
        telefone: "(81) 98666-8899",
        endereco: "Av. Boa Viagem, 800 - Recife",
        cep: "51020400",
        tipoAlimento: "Pizzas",
        horario: "18h às 22h",
        latitude: -8.1100,
        longitude: -34.9015
    },
    {
        nome: "Bar e Restaurante Amigos",
        telefone: "(81) 98777-1010",
        endereco: "Rua Padre Carapuceiro, 45 - Recife",
        cep: "51020020",
        tipoAlimento: "Petiscos e refeições",
        horario: "12h às 20h",
        latitude: -8.1132,
        longitude: -34.8978
    },
    {
        nome: "Café Cultural",
        telefone: "(81) 98711-2121",
        endereco: "Rua da Saudade, 200 - Recife",
        cep: "50050200",
        tipoAlimento: "Café e bolos",
        horario: "8h às 12h",
        latitude: -8.0583,
        longitude: -34.8767
    },
    {
        nome: "Restaurante Marisqueira",
        telefone: "(81) 98722-2233",
        endereco: "Rua das Fronteiras, 400 - Recife",
        cep: "50060230",
        tipoAlimento: "Frutos do mar",
        horario: "12h às 15h",
        latitude: -8.0546,
        longitude: -34.8889
    },
    {
        nome: "Panificadora Trigo Dourado",
        telefone: "(81) 98733-3344",
        endereco: "Rua das Ninfas, 150 - Recife",
        cep: "50030210",
        tipoAlimento: "Pães e bolos",
        horario: "6h às 10h",
        latitude: -8.0610,
        longitude: -34.8837
    },
    {
        nome: "Sorveteria Gelato",
        telefone: "(81) 98744-4455",
        endereco: "Rua do Futuro, 320 - Recife",
        cep: "52050540",
        tipoAlimento: "Sorvetes",
        horario: "13h às 18h",
        latitude: -8.0421,
        longitude: -34.9108
    },
    {
        nome: "Restaurante Veggana",
        telefone: "(81) 98755-5566",
        endereco: "Rua das Creoulas, 700 - Recife",
        cep: "50030320",
        tipoAlimento: "Comida vegetariana",
        horario: "11h às 14h",
        latitude: -8.0582,
        longitude: -34.8799
    },
    {
        nome: "Empório dos Queijos",
        telefone: "(81) 98766-6677",
        endereco: "Rua Amélia, 100 - Recife",
        cep: "52030010",
        tipoAlimento: "Queijos e frios",
        horario: "9h às 13h",
        latitude: -8.0444,
        longitude: -34.9093
    },
    {
        nome: "Restaurante Horizonte",
        telefone: "(81) 98777-7788",
        endereco: "Av. Agamenon Magalhães, 500 - Recife",
        cep: "52010100",
        tipoAlimento: "Comida variada",
        horario: "12h às 15h",
        latitude: -8.0476,
        longitude: -34.8987
    },
    {
        nome: "Padaria Pão Quente",
        telefone: "(81) 98788-8899",
        endereco: "Rua Visconde de Suassuna, 1200 - Recife",
        cep: "50050540",
        tipoAlimento: "Pães e salgados",
        horario: "6h às 10h",
        latitude: -8.0553,
        longitude: -34.8815
    },
    {
        nome: "Restaurante Sertanejo",
        telefone: "(81) 98799-9900",
        endereco: "Rua do Príncipe, 230 - Recife",
        cep: "50020130",
        tipoAlimento: "Comida nordestina",
        horario: "12h às 15h",
        latitude: -8.0614,
        longitude: -34.8829
    },
    {
        nome: "Pizzaria Don Leone",
        telefone: "(81) 98700-1111",
        endereco: "Rua da Moeda, 555 - Recife",
        cep: "50030100",
        tipoAlimento: "Pizzas",
        horario: "18h às 22h",
        latitude: -8.0662,
        longitude: -34.8727
    },
    {
        nome: "Café do Porto",
        telefone: "(81) 98711-1222",
        endereco: "Rua Barão de São Borja, 120 - Recife",
        cep: "50060400",
        tipoAlimento: "Café e salgados",
        horario: "7h às 11h",
        latitude: -8.0628,
        longitude: -34.8749
    },
    {
        nome: "Restaurante Sabor do Mar",
        telefone: "(81) 98722-1333",
        endereco: "Av. Beira Rio, 234 - Recife",
        cep: "52010000",
        tipoAlimento: "Frutos do mar",
        horario: "12h às 16h",
        latitude: -8.0459,
        longitude: -34.8973
    },
    {
        nome: "Bistrô Recanto",
        telefone: "(81) 98733-1444",
        endereco: "Rua Bom Jesus, 987 - Recife",
        cep: "50060030",
        tipoAlimento: "Comida francesa",
        horario: "19h às 23h",
        latitude: -8.0625,
        longitude: -34.8734
    },
    {
        nome: "Restaurante Flor do Sertão",
        telefone: "(81) 98744-1555",
        endereco: "Rua do Sol, 330 - Recife",
        cep: "50020300",
        tipoAlimento: "Comida nordestina",
        horario: "11h às 14h",
        latitude: -8.0661,
        longitude: -34.8781
    },
    {
        nome: "Churrascaria Fogo no Chão",
        telefone: "(81) 98755-1666",
        endereco: "Rua da Aurora, 2000 - Recife",
        cep: "50040400",
        tipoAlimento: "Churrasco",
        horario: "12h às 15h",
        latitude: -8.0599,
        longitude: -34.8726
    },
    {
        nome: "Mercadinho Super Vida",
        telefone: "(81) 98766-1777",
        endereco: "Rua das Flores, 567 - Recife",
        cep: "51020110",
        tipoAlimento: "Frutas e verduras",
        horario: "8h às 12h",
        latitude: -8.1159,
        longitude: -34.8983
    },
    {
        nome: "Restaurante Sabor Tropical",
        telefone: "(81) 98777-1888",
        endereco: "Rua da Harmonia, 342 - Recife",
        cep: "52060400",
        tipoAlimento: "Comida tropical",
        horario: "10h às 14h",
        latitude: -8.0428,
        longitude: -34.9139
    },
    {
        nome: "Cantina Itália",
        telefone: "(81) 98788-1999",
        endereco: "Rua Nova, 789 - Recife",
        cep: "50050300",
        tipoAlimento: "Comida italiana",
        horario: "12h às 15h",
        latitude: -8.0571,
        longitude: -34.8788
    },
    {
        nome: "Padaria Delícia",
        telefone: "(81) 98799-2000",
        endereco: "Rua Conselheiro Portela, 432 - Recife",
        cep: "52010020",
        tipoAlimento: "Pães e doces",
        horario: "6h às 10h",
        latitude: -8.0503,
        longitude: -34.9023
    },
    {
        nome: "Restaurante Sabores do Mar",
        telefone: "(81) 98701-1111",
        endereco: "Av. Recife, 200 - Recife",
        cep: "51030030",
        tipoAlimento: "Frutos do mar",
        horario: "12h às 15h",
        latitude: -8.1194,
        longitude: -34.9007
    },
    {
        nome: "Padaria Pão Fresco",
        telefone: "(81) 98702-2222",
        endereco: "Rua das Mangueiras, 400 - Recife",
        cep: "51150010",
        tipoAlimento: "Pães e salgados",
        horario: "6h às 10h",
        latitude: -8.1220,
        longitude: -34.9152
    },
    {
        nome: "Bistrô Caminho do Sol",
        telefone: "(81) 98703-3333",
        endereco: "Rua Esperança, 50 - Recife",
        cep: "50050900",
        tipoAlimento: "Comida caseira",
        horario: "11h às 14h",
        latitude: -8.0615,
        longitude: -34.8761
    },
    {
        nome: "Mercado Natural",
        telefone: "(81) 98704-4444",
        endereco: "Rua do Bom Pastor, 77 - Recife",
        cep: "52021120",
        tipoAlimento: "Produtos naturais",
        horario: "9h às 13h",
        latitude: -8.0407,
        longitude: -34.9121
    },
    {
        nome: "Restaurante Cantinho Mineiro",
        telefone: "(81) 98705-5555",
        endereco: "Av. Sul, 999 - Recife",
        cep: "50050980",
        tipoAlimento: "Comida mineira",
        horario: "12h às 16h",
        latitude: -8.0750,
        longitude: -34.9104
    },
    {
        nome: "Doceria Delícias da Vida",
        telefone: "(81) 98706-6666",
        endereco: "Rua da Paz, 66 - Recife",
        cep: "52010100",
        tipoAlimento: "Doces e bolos",
        horario: "9h às 11h",
        latitude: -8.0456,
        longitude: -34.9055
    },
    {
        nome: "Sorveteria do Vale",
        telefone: "(81) 98707-7777",
        endereco: "Rua da Glória, 333 - Recife",
        cep: "52030310",
        tipoAlimento: "Sorvetes e açaí",
        horario: "14h às 18h",
        latitude: -8.0501,
        longitude: -34.9165
    },
    {
        nome: "Cantina Toscana",
        telefone: "(81) 98708-8888",
        endereco: "Rua da Rosa, 876 - Recife",
        cep: "51030020",
        tipoAlimento: "Massas e pizzas",
        horario: "19h às 22h",
        latitude: -8.1120,
        longitude: -34.9040
    },
    {
        nome: "Churrascaria Pampa Grill",
        telefone: "(81) 98709-9999",
        endereco: "Rua do Sertão, 500 - Recife",
        cep: "50020090",
        tipoAlimento: "Churrasco",
        horario: "12h às 15h",
        latitude: -8.0597,
        longitude: -34.8767
    },
    {
        nome: "Padaria Fino Trigo",
        telefone: "(81) 98710-0000",
        endereco: "Av. Domingos Ferreira, 1040 - Recife",
        cep: "51111110",
        tipoAlimento: "Pães e confeitos",
        horario: "7h às 11h",
        latitude: -8.1174,
        longitude: -34.8988
    },
    {
        nome: "Restaurante Sabores do Sertão",
        telefone: "(81) 98712-1212",
        endereco: "Rua das Palmeiras, 222 - Recife",
        cep: "51021090",
        tipoAlimento: "Comida nordestina",
        horario: "12h às 14h",
        latitude: -8.1215,
        longitude: -34.8964
    },
    {
        nome: "Mercado Verde Puro",
        telefone: "(81) 98713-1313",
        endereco: "Rua Itamar Franco, 321 - Recife",
        cep: "51120040",
        tipoAlimento: "Orgânicos e verduras",
        horario: "8h às 13h",
        latitude: -8.1209,
        longitude: -34.9012
    },
    {
        nome: "Padaria Doce Tradição",
        telefone: "(81) 98714-1414",
        endereco: "Av. General San Martin, 201 - Recife",
        cep: "51010200",
        tipoAlimento: "Pães e doces",
        horario: "6h às 9h",
        latitude: -8.1145,
        longitude: -34.9051
    },
    {
        nome: "Restaurante Frutos do Sol",
        telefone: "(81) 98715-1515",
        endereco: "Rua dos Navegantes, 678 - Recife",
        cep: "51021080",
        tipoAlimento: "Frutos do mar",
        horario: "12h às 15h",
        latitude: -8.1160,
        longitude: -34.8999
    },
    {
        nome: "Doceria Açúcar e Mel",
        telefone: "(81) 98716-1616",
        endereco: "Rua Capitão Lima, 500 - Recife",
        cep: "50050970",
        tipoAlimento: "Doces e bolos",
        horario: "10h às 12h",
        latitude: -8.0642,
        longitude: -34.8788
    },
    {
        nome: "Café Sereno",
        telefone: "(81) 98717-1717",
        endereco: "Av. João de Barros, 750 - Recife",
        cep: "50050300",
        tipoAlimento: "Café e salgados",
        horario: "8h às 10h",
        latitude: -8.0573,
        longitude: -34.8764
    },
    {
        nome: "Restaurante do Porto",
        telefone: "(81) 98718-1818",
        endereco: "Rua do Porto, 123 - Recife",
        cep: "51050030",
        tipoAlimento: "Comida internacional",
        horario: "12h às 15h",
        latitude: -8.1119,
        longitude: -34.9025
    },
    {
        nome: "Padaria Sabor do Trigo",
        telefone: "(81) 98719-1919",
        endereco: "Rua das Graças, 222 - Recife",
        cep: "51130220",
        tipoAlimento: "Pães e salgados",
        horario: "7h às 11h",
        latitude: -8.1227,
        longitude: -34.9029
    },
    {
        nome: "Churrascaria Fogo e Brasa",
        telefone: "(81) 98720-2020",
        endereco: "Rua dos Pescadores, 500 - Recife",
        cep: "51110010",
        tipoAlimento: "Churrasco",
        horario: "12h às 16h",
        latitude: -8.1108,
        longitude: -34.8990
    },
    {
        nome: "Restaurante Tropicalia",
        telefone: "(81) 98721-2121",
        endereco: "Av. Boa Viagem, 1050 - Recife",
        cep: "51011050",
        tipoAlimento: "Comida tropical",
        horario: "11h às 14h",
        latitude: -8.1199,
        longitude: -34.8981
    },
    {
        nome: "Café Saboroso",
        telefone: "(81) 98722-2222",
        endereco: "Rua do Comércio, 800 - Recife",
        cep: "50020210",
        tipoAlimento: "Café e salgados",
        horario: "9h às 11h",
        latitude: -8.0650,
        longitude: -34.8772
    },
    {
        nome: "Mercado Central",
        telefone: "(81) 98723-2323",
        endereco: "Rua Barão de Souza Leão, 400 - Recife",
        cep: "51030010",
        tipoAlimento: "Frutas e legumes",
        horario: "7h às 12h",
        latitude: -8.1200,
        longitude: -34.8987
    },
    {
        nome: "Restaurante Estrela do Norte",
        telefone: "(81) 98724-2424",
        endereco: "Av. Agamenon Magalhães, 999 - Recife",
        cep: "52020090",
        tipoAlimento: "Comida regional",
        horario: "12h às 15h",
        latitude: -8.0479,
        longitude: -34.9067
    },
    {
        nome: "Restaurante Temperos da Terra",
        telefone: "(81) 98725-2525",
        endereco: "Rua Antônio de Góes, 567 - Recife",
        cep: "51111000",
        tipoAlimento: "Comida caseira",
        horario: "12h às 14h",
        latitude: -8.1122,
        longitude: -34.8974
    },
    {
        nome: "Sorveteria Delícia Gelada",
        telefone: "(81) 98726-2626",
        endereco: "Rua 17 de Agosto, 987 - Recife",
        cep: "51020200",
        tipoAlimento: "Sorvetes",
        horario: "13h às 17h",
        latitude: -8.1233,
        longitude: -34.8952
    },
    {
        nome: "Restaurante Fornalha de Minas",
        telefone: "(81) 98727-2727",
        endereco: "Rua 1º de Maio, 800 - Recife",
        cep: "51120120",
        tipoAlimento: "Comida mineira",
        horario: "12h às 16h",
        latitude: -8.1147,
        longitude: -34.8971
    },
    {
        nome: "Café Colonial",
        telefone: "(81) 98728-2828",
        endereco: "Rua Floriano Peixoto, 100 - Recife",
        cep: "50010090",
        tipoAlimento: "Café e doces",
        horario: "8h às 11h",
        latitude: -8.0640,
        longitude: -34.8704
    },
    {
        nome: "Restaurante Rio Doce",
        telefone: "(81) 98729-2929",
        endereco: "Rua Ribeiro de Brito, 250 - Recife",
        cep: "51020210",
        tipoAlimento: "Comida nordestina",
        horario: "11h às 14h",
        latitude: -8.1128,
        longitude: -34.8996
    }
];

