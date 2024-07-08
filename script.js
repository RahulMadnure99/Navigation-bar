function showSection(sectionId) {
    var sections = document.querySelectorAll('.container');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');  

    // Hide the navigation menu if the checkbox is checked
    if (window.innerWidth <= 895) {
        document.getElementById('check').checked = false;
    }
}

// Add event listener to navigation links to hide the menu after clicking
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 895) {
            document.getElementById('check').checked = false;
        }
    });
});