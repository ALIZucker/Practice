const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="box-data.css"/>
<h2>Ali</h2>
`;

export class Boxdata extends HTMLElement {
  constructor() {
    super();
    console.log("المنت ایجاد شد");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
      const data = this.getAttribute("title-box");
      const h2elm = this.shadowRoot.querySelector("h2");
      h2elm.innerHTML = data
    h2elm.addEventListener("click", (event) => {
      console.log(event.currentTarget);
    });
      
      
      
  }
}
