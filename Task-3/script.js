var email = document.getElementById("email");
var roll = document.getElementById("RollNumber");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var branch = document.getElementById("browser");
var sec = document.getElementById("section");
var year = document.getElementById("semester");
var pos = document.getElementById("status");
var sgpa = document.getElementById("spga");
var backlog = document.getElementById("backlog");
var btn = document.getElementById("button")
var fbtn = document.getElementById("button1");
var Us_er = document.querySelector(".Box")

var users = {
    user: localStorage.getItem('users')
};


function loadUsers() {

    Us_er.innerHTML = users.user;
}
loadUsers();


btn.addEventListener(('click'), () => {
    console.log(email.value);
    if (email.value.trim() != "" && roll.value.trim() != "" && fname.value.trim() != "" && branch.value.trim() != "" && sec.value.trim() != "" && year.value.trim != "" && pos.value.trim() != "" && sgpa.value.trim() != "" && backlog.value.trim() != "") {
        const mail = document.createElement('div');
        mail.className = "newTask";


        const li = document.createElement("li");
        li.style.listStyleType = "none";
        li.className = "list";

        const rno = document.createElement('div');
        rno.className = "newTask";
        rno.innerHTML = "Rollno: " + roll.value;
        const name1 = document.createElement('div');
        name1.className = "newTask";
        name1.innerHTML = "Name: " + fname.value + ' ' + lname.value;
        const brch = document.createElement('div');
        brch.className = "newTask";
        brch.innerHTML = "Branch: " + branch.value;
        const sctn = document.createElement('div');
        sctn.className = "newTask";
        sctn.innerHTML = "Section: " + sec.value
        const smstr = document.createElement('div');
        smstr.className = "newTask";
        smstr.innerHTML = "Passing in: " + year.value;
        const stas = document.createElement('div');
        stas.className = "newTask";
        stas.innerHTML = "Applying for position: " + pos.value;
        const gpa = document.createElement('div');
        gpa.className = "newTask";
        gpa.innerHTML = "GPA: " + sgpa.value
        const bck = document.createElement('div');
        bck.className = "newTask";
        bck.innerHTML = "Backlog: " + backlog.value;

        let x = email.value.trim();
        if (x != "") {
            mail.innerHTML = "email: " + x;
            li.appendChild(rno);
            li.appendChild(mail);
            li.appendChild(name1);
            li.appendChild(brch);
            li.appendChild(sctn);
            li.appendChild(smstr);
            li.appendChild(stas);
            li.appendChild(gpa);
            li.appendChild(bck);
            Us_er.appendChild(li);
            localStorage.setItem('users', Us_er.innerHTML);

        }
        email.value = "";
        roll.value="";
        backlog.value="";
        pos.value="";
        year.value="";
        sgpa.value="";
        lname.value="";
        fname.value="";
        branch.value="";
        sec.value="";

    }
    users.user = localStorage.getItem('users');
    loadUsers();
})




