const parkingData = {
  mexico: {
    cityName: "CIUDAD DE MÉXICO",
    totalSpots: 11956,
    locations: [
      {
        id: 1,
        name: "NEMESIS CAPITAL SANTA FE",
        address:
          "Av. Santa Fe Num. 498, Col. Cruz Manca, Deleg. Cuajimalpa de Morelos, Cd. de México, C.P. 05300",
        spots: 417,
        phone: "+52 55 1664 6477",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14314.45571483758!2d-99.27165304736715!3d19.352527211332113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCruz%20Manca%20Av.%20Santa%20Fe%20498%20Lomas%20de%20Santa%20Fe%2C%20Contadero%2C%20Cuajimalpa%20de%20Morelos%2005349%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1sen!2sus!4v1768411013360!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 2,
        name: "PABELLÓN CUEMANCO",
        address:
          "Cañaverales Num. 222, Col. Granjas Coapa, Deleg. Tlalpan, Cd. de Mexico, C.P. 14330.",
        spots: 1096,
        phone: "+52 55 2652 0452",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17102.548117070535!2d-99.108194!3d19.295466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0181fc235d6b%3A0x820cc36f39dab88a!2sStarbucks%20Pabell%C3%B3n%20Cuemanco!5e1!3m2!1sen!2sus!4v1768411031586!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 3,
        name: "PLAZA TLALNEPANTLA",
        address:
          "Calle Sor Juana Ines de la Cruz Num. 280, Col. San Lorenzo Industrial, Tlalnepantla de Baz Estado de Mexico, C.P. 54033",
        spots: 3636,
        phone: "+52 55 2652 0452",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17076.977504856637!2d-99.206526!3d19.538675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d467f672955%3A0x9d8490675a78134c!2sPlaza%20Tlalne%20Fashion%20Mall!5e1!3m2!1sen!2sus!4v1768411080247!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 4,
        name: "AEROPUERTO CIUDAD DE MÉXICO, TERMINAL 1",
        address:
          "Terminal 1 del Aeropuerto Internacional Benito Juarez de la Cd. de México, Av. Cap Carlos Leon S/N, Col. Peñon de los Baños, Deleg. Venustiano Carranza, Cd. de México, C.P. 15620",
        spots: 400,
        phone: "+52 55 1560 1898",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d34175.81056445609!2d-99.082852!3d19.435096!3m2!1i1024!2i768!4f13.1!2m1!1sMEX%20Terminal%201%20M%C3%A9xico%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1sen!2sus!4v1768411094479!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 5,
        name: "PATIO REVOLUCIÓN",
        address:
          "Av. Revolución Num. 1837, Col. San Angel, Deleg. Alvaro Obregon, Cd. de México, C.P. 01000",
        spots: 397,
        phone: "+52 55 5085 4103",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17097.738927036015!2d-99.19135800000001!3d19.341432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d200018c3c2f79%3A0xcf9ad5f8a8b8dd1c!2sPatio%20Revoluci%C3%B3n!5e1!3m2!1sen!2sus!4v1768411104954!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 6,
        name: "PATIO VALLE DE CHALCO",
        address:
          "Blvd. Juan Pablo II Núm. 370, Col. María Isabel, Valle de Chalco Estado de México, C.P. 56615",
        spots: 1860,
        phone: "+52 55 7900 8083",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17101.978172667797!2d-98.953358!3d19.300919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1c4cbb3a3959%3A0x3bbcec6f8d665d9d!2sPatio%20Valle%20de%20Chalco!5e1!3m2!1sen!2sus!4v1768411121244!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 7,
        name: "ZENTRALIA CHURUBUSCO",
        address:
          "Av. Rio Churubusco Num. 1072, Col. Nueva Rosita, Deleg. Iztapalapa, Ciudad de Mexico, C.P. 09420",
        spots: 645,
        phone: "+52 55 5648 4856",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17093.76389515275!2d-99.102152!3d19.379346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fe77adb3a85b%3A0x34cd3fdccf362d71!2sZentralia%20Churubusco!5e1!3m2!1sen!2sus!4v1768411134318!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 8,
        name: "ZENTRALIA COACALCO",
        address:
          "Via Jose Lopez Portillo Num. 145, Col. Santa Ma. Magdalena, Municipio Coacalco Ecatepec de Morelos, Estado de Mexico, C.P. 55715",
        spots: 880,
        phone: "+52 55 2600 2384",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17067.114773660818!2d-99.089181!3d19.631708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f3e4c0eba1bf%3A0x37f51b99d6d4b3b4!2sZentralia%20Coacalco!5e1!3m2!1sen!2sus!4v1768411152639!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 9,
        name: "PLAZA INBURSA CUICUILCO",
        address:
          "Av. San Fernando Num. 649, Col. Peña Pobre, Deleg. Tlalpan, Cd. de México, C.P. 14060",
        spots: 1625,
        phone: "+52 55 5424 3902",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17102.3300033374!2d-99.18493!3d19.297553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce007ba843439b%3A0x198820750a816fbb!2sPlaza%20Cuicuilco%20Inbursa!5e1!3m2!1sen!2sus!4v1768411168956!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 10,
        name: "WAL-MART JESÚS DEL MONTE",
        address:
          "Blvd. Interlomas Num. 5, Col. Lomas Country, Naucalpan de Juarez Edo. de México, C.P. 52779",
        spots: 800,
        phone: "+52 55 5247 1198",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17091.71821500288!2d-99.288821!3d19.39883!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d206c884534539%3A0xb5b512d246af3b81!2sWalmart!5e1!3m2!1sen!2sus!4v1768411178213!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  cancun: {
    cityName: "CANCÚN",
    totalSpots: 6440,
    locations: [
      {
        id: 1,
        name: "FORUM BY THE SEA",
        address:
          "Blvd. Kukulcan Km. 9 Lote 10 y 10C, Col. Zona Hotelera, Benito Juárez, Cancún Quintana Roo, C.P. 77500",
        spots: 156,
        phone: "+52 998 883 5665",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d270429.2320304403!2d-86.747139!3d21.132364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2898cf2ab18d%3A0x13a03e95550b2380!2sForum%20By%20The%20Sea!5e1!3m2!1sen!2sus!4v1768411617733!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 2,
        name: "LA ISLA CANCÚN",
        address:
          "Blvd. Kukulcan Km. 12.5 Lote 1810 y 1811, Col. Zona Hotelera, Benito Juarez, Cancun Quintana Roo, C.P. 77500",
        spots: 786,
        phone: "+52 998 176 8087",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16904.314253942717!2d-86.764679!3d21.110539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c285f7409cf51%3A0x344e080d3e0664b4!2sLa%20Isla%20Canc%C3%BAn!5e1!3m2!1sen!2sus!4v1768411636948!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 3,
        name: "PLAZAS OUTLET CANCÚN",
        address:
          "Espacio 7 int. Plazas Outlet Av. Andres Qna.Roo Col Super Manzana. Mza.10 Lt.1, 39, 77999 Cancún, Q.R.",
        spots: 1300,
        phone: "+52 998 206 1381",
        hours: "Lunes a domingo 7:00 – 23:00 hrs.",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16899.61119936836!2d-86.848419!3d21.151789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b47d3115e8f%3A0xab7984da5fe5fbbb!2sLas%20Plazas%20Outlet%20Cancun!5e1!3m2!1sen!2sus!4v1768411661743!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 4,
        name: "PUERTO CANCÚN",
        address: "Boulevard Kukulcan Km 1 Zona Hotelera Cancún Quintana Roo",
        spots: 100,
        phone: "N/A",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16901.432007031945!2d-86.763878!3d21.135828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c28c036672f0b%3A0xd206946e2cf0d86a!2sBlvd.%20Kukulcan%2025%2C%20Kukulcan%20Boulevard%2C%20Zona%20Hotelera%2C%2077500%20Canc%C3%BAn%2C%20Q.R.%2C%20Mexico!5e1!3m2!1sen!2sus!4v1768411678209!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 5,
        name: "PLAZA LAS AMÉRICAS CANCÚN MALL",
        address: "Av Costa Maya No.1, Mz 22, SM 228, 228, 77500 Cancún, Q.R.",
        spots: 1143,
        phone: "+52 998 842 1361",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16896.119928467695!2d-86.851163!3d21.182361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c68725fbf67%3A0x54a7abd9c6ef2471!2sCancun%20Mall!5e1!3m2!1sen!2sus!4v1768411688013!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 6,
        name: "HOTEL KRYSTAL CANCÚN",
        address:
          "Av. Sayil Mz. 1 Lote 4C-07, Col. Smza. 4-A, Benito Juarez, Cancun Quintana Roo, C.P. 77500",
        spots: 150,
        phone: "+52 998 840 6417",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16899.88461522478!2d-86.819882!3d21.149393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2957dd0e30f7%3A0xce0e3e254513ffd2!2sAv.%20Sayil%2C%20Canc%C3%BAn%2C%20Q.R.%2C%20Mexico!5e1!3m2!1sen!2sus!4v1768411712704!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 7,
        name: "CENTRO COMERCIAL MARINA TOWN CENTER",
        address:
          "Sección E, Av. Bonampak Mza. 27 Lote 1-02 Unidad Condominal, Col. Cancun Centro, Benito Juarez, Cancun Quintana Roo. C.P. 77500.",
        spots: 1850,
        phone: "+52 998 217 7428",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16898.582315889424!2d-86.807977!3d21.160803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2eb341a0f9a3%3A0x47f112bcb0718976!2sMarina%20Puerto%20Canc%C3%BAn!5e1!3m2!1sen!2sus!4v1768411722753!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 8,
        name: "CENTRO COMERCIAL PABELLÓN CUMBRES",
        address:
          "Blvd. Luis Donaldo Colosio Mz. 01 Lote 4-02, Col. Smza. 310, Benito Juarez, Cancun Quintana Roo, C.P. 77560",
        spots: 955,
        phone: "+52 998 882 1240",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16904.103402803954!2d-86.840794!3d21.11239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bcac964db59%3A0xedbd38877100ea34!2sPabellon%20Cumbres!5e1!3m2!1sen!2sus!4v1768411731644!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  "playa-del-carmen": {
    cityName: "PLAYA DEL CARMEN",
    totalSpots: 254,
    locations: [
      {
        id: 1,
        name: "VIA TENDENZA PARKING",
        address:
          "Calle 10 Mz. 37 Lotes 1-27 y 1-28, Col. Centro, Solidaridad, Playa del Carmen Quintana Roo C.P. 77710",
        spots: 254,
        phone: "+52 984 873 0099",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d67833.98917165953!2d-87.072424!3d20.629629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e43256196d979%3A0x9da463fb5c596491!2sVillas%20V%C3%ADa%20Tendenza!5e1!3m2!1sen!2sus!4v1768411773553!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  cuernavaca: {
    cityName: "CUERNAVACA",
    totalSpots: 3162,
    locations: [
      {
        id: 1,
        name: "FORUM CUERNAVACA",
        address:
          "Jacarandas Num. 103, Col. Ricardo Flores Magon, Cuernavaca, Morelos, C.P. 62370",
        spots: 2974,
        phone: "+52 777 688 7609",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17140.877457580387!2d-99.198056!3d18.925278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf8f044009a5%3A0x7a16efdf2d2741a8!2sGrand%20Outlet%20Cuernavaca!5e1!3m2!1sen!2sus!4v1768411789309!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
      {
        id: 2,
        name: "PLAZA CHAPULTEPEC CUERNAVACA",
        address:
          "Av. Cuauhtémoc Num. 186, Col. Chapultepec, Cuernavaca, Morelos, C.P 62450",
        spots: 188,
        phone: "+52 777 316 4334",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17141.169465929688!2d-99.210479!3d18.922431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf9821099e6f%3A0xebb92f9beec44573!2sPlaza%20Chapultepec!5e1!3m2!1sen!2sus!4v1768411804019!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  guadalajara: {
    cityName: "GUADALAJARA",
    totalSpots: 2150,
    locations: [
      {
        id: 1,
        name: "PLAZAS OUTLET GUADALAJARA",
        address:
          "Carretera Guadalajara – Morelia Km. 12.5 Local 101-B, Col. Jardines Tlajomulco, Tlajomulco de Zuñiga Jalisco, C.P. 45640",
        spots: 2150,
        phone: "+52 33 3687 0600",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16970.43551680281!2d-103.483106!3d20.522222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f54f121b1a293%3A0x61f0a900e0dc5acf!2sPlazas%20Outlet%20Guadalajara!5e1!3m2!1sen!2sus!4v1768411829135!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  tepic: {
    cityName: "TEPIC",
    totalSpots: 3031,
    locations: [
      {
        id: 1,
        name: "FORUM TEPIC",
        address:
          "Blvd. Luis Donaldo Colosio Num. 680, Col. Benito Juarez Oriente, Tepic Nayarit, C.P. 63175",
        spots: 3031,
        phone: "+52 31 1219 3483",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16860.517027908212!2d-104.866413!3d21.491756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427374050000001%3A0x5d6ee4d2367ebf60!2sPlaza%20Forum%20Tepic!5e1!3m2!1sen!2sus!4v1768411857188!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  acapulco: {
    cityName: "ACAPULCO",
    totalSpots: 1757,
    locations: [
      {
        id: 1,
        name: "LA ISLA ACAPULCO",
        address:
          "Blvd. de las Naciones Num. 18 Lote 1 Mz. V, Col. Playa Diamante, Acapulco de Juarez Guerrero, C.P. 39897",
        spots: 1757,
        phone: "+52 744 462 0813",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17349.52534521561!2d-99.775806!3d16.772746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5d6698a9c847%3A0x1c75355ef1d592cf!2sLa%20Isla%20Shopping%20Village!5e1!3m2!1sen!2sus!4v1768411881980!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  toluca: {
    cityName: "TOLUCA",
    totalSpots: 3000,
    locations: [
      {
        id: 1,
        name: "OUTLET LERMA",
        address:
          "Carretera Mexico – Toluca Km. 50 Calzada de Cholula, Col. La Isla, Lerma de Villada Estado de Mexico, C.P. 52000",
        spots: 3000,
        phone: "+52 72 8284 5134",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17103.920448105175!2d-99.498911!3d19.28233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf5a82a4a60ef%3A0xd1d2330b1c5f03e1!2sUrban%20Store%20Outlet%20Lerma!5e1!3m2!1sen!2sus!4v1768411909875!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  pachuca: {
    cityName: "PACHUCA",
    totalSpots: 2156,
    locations: [
      {
        id: 1,
        name: "GALERIAS PACHUCA",
        address:
          "Camino Real de la Plata Num. 100 – 102, Col. Fraccionamiento Zona Plateada, Pachuca de Soto Hidalgo, C.P. 42083",
        spots: 2156,
        phone: "+52 77 1710 3214",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17016.90856767031!2d-98.769208!3d20.09888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a0bd6b02e235%3A0x4744e0cae385dd06!2sDomino&#39;s%20Galer%C3%ADas%20Pachuca!5e1!3m2!1sen!2sus!4v1768411932678!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  monterrey: {
    cityName: "MONTERREY",
    totalSpots: 2105,
    locations: [
      {
        id: 1,
        name: "OUTLET MONTERREY",
        address:
          "Manuel L. Barragan Num. 220, Col. Exhacienda el Canada, Escobedo Nuevo Leon, C.P. 66054",
        spots: 2105,
        phone: "+52 81 8058 9174",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d522171.04370063334!2d-100.303082!3d25.773205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662937fa199a40b%3A0x15d15eda4bd97a78!2sLas%20Plazas%20Outlet%20Monterrey!5e1!3m2!1sen!2sus!4v1768411965307!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  coatzacoalcos: {
    cityName: "COATZACOALCOS",
    totalSpots: 1638,
    locations: [
      {
        id: 1,
        name: "FORUM COATZACOALCOS",
        address:
          "Av. Universidad Km.8 Plaza Forum, Local Servicio 1 Estacionamiento, Col. Predio Santa Rosa, Coatzacoalcos Veracruz, C.P. 96538",
        spots: 1638,
        phone: "+52 921 210 9704",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17219.630965395638!2d-94.488038!3d18.141864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85e98289fbd18363%3A0xb4f73c956364b8ec!2sForum%20Coatzacoalcos!5e1!3m2!1sen!2sus!4v1768411990336!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  culiacan: {
    cityName: "CULIACÁN",
    totalSpots: 2553,
    locations: [
      {
        id: 1,
        name: "FORUM CULIACÁN",
        address:
          "Blvd. Jose Diego Valadez Num. 1676, Col. Desarrollo Urbano Tres Rios, Culiacan Sinaloa, C.P. 80000",
        spots: 2553,
        phone: "+52 667 752 1960",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16447.279919916047!2d-107.40155000000001!3d24.815326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd0a76213076f%3A0xa0f9556f4de4be4!2sForum%20Culiac%C3%A1n%20Centro%20Comercial!5e1!3m2!1sen!2sus!4v1768412006556!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  tlaquepaque: {
    cityName: "TLAQUEPAQUE",
    totalSpots: 3128,
    locations: [
      {
        id: 1,
        name: "FORUM TLAQUEPAQUE",
        address:
          "Blvd. General Marcelino Garcia Barragan Num. 2077, Col. Prados del Nilo, Guadalajara Jalisco C.P. 44840",
        spots: 3128,
        phone: "+52 331 578 0945",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16956.425978101946!2d-103.32149500000001!3d20.64821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b23706c86a2b%3A0xf5ddd6a2b710ff12!2sForum%20Tlaquepaque!5e1!3m2!1sen!2sus!4v1768412041849!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  "puerto-vallarta": {
    cityName: "PUERTO VALLARTA",
    totalSpots: 934,
    locations: [
      {
        id: 1,
        name: "LA ISLA SHOPPING PUERTO VALLARTA",
        address:
          "Blvd. Francisco Medina Ascencion Num. 2479, Col. Zona Hotelera Norte, Puerto Vallarta, Jalisco, C.P. 48300",
        spots: 934,
        phone: "+52 322 688 1625",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16956.81471545292!2d-105.237513!3d20.644724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421457453e9e43b%3A0x396c5356930853d6!2sLa%20Isla!5e1!3m2!1sen!2sus!4v1768412051616!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  "tuxtla-gutierrez": {
    cityName: "TUXTLA GUTIÉRREZ",
    totalSpots: 2723,
    locations: [
      {
        id: 1,
        name: "FASHION MALL TUXTLA",
        address:
          "Carretera Tuxtla – Chiapa de Corzo esq. Blvd. Salomón González Blanco Núm. S/N, Tuxtla Gutiérrez Chiapas, C.P. 29070",
        spots: 2723,
        phone: "+52 961 688 2257",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d34703.996313888274!2d-93.074254!3d16.74563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed2777d50eed75%3A0xcc186f5611fad1d9!2sTOKS%20Plaza%20Ambar!5e1!3m2!1sen!2sus!4v1768412073635!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  "ciudad-del-carmen": {
    cityName: "CIUDAD DEL CARMEN",
    totalSpots: 1417,
    locations: [
      {
        id: 1,
        name: "ZENTRALIA CIUDAD DEL CARMEN",
        address:
          "Av. Corregidora Num. 28 entre Aviacion y Holche, Col. Aeropuerto, Cd. Del Carmen Campeche, C.P. 24199",
        spots: 1417,
        phone: "+52 938 688 5164",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17168.479660622634!2d-91.807754!3d18.654314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f107a0d7b619a5%3A0x1cdb3b44582242d1!2sZentralia%20Ciudad%20del%20Carmen!5e1!3m2!1sen!2sus!4v1768412098131!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
  colima: {
    cityName: "COLIMA",
    totalSpots: 1571,
    locations: [
      {
        id: 1,
        name: "ZENTRALIA COLIMA",
        address:
          "Tercer Anillo Periferico Num. 301, Col. Valle Dorado, Colima Colima, C.P. 28017",
        spots: 1571,
        phone: "+52 31 2323 4443",
        hours: "24 Horas",
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17105.520121193786!2d-103.69805!3d19.267007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255aec3f0a5707%3A0xf3b01e2e19dda398!2sZentralia%20Mall!5e1!3m2!1sen!2sus!4v1768412118567!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      },
    ],
  },
};