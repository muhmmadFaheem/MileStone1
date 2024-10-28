var skill = document.getElementById('skills');
var togglebutton = document.getElementById('toggle-skills');
togglebutton.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});
