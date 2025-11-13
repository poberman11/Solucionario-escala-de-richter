var year = 1999

// helper: formatea números con separadores de miles
function fmtNumber(n){
  if (n === null || n === undefined) return n;
  const num = typeof n === 'number' ? n : Number(n);
  return isNaN(num) ? n : num.toLocaleString('en-US');
}

top_pop = {"2000": [["227", "FLCL", 986579, "https://cdn.myanimelist.net/images/anime/7/77356.jpg"], ["249", "InuYasha", 937999, "https://cdn.myanimelist.net/images/anime/1589/95329.jpg"], ["263", "Hajime no Ippo", 699138, "https://cdn.myanimelist.net/images/anime/4/86334.jpg"]], "2001": [["199", "Sen to Chihiro no Kamikakushi", 2227052, "https://cdn.myanimelist.net/images/anime/6/79597.jpg"], ["270", "Hellsing", 835345, "https://cdn.myanimelist.net/images/anime/10/19956.jpg"], ["120", "Fruits Basket", 621182, "https://cdn.myanimelist.net/images/anime/4/75204.jpg"]], "2002": [["20", "Naruto", 3412824, "https://cdn.myanimelist.net/images/anime/1141/142503.jpg"], ["71", "Full Metal Panic!", 572600, "https://cdn.myanimelist.net/images/anime/2/75259.jpg"], ["59", "Chobits", 555428, "https://cdn.myanimelist.net/images/anime/4/24648.jpg"]], "2003": [["121", "Fullmetal Alchemist", 1679481, "https://cdn.myanimelist.net/images/anime/10/75815.jpg"], ["486", "Kino no Tabi: The Beautiful World", 390945, "https://cdn.myanimelist.net/images/anime/1763/95397.jpg"]], "2004": [["269", "Bleach", 2330679, "https://cdn.myanimelist.net/images/anime/3/40451.jpg"], ["226", "Elfen Lied", 1730821, "https://cdn.myanimelist.net/images/anime/1780/121555.jpg"], ["431", "Howl no Ugoku Shiro", 1613508, "https://cdn.myanimelist.net/images/anime/1470/138723.jpg"]], "2005": [["457", "Mushishi", 983044, "https://cdn.myanimelist.net/images/anime/2/73862.jpg"], ["355", "Shakugan no Shana", 617547, "https://cdn.myanimelist.net/images/anime/8/21197.jpg"], ["237", "Koukyoushihen Eureka Seven", 507580, "https://cdn.myanimelist.net/images/anime/12/34443.jpg"]], "2006": [["1535", "Death Note", 4637769, "https://cdn.myanimelist.net/images/anime/1079/138100.jpg"], ["1575", "Code Geass: Hangyaku no Lelouch", 2628727, "https://cdn.myanimelist.net/images/anime/1032/135088.jpg"], ["853", "Ouran Koukou Host Club", 1330401, "https://cdn.myanimelist.net/images/anime/2/71992.jpg"]], "2007": [["1735", "Naruto: Shippuuden", 2964238, "https://cdn.myanimelist.net/images/anime/1565/111305.jpg"], ["2001", "Tengen Toppa Gurren Lagann", 1898147, "https://cdn.myanimelist.net/images/anime/4/5123.jpg"], ["2167", "Clannad", 1650268, "https://cdn.myanimelist.net/images/anime/1804/95033.jpg"]], "2008": [["4224", "Toradora!", 2637804, "https://cdn.myanimelist.net/images/anime/13/22128.jpg"], ["2904", "Code Geass: Hangyaku no Lelouch R2", 2068649, "https://cdn.myanimelist.net/images/anime/1088/135089.jpg"], ["3588", "Soul Eater", 1920299, "https://cdn.myanimelist.net/images/anime/9/7804.jpg"]], "2009": [["5114", "Fullmetal Alchemist: Brotherhood", 3912112, "https://cdn.myanimelist.net/images/anime/1208/94745.jpg"], ["6702", "Fairy Tail", 2037537, "https://cdn.myanimelist.net/images/anime/5/18179.jpg"], ["5081", "Bakemonogatari", 1673145, "https://cdn.myanimelist.net/images/anime/11/75274.jpg"]], "2010": [["6547", "Angel Beats!", 2437293, "https://cdn.myanimelist.net/images/anime/1244/111115.jpg"], ["8074", "Highschool of the Dead", 1735688, "https://cdn.myanimelist.net/images/anime/11/78311.jpg"], ["6746", "Durarara!!", 1646322, "https://cdn.myanimelist.net/images/anime/10/71772.jpg"]], "2011": [["11061", "Hunter x Hunter (2011)", 3489962, "https://cdn.myanimelist.net/images/anime/1337/99013.jpg"], ["9253", "Steins;Gate", 3029444, "https://cdn.myanimelist.net/images/anime/1935/127974.jpg"], ["10620", "Mirai Nikki (TV)", 2363056, "https://cdn.myanimelist.net/images/anime/13/33465.jpg"]], "2012": [["11757", "Sword Art Online", 3639625, "https://cdn.myanimelist.net/images/anime/11/39717.jpg"], ["14719", "JoJo no Kimyou na Bouken (TV)", 2035857, "https://cdn.myanimelist.net/images/anime/3/40409.jpg"], ["11111", "Another", 1978132, "https://cdn.myanimelist.net/images/anime/4/75509.jpg"]], "2013": [["16498", "Shingeki no Kyojin", 4752558, "https://cdn.myanimelist.net/images/anime/10/47347.jpg"], ["18679", "Kill la Kill", 2059590, "https://cdn.myanimelist.net/images/anime/1464/111943.jpg"], ["15809", "Hataraku Maou-sama!", 1887102, "https://cdn.myanimelist.net/images/anime/3/50177.jpg"]], "2014": [["22319", "Tokyo Ghoul", 3399201, "https://cdn.myanimelist.net/images/anime/1498/134443.jpg"], ["19815", "No Game No Life", 2836738, "https://cdn.myanimelist.net/images/anime/1074/111944.jpg"], ["23273", "Shigatsu wa Kimi no Uso", 2693444, "https://cdn.myanimelist.net/images/anime/1405/143284.jpg"]], "2015": [["30276", "One Punch Man", 3829255, "https://cdn.myanimelist.net/images/anime/12/76049.jpg"], ["24833", "Ansatsu Kyoushitsu", 2515832, "https://cdn.myanimelist.net/images/anime/5/75639.jpg"], ["28223", "Death Parade", 2149591, "https://cdn.myanimelist.net/images/anime/5/71553.jpg"]], "2016": [["31964", "Boku no Hero Academia", 3716019, "https://cdn.myanimelist.net/images/anime/10/78745.jpg"], ["32281", "Kimi no Na wa.", 3290551, "https://cdn.myanimelist.net/images/anime/5/87048.jpg"], ["28851", "Koe no Katachi", 2865350, "https://cdn.myanimelist.net/images/anime/1122/96435.jpg"]], "2017": [["25777", "Shingeki no Kyojin Season 2", 3296573, "https://cdn.myanimelist.net/images/anime/4/84177.jpg"], ["33486", "Boku no Hero Academia 2nd Season", 3053146, "https://cdn.myanimelist.net/images/anime/12/85221.jpg"], ["34572", "Black Clover", 2103267, "https://cdn.myanimelist.net/images/anime/2/88336.jpg"]], "2018": [["35760", "Shingeki no Kyojin Season 3", 2904315, "https://cdn.myanimelist.net/images/anime/1173/92110.jpg"], ["36456", "Boku no Hero Academia 3rd Season", 2673656, "https://cdn.myanimelist.net/images/anime/1319/92084.jpg"], ["33352", "Violet Evergarden", 2208259, "https://cdn.myanimelist.net/images/anime/1795/95088.jpg"]], "2019": [["38000", "Kimetsu no Yaiba", 3795920, "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"], ["38524", "Shingeki no Kyojin Season 3 Part 2", 2756876, "https://cdn.myanimelist.net/images/anime/1517/100633.jpg"], ["37779", "Yakusoku no Neverland", 2482967, "https://cdn.myanimelist.net/images/anime/1830/118780.jpg"]], "2020": [["40748", "Jujutsu Kaisen", 3258922, "https://cdn.myanimelist.net/images/anime/1171/109222.jpg"], ["40456", "Kimetsu no Yaiba Movie: Mugen Ressha-hen", 1932325, "https://cdn.myanimelist.net/images/anime/1704/106947.jpg"], ["40591", "Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen", 1688914, "https://cdn.myanimelist.net/images/anime/1764/106659.jpg"]], "2021": [["42897", "Horimiya", 1767765, "https://cdn.myanimelist.net/images/anime/1695/111486.jpg"], ["39535", "Mushoku Tensei: Isekai Ittara Honki Dasu", 1642011, "https://cdn.myanimelist.net/images/anime/1530/117776.jpg"], ["42249", "Tokyo Revengers", 1604850, "https://cdn.myanimelist.net/images/anime/1839/122012.jpg"]], "2022": [["50265", "Spy x Family", 1962666, "https://cdn.myanimelist.net/images/anime/1441/122795.jpg"], ["44511", "Chainsaw Man", 1932241, "https://cdn.myanimelist.net/images/anime/1806/126216.jpg"], ["48583", "Shingeki no Kyojin: The Final Season Part 2", 1610928, "https://cdn.myanimelist.net/images/anime/1948/120625.jpg"]], "2023": [["51009", "Jujutsu Kaisen 2nd Season", 1241832, "https://cdn.myanimelist.net/images/anime/1792/138022.jpg"], ["51019", "Kimetsu no Yaiba: Katanakaji no Sato-hen", 1066916, "https://cdn.myanimelist.net/images/anime/1765/135099.jpg"], ["52034", "\"Oshi no Ko\"", 1005696, "https://cdn.myanimelist.net/images/anime/1812/134736.jpg"]], "2024": [["52299", "Ore dake Level Up na Ken", 888447, "https://cdn.myanimelist.net/images/anime/1801/142390.jpg"], ["55701", "Kimetsu no Yaiba: Hashira Geiko-hen", 487967, "https://cdn.myanimelist.net/images/anime/1565/142711.jpg"], ["49458", "Kono Subarashii Sekai ni Shukufuku wo! 3", 485607, "https://cdn.myanimelist.net/images/anime/1758/141268.jpg"]]}
top_score = {"2000": ["263", "Hajime no Ippo", 86.85, "https://cdn.myanimelist.net/images/anime/4/86334.jpg"], "2001": ["199", "Sen to Chihiro no Kamikakushi", 86.85, "https://cdn.myanimelist.net/images/anime/6/79597.jpg"], "2002": ["467", "Koukaku Kidoutai: Stand Alone Complex", 83.1, "https://cdn.myanimelist.net/images/anime/11/50857.jpg"], "2003": ["486", "Kino no Tabi: The Beautiful World", 81.9, "https://cdn.myanimelist.net/images/anime/1763/95397.jpg"], "2004": ["19", "Monster", 88.4, "https://cdn.myanimelist.net/images/anime/10/18793.jpg"], "2005": ["457", "Mushishi", 85.8, "https://cdn.myanimelist.net/images/anime/2/73862.jpg"], "2006": ["918", "Gintama", 87.15, "https://cdn.myanimelist.net/images/anime/10/73274.jpg"], "2007": ["2001", "Tengen Toppa Gurren Lagann", 85.65, "https://cdn.myanimelist.net/images/anime/4/5123.jpg"], "2008": ["4181", "Clannad: After Story", 88.15, "https://cdn.myanimelist.net/images/anime/1299/110774.jpg"], "2009": ["5114", "Fullmetal Alchemist: Brotherhood", 90.45, "https://cdn.myanimelist.net/images/anime/1208/94745.jpg"], "2010": ["7311", "Suzumiya Haruhi no Shoushitsu", 86.0, "https://cdn.myanimelist.net/images/anime/1248/112352.jpg"], "2011": ["9253", "Steins;Gate", 89.85, "https://cdn.myanimelist.net/images/anime/1935/127974.jpg"], "2012": ["15417", "\"Gintama': Enchousen\"", 89.6, "https://cdn.myanimelist.net/images/anime/1452/123686.jpg"], "2013": ["15335", "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare", 88.0, "https://cdn.myanimelist.net/images/anime/10/51723.jpg"], "2014": ["24701", "Mushishi Zoku Shou 2nd Season", 86.65, "https://cdn.myanimelist.net/images/anime/9/68095.jpg"], "2015": ["28977", "Gintama", 90.80000000000001, "https://cdn.myanimelist.net/images/anime/3/72078.jpg"], "2016": ["28851", "Koe no Katachi", 88.65, "https://cdn.myanimelist.net/images/anime/1122/96435.jpg"], "2017": ["35180", "3-gatsu no Lion 2nd Season", 89.1, "https://cdn.myanimelist.net/images/anime/3/88469.jpg"], "2018": ["37491", "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen", 87.9, "https://cdn.myanimelist.net/images/anime/1776/96566.jpg"], "2019": ["38524", "Shingeki no Kyojin Season 3 Part 2", 89.75, "https://cdn.myanimelist.net/images/anime/1517/100633.jpg"], "2020": ["37987", "Violet Evergarden Movie", 87.8, "https://cdn.myanimelist.net/images/anime/1825/110716.jpg"], "2021": ["42938", "Fruits Basket: The Final", 89.85, "https://cdn.myanimelist.net/images/anime/1085/114792.jpg"], "2022": ["43608", "Kaguya-sama wa Kokurasetai: Ultra Romantic", 89.55, "https://cdn.myanimelist.net/images/anime/1160/122627.jpg"], "2023": ["52991", "Sousou no Frieren", 92.25, "https://cdn.myanimelist.net/images/anime/1015/138006.jpg"], "2024": ["55690", "Boku no Kokoro no Yabai Yatsu 2nd Season", 88.2, "https://cdn.myanimelist.net/images/anime/1643/138581.jpg"]}

// Navegador de secciones (Fama, Mercadito, Video)
const slides = [
  {
    id: 'fama',
    title: 'Fama',
    desc: 'Fama: E',
    poster: 'assets/fama.jpg', // sustituir si existe
    video: ''
  },
  {
    id: 'mercadito',
    title: 'Mercadito',
    desc: 'Mercadito: descripción formal del mercadito, puestos, horarios y normas. Información clara y concisa para asistentes.',
    poster: 'assets/mercadito.jpg', // sustituir si existe
    video: ''
  },
  {
    id: 'video',
    title: 'Video institucional',
    desc: 'Video institucional: reproduce aquí un clip con información general del evento.',
    poster: '',
    video: 'assets/intro.mp4' // sustituir por el video real si existe
  }
];

let current = 0;

function updateSlide() {
  const s = slides[current];
  document.getElementById('year').textContent = s.title;
  document.getElementById('desc').textContent = s.desc;

  const poster = document.getElementById('poster');
  const video = document.getElementById('video');
  const videoSrc = document.getElementById('videoSrc');

  if (s.video) {
    // mostrar video
    poster.style.display = 'none';
    videoSrc.src = s.video;
    video.style.display = 'block';
    video.load();
  } else if (s.poster) {
    // mostrar imagen
    video.style.display = 'none';
    videoSrc.src = '';
    poster.src = s.poster;
    poster.style.display = 'block';
  } else {
    // ninguno: ocultar ambos
    video.style.display = 'none';
    poster.style.display = 'none';
    videoSrc.src = '';
  }
}

// navegación
function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlide();
}
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
}

document.addEventListener('DOMContentLoaded', function () {
  const quotes = [
    "Las matemáticas son la vida.",
    "La física y las matemáticas hacen del mundo, el mundo.",
    "Si se imagina las matemáticas lo crean.",
    "Las matemáticas son el lenguaje del universo.",
    "Las matemáticas son la ciencia de la estructura, el orden y la relación que ha surgido del conteo, la medición y el estudio de las formas.",
    "Las matemáticas son la herramienta más poderosa que tenemos para entender el mundo que nos rodea.",
    "Las matemáticas son la llave que abre las puertas del conocimiento científico.",
    "Las matemáticas son la base de todas las ciencias.",
    "Las matemáticas son una forma de arte que nos permite explorar patrones y relaciones en el mundo que nos rodea.",
    "Las matemáticas son una herramienta fundamental para la toma de decisiones en la vida cotidiana."
  ];
  let qi = 0;
  const qEl = document.getElementById('rotatingQuote');
  if (!qEl || !quotes.length) return;

  // iniciar con la primera frase (si está vacía)
  qEl.textContent = quotes[0];

  // rotador con pequeña animación: cambia cada 4.5s
  setInterval(() => {
    qi = (qi + 1) % quotes.length;
    qEl.classList.add('quote-fade'); // fade out
    setTimeout(() => {
      qEl.textContent = quotes[qi];
      qEl.classList.remove('quote-fade'); // fade in
    }, 180);
  }, 4500);
});