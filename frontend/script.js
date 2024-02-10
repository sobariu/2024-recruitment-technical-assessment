document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const overlay = document.getElementById('overlay');
    const dismissButton = document.getElementById('dismiss-btn');
    
    searchBar.addEventListener('click', function () {
        overlay.style.display = 'block';
    });
    
    dismissButton.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    const title = document.getElementById('title');
    let titleColor = '#1479f2';

    title.addEventListener('click', function () {
        if (titleColor === '#1479f2') {
            title.style.color = '#b789e5';
            titleColor = '#b789e5';

        } else {
            title.style.color = '#1479f2'
            titleColor = '#1479f2';
        };
    });

});




















