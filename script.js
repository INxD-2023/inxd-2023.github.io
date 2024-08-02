// Workflow : 
// Get data > Write card function > Generate HTML > Put on the web page

import {html} from "https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm" 

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxK7R3RHZ57U4APbHEt7CvjrJxCYX4VFoaCZimbrjTgVq0cUfvmp1XNMG1LQLXJlvD2eoASIQ9hNoM/pub?gid=1985818293&single=true&output=csv"


function card(data) {
    return html.fragment`
        <div class="project-card">
            <img src="${data.projectImage}" alt="">
            <div class="details">
                <p>${data.name}</p>
                <h3>${data.title}</h3>
                <p class="description">${data.description}</p>
                <a href="${data.projectLink}">Project link</a>
            </div>
        </div>
    `;
}

const data = await d3.csv(url)
console.log(data)
// the map an loop function
var htmlCards = html.fragment`${data.map((x) => card(x))}`

// Write the render function
var tag = document.getElementById("projects");
tag.appendChild(htmlCards)