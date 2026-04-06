const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
    
    dropdownValue.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownList.classList.toggle('dropdown__list_active');
    });
    
    dropdownItems.forEach(item => {
        const link = item.querySelector('.dropdown__link');
        
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedText = link.textContent.trim();
            dropdownValue.textContent = selectedText;
            dropdownList.classList.remove('dropdown__list_active');
        });
    });
});

document.addEventListener('click', () => {
    const activeDropdowns = document.querySelectorAll('.dropdown__list_active');
    activeDropdowns.forEach(activeList => {
        activeList.classList.remove('dropdown__list_active');
    });
});
