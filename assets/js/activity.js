$(document).ready(function() {
    let allData = [];
    let currentIndex = 0;
    const itemsPerLoad = 9;

    $.getJSON("assets/data/activity.json", function(data) {
        allData = data.reverse();
        displayItems();
        updateButtonState();
    });

    function displayItems() {
        let html = '';
        const nextBatch = allData.slice(currentIndex, currentIndex + itemsPerLoad);

        nextBatch.forEach(act => {
            html += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="activity-card">
                    <div class="activity-img-container">
                        <a href="${act.image}">
                            <img src="${act.image}" class="activity-img" loading="lazy">
                        </a>
                    </div>
                </div>
            </div>`;
        });

        $('#activityList').append(html);
        currentIndex += itemsPerLoad;

        baguetteBox.run('.gallery', {
            animation: 'fadeIn',
            noScrollbars: true
        });
    }

    function updateButtonState() {
        const btn = $('#loadMoreBtn');
        const remaining = allData.length - currentIndex;

        if (remaining > 0) {
            btn.show();
            btn.find('.btn-text').text(`LOAD MORE (${Math.min(itemsPerLoad, remaining)})`);
        } else {
            btn.hide();
        }
    }

    $('#loadMoreBtn').on('click', function() {
        const btn = $(this);
        
        btn.addClass('loading');

        setTimeout(() => {
            displayItems();
            updateButtonState();
            btn.removeClass('loading');
        }, 400); 
    });
});