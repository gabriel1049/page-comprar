let btnHabilityFisico = document.querySelector('#optionfisico');
let btnHabilityVirtual = document.querySelector('#optionvirtual')

// Accordions Físicos

let accordionFisicos = document.querySelector('#accordion-fisico')
let accordionVirtuais = document.querySelector('#accordion-virtual')

window.sr = ScrollReveal({ reset: true});

sr.reveal('.texto_planos', {duration: 1000});
sr.reveal('.option-chip', {duration: 1000});
sr.reveal('.option-virtual', {duration: 1000});


btnHabilityVirtual.addEventListener("click", function(){
  
accordionFisicos.style.display = 'none';
accordionVirtuais.style.display = 'block';


document.getElementById("optionfisico").style.borderColor = "#ECECEC";
document.getElementById("textfisico").style.color = "#2d2d2f";

document.getElementById("optionvirtual").style.borderColor = "#ff5000";
document.getElementById("textvirtual").style.color = "#ff5000";


});


btnHabilityFisico.addEventListener("click", function(){
  
  accordionFisicos.style.display = 'block';
  accordionVirtuais.style.display = 'none';
  
  
  document.getElementById("optionvirtual").style.borderColor = "#ECECEC";
  document.getElementById("textvirtual").style.color = "#2d2d2f";
  
  document.getElementById("optionfisico").style.borderColor = "#ff5000";
  document.getElementById("textfisico").style.color = "#ff5000";
  
  
});


// FUNÇÃO QUE HABILITA O ACCORDION

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});



