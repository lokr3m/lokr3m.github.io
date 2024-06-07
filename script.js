document.addEventListener('DOMContentLoaded', () => {
    const coffeeDrinks = [
        { id: 'espresso', imgSrc: 'https://i.pinimg.com/originals/ee/55/8b/ee558b1d2578d8c74c310f914dc910f0.jpg' },
        { id: 'americano', imgSrc: 'https://s1.1zoom.me/b5540/490/Coffee_Cup_Saucer_Grain_521796_1920x1080.jpg' },
        { id: 'cappuccino', imgSrc: 'https://s1.1zoom.me/b6354/39/Cappuccino_Cup_Saucer_Wood_planks_515096_1920x1080.jpg' },
        { id: 'latte', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2GZiWA_zrrVWOHeQwnF3MdtF8hadiNCPL_P8J1GURA&s' },
        { id: 'mocha', imgSrc: 'https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg' },
        { id: 'macchiato', imgSrc: 'https://img2.wallspic.com/crops/0/4/3/3340/3340-tea-cafe_au_lait-cappuccino-cinnamon-beverages-1920x1080.jpg' }
    ];

    coffeeDrinks.forEach(drink => {
        const drinkElement = document.getElementById(drink.id);
        const imageContainer = drinkElement.querySelector('.image-container');

        if (imageContainer) {
            const img = document.createElement('img');
            img.src = drink.imgSrc;
            img.alt = drink.id;
            img.className = 'coffee-image';
            imageContainer.appendChild(img);
        }
    });
});