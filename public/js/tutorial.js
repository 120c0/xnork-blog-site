(() => {
  const tutorials_tag = $('.tutorials')
  const tutorials = [ {
      title: 'Servidor local - Termux',
      short_description: 'Como criar um servidor local, para que pessoas do seu roteador possam acessar.',
      image_path: 'https://preview.redd.it/iq4emetvu6e21.jpg?width=960&crop=smart&auto=webp&s=5940236badfd539533f09f5f04ff7f7c5f1df454',
      page_of_tutorial: '#',
      footer: 'Em breve'
    },{
      title: 'Pong - SDL2',
      short_description: 'Criando um dos jogos mais vendidos, pong. Iremos fazer usa mecância em C++ e SDL2...',
      image_path: '../assets/thumb/pong_sdl2.jpg',
      page_of_tutorial: '#',
      footer: 'Em breve'
    },{
      title: 'começando a programar - Python',
      short_description: 'Aprenda os conceitos básicos, necessários, para começar a estudar por conta própia Python, e desfrutar das novas tecnologias...',
      image_path: '../assets/thumb/comecando_com_python.jpg',
      page_of_tutorial: '#',
      footer: 'Em breve'
    }
  ]
  tutorials_tag.append(
    tutorials.map((item) => {
      return `
      <a href="${item.page_of_tutorial}" class="tutorial">
        <div class="tutorial-image" style="background-image: url('${item.image_path}');">
          <footer class="last-price">${item.footer}</footer>
        </div>
        <article class="tutorial-information">
          <h1>${item.title}</h1>
          <p>${item.short_description}</p>
        </article>
      </a>
      `
    })
  )
})()