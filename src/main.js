const animacija = ()=>{
    const naslov = document.querySelector('.animiran');
    const windowHeight= window.innerHeight;
    const elementTop = naslov.getBoundingClientRect().top;
    if (elementTop < windowHeight ) {
        naslov.classList.add("animiran-aktiv");
      } else {
        naslov.classList.remove("animiran-aktiv");
      }
}

//fade in-out

const observerOptions = {
  root: null, // Null = based on viewport
  rootMargin: "0px", // Margin for root if desired
  threshold: 0.2 // Percentage of visibility needed to execute function
};

function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Fade in observed elements that are in view
      entry.target.classList.replace('fadeOut', 'fadeIn');
    }
    else {
      // Fade out observed elements that are not in view
      entry.target.classList.replace('fadeIn', 'fadeOut');
    }
  });
}

// Grab all relevant elements from DOM
const fadeElms = document.querySelectorAll('.fade');

// Call function for each element
const observer = new IntersectionObserver(observerCallback, observerOptions);
fadeElms.forEach(el => observer.observe(el));


window.addEventListener("scroll", animacija);

animacija();
function download(){
  axios({
      url:'https://cvvladimir.tiiny.site',
      method:'GET',
      responseType: 'blob'
})
.then((response) => {
     const url = window.URL
     .createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'cv.pdf');
            document.body.appendChild(link);
            link.click();
})
}
