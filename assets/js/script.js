$(document).ready(function() {
    let projects = [];

    function loadProjects() {
        return $.ajax({
            url: 'assets/data/projects.json',
            type: 'GET',
            dataType: 'json',
            cache: false 
        });
    }

    loadProjects()
        .done(function(data) {
            projects = data;
            updateFilterBadges();
            renderTable(projects);
            updateFilterCount(projects.length);
            calculateStats();
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error('Gagal load projects.json:', textStatus, errorThrown);
            $('#projectTableBody').html(
                '<tr><td colspan="7" class="text-center text-danger">Failed to load JSON data!</td></tr>'
            );
        });

    function updateFilterBadges() {
        const allCount = projects.length;
        const productionCount = projects.filter(p => p.category === 'Production').length;
        const experimentalCount = projects.filter(p => p.category === 'Experimental').length;
        const freelanceCount = projects.filter(p => p.companyCode === 'Freelance').length;
        
        $('#badge-all').text(allCount);
        $('#badge-production').text(productionCount);
        $('#badge-experimental').text(experimentalCount);
        $('#badge-freelance').text(freelanceCount);
    }

    function filterProjects(category) {
        const filtered = category === 'all' 
            ? projects 
            : projects.filter(p => p.category === category);
        
        renderTable(filtered);
        updateFilterCount(filtered.length);
        
        $('.filter-btn').removeClass('active');
        $(`.filter-btn[data-filter="${category}"]`).addClass('active');
    }

    function updateFilterCount(visible) {
        $('#visibleCount').text(visible);
        $('#totalCount').text(projects.length);
    }

    $('.filter-btn').on('click', function() {
        const filter = $(this).data('filter');
        filterProjects(filter);
    });

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

    $('a.nav-link-brutal[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top - 80 }, 500);
        }
    });
});