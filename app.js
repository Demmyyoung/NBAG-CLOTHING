function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom >= 0
    );
}

function handleScroll() {
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
