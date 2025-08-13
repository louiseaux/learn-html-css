// Google Fonts
const head = document.getElementById('head')
head.innerHTML += `
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
`

// Header Content
const header = document.getElementById('header')
header.innerHTML = `
    <div class="site-header">
        <div class="logo">
            <img class="logo-img" src="images/logo.png">
            <h1>My learning journal</h1>
        </div>

        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About me</a></li>
            </ul>
        </nav>
    </div>
`

// Footer Content
const currentYear = new Date().getFullYear()
const footer = document.getElementById('footer')
footer.innerHTML = `
    <div>
        <p class="footer-info">My Learning Journal</p>
        <p class="copyright">Copyright &copy;<span id="currentYear">${currentYear}</span></p>
    </div>
`

// Recent Posts
const recentPosts = document.getElementById('recent-posts')
if (recentPosts) {
    recentPosts.innerHTML = `
        <div class="recent-title">
            <h3>Recent posts</h3>
        </div>
        <div class="posts">
            <article>
                <img class="article-img" src="images/post-img-01.jpg" alt="Post thumbnail">
                <span class="article-info">July 23, 2022</span>
                <h2 class="article-title">Blog one</h2>
                <p class="article-preview">
                    I'm excited to start a new learning journey</strong> as a Scrimba Bootcamp student!
                                After several months of learning in the Frontend Developer Career Path.
                </p>                
            </article>
            <article>
                <img class="article-img" src="images/post-img-02.jpg" alt="Post thumbnail">
                <span class="article-info">July 23, 2022</span>
                <h2 class="article-title">Blog two</h2>
                <p class="article-preview">
                    I'm excited to start a new learning journey</strong> as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Developer Career Path.
                </p>                
            </article>
            <article>
                <img  class="article-img" src="images/post-img-03.jpg" alt="Post thumbnail">
                <span class="article-info">July 23, 2022</span>
                <h2 class="article-title">Blog three</h2>
                <p class="article-preview">
                    I'm excited to start a new learning journey</strong> as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Developer Career Path.
                </p>                
            </article>
        </div>
    `
}


const viewMoreBtn = document.getElementById('view-more-btn')
if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function() {
        const posts = document.getElementsByClassName('post')
        for (let post of posts) {
            post.classList.toggle('hidden')
            if (!post.classList.contains('hidden')) {
                viewMoreBtn.textContent = 'View Less'
            } else {
                viewMoreBtn.textContent = 'View More'
            }
        }
    })
}