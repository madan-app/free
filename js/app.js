window.DOCU = {
  loadScript(src){return new Promise((res,rej)=>{let s=document.createElement("script");s.src=src;s.onload=res;s.onerror=rej;document.head.appendChild(s)})},
  async pdfLib(){if(!window.PDFLib)await this.loadScript("https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js");return window.PDFLib},
  async pdfjs(){if(!window.pdfjsLib){await this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/pdf.min.mjs").catch(()=>{});}return window.pdfjsLib},
  fmt(n){return n<1024?`${n} B`:n<1048576?`${(n/1024).toFixed(1)} KB`:`${(n/1048576).toFixed(2)} MB`},
  download(blob,name){let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),3000)}
};