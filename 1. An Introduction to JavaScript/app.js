 function setActive(menuId) {
            // Get all the menu items
            const menuItems = document.querySelectorAll('.navbar a');

            // Remove active class from all menu items
            menuItems.forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to the clicked menu item
            document.getElementById(menuId).classList.add('active');
        }