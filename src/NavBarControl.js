class NavBarControl {
    constructor(domDocument, windowElement) {
        //create navbar reference
        const navBar = domDocument.querySelector('nav');
        const navBarElements = domDocument.querySelectorAll('li');
        const sectionElements = domDocument.querySelectorAll('section');
        const navOffset = navBar.offsetTop;
        const navHeight = navBar.offsetHeight;
        const sectionPositions = new Map();

        sectionElements.forEach(section => {
            sectionPositions.set(section.getAttribute('id'), section.offsetTop)
        })

        navBarElements.forEach(element => {
            element.addEventListener('click', () => {
                windowElement.scrollTo(
                    0, 
                    sectionPositions.get(element.getAttribute('datascroll')) - navHeight
                );
            })
        })
        
        windowElement.addEventListener('scroll', () => {
            if (windowElement.pageYOffset >= navOffset){
                navBar.classList.add('sticky');
            } else {
                navBar.classList.remove('sticky');
            }
        })
    }
}

export {NavBarControl}