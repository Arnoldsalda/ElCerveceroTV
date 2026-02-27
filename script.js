// ==========================================
// 1. LÓGICA DE LA PORTADA FALSA (L1 MAX EN INDEX)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const fakePoster = document.getElementById('fake-poster');
    const liveIframe = document.getElementById('live-iframe');

    if(fakePoster && liveIframe && !window.location.search) { 
        fakePoster.addEventListener('click', function() {
            fakePoster.style.display = 'none';
            // ESTE ES TU LINK ORIGINAL QUE SÍ FUNCIONA
            liveIframe.src = "https://la14hd.com/vivo/canales.php?stream=liga1max";
            liveIframe.style.display = 'block';
        });
    }
});

// ==========================================
// 2. LÓGICA DEL CONTADOR INTELIGENTE
// ==========================================
const calendarioPartidos = [
    { rival: "S. Huancayo", inicio: new Date("February 28, 2026 15:00:00").getTime(), fin: new Date("February 28, 2026 17:00:00").getTime() },
    { rival: "A. Atletico", inicio: new Date("March 02, 2026 15:30:00").getTime(), fin: new Date("March 02, 2026 17:30:00").getTime() },
    { rival: "S. Boys", inicio: new Date("March 15, 2026 20:00:00").getTime(), fin: new Date("March 15, 2026 22:00:00").getTime() }
];

function actualizarContador() {
    const ahora = new Date().getTime();
    const titulo = document.getElementById("titulo-proximo");
    const contadorDiv = document.getElementById("countdown");

    if (!contadorDiv || !titulo) return;

    let partidoActivo = null;
    for (let i = 0; i < calendarioPartidos.length; i++) {
        if (ahora < calendarioPartidos[i].fin) { partidoActivo = calendarioPartidos[i]; break; }
    }

    if (!partidoActivo) {
        titulo.innerText = "Próximos partidos por confirmar";
        contadorDiv.innerHTML = "<span style='font-size: 1.5rem; color: var(--sc-celeste);'>⏳ Esperando programación oficial</span>";
        return;
    }

    if (ahora >= partidoActivo.inicio && ahora <= partidoActivo.fin) {
        titulo.innerText = `¡LA MÁQUINA CELESTE ESTÁ JUGANDO!`;
        contadorDiv.innerHTML = `<span style="color: #ef4444; text-shadow: 0 0 15px rgba(239, 68, 68, 0.8);">🔴 EN VIVO VS ${partidoActivo.rival}</span>`;
    } else {
        titulo.innerText = `Próximo Guerrero: Cristal vs ${partidoActivo.rival}`;
        const desc = partidoActivo.inicio - ahora;
        const d = Math.floor(desc / (1000 * 60 * 60 * 24));
        const h = Math.floor((desc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((desc % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((desc % (1000 * 60)) / 1000);
        contadorDiv.innerHTML = `<div><span>${d < 10 ? "0"+d : d}</span><small>DÍAS</small></div><div><span>${h < 10 ? "0"+h : h}</span><small>HRS</small></div><div><span>${m < 10 ? "0"+m : m}</span><small>MIN</small></div><div><span>${s < 10 ? "0"+s : s}</span><small>SEG</small></div>`;
    }
}
setInterval(actualizarContador, 1000);

// ==========================================
// 3. LA AGENDA DIARIA
// ==========================================
const partidosDeHoy = [
    { hora: "14:00", torneo: "Liga Saudí", partido: "Al Shabab vs Al Hilal", link: "https://la14hd.com/vivo/canales.php?stream=foxdeportes" },
    { hora: "14:30", torneo: "LaLiga 2", partido: "Albacete vs Almería", link: "https://la14hd.com/vivo/canales.php?stream=hypermotion1" },
    { hora: "14:30", torneo: "Bundesliga", partido: "Augsburg vs Köln", link: "https://la14hd.com/vivo/canales.php?stream=disney1" },
    { hora: "14:45", torneo: "Ligue 1", partido: "Strasbourg vs Lens", link: "https://la14hd.com/vivo/canales.php?stream=espn5" },
    { hora: "14:45", torneo: "Serie A", partido: "Parma vs Cagliari", link: "https://la14hd.com/vivo/canales.php?stream=disney2" },
    { hora: "15:00", torneo: "Premier League", partido: "Wolverhampton vs Aston Villa", link: "https://la14hd.com/vivo/canales.php?stream=espn2" },
    { hora: "15:00", torneo: "Liga 1", partido: "Alianza Atlético vs ADT", link: "https://la14hd.com/vivo/canales.php?stream=liga1max" },
    { hora: "15:00", torneo: "Championship", partido: "Bristol City vs Watford", link: "https://la14hd.com/vivo/canales.php?stream=espn7" },
    { hora: "15:00", torneo: "LaLiga", partido: "Levante vs Deportivo Alavés", link: "https://la14hd.com/vivo/canales.php?stream=espnplus1" }
];

// ==========================================
// 4. DIRECTORIO DE CANALES (CON TUS LINKS EXACTOS)
// ==========================================
const canalesDirectorio = [
    {
        region: "EVENTOS", icono: "fa-calendar-check",
        canales: [
            { nombre: "AGENDA DEPORTIVA", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la12hd.com/eventos/" }
        ]
    },
    {
        region: "LATINOAMÉRICA", icono: "fa-earth-americas",
        canales: [
            { nombre: "ESPN", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn" },
            { nombre: "ESPN 2", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn2" },
            { nombre: "ESPN 3", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn3" },
            { nombre: "ESPN 4", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn4" },
            { nombre: "ESPN 5", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn5" },
            { nombre: "ESPN 6", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn6" },
            { nombre: "ESPN 7", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn7" },
            { nombre: "DSports", logo: "https://logodownload.org/wp-content/uploads/2022/11/dsports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=dsports" },
            { nombre: "DSports 2", logo: "https://logodownload.org/wp-content/uploads/2022/11/dsports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=dsports2" },
            { nombre: "DSports Plus", logo: "https://logodownload.org/wp-content/uploads/2022/11/dsports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=dsportsplus" },
            { nombre: "GOLTV", logo: "https://logodownload.org/wp-content/uploads/2017/05/gol-tv-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=goltv" },
            { nombre: "VTV Plus", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=vtvplus" },
            { nombre: "ECDF LigaPro", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=ecdf_ligapro" }
        ]
    },
    {
        region: "ARGENTINA", icono: "fa-star",
        canales: [
            { nombre: "Fox Sports", logo: "https://logodownload.org/wp-content/uploads/2014/10/fox-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsports" },
            { nombre: "Fox Sports 2", logo: "https://logodownload.org/wp-content/uploads/2014/10/fox-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsports2" },
            { nombre: "Fox Sports 3", logo: "https://logodownload.org/wp-content/uploads/2014/10/fox-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsports3" },
            { nombre: "TNT Sports", logo: "https://logodownload.org/wp-content/uploads/2021/05/tnt-sports-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=tntsports" },
            { nombre: "ESPN Premium", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espnpremium" },
            { nombre: "TyC Sports", logo: "https://logodownload.org/wp-content/uploads/2019/10/tyc-sports-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=tycsports" },
            { nombre: "TyC Sports Internacional", logo: "https://logodownload.org/wp-content/uploads/2019/10/tyc-sports-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=tycinternacional" },
            { nombre: "Telefe", logo: "https://logodownload.org/wp-content/uploads/2014/10/telefe-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=telefe" },
            { nombre: "TV Pública", logo: "https://logodownload.org/wp-content/uploads/2019/10/tv-publica-argentina-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=tvpublica" }
        ]
    },
    {
        region: "PERÚ", icono: "fa-flag",
        canales: [
            { nombre: "Liga1 MAX", logo: "https://claroperupoc.vtexassets.com/arquivos/ids/1667923/liga-1-max.png", link: "https://la14hd.com/vivo/canales.php?stream=liga1max" },
            { nombre: "GOLPERU", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Golperu_logo.png/512px-Golperu_logo.png", link: "https://la14hd.com/vivo/canales.php?stream=golperu" },
            { nombre: "Movistar Deportes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Movistar_Deportes_Peru_logo.png/512px-Movistar_Deportes_Peru_logo.png", link: "https://la14hd.com/vivo/canales.php?stream=movistar" }
        ]
    },
    {
        region: "COLOMBIA", icono: "fa-mug-hot",
        canales: [
            { nombre: "Win Sports Plus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Win_Sports%2B.svg/512px-Win_Sports%2B.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=winsportsplus" },
            { nombre: "Win Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Win_Sports_Logo.svg/512px-Win_Sports_Logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=winsports" }
        ]
    },
    {
        region: "MÉXICO", icono: "fa-pepper-hot",
        canales: [
            { nombre: "Fox Sports", logo: "https://logodownload.org/wp-content/uploads/2014/10/fox-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsportsmx" },
            { nombre: "Fox Sports 2", logo: "https://logodownload.org/wp-content/uploads/2014/10/fox-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsports2mx" },
            { nombre: "Fox Sports 3", logo: "https://logodownload.org/wp-content/uploads/2014/10/fox-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsports3mx" },
            { nombre: "Fox Sports Premium", logo: "https://logodownload.org/wp-content/uploads/2014/10/fox-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsportspremium" },
            { nombre: "TUDN", logo: "https://logodownload.org/wp-content/uploads/2019/10/tudn-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=tudn_mx" },
            { nombre: "ESPN", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espnmx" },
            { nombre: "ESPN 2", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn2mx" },
            { nombre: "ESPN 3", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn3mx" },
            { nombre: "ESPN 4", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn4mx" },
            { nombre: "Caliente TV", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=calientetv" },
            { nombre: "Azteca 7", logo: "https://logodownload.org/wp-content/uploads/2019/10/tv-azteca-7-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=azteca7" },
            { nombre: "Canal 5", logo: "https://logodownload.org/wp-content/uploads/2019/10/canal-5-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=canal5" },
            { nombre: "TVC Deportes", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=tvc_deportes" },
            { nombre: "Azteca Deportes", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=azteca_deportes" },
            { nombre: "Hisports", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=hisports" },
            { nombre: "Sky Sports LaLiga", logo: "https://logodownload.org/wp-content/uploads/2014/04/sky-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=sky_sports_laliga" },
            { nombre: "Sky Sports Bundesliga", logo: "https://logodownload.org/wp-content/uploads/2014/04/sky-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=sky_bundesliga_mx" }
        ]
    },
    {
        region: "EE.UU", icono: "fa-flag-usa",
        canales: [
            { nombre: "Fox Deportes", logo: "https://logodownload.org/wp-content/uploads/2014/10/fox-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=foxdeportes" },
            { nombre: "ESPN Deportes", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espndeportes" },
            { nombre: "TUDN", logo: "https://logodownload.org/wp-content/uploads/2019/10/tudn-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=tudn" },
            { nombre: "Univisión", logo: "https://logodownload.org/wp-content/uploads/2014/10/univision-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=univision" },
            { nombre: "Fox Sports 1", logo: "https://logodownload.org/wp-content/uploads/2014/10/fox-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsports1_usa" },
            { nombre: "Fox Sports 2", logo: "https://logodownload.org/wp-content/uploads/2014/10/fox-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsports2_usa" },
            { nombre: "Universo", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=universo" },
            { nombre: "BeIN Sports Español", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=beinsportes" },
            { nombre: "Unimás", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=unimas" },
            { nombre: "BeIN Sports Xtra Español", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=beinsport_xtra_espanol" },
            { nombre: "ESPN", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn_usa" },
            { nombre: "ESPN 2", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn2_usa" },
            { nombre: "ESPN U", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espnu" },
            { nombre: "CBS Sports Network", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=cbs_sports_network" },
            { nombre: "USA Network", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=usanetwork" },
            { nombre: "Telemundo", logo: "https://logodownload.org/wp-content/uploads/2014/10/telemundo-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=telemundo" }
        ]
    },
    {
        region: "CHILE", icono: "fa-mountain",
        canales: [
            { nombre: "TNT Sports Chile", logo: "https://logodownload.org/wp-content/uploads/2021/05/tnt-sports-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=eventos13" }
        ]
    },
    {
        region: "BRASIL", icono: "fa-volleyball",
        canales: [
            { nombre: "Premiere 1", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=premiere1" },
            { nombre: "Premiere 2", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=premiere2" },
            { nombre: "Premiere 3", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=premiere3" },
            { nombre: "Premiere 4", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=premiere4" },
            { nombre: "Premiere 5", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=premiere5" },
            { nombre: "Premiere 6", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=premiere6" },
            { nombre: "Premiere 7", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=premiere7" },
            { nombre: "Premiere 8", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=premiere8" },
            { nombre: "Sportv", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=sportv" },
            { nombre: "Sportv 2", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=sportv2" },
            { nombre: "Sportv 3", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=sportv3" }
        ]
    },
    {
        region: "PORTUGAL", icono: "fa-ship",
        canales: [
            { nombre: "Sport TV 1", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=sporttv1" },
            { nombre: "Sport TV 2", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=sporttv2" },
            { nombre: "Sport TV 3", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=sporttv3" },
            { nombre: "Sport TV 4", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=sporttv4" },
            { nombre: "Sport TV 5", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=sporttv5" },
            { nombre: "Sport TV 6", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=sporttv6" },
            { nombre: "Canal 11", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=canal11_pt" },
            { nombre: "Dazn Eleven 1", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=eleven1_pt" },
            { nombre: "Dazn Eleven 2", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=eleven2_pt" },
            { nombre: "Dazn Eleven 3", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=eleven3_pt" },
            { nombre: "Dazn Eleven 4", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=eleven4_pt" },
            { nombre: "Dazn Eleven 5", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=eleven5_pt" },
            { nombre: "Dazn Eleven 6", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=eleven6_pt" }
        ]
    },
    {
        region: "ESPAÑA", icono: "fa-bullhorn",
        canales: [
            { nombre: "DAZN 1", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=dazn1" },
            { nombre: "DAZN 2", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=dazn2" },
            { nombre: "DAZN 3 (eventos)", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=dazn3" },
            { nombre: "DAZN 4 (eventos)", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=dazn4" },
            { nombre: "DAZN LaLiga", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=dazn_laliga" },
            { nombre: "La 1 TVE", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=la1tve" },
            { nombre: "Liga de Campeones 1", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=ligadecampeones1" },
            { nombre: "Liga de Campeones 2", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=ligadecampeones2" },
            { nombre: "Liga de Campeones 3", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=ligadecampeones3" },
            { nombre: "M+ LaLiga TV", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=m_laligatv" },
            { nombre: "LaLigaTV BAR", logo: "https://cdn-icons-png.flaticon.com/512/3256/3256086.png", link: "https://la14hd.com/vivo/canales.php?stream=laligatvbar" }
        ]
    },
    {
        region: "MUNDO", icono: "fa-globe",
        canales: [
            { nombre: "Sky Bundesliga 1", logo: "https://logodownload.org/wp-content/uploads/2014/04/sky-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=sky_bundesliga1" },
            { nombre: "Sky Bundesliga 2", logo: "https://logodownload.org/wp-content/uploads/2014/04/sky-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=sky_bundesliga2" },
            { nombre: "Sky Bundesliga 3", logo: "https://logodownload.org/wp-content/uploads/2014/04/sky-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=sky_bundesliga3" },
            { nombre: "Sky Bundesliga 4", logo: "https://logodownload.org/wp-content/uploads/2014/04/sky-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=sky_bundesliga4" },
            { nombre: "Sky Bundesliga 5", logo: "https://logodownload.org/wp-content/uploads/2014/04/sky-sports-logo-0.png", link: "https://la14hd.com/vivo/canales.php?stream=sky_bundesliga5" },
            { nombre: "DAZN 1 DE", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=dazn1_de" },
            { nombre: "DAZN 2 DE", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=dazn2_de" },
            { nombre: "ESPN 1 NL", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn1_nl" },
            { nombre: "ESPN 2 NL", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn2_nl" },
            { nombre: "ESPN 3 NL", logo: "https://logodownload.org/wp-content/uploads/2014/04/espn-logo-1.png", link: "https://la14hd.com/vivo/canales.php?stream=espn3_nl" },
            { nombre: "Dazn Eleven Pro 1 BE", logo: "https://logodownload.org/wp-content/uploads/2021/07/dazn-logo.png", link: "https://la14hd.com/vivo/canales.php?stream=elevenpro1_be" }
        ]
    }
];

// ==========================================
// 5. INICIALIZAR AGENDA Y CANALES
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // A) DIBUJAR PARTIDOS DE HOY
    const contPartidos = document.getElementById("partidos-de-hoy");
    if (contPartidos && partidosDeHoy.length > 0) {
        let htmlPartidos = '<div class="lista-partidos">';
        partidosDeHoy.forEach(partido => {
            const urlRepro = `reproductor.html?url=${encodeURIComponent(partido.link)}&nombre=${encodeURIComponent(partido.partido)}`;
            htmlPartidos += `
                <div class="partido-row">
                    <div class="partido-hora">${partido.hora}</div>
                    <div class="partido-info">
                        <span class="partido-torneo">${partido.torneo}</span>
                        <span class="partido-equipos">${partido.partido}</span>
                    </div>
                    <a href="${urlRepro}" target="_self" class="btn-ver-partido"><i class="fa-solid fa-play"></i> Ver en vivo</a>
                </div>
            `;
        });
        htmlPartidos += '</div>';
        contPartidos.innerHTML = htmlPartidos;
    }

    // B) DIBUJAR DIRECTORIO DE CANALES
    const contDirectorio = document.getElementById("directorio-canales");
    if(contDirectorio && canalesDirectorio.length > 0) {
        let htmlFinal = "";
        canalesDirectorio.forEach(grupo => {
            htmlFinal += `<div class="categoria-region"><h3 class="region-title"><i class="fa-solid ${grupo.icono}"></i> ${grupo.region}</h3><div class="canales-grid-horizontal">`;
            grupo.canales.forEach(canal => {
                const urlRepro = `reproductor.html?url=${encodeURIComponent(canal.link)}&nombre=${encodeURIComponent(canal.nombre)}`;
                htmlFinal += `
                    <div class="canal-horizontal">
                        <div class="canal-logo"><img src="${canal.logo}" alt="Logo" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3256/3256086.png'"></div>
                        <div class="canal-nombre">${canal.nombre}</div>
                        <a href="${urlRepro}" target="_self" class="btn-ver-canal-hor">Ver Canal</a>
                    </div>
                `;
            });
            htmlFinal += `</div></div>`;
        });
        contDirectorio.innerHTML = htmlFinal;
    }
});

// ==========================================
// 6. FUNCIONES DE COPIADO
// ==========================================
function copyText(text, method) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`¡Cuenta de ${method} copiada!`);
    });
}
function showToast(message) {
    const toast = document.getElementById('premiumToast');
    if(toast) {
        document.getElementById('toastMessage').innerText = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}
