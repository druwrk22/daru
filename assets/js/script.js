$(document).ready(function() {
    const projects = [
        {
            id: 1,
            name: "TMS (Transportation Management System)",
            company: "PT Prakarsa Alam Segar (WINGS)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "VueJS", "MySQL"],
            impact: "Track truck positions via custom maps, reduce paper usage 80%, auto Telegram alerts"
        },
        {
            id: 2,
            name: "Help Dev (Ticket Management)",
            company: "PT Prakarsa Alam Segar (WINGS)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            impact: "Task assignment, performance tracking, transparent ticket workflow"
        },
        {
            id: 3,
            name: "Silo Management System",
            company: "PT Prakarsa Alam Segar (EXP)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            impact: "24h flour retrieval optimization, centralized monitoring, live truck tracking"
        },
        {
            id: 4,
            name: "Checklist SDP",
            company: "PT Prakarsa Alam Segar (Engineering)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            impact: "Early overheating detection, automated maintenance scheduling, offline support"
        },
        {
            id: 5,
            name: "HR Connect",
            company: "PT Prakarsa Alam Segar (HR)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            impact: "Streamlined employee onboarding, auto facility calculation, calendar dashboard"
        },
        {
            id: 6,
            name: "Shelf Life QA",
            company: "PT Prakarsa Alam Segar (Lab)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            impact: "Traceable sample flow, rigorous approval process, real-time notifications"
        },
        {
            id: 7,
            name: "FL Produksi",
            company: "PT Prakarsa Alam Segar (Noodle)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            impact: "Equipment tracking, digital approval workflow, production trend analysis"
        },
        {
            id: 8,
            name: "CPAR Audit",
            company: "PT Prakarsa Alam Segar (All Dept)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            impact: "Systematic non-conformity fixing, risk identification, audit lifecycle management"
        },
        {
            id: 9,
            name: "Smart Lab",
            company: "PT Prakarsa Alam Segar (Lab QA)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            impact: "Faster DA/PA turnaround, real-time task visibility, authorized verification flow"
        },
        {
            id: 10,
            name: "E-Resepsionis",
            company: "PT Prakarsa Alam Segar (All Dept)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            impact: "Digital audit trail, QR/ID scanning system, structured document tracking"
        },
        {
            id: 11,
            name: "BA Co-Product",
            company: "PT Prakarsa Alam Segar (Purchasing)",
            companyCode: "WINGS",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            impact: "Digital approval workflow, real-time BA statistics, template system"
        },
        {
            id: 12,
            name: "Serial System Communication",
            company: "EAJ Core Team (GPL Sawit)",
            companyCode: "EAJ",
            type: "Desktop",
            category: "Production",
            tech: [".NET", "MSSQL"],
            impact: "Accurate transaction sync, real-time data transparency, customizable integration"
        },
        {
            id: 13,
            name: "Gmaps Scraper",
            company: "EAJ Core Team (Internal)",
            companyCode: "EAJ",
            type: "Web",
            category: "Experimental",
            tech: ["Bootstrap", "ExpressJS"],
            impact: "90% faster B2B lead gathering, competitor monitoring, clean data export"
        },
        {
            id: 14,
            name: "DISC Test",
            company: "EAJ Core Team (Internal)",
            companyCode: "EAJ",
            type: "Web",
            category: "Experimental",
            tech: ["Bootstrap", "VueJS", "ExpressJS", "Sequelize", "MySQL"],
            impact: "Automated psychological profiling with real-time analytics and centralized administrative control for seamless assessment management."
        },
        {
            id: 15,
            name: "Rinku - Shorten Link",
            company: "EAJ Core Team (Internal)",
            companyCode: "EAJ",
            type: "Web",
            category: "Experimental",
            tech: ["Bootstrap", "jQuery", "ExpressJS", "MySQL"],
            impact: "Streamlined URL sharing, centralized link management, quick access via aliases"
        },
        {
            id: 16,
            name: "Nobuka - Simple Tasklist",
            company: "EAJ Core Team (Internal)",
            companyCode: "EAJ",
            type: "Desktop",
            category: "Experimental",
            tech: ["Bootstrap", "ExpressJS", "Electron"],
            impact: "Dedicated desktop task tracking, clear categorization (Work/Personal/General)"
        },
        {
            id: 17,
            name: "Momodoro - Timer App",
            company: "EAJ Core Team (Internal)",
            companyCode: "EAJ",
            type: "Desktop",
            category: "Experimental",
            tech: ["Bootstrap", "ExpressJS", "Electron"],
            impact: "Disciplined work intervals, session history tracking, burnout prevention"
        },
        {
            id: 18,
            name: "MjsPay",
            company: "CV Mitra Jaya Solusindo",
            companyCode: "Mitra",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "Laravel", "MySQL"],
            impact: "Efficient vehicle tax payment, real-time tracking, accurate structured reports"
        },
        {
            id: 19,
            name: "Sinpus (Library System)",
            company: "SMK Islam PB. Soedirman 2",
            companyCode: "SMK",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "Laravel", "MySQL"],
            impact: "Easy book availability check, reduced library queues, efficient data management"
        },
        {
            id: 20,
            name: "Absensi (Attendance)",
            company: "SMK Islam PB. Soedirman 2",
            companyCode: "SMK",
            type: "Web",
            category: "Production",
            tech: ["Bootstrap", "Laravel", "MySQL"],
            impact: "Faster paperless attendance, reduced recording errors, accessible teacher reports"
        }
    ];

    function filterProjects(category) {
        const filtered = category === 'all' 
            ? projects 
            : projects.filter(p => p.category === category);
        
        renderTable(filtered);
        updateFilterCount(filtered.length);
        
        // Update active button state
        $('.filter-btn').removeClass('active');
        $(`.filter-btn[data-filter="${category}"]`).addClass('active');
    }

    function updateFilterCount(visible) {
        $('#visibleCount').text(visible);
        $('#totalCount').text(projects.length);
    }

    // === EVENT LISTENER FOR FILTER BUTTONS ===
    $('.filter-btn').on('click', function() {
        const filter = $(this).data('filter');
        filterProjects(filter);
    });

    // === INITIALIZE ===
    renderTable(projects);
    updateFilterCount(projects.length);
    calculateStats();

    function calculateStats() {
        const total = projects.length;
        
        animateValue('totalProjects', 0, total, 1000);
        
        const webCount = projects.filter(p => p.type === 'Web').length;
        const desktopCount = projects.filter(p => p.type === 'Desktop').length;
        
        const wingsCount = projects.filter(p => p.companyCode === 'WINGS').length;
        const eajCount = projects.filter(p => p.companyCode === 'EAJ').length;
        const mitraCount = projects.filter(p => p.companyCode === 'Mitra').length;
        const smkCount = projects.filter(p => p.companyCode === 'SMK').length;
        
        const techCount = {};
        projects.forEach(p => {
            p.tech.forEach(t => {
                techCount[t] = (techCount[t] || 0) + 1;
            });
        });
        
        const sortedTech = Object.entries(techCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);
        
        createTypeChart(webCount, desktopCount);
        createTechChart(sortedTech);
    }

    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        const range = end - start;
        const stepTime = Math.max(50, Math.floor(duration / range));
        let startTime = new Date().getTime();
        
        const timer = setInterval(() => {
            let now = new Date().getTime();
            let elapsed = now - startTime;
            let progress = Math.min(elapsed / duration, 1);
            let value = Math.floor(start + (range * progress));
            obj.innerHTML = value;
            
            if (progress === 1) clearInterval(timer);
        }, stepTime);
    }

    function createTypeChart(web, desktop) {
        const ctx = document.getElementById('typeChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Web', 'Desktop'],
                datasets: [{
                    data: [web, desktop],
                    backgroundColor: ['#4ECDC4', '#A855F7'],
                    borderColor: '#1a1a1a',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: { family: 'Space Grotesk', size: 10 },
                            color: '#1a1a1a',
                            padding: 10,
                            boxWidth: 15
                        }
                    }
                }
            }
        });
    }


    function createTechChart(techData) {
        const labels = techData.map(t => t[0]);
        const data = techData.map(t => t[1]);
        
        const ctx = document.getElementById('techChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Usage Count',
                    data: data,
                    backgroundColor: [
                        '#FFE600', '#4ECDC4', '#FF6B9D', '#A855F7',
                        '#7BED54', '#FF8C42', '#4ECDC4', '#FF6B9D',
                        '#A855F7', '#7BED54'
                    ],
                    borderColor: '#1a1a1a',
                    borderWidth: 2
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            font: { family: 'Space Mono' }
                        },
                        grid: { color: '#ddd' }
                    },
                    y: {
                        ticks: { font: { family: 'Space Grotesk', size: 11 } }
                    }
                }
            }
        });
    }

    function renderTable(data) {
        const techClassMap = {
            'Bootstrap': 'tech-bootstrap',
            'jQuery': 'tech-jquery',
            'Laravel': 'tech-laravel',
            'VueJS': 'tech-vuejs',
            'Angular': 'tech-angular',
            'MySQL': 'tech-mysql',
            'MariaDB': 'tech-mariadb',
            'PostgreSQL': 'tech-postgresql',
            'SQL Server': 'tech-sqlserver',
            'Firebase': 'tech-firebase',
            'ExpressJS': 'tech-expressjs',
            'NodeJS': 'tech-nodejs',
            '.NET': 'tech-dotnet',
            'PHP': 'tech-php',
            'JavaScript': 'tech-javascript',
            'TypeScript': 'tech-typescript',
            'Python': 'tech-python',
            'Electron': 'tech-electron',
            'ElectronJS': 'tech-electron',
            'CodeIgniter 3': 'tech-codeigniter',
            'Livewire': 'tech-livewire',
            'Bun': 'tech-bun',
            'GIT': 'tech-git',
            'REST API': 'tech-restapi',
            'Telegram': 'tech-telegram',
            'WebSocket': 'tech-websocket',
            'Email': 'tech-email',
            'QR/Barcode': 'tech-qrbarcode',
            'Custom Maps': 'tech-maps',
            'IndexedDB': 'tech-indexeddb',
            'Intellitrac API': 'tech-intellitrac',
            'MSSQL': 'tech-mssql'
        };

        let html = '';
        data.forEach(p => {
            const techHtml = p.tech.map(t => {
                const techClass = techClassMap[t] || 'tech-default';
                // console.log(`Tech: ${t} -> Class: ${techClass}`); // Debug log
                return `<span class="tech-badge ${techClass}">${t}</span>`;
            }).join('');
            
            const typeClass = p.type === 'Web' ? 'type-web' : 'type-desktop';
            
            html += `
            <tr>
                <td data-label="No">
                    <div class="number">${p.id}</div>
                </td>
                <td data-label="Project">
                    <div class="project-name">${p.name}</div>
                    <div class="project-company">${p.company}</div>
                </td>
                <td data-label="Company">
                    <span style="font-size:0.8rem">${p.companyCode}</span>
                </td>
                <td data-label="Type">
                    <span class="type-badge ${typeClass}">${p.type}</span>
                </td>
                <td data-label="Category">
                    <span class="category-badge category-${p.category.toLowerCase()}">${p.category}</span>
                </td>
                <td data-label="Tech">
                    <div style="display:flex;flex-wrap:wrap;gap:0.2rem;">${techHtml}</div>
                </td>
                <td data-label="Impact">
                    <div class="impact-preview">${p.impact}</div>
                </td>
            </tr>`;
        });
        $('#projectTableBody').html(html);
    }

    renderTable(projects);
    calculateStats();

    $('a.nav-link-brutal[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top - 80 }, 500);
        }
    });
});