import {data} from "../../../data/data.js";

export function Header() {
    const headerTitle = document.createElement('div')
    headerTitle.innerHTML = data.headerTitle
    return headerTitle
}