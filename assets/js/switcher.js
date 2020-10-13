"use strict";

function switch_to(title, section) {
    let section_element = document.getElementById(title + "_" + section);
    let content_div = document.getElementById(title + "_content");
    let nav_element = document.getElementById(title);
    let a_element = document.getElementById(title + "_link_" + section);

    function removeActive(children) {
        for (let child of children) {
            if (child.classList.contains("active")) {
                child.classList.remove("active");
            }
        }       
    }

    removeActive(content_div.children);
    removeActive(nav_element.children);

    section_element.classList.add("active");
    a_element.classList.add("active");
}
