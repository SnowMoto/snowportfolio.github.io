const links = [{
        label: "Week 1",
        url: "week1/index.html",
    },
    {
        label: "Week 2",
        url: "week2/index.html",
    }
]
const weeklyList = document.getElementById("weekList");

for (let i = 0; i < links.length; i++) {
    let listItem = document.createElement("li");
    let anchor = document.createElement("a");

    anchor.setAttribute("href", links[i].url);
    anchor.innerText = links[i].label;

    listItem.appendChild(anchor);
    weeklyList.appendChild(listItem);
}