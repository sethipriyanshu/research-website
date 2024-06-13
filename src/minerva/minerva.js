function ua_codeblockCopy(event) {
  const button = event.target.parentElement;
  const code = button.parentElement.nextSibling.firstChild;
  navigator.clipboard.writeText(code.innerText);
  button.firstChild.innerText = 'Copied! ';
  setTimeout(function () {
    button.firstChild.innerText = 'Copy ';
  }, 1000);
  return code.innerText;
}
function ua_handleTitleBar() {
  const titleBarElement = document.getElementById('UA_TitleBar');
  const searchElement = document.getElementById('UA_TitleSearch');
  const navElement = document.getElementById('UA_PrimaryNav');
  const expanderElement = {
    button: document.getElementById('UA_TitleBarExpander'),
    open: document.querySelectorAll('.ua_title-bar_expander_open')[0],
    closed: document.querySelectorAll('.ua_title-bar_expander_closed')[0],
  };

  // Create method to close title bar menu
  const closeMenu = () => {
    expanderElement.button.setAttribute('aria-expanded', 'false');
    expanderElement.button.nextElementSibling.setAttribute('aria-hidden', 'true');
    if (navElement) {
      navElement.setAttribute('aria-hidden', 'true');
    }
    expanderElement.open.setAttribute('aria-hidden', 'true');
    expanderElement.closed.setAttribute('aria-hidden', 'false');
    searchElement.setAttribute('aria-hidden', 'true');
  };

  // Create method to open title bar menu
  const openMenu = () => {
    expanderElement.button.setAttribute('aria-expanded', 'true');
    expanderElement.button.nextElementSibling.setAttribute('aria-hidden', 'false');
    if (navElement) {
      navElement.setAttribute('aria-hidden', 'false');
    }
    expanderElement.open.setAttribute('aria-hidden', 'false');
    expanderElement.closed.setAttribute('aria-hidden', 'true');
    searchElement.setAttribute('aria-hidden', 'false');
  };

  if (titleBarElement) {
    searchElement.setAttribute('aria-hidden', true);
    // Enable expander button
    expanderElement.button.removeAttribute('hidden');

    // Close Primary Navigation on inital load
    if (navElement) {
      navElement.setAttribute('aria-hidden', 'true');
    }

    // Set as expanded on larger viewports
    if (window.matchMedia('(min-width: 58rem)').matches) {
      openMenu();
    }
    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 58rem)').matches) {
        openMenu();
      }
    });

    // Handle opening the menu
    expanderElement.button.addEventListener('click', () => {
      if (expanderElement.button.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Handle closing the sub menu when parent loses :focus-within
    // Only on smaller viewports
    titleBarElement.addEventListener('focusout', (event) => {
      if (
        !window.matchMedia('(min-width: 58em)').matches &&
        expanderElement.button.getAttribute('aria-expanded') === 'true'
      ) {
        if (titleBarElement.contains(event.relatedTarget)) {
          return;
        }
        closeMenu();
      }
    });

    // Handle closing the menu on 'esc'
    // Only on smaller viewports
    document.addEventListener('keyup', (event) => {
      if (!window.matchMedia('(min-width: 58em)').matches && event.key === 'Escape') {
        closeMenu();
      }
    });
  }
}
function ua_handleSecondaryNav() {
  const navElement = document.getElementById('UA_SecondaryNav');
  const buttons = document.querySelectorAll('#UA_SecondaryNav  button');
  const parentItems = document.querySelectorAll('#UA_SecondaryNav li[aria-haspopup]');

  if (navElement) {
    if (parentItems) {
      parentItems.forEach((parent) => {
        parent.setAttribute('aria-expanded', 'false');
        const children = parent.querySelectorAll('ul[aria-hidden]');
        children.forEach((child) => {
          child.setAttribute('aria-hidden', true);
        });
      });
    }
    buttons.forEach((button) => {
      // Enable the buttons
      button.removeAttribute('hidden');
      // Add event listener for each button
      button.addEventListener('click', (event) => {
        let submenu = event.target.parentElement.nextSibling;
        let parent = event.target.parentElement.parentElement;

        // Handle opening submenu
        if (parent.getAttribute('aria-expanded') === 'true') {
          submenu.setAttribute('aria-hidden', 'true');
          parent.setAttribute('aria-expanded', 'false');
        } else {
          submenu.setAttribute('aria-hidden', 'false');
          parent.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }
}
function ua_handlePrimaryNav() {
  const navElement = document.getElementById('UA_PrimaryNav');
  const buttons = document.querySelectorAll('#UA_PrimaryNav button');
  const submenus = document.querySelectorAll('#UA_PrimaryNav button + ul');
  const parentItems = document.querySelectorAll('#UA_PrimaryNav li.ua_menu-item-parent');

  // Create method to collapse all sub menus
  const resetItems = () => {
    navElement.style.marginBottom = 0;
    parentItems.forEach((menu) => {
      menu.setAttribute('aria-expanded', 'false');
    });
    submenus.forEach((submenu) => {
      submenu.setAttribute('aria-hidden', 'true');
    });
  };

  if (navElement) {
    parentItems.forEach((menu) => {
      menu.setAttribute('aria-expanded', false);
      menu.setAttribute('aria-haspopup', true);
    });
    buttons.forEach((button) => {
      // Enable the buttons
      button.removeAttribute('hidden');
      // Add event listener for each button
      button.addEventListener('click', (event) => {
        let submenu = event.target.nextSibling;
        let parent = event.target.parentElement;

        // Handle opening submenu
        if (parent.getAttribute('aria-expanded') === 'true') {
          resetItems();
        } else {
          resetItems();
          submenu.setAttribute('aria-hidden', 'false');
          parent.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Handle closing the menus on focus out
    parentItems.forEach((parent) => {
      parent.addEventListener('focusout', (event) => {
        if (parent.getAttribute('aria-expanded') === 'true') {
          // Fix for :focus-within behavior
          if (parent.contains(event.relatedTarget)) {
            return;
          }
          resetItems();
        }
      });
    });

    // Handle closing the menu on 'esc'
    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        resetItems();
      }
    });
  }
}
function ua_handleBreadcrumbs() {
  /*
  const navElement = document.getElementById('UA_BreadCrumbs');
  const overflowButton = document.getElementById('overflowButton');
  let overflowMenu = overflowButton.nextSibling;

  const resetItems = () => {
    if (overflowMenu.getAttribute('aria-hidden') === 'false') {
      overflowMenu.setAttribute('aria-hidden', 'true');
    } else {
      overflowMenu.setAttribute('aria-hidden', 'false');
    }
  };

  if (navElement) {
    overflowButton.addEventListener('click', () => {
      resetItems(); 
    });

    // Handle closing the menu on 'esc'
    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        if (overflowMenu.getAttribute('aria-hidden') === 'false') {
          resetItems();
        }
      }
    });
  } 
  */
}
document.addEventListener("DOMContentLoaded", function(){
  ua_handlePrimaryNav();
  ua_handleTitleBar();
  ua_handleSecondaryNav();
});
