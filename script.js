document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing after reveal
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target elements for reveal
    const revealElements = document.querySelectorAll('.reveal-text, .reveal-item');
    revealElements.forEach(el => observer.observe(el));

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero
    const hero = document.getElementById('hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                hero.style.backgroundPositionY = (scrolled * 0.5) + 'px';
            }
        });
    }

    // Initial reveal for hero content (since it's at the top)
    setTimeout(() => {
        const heroReveals = document.querySelectorAll('#hero .reveal-text');
        heroReveals.forEach(el => el.classList.add('active'));
    }, 100);

    // --- Language Selector Logic ---
    const translations = {
        en: {
            "nav-universe": "Universe",
            "nav-drivers": "Drivers",
            "nav-patch-notes": "Patch Notes",
            "nav-play": "Play Now",
            "hero-tagline": "TEAM ACTION • FREE",
            "hero-download": "Download Free",
            "hero-more": "See More",
            "features-title": "Master <span class=\"highlight\">the Track</span>",
            "feat1-h3": "Arcade <span>Physics</span>",
            "feat1-p": "Drive on the edge with instant controls, exaggerated drifts, and races that are easy to learn but hard to master.",
            "feat2-h3": "Frenetic <span>Matches</span>",
            "feat2-p": "Every race mixes speed, collisions, and fast decisions to keep the action burning hot.",
            "feat3-h3": "Charismatic <span>Characters</span>",
            "feat3-p": "Choose drivers with distinct personalities, recognizable styles, and an attitude ready to ignite the track.",
            "factions-h2": "Join a <span class=\"highlight\">Faction</span>",
            "factions-h3": "Choose Your Side",
            "factions-p": "Align with one of three elite racing factions. Each team offers unique advantages, exclusive vehicle skins, and special abilities. Compete for dominance and prove your faction's superiority on the leaderboards.",
            "factions-btn": "EXPLORE FACTIONS",
            "drivers-h2": "Meet Your <span class=\"highlight\">Drivers</span>",
            "drivers-h3": "Every Racer Has a Story",
            "drivers-p": "Choose from a diverse roster of skilled drivers, each with unique personalities, backgrounds, and special racing techniques. Master their abilities and dominate the competition with style.",
            "drivers-btn": "VIEW ALL DRIVERS",
            "maps-h2": "Dive into the <span class=\"highlight\">Maps</span>",
            "maps-h3": "Race Across the World",
            "maps-p": "Every track is a battleground designed to test your creativity and skill. From neon-lit cityscapes to treacherous mountain passes, each map offers unique challenges and spectacular moments you'll never forget.",
            "maps-btn": "SEE ALL MAPS",
            "patch-eyebrow": "Updates",
            "latest-patch-title": "Latest <span class=\"highlight\">Notes</span>",
            "patch-title": "Patch <span class=\"highlight\">Notes</span>",
            "patch-view-all": "View all",
            "patch-back-home": "Back home",
            "patch-feature-type": "BETA DEVELOPMENT",
            "patch-feature-title": "The beta keeps growing",
            "patch-feature-copy": "New mechanics, gameplay improvements, and content that prepares the ground for future expansions.",
            "patch-feature-date": "May 7, 2026",
            "patch-read-more": "Read more",
            "patch-card1-type": "Map",
            "patch-card1-title": "Summit Valley",
            "patch-card1-copy": "Abandoned suburbs with alternate routes, transport portals, and more dynamic combat.",
            "patch-card1-date": "May 7, 2026",
            "patch-card2-type": "Balance",
            "patch-card2-title": "More agile drivers in combat",
            "patch-card2-copy": "Driving, response, stability, and control improvements during intense combat situations.",
            "patch-card2-date": "May 7, 2026",
            "patch-card3-type": "System",
            "patch-card3-title": "Mini Abilities",
            "patch-card3-copy": "Choose between Shock and Shield to change the outcome of combat depending on the situation.",
            "patch-card3-date": "May 7, 2026",
            "patch-card4-type": "Vehicles",
            "patch-card4-title": "Makoto joins the game",
            "patch-card4-copy": "Visual improvements, driver optimization, and Makoto, the first motorcycle available.",
            "patch-card4-date": "May 7, 2026",
            "patch-card5-type": "Vehicles",
            "patch-card5-title": "Light chassis upgrades",
            "patch-card5-copy": "We increased aerial stability and reduced speed loss after landing.",
            "patch-card5-date": "April 4, 2026",
            "patch-card6-type": "Quality of life",
            "patch-card6-title": "Clearer combat readability",
            "patch-card6-copy": "New visual alerts help identify attacks, assists, and active objectives.",
            "patch-card6-date": "March 28, 2026",
            "cta-h2": "Ready for the challenge?",
            "cta-p": "Join thousands of drivers and prove who is the king of the road.",
            "cta-btn": "Join the Beta",
            "footer-copy": "&copy; 2025 Rearview Games. All rights reserved.",
            "detail-back": "Patch notes",
            "detail-hero-title": "The beta keeps growing",
            "detail-hero-copy": "The beta keeps growing and evolving with new mechanics, gameplay improvements, and a lot of new content.",
            "detail-nav-overview": "Overview",
            "detail-nav-balance": "Balance",
            "detail-nav-abilities": "Mini Abilities",
            "detail-nav-vehicles": "Vehicles",
            "detail-overview-p": "This update brings important changes to combat, mobility, and exploration while preparing the ground for everything coming in future expansions.",
            "detail-new-map": "New map",
            "detail-summit-p1": "Welcome to Summit Valley, the rebels' first contact with the outside.",
            "detail-summit-p2": "Set in a huge abandoned suburban area, this new map focuses on wider spaces, alternate routes, and much more intense and dynamic combat.",
            "detail-main-news": "Main additions",
            "detail-summit-li1": "Destructible objects distributed across different areas of the map.",
            "detail-summit-li2": "Transport portals to move quickly between strategic points.",
            "detail-summit-li3": "New environmental elements that make matches more immersive.",
            "detail-summit-li4": "Better combat pacing and conflict zone distribution.",
            "detail-summit-li5": "New elevated points and secondary routes for aggressive or tactical players.",
            "detail-summit-li6": "Lighting and environmental effect adjustments to reinforce the stage's visual identity.",
            "detail-summit-p3": "Summit Valley marks the beginning of a new stage for the game and will be the main setting for upcoming tests and events.",
            "detail-map-quote": "Abandoned suburbs where chaos never rests.",
            "detail-map-p1": "The blocked roads into the city turn Summit Valley into an unpredictable zone where every match can unfold in a completely different way.",
            "detail-map-p2": "The map was designed for both quick fights and long pursuits, letting players use shortcuts, cover, and escape routes at any moment.",
            "detail-map-p3": "New environmental details and interactive structures also make the space feel more alive and dynamic during matches.",
            "detail-balance-p1": "We made multiple improvements to vehicle handling and response to create a smoother, faster, and more satisfying experience.",
            "detail-main-changes": "Main changes",
            "detail-balance-li1": "Better response in tight turns.",
            "detail-balance-li2": "More natural acceleration feel.",
            "detail-balance-li3": "Stability tuning during impacts and collisions.",
            "detail-balance-li4": "Greater vehicle control during intense combat situations.",
            "detail-balance-li5": "Smoother transitions between speed, braking, and drifting.",
            "detail-balance-p2": "The goal is to make every fight feel more dynamic, competitive, and fun.",
            "detail-abilities-p1": "Mini Abilities arrive as a system designed to add more strategic variety to every match.",
            "detail-abilities-p2": "Before the match starts, each player can now choose between two special abilities capable of changing the outcome of a fight depending on the situation.",
            "detail-shock-p": "A short-range electric discharge that temporarily paralyzes nearby enemies, reducing their mobility and leaving them vulnerable for a few seconds.",
            "detail-ideal-for": "Ideal for:",
            "detail-shock-li1": "Ambushes.",
            "detail-shock-li2": "Cutting pursuits.",
            "detail-shock-li3": "Starting aggressive attacks.",
            "detail-shield-p": "Generates a temporary shield that blocks part of the damage received by the vehicle for a short time.",
            "detail-shield-li1": "Escaping dangerous situations.",
            "detail-shield-li2": "Resisting enemy attacks.",
            "detail-shield-li3": "Surviving intense fights.",
            "detail-abilities-p3": "This system will continue expanding in future updates with new abilities and additional improvements.",
            "detail-vehicles-title": "Vehicle update",
            "detail-vehicles-p1": "We also made visual and optimization improvements to several vehicles while adding a new category to the game.",
            "detail-changes-made": "Changes made",
            "detail-vehicles-li1": "Sprayer now has a lighter and more stylized model, improving both its appearance and general performance.",
            "detail-vehicles-li2": "Breakway was replaced by a more optimized version to improve stability and performance during matches.",
            "detail-vehicles-li3": "Makoto was added as the first motorcycle available in the game.",
            "detail-makoto-p": "Makoto introduces a completely different driving style focused on:",
            "detail-makoto-li1": "Higher speed.",
            "detail-makoto-li2": "More aggressive mobility.",
            "detail-makoto-li3": "Superior maneuverability.",
            "detail-makoto-li4": "Greater risk in direct fights.",
            "detail-vehicles-p2": "The arrival of motorcycles opens new possibilities for future mechanics and playstyles."
        },
        es: {
            "nav-universe": "Universo",
            "nav-drivers": "Pilotos",
            "nav-patch-notes": "Notas del Parche",
            "nav-play": "Jugar Ahora",
            "hero-tagline": "ACCION EN EQUIPO • GRATIS",
            "hero-download": "Descargar Gratis",
            "hero-more": "Ver Más",
            "features-title": "Domina <span class=\"highlight\">la Pista</span>",
            "feat1-h3": "Fisica <span>Arcade</span>",
            "feat1-p": "Conduce al limite con controles inmediatos, derrapes exagerados y carreras faciles de aprender pero dificiles de dominar.",
            "feat2-h3": "Partidas <span>Freneticas</span>",
            "feat2-p": "Cada carrera mezcla velocidad, choques y decisiones rapidas para mantener la accion siempre al rojo vivo.",
            "feat3-h3": "Personajes <span>Carismaticos</span>",
            "feat3-p": "Elige pilotos con personalidad propia, estilos reconocibles y una actitud lista para encender la pista.",
            "factions-h2": "Únete a una <span class=\"highlight\">Facción</span>",
            "factions-h3": "Elige Tu Bando",
            "factions-p": "Alíate con una de las tres facciones de élite. Cada equipo ofrece ventajas únicas, diseños de vehículos exclusivos y habilidades especiales. Compite por el dominio y demuestra la superioridad de tu facción.",
            "factions-btn": "EXPLORAR FACCIONES",
            "drivers-h2": "Conoce a tus <span class=\"highlight\">Pilotos</span>",
            "drivers-h3": "Cada Corredor Tiene una Historia",
            "drivers-p": "Elige entre un elenco diverso de pilotos experimentados, cada uno con personalidades, orígenes y técnicas de carrera únicas. Domina sus habilidades y vence a la competencia con estilo.",
            "drivers-btn": "VER TODOS LOS PILOTOS",
            "maps-h2": "Sumérgete en los <span class=\"highlight\">Mapas</span>",
            "maps-h3": "Compite por todo el Mundo",
            "maps-p": "Cada pista es un campo de batalla diseñado para poner a prueba tu creatividad y destreza. Desde ciudades con luces de neón hasta peligrosos pasos de montaña, cada mapa ofrece desafíos únicos.",
            "maps-btn": "VER TODOS LOS MAPAS",
            "patch-eyebrow": "Actualizaciones",
            "latest-patch-title": "Últimas <span class=\"highlight\">Notas</span>",
            "patch-title": "Notas de <span class=\"highlight\">Parche</span>",
            "patch-view-all": "Ver todas",
            "patch-back-home": "Volver al inicio",
            "patch-feature-type": "BETA DEVELOPMENT",
            "patch-feature-title": "La beta sigue creciendo",
            "patch-feature-copy": "Nuevas mecanicas, mejoras jugables y contenido para preparar el terreno de futuras expansiones.",
            "patch-feature-date": "7 de mayo de 2026",
            "patch-read-more": "Leer mas",
            "patch-card1-type": "Mapa",
            "patch-card1-title": "Summit Valley",
            "patch-card1-copy": "Suburbios abandonados con rutas alternativas, portales de transporte y combates mas dinamicos.",
            "patch-card1-date": "7 de mayo de 2026",
            "patch-card2-type": "Balance",
            "patch-card2-title": "Pilotos mas agiles en combate",
            "patch-card2-copy": "Mejoras de conduccion, respuesta, estabilidad y control durante situaciones de combate intenso.",
            "patch-card2-date": "7 de mayo de 2026",
            "patch-card3-type": "Sistema",
            "patch-card3-title": "Mini Habilidades",
            "patch-card3-copy": "Elige entre Shock y Shield para cambiar el resultado de un combate segun la situacion.",
            "patch-card3-date": "7 de mayo de 2026",
            "patch-card4-type": "Vehiculos",
            "patch-card4-title": "Makoto llega al juego",
            "patch-card4-copy": "Mejoras visuales, optimizacion de pilotos y Makoto, la primera motocicleta disponible.",
            "patch-card4-date": "7 de mayo de 2026",
            "patch-card5-type": "Vehículos",
            "patch-card5-title": "Mejoras al chasis ligero",
            "patch-card5-copy": "Aumentamos estabilidad aérea y reducimos la pérdida de velocidad al aterrizar.",
            "patch-card5-date": "4 de abril de 2026",
            "patch-card6-type": "Calidad de vida",
            "patch-card6-title": "Lectura más clara del combate",
            "patch-card6-copy": "Nuevos avisos visuales ayudan a identificar ataques, asistencias y objetivos activos.",
            "patch-card6-date": "28 de marzo de 2026",
            "cta-h2": "¿Listo para el desafío?",
            "cta-p": "Únete a miles de pilotos y demuestra quién es el rey de la carretera.",
            "cta-btn": "Únete a la Beta",
            "footer-copy": "&copy; 2025 Rearview Games. Todos los derechos reservados.",
            "detail-back": "Notas de parche",
            "detail-hero-title": "La beta sigue creciendo",
            "detail-hero-copy": "La beta sigue creciendo y evolucionando con nuevas mecanicas, mejoras jugables y muchisimo contenido nuevo.",
            "detail-nav-overview": "Resumen",
            "detail-nav-balance": "Balance",
            "detail-nav-abilities": "Mini Habilidades",
            "detail-nav-vehicles": "Vehiculos",
            "detail-overview-p": "Esta actualizacion trae cambios importantes en combate, movilidad y exploracion, ademas de preparar el terreno para todo lo que viene en futuras expansiones del juego.",
            "detail-new-map": "Nuevo mapa",
            "detail-summit-p1": "Bienvenido a Summit Valley, el primer contacto de los rebeldes con el exterior.",
            "detail-summit-p2": "Ubicado en una enorme zona suburbana abandonada, este nuevo mapa apuesta por escenarios mas abiertos, rutas alternativas y combates mucho mas intensos y dinamicos.",
            "detail-main-news": "Novedades principales",
            "detail-summit-li1": "Objetos destruibles distribuidos por diferentes zonas del mapa.",
            "detail-summit-li2": "Portales de transporte para moverte rapidamente entre puntos estrategicos.",
            "detail-summit-li3": "Nuevos elementos ambientales que hacen las partidas mas inmersivas.",
            "detail-summit-li4": "Mejor ritmo de combate y distribucion de zonas de conflicto.",
            "detail-summit-li5": "Nuevos puntos elevados y rutas secundarias para jugadores mas agresivos o tacticos.",
            "detail-summit-li6": "Ajustes de iluminacion y efectos ambientales para reforzar la identidad visual del escenario.",
            "detail-summit-p3": "Summit Valley marca el comienzo de una nueva etapa para el juego y sera el escenario principal de las proximas pruebas y eventos.",
            "detail-map-quote": "Suburbios abandonados donde el caos nunca descansa.",
            "detail-map-p1": "Las calles bloqueadas a la ciudad convierten a Summit Valley en una zona impredecible, donde cada partida puede desarrollarse de forma completamente distinta.",
            "detail-map-p2": "El mapa fue disenado para ofrecer tanto enfrentamientos rapidos como persecuciones largas, permitiendo aprovechar atajos, coberturas y rutas de escape en todo momento.",
            "detail-map-p3": "Ademas, se anadieron nuevos detalles ambientales y estructuras interactivas para hacer el entorno mucho mas vivo y dinamico durante las partidas.",
            "detail-balance-p1": "Realizamos multiples mejoras en la conduccion y respuesta de los vehiculos para lograr una experiencia mucho mas fluida, rapida y satisfactoria.",
            "detail-main-changes": "Cambios principales",
            "detail-balance-li1": "Mejor respuesta en curvas cerradas.",
            "detail-balance-li2": "Sensacion de aceleracion mas natural.",
            "detail-balance-li3": "Ajustes de estabilidad durante impactos y colisiones.",
            "detail-balance-li4": "Mayor control del vehiculo en situaciones de combate intenso.",
            "detail-balance-li5": "Transiciones mas suaves entre velocidad, frenado y derrapes.",
            "detail-balance-p2": "El objetivo de estos cambios es que cada enfrentamiento se sienta mas dinamico, competitivo y divertido.",
            "detail-abilities-p1": "Llegan las nuevas Mini Habilidades, un sistema pensado para agregar mas variedad estrategica a cada partida.",
            "detail-abilities-p2": "Ahora, antes de comenzar, cada jugador podra elegir entre dos habilidades especiales capaces de cambiar completamente el resultado de un combate dependiendo de la situacion.",
            "detail-shock-p": "Una descarga electrica de corto alcance que paraliza temporalmente a los enemigos cercanos, reduciendo su movilidad y dejandolos vulnerables durante unos segundos.",
            "detail-ideal-for": "Ideal para:",
            "detail-shock-li1": "Emboscadas.",
            "detail-shock-li2": "Cortar persecuciones.",
            "detail-shock-li3": "Iniciar ataques agresivos.",
            "detail-shield-p": "Genera un escudo temporal que bloquea parte del dano recibido por el vehiculo durante unos instantes.",
            "detail-shield-li1": "Escapar de situaciones peligrosas.",
            "detail-shield-li2": "Resistir ataques enemigos.",
            "detail-shield-li3": "Sobrevivir durante enfrentamientos intensos.",
            "detail-abilities-p3": "Este sistema seguira expandiendose en futuras actualizaciones con nuevas habilidades y mejoras adicionales.",
            "detail-vehicles-title": "Actualizacion de vehiculos",
            "detail-vehicles-p1": "Tambien realizamos mejoras visuales y de optimizacion en distintos vehiculos, ademas de incorporar una nueva categoria al juego.",
            "detail-changes-made": "Cambios realizados",
            "detail-vehicles-li1": "Sprayer ahora cuenta con un modelo mas ligero y estilizado, mejorando tanto su apariencia como su rendimiento general.",
            "detail-vehicles-li2": "Breakway fue reemplazado por una version mas optimizada para mejorar estabilidad y desempeno durante las partidas.",
            "detail-vehicles-li3": "Se anadio Makoto, la primera motocicleta disponible en el juego.",
            "detail-makoto-p": "Makoto introduce un estilo de conduccion completamente diferente, enfocado en:",
            "detail-makoto-li1": "Mayor velocidad.",
            "detail-makoto-li2": "Movilidad mas agresiva.",
            "detail-makoto-li3": "Maniobrabilidad superior.",
            "detail-makoto-li4": "Mayor riesgo en enfrentamientos directos.",
            "detail-vehicles-p2": "La llegada de motocicletas abre nuevas posibilidades para futuras mecanicas y estilos de juego."
        },
        ja: {
            "nav-universe": "ユニバース",
            "nav-drivers": "ドライバー",
            "nav-patch-notes": "パッチノート",
            "nav-play": "今すぐプレイ",
            "hero-tagline": "チームアクション • 無料",
            "hero-download": "無料でダウンロード",
            "hero-more": "詳細を見る",
            "features-title": "<span class=\"highlight\">コース</span>を制覇せよ",
            "feat1-h3": "アーケード <span>物理演算</span>",
            "feat1-p": "限界まで走り抜け。直感的な操作、ダイナミックなドリフト、初心者でも覚えやすく、極めるのは難しいレース。",
            "feat2-h3": "熱狂的な <span>マッチ</span>",
            "feat2-p": "すべてのレースがスピード、衝突、そして素早い決断の連続。アクションの熱気が途切れることはない。",
            "feat3-h3": "個性豊かな <span>キャラクター</span>",
            "feat3-p": "独自の性格、特徴的なスタイル、そしてコースを沸かせる熱い志を持ったドライバーたちを選べ。",
            "factions-h2": "<span class=\"highlight\">派閥</span>に参加せよ",
            "factions-h3": "自分の陣営を選べ",
            "factions-p": "3つのエリートレース派閥のいずれかと提携せよ。各チームは独自の利点、限定車両スキン、特殊能力を提供。支配権を争い、リーダーボードで派閥の優位性を証明せよ。",
            "factions-btn": "派閥を探索する",
            "drivers-h2": "<span class=\"highlight\">ドライバー</span>紹介",
            "drivers-h3": "すべてのレーサーには物語がある",
            "drivers-p": "独自の性格、背景、特殊なレーステクニックを持つ多様な熟練ドライバーから選べ。彼らの能力をマスターし、スタイリッシュに競争を支配せよ。",
            "drivers-btn": "すべてのドライバーを見る",
            "maps-h2": "<span class=\"highlight\">マップ</span>を走破せよ",
            "maps-h3": "世界中を駆け巡るレース",
            "maps-p": "すべてのトラックは、君の創造性とスキルを試す戦場だ。ネオン輝く街並みから険しい峠まで、各マップは忘れられないユニークな挑戦と壮大な瞬間を提供する。",
            "maps-btn": "すべてのマップを見る",
            "patch-eyebrow": "アップデート",
            "latest-patch-title": "最新の <span class=\"highlight\">ノート</span>",
            "patch-title": "パッチ <span class=\"highlight\">ノート</span>",
            "patch-view-all": "すべて見る",
            "patch-back-home": "ホームに戻る",
            "patch-feature-type": "BETA DEVELOPMENT",
            "patch-feature-title": "進化し続けるベータ",
            "patch-feature-copy": "新しいメカニクス、ゲームプレイの改善、そして将来の拡張に向けた土台を作るコンテンツ。",
            "patch-feature-date": "2026年5月7日",
            "patch-read-more": "続きを読む",
            "patch-card1-type": "マップ",
            "patch-card1-title": "サミットバレー",
            "patch-card1-copy": "別ルート、転送ポータル、そしてよりダイナミックな戦闘を備えた廃墟の郊外。",
            "patch-card1-date": "2026年5月7日",
            "patch-card2-type": "バランス",
            "patch-card2-title": "戦闘中の機動性が向上",
            "patch-card2-copy": "激しい戦闘状況下でのドライビング、レスポンス、安定性、および制御の改善。",
            "patch-card2-date": "2026年5月7日",
            "patch-card3-type": "システム",
            "patch-card3-title": "ミニアビリティ",
            "patch-card3-copy": "状況に応じてShockとShieldを使い分け、戦闘の結果を変えよう。",
            "patch-card3-date": "2026年5月7日",
            "patch-card4-type": "車両",
            "patch-card4-title": "Makotoが参戦",
            "patch-card4-copy": "ビジュアルの改善、ドライバーの最適化、そして初のオートバイ「Makoto」が登場。",
            "patch-card4-date": "2026年5月7日",
            "patch-card5-type": "車両",
            "patch-card5-title": "軽量シャシーのアップグレード",
            "patch-card5-copy": "空中安定性を向上させ、着地後の速度低下を軽減しました。",
            "patch-card5-date": "2026年4月4日",
            "patch-card6-type": "クオリティ・オブ・ライフ",
            "patch-card6-title": "戦闘の視認性を向上",
            "patch-card6-copy": "攻撃、アシスト、アクティブな目標を識別しやすくする新しい視覚アラート。",
            "patch-card6-date": "2026年3月28日",
            "cta-h2": "挑戦する準備はできているか？",
            "cta-p": "何千人ものドライバーと一緒に、誰が道の王であるかを証明せよ。",
            "cta-btn": "ベータに参加する",
            "footer-copy": "&copy; 2025 Rearview Games. All rights reserved.",
            "detail-back": "パッチノート",
            "detail-hero-title": "進化し続けるベータ",
            "detail-hero-copy": "ベータは新しいメカニクス、ゲームプレイの改善、そして多くの新しいコンテンツとともに成長し、進化し続けています。",
            "detail-nav-overview": "概要",
            "detail-nav-balance": "バランス",
            "detail-nav-abilities": "ミニアビリティ",
            "detail-nav-vehicles": "車両",
            "detail-overview-p": "このアップデートでは、戦闘、機動性、探索に重要な変更を加え、将来の拡張に向けた準備を整えています。",
            "detail-new-map": "新マップ",
            "detail-summit-p1": "サミットバレーへようこそ。反乱軍が外部と接触する最初の拠点です。",
            "detail-summit-p2": "広大な廃墟の郊外を舞台にしたこの新マップは、より広いスペース、代替ルート、そして非常に激しくダイナミックな戦闘に焦点を当てています。",
            "detail-main-news": "主な追加内容",
            "detail-summit-li1": "マップ内の各エリアに配置された破壊可能なオブジェクト。",
            "detail-summit-li2": "戦略的ポイント間を素早く移動できる転送ポータル。",
            "detail-summit-li3": "マッチの没入感を高める新しい環境要素。",
            "detail-summit-li4": "戦闘のペース調整と紛争地帯の配置改善。",
            "detail-summit-li5": "アグレッシブまたはタクティカルなプレイヤー向けの新しい高台とセカンダリルート。",
            "detail-summit-li6": "ステージの視覚的アイデンティティを強化するための照明と環境効果の調整。",
            "detail-summit-p3": "サミットバレーはゲームの新しいステージの始まりであり、今後のテストやイベントのメイン設定となります。",
"detail-map-quote": "混沌が眠ることのない廃墟の郊外。",
            "detail-map-p1": "都市への封鎖された道路により、サミットバレーはすべてのマッチが完全に異なる方法で展開される予測不能なゾーンとなります。",
            "detail-map-p2": "マップは素早い戦闘と長い追跡の両方に対応するように設計されており、プレイヤーはいつでもショートカット、カバー、逃走ルートを利用できます。",
            "detail-map-p3": "新しい環境の詳細とインタラクティブな構造により、マッチ中の空間がより生き生きとダイナミックに感じられるようになりました。",
            "detail-balance-p1": "車両のハンドリングとレスポンスに複数の改善を加え、よりスムーズで速く、満足度の高い体験を実現しました。",
            "detail-main-changes": "主な変更点",
            "detail-balance-li1": "急カーブでのレスポンス向上。",
            "detail-balance-li2": "より自然な加速感。",
            "detail-balance-li3": "衝撃や衝突時の安定性調整。",
            "detail-balance-li4": "激しい戦闘状況での車両制御性の向上。",
            "detail-balance-li5": "スピード、ブレーキ、ドリフト間のよりスムーズな遷移。",
            "detail-balance-p2": "目標は、すべての戦闘をよりダイナミックで競争力のある、楽しいものにすることです。",
            "detail-abilities-p1": "ミニアビリティは、各マッチに戦略的多様性を加えるために設計されたシステムとして登場します。",
            "detail-abilities-p2": "マッチ開始前に、プレイヤーは状況に応じて戦闘の結果を変えることができる2つの特殊能力から1つを選択できるようになります。",
            "detail-shock-p": "近くの敵を一時的に麻痺させ、機動性を低下させて数秒間無防備にする近距離放電。",
            "detail-ideal-for": "次のような場面に最適です：",
            "detail-shock-li1": "待ち伏せ。",
            "detail-shock-li2": "追跡の阻止。",
            "detail-shock-li3": "アグレッシブな攻撃の開始。",
            "detail-shield-p": "車両が受けるダメージの一部を短時間ブロックする一時的なシールドを生成します。",
            "detail-shield-li1": "危険な状況からの脱出。",
            "detail-shield-li2": "敵の攻撃への抵抗。",
            "detail-shield-li3": "激しい戦闘での生存。",
            "detail-abilities-p3": "このシステムは、今後のアップデートで新しい能力や追加の改善とともに拡張され続けます。",
            "detail-vehicles-title": "車両のアップデート",
            "detail-vehicles-p1": "いくつかの車両に視覚的および最適化の改善を加え、ゲームに新しいカテゴリーを追加しました。",
            "detail-changes-made": "加えられた変更",
            "detail-vehicles-li1": "Sprayerのモデルがより軽くスタイリッシュになり、外観と全体的なパフォーマンスの両方が向上しました。",
            "detail-vehicles-li2": "Breakwayは、マッチ中の安定性とパフォーマンスを向上させるために、より最適化されたバージョンに置き換えられました。",
            "detail-vehicles-li3": "ゲーム初のオートバイとしてMakotoが追加されました。",
            "detail-makoto-p": "Makotoは、以下に焦点を当てた全く異なるドライビングスタイルを導入します：",
            "detail-makoto-li1": "より高いスピード。",
            "detail-makoto-li2": "よりアグレッシブな機動性。",
            "detail-makoto-li3": "優れた操作性。",
            "detail-makoto-li4": "直接戦闘における高いリスク。",
            "detail-vehicles-p2": "オートバイの登場は、将来のメカニクスやプレイスタイルの新しい可能性を切り開きます。"
        }

    };

    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentLangText = document.getElementById('current-lang');
    const langOptions = document.querySelectorAll('.lang-option');

    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    // Close dropdown on click outside
    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });

    let activeLang = 'en';

    // --- Filter System Logic ---
    const filterBtn = document.getElementById('filter-btn');
    const filterDropdown = document.getElementById('filter-dropdown');
    const filterOptions = document.querySelectorAll('.filter-option');
    const driversGrid = document.getElementById('drivers-grid');
    // Store original cards to restore them
    let driverCards = [];
    if (driversGrid) {
        driverCards = Array.from(driversGrid.querySelectorAll('.driver-card'));
    }

    if (filterBtn && filterDropdown && driversGrid) {
        // Toggle Dropdown
        filterBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            filterDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            filterDropdown.classList.remove('active');
        });

        // Sorting Logic
        filterOptions.forEach(option => {
            option.addEventListener('click', () => {
                const sortType = option.dataset.sort;
                sortDrivers(sortType);
                const icon = '<i class="fa-solid fa-filter"></i>';
                // Update button text but keep icon
                filterBtn.innerHTML = `${icon} ${option.innerText}`;
            });
        });

        function sortDrivers(type) {
            // Remove existing separators
            const separators = document.querySelectorAll('.role-separator');
            separators.forEach(sep => sep.remove());

            // Reset grid layout (default 6 columns)
            driversGrid.style.display = 'grid';
            driversGrid.style.gridTemplateColumns = 'repeat(6, 1fr)';
            driversGrid.style.alignContent = 'start';

            let sortedCards = [...driverCards];

            if (type === 'az') {
                sortedCards.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
            } else if (type === 'za') {
                sortedCards.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
            } else if (type === 'random') {
                sortedCards.sort(() => Math.random() - 0.5);
            } else if (type === 'role') {
                sortByRole();
                return; // Special handling for role
            }

            // Append sorted cards back to grid
            driversGrid.innerHTML = '';
            sortedCards.forEach((card, index) => {
                // Reset animation
                card.style.animationDelay = `${index * 0.1}s`;
                card.classList.remove('reveal-item');
                void card.offsetWidth; // Trigger reflow
                card.classList.add('reveal-item');
                driversGrid.appendChild(card);
            });
        }

        function sortByRole() {
            driversGrid.innerHTML = '';
            // Change grid to 3 columns to allow separators to span nicely and group items
            // Or better: Use 6 columns but use full-width separators

            // Group by Role
            const roles = {
                'DPS': [],
                'Tank': [],
                'Support': []
            };

            driverCards.forEach(card => {
                const role = card.dataset.role;
                if (roles[role]) roles[role].push(card);
            });

            for (const [role, cards] of Object.entries(roles)) {
                const separator = document.createElement('div');
                separator.className = 'role-separator reveal-item';
                separator.innerHTML = `<h2>${role}</h2>`;
                separator.style.gridColumn = '1 / -1';
                driversGrid.appendChild(separator);

                cards.forEach((card, index) => {
                    card.classList.remove('reveal-item');
                    void card.offsetWidth;
                    card.style.animationDelay = `${index * 0.1}s`;
                    card.classList.add('reveal-item');
                    driversGrid.appendChild(card);
                });
            }
        }
    }

    const setLanguage = (lang) => {
        activeLang = translations[lang] ? lang : 'en';
        localStorage.setItem('preferredLang', activeLang);
        currentLangText.textContent = activeLang.toUpperCase();

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[activeLang] && translations[activeLang][key]) {
                el.innerHTML = translations[activeLang][key];
            }
        });

        document.documentElement.lang = activeLang;
        renderPatchNotesFeed();
    };

    let patchNotesFeed = null;

    const setText = (root, selector, value) => {
        const element = root.querySelector(selector);
        if (element && value) {
            element.textContent = value;
        }
    };

    const localizePatchNote = (note) => {
        if (activeLang === 'en') {
            return {
                ...note,
                type: note.type_en || note.type,
                title: note.title_en || note.title,
                date: note.date_en || note.date,
                summary: note.summary_en || note.summary
            };
        }
        if (activeLang === 'ja') {
            return {
                ...note,
                type: note.type_ja || note.type,
                title: note.title_ja || note.title,
                date: note.date_ja || note.date,
                summary: note.summary_ja || note.summary
            };
        }
        return note;
    };

    const renderPatchCard = (card, note) => {
        if (!card || !note) return;
        if (note.url) {
            card.dataset.patchUrl = note.url;
        }
        setText(card, '.patch-type', note.type);
        setText(card, 'h3', note.title);
        setText(card, 'p', note.summary);
        setText(card, 'time', note.date);
    };

    function renderPatchNotesFeed() {
        if (!patchNotesFeed || !Array.isArray(patchNotesFeed.items) || patchNotesFeed.items.length === 0) {
            return;
        }

        const items = patchNotesFeed.items.map(localizePatchNote);
        const feature = document.querySelector('.patch-feature');
        if (feature && items[0]) {
            const featureImage = feature.querySelector('.patch-feature-media img');
            if (featureImage && items[0].image) {
                featureImage.src = items[0].image;
            }
            if (items[0].url) {
                feature.dataset.patchUrl = items[0].url;
                const readMore = feature.querySelector('.patch-meta a');
                if (readMore) readMore.href = items[0].url;
            }
            setText(feature, '.patch-type', items[0].type);
            setText(feature, 'h2, h3', items[0].title);
            setText(feature, 'p', items[0].summary);
            setText(feature, '.patch-meta span', items[0].date);
        }

        document.querySelectorAll('#latest-patches .patch-grid').forEach(grid => {
            const cards = Array.from(grid.querySelectorAll('.patch-card'));
            items.slice(1, 4).forEach((note, index) => renderPatchCard(cards[index], note));
        });

        document.querySelectorAll('#patch-notes .patch-grid').forEach(grid => {
            const cards = Array.from(grid.querySelectorAll('.patch-card'));
            items.slice(1, 7).forEach((note, index) => renderPatchCard(cards[index], note));
        });
    }

    document.addEventListener('click', (event) => {
        const patchItem = event.target.closest('[data-patch-url]');
        if (!patchItem || event.target.closest('a')) return;
        window.location.href = patchItem.dataset.patchUrl;
    });

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    const getBestLanguage = () => {
        const saved = localStorage.getItem('preferredLang');
        if (saved) return saved;

        const browserLang = navigator.language.split('-')[0];
        return translations[browserLang] ? browserLang : 'en';
    };

    setLanguage(getBestLanguage());

    if (document.querySelector('#latest-patches, #patch-notes')) {
        fetch('patch-notes.json', { cache: 'no-store' })
            .then(response => response.ok ? response.json() : null)
            .then(data => {
                if (!data) return;
                patchNotesFeed = data;
                renderPatchNotesFeed();
            })
        },
        'deadloader': {
            realName: "UNIT 734",
            alias: "DEADLOADER",
            role: "TANK",
            origin: "CYBER-WASTELAND",
            bio: "A heavy-duty autonomous hauler reprogrammed for destruction. What it lacks in speed, it makes up for in sheer, unstoppable durability.",
            stats: { speed: 50, defense: 98, utility: 40 },
            image: "deadloader.png"
        },
        'juggernaut': {
            realName: "MARCUS STEEL",
            alias: "JUGGERNAUT",
            role: "TANK",
            origin: "BERLIN",
            bio: "An indestructible force on the track. Marcus uses his fortified chassis to push through blockades and clear the path for his team.",
            stats: { speed: 60, defense: 90, utility: 50 },
            image: "juggernaut.png"
        },
        'sprayer': {
            realName: "ELARA VANE",
            alias: "SPRAYER",
            role: "SUPPORT",
            origin: "SEATTLE",
            bio: "Uses experimental nanotech to repair allies on the fly. Her vehicle leaves a trail of restoration particles that heal teammates following in her slipstream.",
            stats: { speed: 70, defense: 60, utility: 95 },
            image: "sprayer.png"
        },
        'welfare': {
            realName: "DR. ARIN THORNE",
            alias: "WELFARE",
            role: "SUPPORT",
            origin: "LONDON",
            bio: "A combat medic who turned the racetrack into a triage unit. Specialized in defensive shielding and emergency repairs during high-speed collisions.",
            stats: { speed: 65, defense: 70, utility: 85 },
            image: "welfare.png"
        }
    };

    const overlay = document.getElementById('driver-overlay');
    const closeBtn = document.querySelector('.close-overlay-btn');

    // UI Elements
    const oName = document.getElementById('overlay-name');
    const oRealName = document.getElementById('overlay-realname');
    const oRole = document.getElementById('overlay-role');
    const oOrigin = document.getElementById('overlay-origin');
    const oBio = document.getElementById('overlay-bio');
    const oImage = document.getElementById('overlay-image');

    // Stats
    const sSpeed = document.getElementById('stat-speed');
    const sDefense = document.getElementById('stat-defense');
    const sUtility = document.getElementById('stat-utility');

    function openOverlay(driverKey) {
        const data = driversData[driverKey];
        if (!data) return;

        // Populate Data
        oName.textContent = data.alias;
        oRealName.textContent = data.realName;
        oRole.textContent = data.role;
        oOrigin.textContent = data.origin;
        oBio.textContent = data.bio;
        oImage.src = data.image;

        // Reset bars for animation
        sSpeed.style.width = '0%';
        sDefense.style.width = '0%';
        sUtility.style.width = '0%';

        // Show Overlay
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling

        // Animate Bars
        setTimeout(() => {
            sSpeed.style.width = `${data.stats.speed}%`;
            sDefense.style.width = `${data.stats.defense}%`;
            sUtility.style.width = `${data.stats.utility}%`;
        }, 500);
    }

    function closeOverlay() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event Delegation for Grid (since grid is dynamic)
    if (driversGrid) {
        driversGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.driver-card');
            if (card && !card.classList.contains('locked')) {
                const driverKey = card.dataset.driver;
                openOverlay(driverKey);
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeOverlay);
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeOverlay();
        }
    });

    // Close on click outside content
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeOverlay();
        });
    }
});
