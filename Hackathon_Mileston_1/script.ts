const skill = document.getElementById('skills') as HTMLElement;
const togglebutton = document.getElementById('toggle-skills') as HTMLButtonElement;

togglebutton.addEventListener('click' , ()=>{
    if(skill.style.display === 'none'){
        skill.style.display = 'block'

    }
    else{
        skill.style.display = 'none'
    }
});
