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
            "patch-feature-type": "Season 01",
            "patch-feature-title": "The rebel offensive begins",
            "patch-feature-copy": "New urban routes, arcade drift tuning, and improvements to the pace of team matches.",
            "patch-feature-date": "May 7, 2026",
            "patch-read-more": "Read more",
            "patch-card1-type": "Balance",
            "patch-card1-title": "More agile drivers in combat",
            "patch-card1-copy": "We reduced recovery after impacts and increased response through tight turns.",
            "patch-card1-date": "May 2, 2026",
            "patch-card2-type": "Map",
            "patch-card2-title": "Central District gets shortcuts",
            "patch-card2-copy": "Side access points are now open for more aggressive chases and last-second comebacks.",
            "patch-card2-date": "April 25, 2026",
            "patch-card3-type": "System",
            "patch-card3-title": "Squad rewards",
            "patch-card3-copy": "Assists, blocks, and shared objectives now grant more progress for the whole team.",
            "patch-card3-date": "April 18, 2026",
            "patch-card4-type": "Event",
            "patch-card4-title": "Operation Blackout",
            "patch-card4-copy": "A limited-time mode focused on quick sabotages, escorts, and coordinated escapes.",
            "patch-card4-date": "April 11, 2026",
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
            "footer-copy": "&copy; 2025 Rearview Games. All rights reserved."
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
            "patch-feature-type": "Temporada 01",
            "patch-feature-title": "Comienza la ofensiva rebelde",
            "patch-feature-copy": "Nuevas rutas urbanas, ajustes al derrape arcade y mejoras al ritmo de las partidas por equipos.",
            "patch-feature-date": "7 de mayo de 2026",
            "patch-read-more": "Leer más",
            "patch-card1-type": "Balance",
            "patch-card1-title": "Pilotos más ágiles en combate",
            "patch-card1-copy": "Reducimos la recuperación tras impactos y aumentamos la respuesta en giros cerrados.",
            "patch-card1-date": "2 de mayo de 2026",
            "patch-card2-type": "Mapa",
            "patch-card2-title": "Distrito Central recibe atajos",
            "patch-card2-copy": "Se abren accesos laterales para persecuciones más agresivas y remontadas de último segundo.",
            "patch-card2-date": "25 de abril de 2026",
            "patch-card3-type": "Sistema",
            "patch-card3-title": "Recompensas de escuadrón",
            "patch-card3-copy": "Las asistencias, bloqueos y objetivos compartidos ahora suman más progreso para todo el equipo.",
            "patch-card3-date": "18 de abril de 2026",
            "patch-card4-type": "Evento",
            "patch-card4-title": "Operación Corte de Luz",
            "patch-card4-copy": "Un modo temporal enfocado en sabotajes rápidos, escoltas y escapes coordinados.",
            "patch-card4-date": "11 de abril de 2026",
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
            "footer-copy": "&copy; 2025 Rearview Games. Todos los derechos reservados."
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

    const setLanguage = (lang) => {
        localStorage.setItem('preferredLang', lang);
        currentLangText.textContent = lang.toUpperCase();

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update document lang attribute
        document.documentElement.lang = lang;
    };

    // Event listeners for options
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Detect language
    const getBestLanguage = () => {
        const saved = localStorage.getItem('preferredLang');
        if (saved) return saved;

        const browserLang = navigator.language.split('-')[0];
        return translations[browserLang] ? browserLang : 'en';
    };

    // Initialize language
    setLanguage(getBestLanguage());

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
                // Create Separator
                const separator = document.createElement('div');
                separator.className = 'role-separator reveal-item';
                separator.innerHTML = `<h2>${role}</h2>`;
                separator.style.gridColumn = '1 / -1'; // Ensure it spans full width
                driversGrid.appendChild(separator);

                // Append Cards
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

    // --- Driver Overlay Logic ---
    const driversData = {
        'breakway': {
            realName: "KAITO TANAKA",
            alias: "BREAKWAY",
            role: "DPS",
            origin: "NEO-TOKYO",
            bio: "A former street racer who dominates the asphalt with calculated aggression. Known for his high-risk, high-reward drifting style that leaves opponents in the dust.",
            stats: { speed: 95, defense: 40, utility: 60 },
            image: "breakway.png"
        },
        'sneaky': {
            realName: "SARAH JENKINS",
            alias: "SNEAKY",
            role: "DPS",
            origin: "CHICAGO",
            bio: "A master of stealth and precision. She strikes when least expected, using the track's blind spots to her advantage to overtake rivals instantly.",
            stats: { speed: 90, defense: 30, utility: 80 },
            image: "sneaky.png"
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
