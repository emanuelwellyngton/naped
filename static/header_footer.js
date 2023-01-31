const header = document.querySelector('#header')

header.innerHTML = `<a class='logo' href='/'>Napad</a>
<nav id='header_nav'>
    <div id='menu_icon'></div>
    <ul id='header_menu'>
        <li class='menu_item'><a href="#">Home</a></li>
        <li class='menu_item'><a href="#">Séries</a></li>
        <li class='menu_item'><a href="#">Filmes</a></li>
        <li class='menu_item'><a href="#">Animes</a></li>
        <li class='menu_item'><a href="#">Games</a></li>
    </ul>
</nav>
<div id='acount'>Minha conta</div>`

const footer = document.querySelector('#footer')

footer.innerHTML = `<a class="logo" href="/">Naped</a>
<p id="footer-txt">Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários.</p>`