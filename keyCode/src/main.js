import { Boxdata } from "../components/boxData/box-data.js";

const boxfileElm = document.querySelector('.box-file');

console.log(boxfileElm);
document.body.addEventListener('keydown', function (ev) {
    
    boxfileElm.innerHTML = `
    <box-data title-box="${ev.key}"></box-data>
    <box-data title-box="${ev.location}"></box-data>
    <box-data title-box="${ev.which}"></box-data>
    <box-data title-box="${ev.code}"></box-data>
    `;
});
window.customElements.define('box-data', Boxdata);