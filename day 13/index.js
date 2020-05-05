function addMember() {
    let newMemberName = document.querySelector("#member").value
    let list = document.querySelector("#unassigned-members")

    let listItem = document.createElement("li")
    listItem.innerText = newMemberName
    list.appendChild(listItem)

    document.querySelector("#member").value = ""
}

function createTeams(){
    let teamsContainer = document.querySelector("#teams-container")
    teamsContainer.textContent ="" 

    let teamsNumber = parseInt(document.querySelector("#teams").value)

    for(let i = 0; i < teamsNumber; i++){
        teamsContainer.innerHTML += `<div class="col">
            <h3>Team ${i +1} </h3>
            <ul></ul>
        </div>`
    }
}

function assign() {
    let unassigned = document.querySelectorAll("#unassigned-members li")
    if (unassigned.length === 0)
        return

    let randomMember =  Math.floor(Math.random() * unassigned.length)
    let selectedMember = unassigned[randomMember]
    
    let teamList = document.querySelectorAll("#teams-container ul")
    let randomTeam = Math.floor(Math.random() * teamList.length)
    let selectedTeam = teamList[randomTeam]

    let newMember = document.createElement("li")
    newMember.innerText = selectedMember.innerText;
    newMember.addEventListener("click", (e) => {
        let unassignedList = document.querySelector("#unassigned-members")
        let listItem = document.createElement("li")
        listItem.innerText = e.currentTarget.innerText
        unassignedList.appendChild(listItem)
        e.currentTarget.remove()
    })
    selectedTeam.appendChild(newMember)

    selectedMember.remove()
}