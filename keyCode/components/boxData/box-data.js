const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="components/boxData/box-data.css" >
<article>
<img />
<h2>Ali</h2>
</article>

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
    const imgsrc = this.getAttribute("img-src");
    const h2elm = this.shadowRoot.querySelector("h2");
    const imgelm = this.shadowRoot.querySelector("img");
 
    imgelm.src=imgsrc
    h2elm.innerHTML = data;
    h2elm.addEventListener("click", (event) => {
      console.log(event.currentTarget);
    });

  }

}
