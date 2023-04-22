const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionBody = accordionItem.querySelector('.accordion-body');
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
      if (item !== accordionItem) {
        item.classList.remove('active');
        item.querySelector('.accordion-body').style.height = 0;
      }
    });
    accordionItem.classList.toggle('active');
    if (accordionItem.classList.contains('active')) {
      accordionBody.style.height = accordionBody.scrollHeight + 'px';
    } else {
      accordionBody.style.height = 0;
    }
  });
});