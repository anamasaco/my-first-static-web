var hardSkillsContent = document.getElementById("hardSkillsContent");
var softSkillsContent = document.getElementById("softSkillsContent");
var experienceContent = document.getElementById("experienceContent");
var educationContent = document.getElementById("educationContent");


hardSkillsContent.style.display = "block";
softSkillsContent.style.display = "none";
experienceContent.style.display = "none";
educationContent.style.display = "none";

        
// shows each area clicked (skills, experience, education)
function resumeOptionsShow(a){
    // hardSkillsContent
    if(a == 0)
    {
        hardSkillsContent.style.display = "block";
        softSkillsContent.style.display = "none";
        experienceContent.style.display = "none";
        educationContent.style.display = "none";

        console.log(a);
    }
    // softSkillsContent
    else if(a == 1) 
    {
        softSkillsContent.style.display = "block";
        hardSkillsContent.style.display = "none";
        experienceContent.style.display = "none";
        educationContent.style.display = "none";

        console.log(a);
    }
    // experienceContent
    else if(a == 2) 
    {
        experienceContent.style.display = "block";
        hardSkillsContent.style.display = "none";
        softSkillsContent.style.display = "none";
        educationContent.style.display = "none";

        console.log(a);
    }
    // educationContent
    else if(a == 3) 
    {
        educationContent.style.display = "block";
        hardSkillsContent.style.display = "none";
        softSkillsContent.style.display = "none";
        experienceContent.style.display = "none";
                
        console.log(a);
    }
}