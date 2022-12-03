let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const deletee = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
                

                
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

{/* <button class="btn"  index = '${i}'>Del</button */}
{/* <button class="btn"  index = '${i}' ><i class="fa fa-trash"></i></button>  */}



deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// deletee.addEventListener("click", function () {
//     myLeads.splice(0, 1);
//     localStorage.setItem('myLeads', JSON.stringify(myLeads));
//     render(myLeads)
// })

// function deleteItem(index) {
//     myLeads.splice(index, 1);
//     localStorage.setItem('myLeads', JSON.stringify(myLeads));
//     render(myLeads)
// }


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})