let tab_links = document.getElementsByClassName("tab_link");
let tab_contents = document.getElementsByClassName("tab_content");

function opentab(tabname) {
    for (const tab_link of tab_links) {
        tab_link.classList.remove("active_link");
    }
    for (const tab_content of tab_contents) {
        tab_content.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_tab");
}


window.addEventListener("DOMContentLoaded", ()=>{
    let contact_form = document.getElementById("contact_form");
    contact_form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let name =e.target.name.value;
        let email =e.target.email.value;
        let comment =e.target.comment.value;
        let notification = document.getElementById("notification");

        let params = {
            "name":name,"email":email,"message":comment
        }

        const service_Id = "service_wmkxomd";
        const templateId = "template_guxxmls";

        emailjs.send(service_Id,templateId,params).then(
            (res) =>{
                document.getElementById("name").value="";
                document.getElementById("email").value="";
                document.getElementById("comment").value="";
                console.log("success");
                notification.style.display="block";
            }
        ).catch((err)=>{
            notification.style.display="block";
            notification.style.backgroundColor="#FF9B9B";
            notification.innerText="Something is wrong please try sometime...."
        })

        setTimeout(()=>{
            notification.style.display="none";
        },8000)
    
})
})



