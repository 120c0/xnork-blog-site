(() => {
  const matters_tag = $('.latest-matters')
  const posts = [ {
      title: 'Primeiras imagens do James Webb',
      short_description: 'A NASA divulgou as primeiras imagens publicamente, ao lado de Joe Biden. As imagens vista são...',
      date: '13/08/2022',
      image_path: '../assets/thumb/james_webb_first_image.jpeg',
      page_of_post: '/posts/2022/08/15',
      category: 'Universo'
    }, {
      title: 'Primeiras imagens do James Webb',
      short_description: 'A NASA divulgou as primeiras imagens publicamente, ao lado de Joe Biden. As imagens vista são...',
      date: '13/08/2022',
      image_path: '../assets/thumb/james_webb_first_image.jpeg',
      page_of_post: '/posts/2022/08/15',
      category: 'Universo'
    }, {
      title: 'Primeiras imagens do James Webb',
      short_description: 'A NASA divulgou as primeiras imagens publicamente, ao lado de Joe Biden. As imagens vista são...',
      date: '13/08/2022',
      image_path: '../assets/thumb/james_webb_first_image.jpeg',
      page_of_post: '/posts/2022/08/15',
      category: 'Universo'
    }
  ]
  matters_tag.append(
    posts.map((post) => {
      return `
        <a href="${post.page_of_post}" class="post">
          <div class="post-image" style="background-image: url('${post.image_path}');">
            <span class="post-category">${post.category}</span>
          </div>
          <article class="post-information">
            <h1>${post.title}</h1>
            <p>${post.short_description}</p>
            <footer>${post.date}</footer>
          </article>
        </a>
      `
    })
  )
})()