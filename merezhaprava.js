document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
  const links = document.querySelectorAll('a[rel="open-popup"]');
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("link clicked");

      const popup = document.querySelector(".pop-up-div");
      if (popup) {
        console.log("opening popup...");
        popup.style.display = "block";
        popup.style.opacity = "1";
      }
    });
  });
  // Default landing ID
  const defaultLandingId = "842376e7-2bef-4205-8a16-db0a2cc0c458";
  const blogPostsLandingId = "af173b2b-6afb-4261-8533-50936a300e19";
  const landingIdMapping = {
    "viyskovi-pensiyi": "1d894163-a8f9-4f22-b545-22a28ed40699",
    "dopomoga-kadrovim-silovikam": "aea2b99c-79a3-47a2-873e-c8e6a81c51b8",
    "civilni-pensiyi": "0bf6584a-7d88-415b-bd73-592f77962db2",
    "administrativni-pravoporushennya": "2e932e05-65a9-4328-95e2-57db7b8a4529",
    "about": "709087de-8c7e-499b-8339-1d888221588f",
    "our-lawyers": "def9cf91-3d35-43d5-a3a6-4a755c76c993",
    "judicial-practice": "4e73b810-1925-4729-88f1-154a534318d3",
    "vacancies": "085d4e70-7fe8-41e4-aebb-54cc64f81ebd",
    "events": "118ffd87-e5fd-473b-8f67-8d3e5f307d2f",
    "legal-blog": "be40118b-5b19-487d-82c0-f3ba887cea25",
    "publications-msm": "97948602-9eae-4880-973b-6f43f997ddd8",
    "partnership": "23c0e46f-f9cc-44f3-a154-0a3f1e38fe09",
    "reviews": "408eba72-40d6-4b41-a838-412b38e5422f",
    "services": "260bcbb3-0ede-4131-8f4f-c682397c519f",
    "trudove-pravo": "95e1ae5c-6750-495e-b9a9-81d53a6b1f71",
    "zhitlove-pravo": "c4d72f04-7643-4481-8c9e-95b0d343e8a4",
    "spadkove-pravo": "178fa4e0-9101-4a6a-9937-b80adfcfa8c8",
    "neruhomist": "5fee97a7-3923-4abc-94da-e8ea649921ce",
    "kreditni-spori": "5c00ef03-d6ca-4665-879d-6e91b37bd72d",
    "advokat-dlya-biznesu": "3b402c2f-63be-4e55-8466-2a86066be3b0",
    "oskarzhennya-rezultativ-perevirok": "488d2092-25bc-4d7c-a26c-7819799e4de0",
    "volodimir-glazov": "2fbdfb7d-40b1-48ef-ba39-2e47bf0996b2",
    "yuliya-mihaylovich": "8e634e5f-5384-42c6-8ca5-87a1263909ad",
    "oleksandra-fomenko": "bba172f1-4a8a-43f9-bb32-d32d105a6238",
    "irina-kononova": "9668ece3-11ea-4656-b1d0-a5c742642655",
    "sayik-olena": "9740ddff-032e-45d6-8c3c-bff4d76ca3c8",
    "igor-trifonov": "5aa9b2e1-bf8f-4a1e-9435-82a2a8f667bb",
    "oleksandr-andreshkov": "cc404719-6561-4e8c-96af-2bf86b0a1a7c",
    "olena-dragomirova": "23ac4050-7b48-438d-910b-5f0154b62fc9",
    "oleg-glazov": "fde43645-da91-484c-b23c-f75a2839833d",
    "viktoriya-ieromina": "dd5eb92e-fdd3-43cf-92a1-7da137bf8718",
    "irina-haynacka": "1774e560-4bd4-4b32-b24f-0620a106deb1",
    "oksana-krutogolova": "4bbde530-d0fd-4ba3-b8b1-183dcbe44299",
    "andriy-kirilenko": "01cfe194-1e78-44be-a53d-8aed4110ae96",
    "vladislav-mandrik": "6a15a3d8-992b-4ab2-b13a-99561f2855ff",
    "andriy-dzis": "f0deabb0-5c5e-4ab0-b0b6-a8a580640cb8",
    "yuriskonsulti": "71c6ff48-1d0a-4b9e-ac05-9e414bb752a1",
    "robota-dlya-yuristiv": "fb57b57c-1fee-4443-bfe7-cc1e89192038",
    "ofis-menedzheri": "0ec291f7-04c2-4120-829d-0affffaee13e",
    "marketologi": "d24f2e02-a4e3-4fe0-b7c4-3074e3757d0c",
    "pomichniki-advokativ": "d3cf3693-6476-44fe-abc9-a9c833eed154",
    "zhurnalisti": "1c31cb5d-fa0b-478a-988d-3b5f89be7786",
    "informuvannya-kliientiv": "54063e14-3aa4-4d5e-8c75-a772f95d5455",
    "yuriskonsult-kadrovi-siloviki": "6398d2ba-1165-49d0-8202-d228ecec9169",
    "targetolog": "c1f88a34-9590-41e4-8832-596e82c863bc",
    "mobing-v-ukrayini-zakonni-sposobi-protistoyannya":
      "2487a837-e741-40c6-915b-219b1ee02c39",
    "daruvannya-ta-spadkuvannya-u-shlyubi-sho-vazhlivo-znati":
      "a2b05952-bb36-4926-87aa-870c8cb5f2cb",
    "zvilnyati-pracivnikiv-bez-nalezhnih-pidstav-ne-dozvolyayetsya":
      "adaf66f5-a1fe-4d19-bf55-8d225a4f7f5d",
    "chi-mozhna-vijskovomu-oskarzhiti-visnovok-vlk":
      "fa8ca8fb-cde6-4135-b6c9-d9655e6111d8",
    "top-pitan-pro-mobilizaciyu-vidpovidi-advokata":
      "f04b148d-e2cd-4b57-9478-2aee9c443335",
    "pensioneram-garantovana-doplata-do-pensiyi-u-2024-roci-yak-oformiti":
      "8a93acf3-135f-4262-a5ca-50c0a3ce7d26",
    "navisho-v-ukrayini-stvoryuyut-vijskovu-policiyu":
      "93aba0bc-f38b-4d85-931e-1659dbf5f488",
    "yak-viyskovomu-otrimati-dodatkovu-vinagorodu-30-50-ta-100-tisyach-griven":
      "0b369f18-c0cc-44c1-bef7-26c7a1e5ea06",
    "ukrayinski-novini-eksperti-ocinili-yaki-problemi-z-viplatami-viyskovim-zalishatsya-u-2024-roci":
      "8bcb8cc9-e981-46b1-8f0c-eaf00592d6cb",
    "liga-hto-z-viyskovosluzhbovciv-maie-pravo-na-dodatkovi-vinagorodi":
      "6a74fdb5-a1e3-44e7-a402-3b4a8bc6f8f2",
    "liga-70-vidsotkiv-sprav-z-vidnovlennya-viplat-za-likuvannya-zahisnikam-virishuyutsya-do-sudiv":
      "b0d4ae78-b1f1-49a0-885c-a7442ba002ed",
    "liga-biznes-zmozhut-pereviryati-za-navodkoyu-a-zminyuvati-grafik-hoch-shchomisyacya":
      "a6ebe4d1-3dea-4656-bcb4-9633581585a5",
    "liga-proiekt-zakonu-8029-cholovikam-mozhut-vidkriti-viyizd-za-kordon-ale-tilki-cherez-donati":
      "09edae92-8db0-4f97-a229-b784f712fffd",
    "yuridichna-praktika-yak-parlament-hoche-zminiti-zakon-pro-mobilizaciyu-ta-viyskovu-sluzhbu":
      "1b762c7e-c59c-430f-976d-ce63ea4a3b66",
    "yuridichna-praktika-navishcho-v-ukrayini-stvoryuyut-viyskovu-policiyu":
      "e3231191-b586-444b-bc0b-94edbf04c5bb",
    "tsn-kozhen-drugiy-viyskoviy-ne-otrimuie-viplati-bez-dopomogi-advokata---yuk-merezha-prava":
      "08d89001-32a7-4976-90e4-a5b0ade9c4b3",
    "preskonferenciya-yuk-merezha-prava-v-kiievi-yakimi-budut-groshovi-viplati-viyskovim-u-2024-roci":
      "cd3ce0fb-340c-4cdc-91d2-6062d0db9983",
    "gordon-tri-osnovnih-problemi-viyskovih-z-viplatami":
      "3ab47476-ad2b-4f6d-b15c-958594437911",
    "7-kanal---viyskovim-vzhe-chotiri-roki-ne-doplachuyut-pensiyi":
      "860d5f5d-3a60-41b1-b7ca-9999b1563e07",
    "pres-konferenciya-shcho-chekati-viyskovim-pensioneram-u-2024-roci":
      "e3bf3163-d1a0-4ccc-8285-298e7ba645a0",
    "preskonferenciya-yuk-merezha-prava-v-odesi-chomu-derzhava-zaoshchadzhuie-na-viyskovih-pensionerah":
      "750e0834-f7ad-473e-90bd-68fb07bebf92",
    "preskonferenciya-v-informaciyniy-agenciyi-interfaks-ukrayina-na-temu-yaki-viplati-mozhut-zabrati-u-viyskovih---dumka-advokativ":
      "8a9ae355-ec29-47ca-abe5-b9e999a03647",
    "v-poltavskiy-oblasti-advokati-yuk-merezha-prava-proveli-zustrich-z-viyskovimi-pensionerami":
      "2d06dc6d-c1d9-41ad-8719-fb70e0a971a8",
    "preskonferenciya-v-agenciyi-odesa-media-na-temu-chi-poverne-derzhava-zakonni-pensiyi-viyskovim-prognozi-advokata-na-2022-rik":
      "ba13a878-e9f7-480e-bf93-73eb50a4bda3",
    "advokat-olena-dragomirova-nadala-konsultaciyi-pensioneram-na-zustrichi-v-chornomorskomu-odeska-oblast":
      "cbfe4e2c-18e5-4b8d-b20e-5eef836331cb",
    "zustrich-advokata-oleni-dragomirovoyi-z-pensionerami-v-mikolaievi":
      "ec9ae9f5-f2b6-4ee0-8a02-b5a0a3e1d183",
    "zustrich-advokatesi-oleni-dragomirovoyi-z-pensionerami-odeskoyi-oblasti":
      "285838c3-e3aa-44ee-b886-197b50de6c3f",
    "oflayn-zahid-dlya-pensioneriv-silovikiv-u-vinnickiy-oblasti":
      "ab437dac-5aeb-4053-b5ad-f62f8b42acb3",
    "pryamiy-efir-vidpovidi-na-zapitannya-viyskovih-pensioneriv":
      "18287e53-af9e-4c52-b487-2987183a30ea",
    "povernennya-nadbavok-ta-premiy": "26a7ae3a-28cd-4130-ab7a-5d1166ff115e",
    "povernennya-2-000-grn-socialnoyi-dopomogi":
      "88909e49-39b5-4106-9986-36519a2ab378",
    "shchomisyachna-dodatkova-groshova-vinagoroda":
      "d392b896-129e-4376-9809-17728f82f9c4",
    "neprovedennya-indeksaciyi-zarobitnoyi-plati":
      "7480a22d-fe4c-4fc5-b902-ec3e8e34e8bd",
    "kompensaciya-za-nevikoristanu-vidpustku-ato":
      "753319e7-3d50-43dd-aee2-cbf34d667d86",
    "zaborgovanist-za-nadbavkami-z-2018-po-2019-rik-takozh-u-z-vtratoyu-goduvalnika":
      "3bf3bcb6-b0d5-475c-9db4-e772879428ee",
    "zbilshennya-pensiyi-za-rahunok-prozhitkovogo-minimumu-takozh-u-z-vtratoyu-goduvalnika":
      "7d373bcf-abe1-4ef0-b289-9c930665372c",
    "zbilshennya-vidsotku-vid-groshovogo-zabezpechennya":
      "f5ee6213-e66a-4392-a6f1-9f2463652e5d",
    "znyattya-obmezhennya-maksimalnim-rozmirom-pensiyi":
      "e1421db4-abaf-4092-b990-90e2abd2dabc",
    "pererahunok-pensiyi-dlya-spivrobitnikiv-rozvidorganiv-takozh-za-vtratoyu-goduvalnika":
      "a2caf12b-2f67-43a4-a52f-a2da95d3aadb",
    "kompensaciya-za-nesvoiechasnu-viplatu-z-p-seredniy-zarobitok-kvchd":
      "8db61ca2-c2a1-454c-976b-d0f50c3b571f",
    "povernennya-5-i-10-vid-groshovogo-zabezpechennya-viyskovim-chornobilcyam":
      "8e634e5f-5384-42c6-8ca5-87a1263909ad",
    "zarahuvannya-pilgovogo-stazhu": "471a3587-3654-455f-9f21-b12b3583c30b",
    "viyskovym-pravookhorontsyam/kompensatsiya_za_invalidnist":
      "8fee810a-ab22-4604-8981-fd98f719f270",
    "kompensaciya-nevikoristanoyi-vidpustki-nacpoliciyi":
      "4af243c0-272d-45b2-b3bf-796cd3917d1c",
    "odnorazova-viplata-za-dosyagnennya-stazhu-10-rokiv":
      "935cfc37-c141-4f68-804a-6b44e3ad0f47",
    "zarahuvannya-nevrahovanogo-stazhu-dfs-dlya-nacionalnoyi-policiyi":
      "2c06fc1e-0647-4169-8c59-036f20239c02",
    "povernennya-100-000-griven-za-uchast-u-boyovih-diyah":
      "e2ee03f8-3f51-40a3-aff6-64557ae85232",
    "viplata-100-000-griven-za-period-likuvannya":
      "efc6344e-4c88-498b-8e37-34bafc05c5ae",
    "viplata-100-000-griven-ridnim-polonenogo-biycya":
      "68290f46-7598-4fc2-b6d4-543c9f6f75d7",
    "otrimannya-statusu-uchasnika-boyovih-diy":
      "31440905-49cc-4ccc-9150-9a4e29fd742b",
    "viplata-15-mln-grn-ridnim-zagiblogo-biycya":
      "336c78d2-1ff8-435d-a5b0-c4469e4c3ed6",
    "pererahunok-okladiv-za-prozhitkovim-minimumom":
      "3beb6822-97a6-434e-9cb4-3956138f7d12",
    "viplata-30-000-grn-pracivnikam-derzhavnoyi-kriminalno-vikonavchoyi-sluzhbi":
      "1e62c573-fcee-419c-934b-700cd7a0a47c",
    "vklyuchennya-boyovih-do-ogd-pri-zvilnenni":
      "7037f067-fd12-4cb5-bde1-2bce6856f9d4",
    "ponovlennya-na-posadi-zvilnenih-pid-chas-likuvannya":
      "42df7efe-818e-40c1-8394-3be806308f54",
    "zvilnennya-viyskovih-za-stanom-zdorovya":
      "407feb95-e23d-4126-b802-bc5136f26140",
    "neprovedennya-indeksaciyi-zarobitnoyi-plat":
      "ea4c0fd0-2da5-4510-b88e-9335914b6302",
    "doplata-za-robotu-vnochi-ta-pid-chas-karantinu-dlya-nacpoliciyi":
      "fb08e829-88dd-4fa3-9a45-e82207e7c4da",
    "odnorazova-viplata-cherez-vidsutnist-10-rokiv-vislugi":
      "13ba3a47-00ef-45cc-8cec-37fe07e505ae",
    "kompensaciya-nevikoristanoyi-vidpustki-dlya-nacpoliciyi":
      "69113ac9-c146-42d5-a8a6-741279bd17cf",
    "viplati-chlenam-simyi-zagiblogo-biycya-dobrovolchogo-formuvannya":
      "e6d6ad15-7375-4baa-b581-f5ab99de9b16",
    "kompensaciya-za-nesvoiechasnu-viplatu-zarplati-pislya-indeksaciyi":
      "ed6eb1a6-881c-4c1a-ac9e-c92bf774fae1",
    "ponovlennya-na-posadi-zvilnenih-pid-chas-likuvannya":
      "8e634e5f-5384-42c6-8ca5-87a1263909ad",
    "analiz-pensiyi-advokatom": "49cb85bd-4dfb-4b21-8744-26c3b1aeda88",
    "analiz-dovidki-pro-zarobitnu-platu":
      "52f80efb-6e0a-4e68-8364-e664c94d70f1",
    "pererahunok-pislya-perehodu-z-pensiyi-za-vislugu-rokiv-na-pensiyu-za-vikom":
      "a76b4069-510f-478f-9527-a13a32bbe30c",
    "pererahunok-pislya-perehodu-z-pensiyi-po-invalidnosti-na-pensiyu-za-vikom":
      "cbf37853-bfd0-440a-aa22-0fa7edb2209a",
    "dostrokove-priznachennya-pensiyi-uchasnikam-boyovih-diy":
      "c44bf640-20be-44fa-96d2-78b99ce3f582",
    "dostrokove-priznachenni-pensiyi-chornobilcyam":
      "5a1a264e-4cec-454b-8204-6a44171021cd",
    "zarahuvannya-stazhu-dlya-priznachennya-pensiyi-za-vislugoyu-rokiv":
      "3ba3aed8-f6aa-4deb-8757-b486e3333c12",
    "zarahuvannya-stazhu-derzhavnoyi-sluzhbi":
      "3e67072d-9917-4ab3-a587-2c2984a4e42d",
    "ponovlennya-ukrayinskoyi-pensiyi-pislya-pripinennya-viplati-rosiyskoyi":
      "eb2dc930-cd3e-430a-ae52-2a9b59fa4970",
    "pererahunok-pensiyi-u-zvyazku-z-vipravlennyami-netochnostyami-v-trudoviy-knizhci":
      "12a6d50b-10fa-4123-b859-d02d4768da15",
    "zarahuvannya-stazhu-v-osoblivo-shkidlivimi-abo-osoblivo-vazhkimi-umovami-praci":
      "117da030-3d49-44b3-9cbd-133e1a09a049",
    "pererahunok-pracyuyuchim-pensioneram":
      "de7128ed-0245-4ce4-abcb-3f909707de98",
    "pererahunok-pensiyi-derzhavnim-sluzhbovcyam-z-urahuvannyam-materialno-socialnoyi-dopomogi":
      "a4a52e70-b039-4563-9983-3d44a194227a",
    "viplata-desyati-misyachnih-pensiy": "8dd0d268-30f3-4d90-9668-cfda76124cfb",
    "viplata-nepracyuyuchim-pensioneram-chornobilcyam":
      "3ccb195c-7546-4105-b3e6-19ab8b60b404",
    "kompensaciya-za-nedootrimannya-chornobilskoyi-pensiyi-za-invalidnistyu-po-vtrati-goduvalnika":
      "10e8a1db-244d-45c5-9845-2035dd1da159",
    "perevedennya-zaborgovanosti-na-spadkoiemciv":
      "10166241-3a60-4c68-af61-d4cbe475bba2",
    "zakrittya-provadzhennya-u-spravah-pro-administrativni-pravoporushennya":
      "428aa99b-e14b-4a4f-bfef-bb7e34124c39",
    "oskarzhennya-diy-pracivnikiv-policiyi":
      "73069b29-da57-4d66-8e11-182cffdec82a",
    "zvernennya-do-policiyi-z-povidomlennyam-pro-kriminalne-pravoporushennya":
      "2a8e946b-9df8-434e-8bd1-dcb7c3da3a2b",
    "predstavnictvo-poterpilogo-v-kriminalnomu-provadzhenni-pid-chas-dosudovogo-rozsliduvannya":
      "ea4e65e4-a740-4d2f-9fab-3965214002b7",
    "rozirvannya-shlyubu": "aa808ff5-b3a3-4f93-9667-4e811ea05b2b",
    "podil-mayna-podruzhzhya": "17babce7-305c-45cf-b31c-a8a4cc895872",
    "styagnennya-alimentiv": "1e076837-fb98-4cab-9db4-174e12cb1826",
    "pozbavlennya-batkivskih-prav": "a315af71-0cb8-4fcd-b437-9c2187d1524a",
    "zbilshennya-zmenshennya-rozmiru-alimentiv":
      "3c7d0962-6d6d-4634-88ce-379abacac8bc",
    "styagnennya-alimentiv-na-ditinu-yaka-navchaietsya":
      "41a5a8c1-3c47-45d2-a9d6-23ef028d5a1d",
    "styagnennya-shtrafu-za-nevchasnu-splatu-alimentiv":
      "f850c480-b6cc-4828-a9cf-1ae0a2b4bd79",
    "styagnennya-alimentiv-na-druzhinu": "e9b013d4-5b98-47f4-a74c-52845117b398",
    "usinovlennya-ditini-odnim-z-podruzhzhya-ditini-inshogo-z-podruzhzhya":
      "6f93b009-8b0d-490f-995d-9135fa325a83",
    "osporyuvannya-chi-vstanovlennya-batkivstva":
      "ba4c7074-e17c-499f-a676-c4ce44f281bc",
    "viselennya-spivmeshkancya-iz-kvartiri":
      "0bf57512-cec1-43c3-995f-3a85b84924b9",
    "viznachennya-miscya-prozhivannya-ditini-z-batkom-matiryu":
      "64999a7a-f72d-4108-80bc-1ab24364f8ce",
    "perevirka-cilovogo-vitrachannya-alimentiv":
      "1fa3b0e2-1269-4c76-87ad-91efff520d24",
    "vstanovlennya-faktu-rodinnih-vidnosin":
      "e3bcead0-01fa-438a-9ba1-0b92805ee4da",
    "vstanovlennya-faktu-prozhivannya-bez-reiestraciyi-shlyubu":
      "05f8e1a4-6dfb-4b5d-8c54-6bacbc12f71d",
    "viznachennya-grafiku-zustrichey-z-batkom-matiryu":
      "f2b17544-71f9-4318-a30e-0c695cd527fa",
    "vstanovlennya-faktu-smerti-na-timchasovo-okupovaniy-teritoriyi":
      "b9855ea1-c67e-4ba9-8fc2-f5aa1c83bc17",
    "vstanovlennya-faktu-narodzhennya-na-timchasovo-okupovaniy-teritoriyi":
      "b9855ea1-c67e-4ba9-8fc2-f5aa1c83bc17",
    "skladannya-mirovoyi-ugodi-u-spravah-pro-podil-mayna":
      "a19953c5-2e11-4d99-a900-f4d7b7b98fde",
    "viznannya-osobi-nediiezdatnoyu-ta-vstanovlennya-nad-neyu-opiki":
      "ebc14156-a984-4b40-be3c-794b39ae0aba",
    "mitni-spori": "b0df8c5f-0dec-4862-9407-564fc95735cf",
    "simeyni-spori": "8c24f8f8-12d6-4efd-9eb8-d43e24407142",
    "advokat-ka-kriminalne-pravo-odesa": "7577fa5d-dc80-4457-8202-38c76353a44b",
    "yurist-ka-viyskove-pravo": "73d01b15-128b-4449-a70b-6b689261c4ef",
    "yuriskonsult-ka-civilni-pensiyi": "830e8e3c-9161-4aeb-89da-2695bb92c9f4",
    "molodshiy-a-yurist-ka": "79c0ccdd-cd9d-4f02-95cc-60b077e76da9",
    "ofis-menedzher": "4fae5026-6c4a-4110-888a-085954a8c498",
    "hr-menedzher": "ce81a178-c1db-41bf-bccf-0ff57d0f0a06",
    "specialist-sluzhbi-bezpeki": "6e1e5586-a917-4707-8336-a6b60bf83bb2",
    "kerivnik-yuridichnogo-viddilu": "fa821c97-f6eb-4721-8c96-d0e6618b822f",
    "yuriskonsult-ka-viddilu-turboti-pro-kliientiv":
      "59a641ce-8c5d-4e56-bf48-540eea99223a",
    "sistemniy-administrator": "16ca7ba2-100b-49bf-a8ba-d04017f1249d",
    "yuriskonsult-viyskovi-pensiyi": "65449001-1125-4e12-80cd-aa3acff7a61c",
    "yuriskonsult": "039e7a9d-ebc4-49c3-bfcb-bb02f635cb1c",
  };

  $("#bigForm,#wf-form--5,#wf-form--2").on("submit", function () {
    var consultFormConfig = {
      fields: {
        Name: ".contact_name", // Имя посетителя, заполнившего форму
        MobilePhone: ".contact_phone", // Телефон посетителя
        City: ".contact_address",
      },
      contactFields: {
        FullName: ".contact_name", // Name of a contact
        Phone: ".contact_phone", // Contact's mobile phone
        City: ".contact_address",
      },
      customFields: {},
      landingId: "842376e7-2bef-4205-8a16-db0a2cc0c458",
      // landingId: "7f00f650-4103-4e26-9684-8171d606af1d",
      serviceUrl:
        "https://merezha-prava.creatio.com/0/ServiceModel/GeneratedObjectWebFormService.svc/SaveWebFormObjectData",
      redirectUrl: "https://merezha-prava.ua/success",
    };

    var emailData = {
      name: document.querySelector('#contact_name') ? document.querySelector('#contact_name').value : '',
      phone: document.querySelector('#contact_phone') ? document.querySelector('#contact_phone').value : '',
      city: document.querySelector('#contact_address') ? document.querySelector('#contact_address').value : '',
      url: window.location.href,
      utm: getUTMParams()
    }
    sendEmail(emailData);

    function createObjectConsult() {
      landing.createObjectFromLanding(consultFormConfig);
    }

    function initLanding() {
      landing.initLanding(consultFormConfig);
    }
    let formId = this.id;
    consultFormConfig.fields["Name"] = "#" + formId + " .contact_name";
    consultFormConfig.contactFields["FullName"] =
      "#" + formId + " .contact_name";
    consultFormConfig.fields["MobilePhone"] = "#" + formId + " .contact_phone";
    consultFormConfig.contactFields["Phone"] = "#" + formId + " .contact_phone";
    let currentUrl = window.location.href;
    let urlParts = currentUrl.split("/");
    let lastPart = urlParts[urlParts.length - 1];
    consultFormConfig.landingId =
      landingIdMapping[lastPart] || defaultLandingId;

    createObjectConsult();
    return false;
  });

  $("#popUpForm,#wf-form-").on("submit", function () {
    let popUpFormConfig = {
      fields: {
        Name: "#popUpName", // Имя посетителя, заполнившего форму
        MobilePhone: "#popUpPhone", // Телефон посетителя
        BpmRef: ".current-url",
      },
      contactFields: {
        FullName: "#popUpName", // Name of a contact
        Phone: "#popUpPhone", // Contact's mobile phone
        BpmRef: ".current-url",
      },
      customFields: {},
      // landingId: "7f00f650-4103-4e26-9684-8171d606af1d",
      landingId: "842376e7-2bef-4205-8a16-db0a2cc0c458",
      serviceUrl:
        "https://merezha-prava.creatio.com/0/ServiceModel/GeneratedObjectWebFormService.svc/SaveWebFormObjectData",
      redirectUrl: "https://merezha-prava.ua/success",
    };

    var emailData = {
      name: document.querySelector('#contact_name') ? document.querySelector('#contact_name').value : '',
      phone: document.querySelector('#contact_phone') ? document.querySelector('#contact_phone').value : '',
      city: document.querySelector('#contact_address') ? document.querySelector('#contact_address').value : '',
      url: window.location.href,
      utm: getUTMParams()
    }
    sendEmail(emailData);

    function createObject() {
      landing.createObjectFromLanding(popUpFormConfig);
      console.log("object created");
    }

    function initLanding() {
      landing.initLanding(popUpFormConfig);
    }
    const category = document.getElementById("field-12");
    let categoryValue;
    const directionToLandingIdMapping = {
      "Військові пенсії": "1d894163-a8f9-4f22-b545-22a28ed40699",
      "Цивільні пенсії": "0bf6584a-7d88-415b-bd73-592f77962db2",
      "Допомога військовослужбовцям": "aea2b99c-79a3-47a2-873e-c8e6a81c51b8",
      "Адміністративні правопорушення": "2e932e05-65a9-4328-95e2-57db7b8a4529",
      "Сімейні спори": "8c24f8f8-12d6-4efd-9eb8-d43e24407142",
      "Житлові питання": "c4d72f04-7643-4481-8c9e-95b0d343e8a4",
      "Оскарження результатів перевірок":
        "488d2092-25bc-4d7c-a26c-7819799e4de0",
      "Трудові спори": "95e1ae5c-6750-495e-b9a9-81d53a6b1f71",
      "Адвокат по ДТП": "9252a2c5-2a95-400f-bed9-38e2c8419882",
      "Спадкове право": "178fa4e0-9101-4a6a-9937-b80adfcfa8c8",
      "Нерухомість": "5fee97a7-3923-4abc-94da-e8ea649921ce",
      "Кредитні спори": "5c00ef03-d6ca-4665-879d-6e91b37bd72d",
      "Адвокат для бізнесу": "3b402c2f-63be-4e55-8466-2a86066be3b0",
      "Митні спори": "b0df8c5f-0dec-4862-9407-564fc95735cf",
      "Інші питання": "3c3873d8-df0c-418f-b71d-467996689ae3",
    };

    // if (window.location.pathname.includes("blog-posts")) {
    //   window.landingId = blogPostsLandingId;
    //   console.log(`ID лендінгу змінено на ID конкретного допису в блозі: ${blogPostsLandingId}`);
    // }

    function categoryUpdate() {
      const newSelectedValue = category.value;
      if (newSelectedValue !== categoryValue) {
        categoryValue = newSelectedValue;
        console.log("Змінено вибір на:", categoryValue);
        const landingId =
          directionToLandingIdMapping[categoryValue] || defaultLandingId;
        popUpFormConfig.landingId = landingId;
      }
      console.log("Категорія яка була вибрана: ", categoryValue);
    }
    categoryUpdate;
    console.log("landingID після апдейту: ", popUpFormConfig.landingId);

    function addLink() {
      const currentUrl = window.location.href;
      console.log(currentUrl);

      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.className = "current-url";
      hiddenInput.value = currentUrl;

      document.querySelector("#popUpForm,#wf-form-").appendChild(hiddenInput);
      console.log("Приховане посилання було створено:", currentUrl);
    }

    addLink();
    createObject();
    return false;
  });

  $(document).ready(function () {
    $(".phone").mask("380999999999?");
    $(".contact_phone").mask("380999999999?");
    $(".mask-date").mask("99.99.9999");
    $(".mask-date").mask("99.99.9999 99:99");
  });

  var canonicalTags = document.querySelectorAll('link[rel="canonical"]');

  canonicalTags.forEach(function (canonicalTag) {
    var currentUrl = new URL(canonicalTag.href);
    var cleanUrl = currentUrl.origin + currentUrl.pathname;

    canonicalTag.href = cleanUrl;
  });

  if (canonicalTags.length === 0) {
    var newCanonicalTag = document.createElement("link");
    newCanonicalTag.rel = "canonical";
    newCanonicalTag.href = window.location.origin + window.location.pathname;
    document.head.appendChild(newCanonicalTag);
  }

  function getUTMParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || ''
    };
  }

  function sendEmail(emailData) {
    fetch("https://topb.pp.ua/merezhaprava/mail", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailData)
    })
    .then(response => {
      if (response.ok) {
        console.log("Дані успішно надіслано");
      } else {
        console.log("Помилка під час надсилання даних");
      }
    })
    .catch(error => console.error("Помилка мережі:", error));
  }
  
});
