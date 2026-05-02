$(document).ready(function() {
    $.getJSON("assets/data/activity.json", function(data) {
        let html = '';
        
        data.reverse(); 

        data.forEach(act => {
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

        $('#activityList').html(html);

        baguetteBox.run('.gallery', {
            animation: 'fadeIn',
            noScrollbars: true
        });
    });
});