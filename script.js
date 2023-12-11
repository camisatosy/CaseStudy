function toggleSubMenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.style.display = (submenu.style.display === 'flex') ? 'none' : 'flex';

    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(otherSubmenu => {
        if (otherSubmenu.id !== submenuId) {
            otherSubmenu.style.display = 'none';
        }
    });
}