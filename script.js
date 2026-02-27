// ==========================================
// 1. LÓGICA DE LA PORTADA FALSA (L1 MAX EN INDEX)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const fakePoster = document.getElementById('fake-poster');
    const liveIframe = document.getElementById('live-iframe');

    // Esta lógica es para el reproductor fijo del index.html
    if(fakePoster && liveIframe && !window.location.search) { 
        fakePoster.addEventListener('click', function() {
            fakePoster.style.display = 'none';
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
// 3. LA AGENDA DIARIA (Edita aquí tus partidos)
// ==========================================
const partidosDeHoy = [
    {
        hora: "15:00",
        torneo: "Liga 1 Te Apuesto",
        partido: "Sporting Cristal vs Sport Huancayo",
        link: "https://la14hd.com/vivo/canales.php?stream=liga1max"
    },
    {
        hora: "17:00",
        torneo: "Brasileirão",
        partido: "Santos vs Vasco da Gama",
        link: "https://la14hd.com/vivo/canales.php?stream=premiere1"
    },
    {
        hora: "20:00",
        torneo: "Amistoso",
        partido: "Independiente del Valle vs Inter Miami",
        link: "https://la14hd.com/vivo/canales.php?stream=dsports"
    }
];

// ==========================================
// 4. BASE DE DATOS DE CANALES FIJOS (Logos PNG seguros)
// ==========================================
const canalesDirectorio = [
    {
        region: "PERÚ", icono: "fa-flag",
        canales: [
            { nombre: "Liga1 MAX", logo: "https://claroperupoc.vtexassets.com/arquivos/ids/1667923/liga-1-max.png", link: "https://la14hd.com/vivo/canales.php?stream=liga1max" },
            { nombre: "GOLPERU", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Golperu_logo.png/512px-Golperu_logo.png", link: "https://la14hd.com/vivo/canales.php?stream=golperu" },
            { nombre: "Movistar Deportes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Movistar_Deportes_Peru_logo.png/512px-Movistar_Deportes_Peru_logo.png", link: "https://la14hd.com/vivo/canales.php?stream=movistar" }
        ]
    },
    {
        region: "LATINOAMERICA", icono: "fa-earth-americas",
        canales: [
            { nombre: "ESPN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ESPN_logo.svg/512px-ESPN_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=espn" },
            { nombre: "ESPN 2", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/ESPN2_logo.svg/512px-ESPN2_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=espn2" },
            { nombre: "ESPN 3", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/ESPN3_logo.svg/512px-ESPN3_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=espn3" },
            { nombre: "ESPN 4", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/ESPN_4_logo.svg/512px-ESPN_4_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=espn4" },
            { nombre: "ESPN 5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/ESPN_5_logo.svg/512px-ESPN_5_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=espn5" },
            { nombre: "ESPN 6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/ESPN_6_logo.svg/512px-ESPN_6_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=espn6" },
            { nombre: "ESPN 7", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/ESPN_7_logo.svg/512px-ESPN_7_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=espn7" },
            { nombre: "DSports", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/DSports_logo.svg/512px-DSports_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=dsports" },
            { nombre: "DSports 2", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/DSports_2_logo.svg/512px-DSports_2_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=dsports2" },
            { nombre: "DSports Plus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/DSports_Plus_logo.svg/512px-DSports_Plus_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=dsportsplus" },
            { nombre: "GOLTV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/GolTV_logo.svg/512px-GolTV_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=goltv" },
            { nombre: "VTV Plus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/VTV_Plus_logo.png/512px-VTV_Plus_logo.png", link: "https://la14hd.com/vivo/canales.php?stream=vtvplus" },
            { nombre: "ECDF LigaPro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/El_Canal_del_F%C3%BAtbol_logo.svg/512px-El_Canal_del_F%C3%BAtbol_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=ecdf_ligapro" }
        ]
    },
    {
        region: "ARGENTINA", icono: "fa-star",
        canales: [
            { nombre: "Fox Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Fox_Sports_logo.svg/512px-Fox_Sports_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsports" },
            { nombre: "Fox Sports 2", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Fox_Sports_2_logo.svg/512px-Fox_Sports_2_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsports2" },
            { nombre: "Fox Sports 3", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Fox_Sports_3_logo.svg/512px-Fox_Sports_3_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsports3" },
            { nombre: "TNT Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/TNT_Sports_Argentina_logo.svg/512px-TNT_Sports_Argentina_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=tntsports" },
            { nombre: "ESPN Premium", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/ESPN_Premium_logo.svg/512px-ESPN_Premium_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=espnpremium" },
            { nombre: "TyC Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/TyC_Sports_logo.svg/512px-TyC_Sports_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=tycsports" },
            { nombre: "TyC Sports Int.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/TyC_Sports_logo.svg/512px-TyC_Sports_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=tycinternacional" },
            { nombre: "Telefe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Telefe_logo.svg/512px-Telefe_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=telefe" },
            { nombre: "TV Pública", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Televisi%C3%B3n_P%C3%BAblica_Argentina_logo.svg/512px-Televisi%C3%BAblica_Argentina_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=tvpublica" }
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
            { nombre: "TUDN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/TUDN_logo.svg/512px-TUDN_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=tudn_mx" },
            { nombre: "Fox Deportes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Fox_Deportes_logo.svg/512px-Fox_Deportes_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=foxdeportes" },
            { nombre: "ESPN Deportes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/ESPN_Deportes_logo.svg/512px-ESPN_Deportes_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=espndeportes" },
            { nombre: "Univisión", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Univision_logo.svg/512px-Univision_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=univision" },
            { nombre: "Fox Sports Premium", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Fox_Sports_Premium_logo.svg/512px-Fox_Sports_Premium_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=foxsportspremium" },
            { nombre: "Azteca 7", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Azteca_7_logo.svg/512px-Azteca_7_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=azteca7" },
            { nombre: "Canal 5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Canal_5_logo.svg/512px-Canal_5_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=canal5" }
        ]
    },
    {
        region: "ESPAÑA & MUNDO", icono: "fa-globe",
        canales: [
            { nombre: "DAZN LaLiga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/DAZN_logo.svg/512px-DAZN_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=dazn_laliga" },
            { nombre: "M+ LaLiga TV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Movistar_Plus%2B_logo.svg/512px-Movistar_Plus%2B_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=m_laligatv" },
            { nombre: "Sky Sports Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sky_Sports_logo.svg/512px-Sky_Sports_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=sky_bundesliga1" },
            { nombre: "Premiere 1 (Brasil)", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Premiere_logo.svg/512px-Premiere_logo.svg.png", link: "https://la14hd.com/vivo/canales.php?stream=premiere1" }
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
            const iconoBalon = "https://cdn-icons-png.flaticon.com/512/3256/3256086.png";
            // Pasa el link a reproductor.html
            const urlRepro = `reproductor.html?url=${encodeURIComponent(partido.link)}&nombre=${encodeURIComponent(partido.partido)}&logo=${encodeURIComponent(iconoBalon)}`;

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
                const urlRepro = `reproductor.html?url=${encodeURIComponent(canal.link)}&nombre=${encodeURIComponent(canal.nombre)}&logo=${encodeURIComponent(canal.logo)}`;
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