$(document).ready(function () {
    const ITEMS_PER_PAGE = 9;
    let allProjects = [];
    let filteredProjects = [];
    let currentPage = 1;
    let currentFilter = 'all';

    function loadProjects() {
        return $.ajax({
            url: 'assets/js/projects.json',
            type: 'GET',
            dataType: 'json',
            cache: false
        });
    }

    function updateFilterBadges() {
        const allCount = allProjects.length;
        const productionCount = allProjects.filter(p => p.category === 'Production').length;
        const experimentalCount = allProjects.filter(p => p.category === 'Experimental').length;
        const freelanceCount = allProjects.filter(p => p.companyCode === 'Freelance').length;

        $('#badge-all').text(allCount);
        $('#badge-production').text(productionCount);
        $('#badge-experimental').text(experimentalCount);
        $('#badge-freelance').text(freelanceCount);
    }

    loadProjects()
        .done(function (data) {
            allProjects = data;
            applyFilter(currentFilter);
            updateStats();
            updateFilterBadges();
        })

    function applyFilter(filter) {
        currentFilter = filter;
        currentPage = 1;

        if (filter === 'all') {
            filteredProjects = [...allProjects];
        } else if (filter === 'Freelance') {
            filteredProjects = allProjects.filter(p => p.companyCode === 'Freelance');
        } else {
            filteredProjects = allProjects.filter(p => p.category === filter);
        }

        renderProjects();
        updateLoadMoreButton();
        updateStats();
        updateFilterBadges(); 

        $('.filter-chip').removeClass('active');
        $(`.filter-chip[data-filter="${filter}"]`).addClass('active');
    }

    function renderProjects() {
        const grid = $('#showcaseGrid');
        const startIndex = 0;
        const endIndex = currentPage * ITEMS_PER_PAGE;
        const visibleProjects = filteredProjects.slice(startIndex, endIndex);

        if (visibleProjects.length === 0) {
            grid.html('');
            $('#emptyState').removeClass('d-none');
            return;
        }

        $('#emptyState').addClass('d-none');

        let html = '';
        visibleProjects.forEach(p => {
            const techBadges = p.tech.map(t => {
                const techClass = getTechClass(t);
                return `<span class="tech-badge ${techClass}">${t}</span>`;
            }).join('');

            const typeClass = p.type === 'Web' ? 'type-web' : 'type-desktop';
            const categoryClass = `category-${p.category.toLowerCase()}`;

            const hasImages = p.images && p.images.length > 0;
            const imageSection = hasImages ? `
            <div class="card-image-wrapper">
                <img src="${p.images[0]}" alt="${p.name}" class="card-image" loading="lazy">
            </div>` : '';

            html += `
            <div class="project-card" data-id="${p.id}">
                ${imageSection}
                <div class="card-content">
                    <h3 class="card-title">${p.name}</h3>
                    <div class="card-company">${p.company}</div>
                    <p class="card-impact">${p.impact}</p>
                    <div class="card-tech">${techBadges}</div>
                    <div class="card-footer">
                        <span class="card-type ${typeClass}">${p.type}</span>
                        <a href="#" class="card-link" onclick="event.preventDefault(); openProjectModal(${p.id})">
                            View Details <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>`;
        });

        grid.html(html);
    }

    $('#loadMoreBtn').on('click', function () {
        const btn = $(this);
        if (btn.hasClass('loading')) return;

        btn.addClass('loading');

        setTimeout(() => {
            currentPage++;
            renderProjects();
            updateLoadMoreButton();
            btn.removeClass('loading');

            const newItems = $('.project-card').slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
            if (newItems.length) {
                $('html, body').animate({
                    scrollTop: newItems.first().offset().top - 100
                }, 300);
            }
        }, 200);
    });

    function updateLoadMoreButton() {
        const btn = $('#loadMoreBtn');
        const totalVisible = currentPage * ITEMS_PER_PAGE;
        const hasMore = totalVisible < filteredProjects.length;

        if (hasMore && filteredProjects.length > 0) {
            btn.prop('disabled', false).show();
            const remaining = filteredProjects.length - totalVisible;
            btn.find('.btn-text').text(`LOAD MORE (${Math.min(9, remaining)})`);
        } else {
            btn.prop('disabled', true).hide();
        }
    }

    function updateStats() {
        $('#statTotal').text(allProjects.length);
        $('#statShowing').text(filteredProjects.length);
        $('#statWeb').text(allProjects.filter(p => p.type === 'Web').length);
        $('#statDesktop').text(allProjects.filter(p => p.type === 'Desktop').length);
    }

    function getTechClass(tech) {
        const map = {
            'Bootstrap': 'tech-bootstrap',
            'jQuery': 'tech-jquery',
            'Laravel': 'tech-laravel',
            'VueJS': 'tech-vuejs',
            'Angular': 'tech-angular',
            'MySQL': 'tech-mysql',
            'ExpressJS': 'tech-expressjs',
            'Electron': 'tech-electron',
            'CodeIgniter': 'tech-codeigniter',
            'CodeIgniter 3': 'tech-codeigniter',
            'Livewire': 'tech-livewire',
            'Flask': 'tech-python',
            'ReactJS': 'tech-vuejs',
            'Firebase': 'tech-firebase',
            'MSSQL': 'tech-mssql',
            'Sequelize': 'tech-nodejs',
            'GridJS': 'tech-javascript',
            'EJS': 'tech-javascript',
            'LocalStorage': 'tech-javascript',
            'Spreadsheet': 'tech-restapi',
            'Spreadsheet API': 'tech-restapi'
        };
        return map[tech] || 'tech-default';
    }

    $('.filter-chip').on('click', function () {
        const filter = $(this).data('filter');
        applyFilter(filter);
    });

    $('a[href^="#"]').on('click', function (e) {
        const href = $(this).attr('href');
        if (href !== '#' && href.indexOf('#') === 0) {
            e.preventDefault();
            const target = $(href);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 400);
            }
        }
    });

    function generateLightboxGallery(images, projectId) {
        const container = $('#modalCarouselContainer');

        if (!images || images.length === 0) {
            container.html(`
                <div class="no-image">
                    <div>
                        <i class="bi bi-image"></i>
                        <div>No screenshots available</div>
                        <small class="d-block mt-2" style="opacity:0.7">Project ID: #${projectId}</small>
                    </div>
                </div>
            `);
            return;
        }

        // Gallery layout untuk lightbox
        let galleryHtml = `
            <div class="lightbox-gallery row g-2">
        `;
        
        images.forEach((img, index) => {
            galleryHtml += `
                <div class="col-md-4 col-sm-6">
                    <a href="${img}" class="lightbox-item d-block" data-caption="Screenshot ${index + 1}">
                        <img src="${img}" alt="Screenshot ${index + 1}" 
                            class="img-fluid rounded border" 
                            style="height: 150px; object-fit: cover; cursor: zoom-in;">
                    </a>
                </div>
            `;
        });
        
        galleryHtml += '</div>';

        container.html(galleryHtml);
    }

    window.slideTo = function (index, projectId) {
        const carouselEl = document.getElementById('modalCarousel');
        if (carouselEl) {
            const carousel = bootstrap.Carousel.getInstance(carouselEl) || new bootstrap.Carousel(carouselEl);
            carousel.to(index);
        }
    };

    window.openImageFullscreen = function (imgSrc) {
        const overlay = $(`
            <div id="fullscreenOverlay" style="
                position:fixed;top:0;left:0;right:0;bottom:0;
                background:rgba(26,26,26,0.95);z-index:9999;
                display:flex;align-items:center;justify-content:center;
                cursor:zoom-out;padding:2rem;">
                <img src="${imgSrc}" style="
                    max-width:100%;max-height:100%;
                    border:4px solid var(--brutal-yellow);
                    box-shadow:var(--brutal-shadow);">
            </div>
        `);

        $('body').append(overlay);

        overlay.on('click', function () {
            $(this).fadeOut(200, function () {
                $(this).remove();
            });
        });

        $(document).one('keyup.fullscreen', function (e) {
            if (e.key === 'Escape') overlay.click();
        });
    };

    window.openProjectModal = function (projectId) {
        const project = allProjects.find(p => p.id === projectId);
        if (!project) return;

        $('#modalTitle').text(project.name);
        $('#modalCompany').text(project.company);
        $('#modalType').text(project.type).removeClass('type-web type-desktop')
            .addClass(project.type === 'Web' ? 'type-web' : 'type-desktop');
        $('#modalCategory').text(project.category).removeClass()
            .addClass(`category-badge category-${project.category.toLowerCase()}`);
        $('#modalImpact').text(project.impact);

        const techHtml = project.tech.map(t => {
            const cls = getTechClass(t);
            return `<span class="tech-badge ${cls}">${t}</span>`;
        }).join('');
        $('#modalTech').html(techHtml);

        generateLightboxGallery(project.images, projectId);

        let linksHtml = '';
        if (project.github) {
            linksHtml += `<a href="${project.github}" target="_blank" class="modal-btn modal-btn-primary">
                <i class="bi bi-github"></i> View Code
            </a>`;
        }
        if (project.link) {
            linksHtml += `<a href="${project.link}" target="_blank" class="modal-btn modal-btn-secondary">
                <i class="bi bi-box-arrow-up-right"></i> Live Demo
            </a>`;
        }
        if (!linksHtml) {
            linksHtml = '<span class="text-muted small">No public links available</span>';
        }
        $('#modalLinks').html(linksHtml);

        const modal = new bootstrap.Modal(document.getElementById('projectModal'));
        modal.show();

        $('#projectModal').one('shown.bs.modal', function () {
            setTimeout(() => {
                if (project.images && project.images.length > 0) {
                    baguetteBox.run('.lightbox-gallery', {
                        animation: 'slideIn',
                        noScrollbars: true,
                        buttons: true,
                        async: true,
                        preload: 2
                    });
                }
            }, 0);
        });
    };

    $('#projectModal').on('hidden.bs.modal', function () {
        baguetteBox.destroy();
        $('#modalCarouselContainer').empty();
    });
});