const background = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');

document.body.append(highlight);

function hoverlink(){
    const hover = this.getBoundingClientRect();
    console.log(hover);
    const coords = {
        width: hover.width,
        height: hover.height,
        top: hover.top + window.scrollY,
        left: hover.left + window.scrollX
      };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px , ${coords.top}px)`;
}

background.forEach(a => a.addEventListener('mouseenter',hoverlink));