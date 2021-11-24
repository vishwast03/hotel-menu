// Menu items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid. Voluptates dolorem officia suscipit repellat ea.`,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, esse temporibus atque libero ipsa itaque!`,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam voluptatum ipsa repellendus, iure optio quia repudiandae recusandae a.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste molestiae nemo sunt laboriosam et dolor delectus hic, illo accusamus.`,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
        desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores provident dolorum expedita quia optio veniam accusantium, deserunt delectus.`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eaque doloremque sunt ullam et sint incidunt. Beatae.`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur dolor nulla porro ut iure odio.`,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, placeat? Unde ipsum error esse veritatis animi est necessitatibus?`,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto facilis a quasi incidunt dolor placeat similique.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed reprehenderit itaque maiores architecto quos necessitatibus illo accusantium aperiam distinctio?`,
    }
];

const sectionCenter = document.querySelector('.section-center');
const filterButtons = document.querySelector('.filter-buttons');

// loading menu items and filter buttons
window.addEventListener('load', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

// displaying meny items
function displayMenuItems(menuItems) {

    //mapping menu items
    const displayItems = menuItems.map(item => {
        return `<article class="menu-item">
                    <img src="${item.img}" alt="menu item" class="photo">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">
                            ${item.desc}
                        </p>
                    </div>
                </article>`
    }).join("");

    sectionCenter.innerHTML = displayItems;
}

// displaying filter buttons
function displayMenuButtons() {

    // extracting all the unique categories from the menu
    const categories = menu.reduce((values, item) => {
        if(!values.includes(item.category))
            values.push(item.category);
        return values;
    }, ["all"]);

    // mapping filter buttons
    const categoryBtns = categories.map(category => {
        return `<button class="filter-btn" data-id=${category}>${category}</button>`;
    }).join("");

    filterButtons.innerHTML = categoryBtns;

    // selecting all the filter buttons after they are loaded
    const filterBtns = document.querySelectorAll('.filter-btn');

    // adding event listener to all the filter buttons
    filterBtns.forEach(btn => {

        btn.addEventListener('click', (e) => {

            // taking the category from clicked button
            const category = e.currentTarget.dataset.id;

            // filtering the menu items according to the category
            const menuCategory = menu.filter(menuItem => {

                if(menuItem.category === category)
                    return menuItem;

            });

            // loading menu items from selected category
            if(category === "all")
                displayMenuItems(menu);
            else
                displayMenuItems(menuCategory);
        });
    });
}