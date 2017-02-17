$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': true,
        'css3': true,
        'navigation': true,
        'navigationPosition': 'left',
        'navigationTooltips': ['topfullview', 'recent-project', 'profile', 'contect-me'],
        anchors: ['topfullview', 'recent-project', 'profile', 'contect-me'],
        scrollOverflow: true,
        sectionsColor: ['#000000', '#ffffff', 'whitesmoke', '#D0B1AF']
    });


});
