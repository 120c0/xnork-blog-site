(() => {
  const settingActionBar = () => {
    $('body').prepend(`
    <nav class="action-bar">
    <h1>Xnork</h1>
    <i onclick="mainMenuClick()" class="bi bi-list"></i>
    </nav>
    <nav class="main-menu"></nav>
    `).find('.main-menu').append('<ul></ul>')
  }
  const settingMenu = () => {
    const options = [
      {title: "Principal", link: "/", icon: "bi-house-door"},
      {title: "Sobre", link: "#", icon: "bi-info-circle"},
      {title: "Shop", link: "#", icon: "bi-bag"}
    ]
    options.forEach((option, index) => {
      $('.main-menu > ul').append(`<li>
          <i class="bi ${option.icon}"></i>
          <a href="${option.link}">${option.title}</a>
        </li>`)
    })
  }
  settingActionBar()
  settingMenu()
})()  
class MenuClickEvent {
  constructor(class_name, menu_icon_class_name) {
    this.menu = $(`.${class_name}`)
    this.menu_icon = $(`.${menu_icon_class_name}`)
  }
  process() {
    this.menu.hasClass('menu-show') ?
      this.menu.removeClass('menu-show') :
      this.menu.addClass('menu-show');
    this.menu.hasClass('menu-show') ?
      this.menu_icon.addClass('menu-is-open').removeClass('bi-list').addClass('bi-x-lg') :
      this.menu_icon.removeClass('menu-is-open').removeClass('bi-x-lg').addClass('bi-list');
  }
}
let menu = new MenuClickEvent('main-menu', 'action-bar > .bi') 
const mainMenuClick = () => {
  menu.process()
}

