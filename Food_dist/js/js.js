

window.addEventListener('DOMContentLoaded', () => {
    let   tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabheader__items');

// Приховуємо всі непотрібні таби
    function hideTabContent() {
            tabsContent.forEach(item => {
            item.classList.add('hide'); // приховає ввесь контент
            item.classList.remove('show', 'fade'); 
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active'); // видаляємо клас активності
        });
    }

    function showTabContent(i = 0) {  // ми використовуємо індекс і оскільки поіинні 
        //розуміти який табконтент використовується
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide'); // у потрібного елемента забираємо клас hide
        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();
    //делегуємо івент на табперент
    tabParent.addEventListener('click', (event) => {
        const target = event.target; // той елемент на який клікнули

      //  провіряємо шоб саме клікнули на елемент списку табу  
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) { // якшо елемент на який ми клікнули співпадає є з елементом який ми перебираємо 
                    hideTabContent(); // приховуємо всі лишні таби і показуємо тілький той шо співпав.
                    showTabContent(i); // i - номер того елемента який співпав у умові
                }
            });
        }
    });
});