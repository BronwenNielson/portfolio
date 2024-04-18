document.querySelectorAll('.btn-toggle').forEach(button => {
    button.addEventListener('click', toggleBtn)
});

function toggleBtn(e) {
    e.preventDefault();
    document.querySelector('.menu').classList.toggle('menuOpen');
};


fetch('projects.json').then ((response) => {
    return response.json()
}).then((data) => {
    console.log(data)

    for(const project of data.data) {
        document.querySelector('.card-container').innerHTML += `
        <div class="card w-4/5 md:w-2/5 m-6 p-3 rounded-xl flex flex-col items-center text-center">
            <h2 class="text-2xl my-5">${project.name}</h2>
            <img src="${project.img}" alt="${project.imgAlt}" class="w-11/12 h-2/4">
            <p class="text-xl mt-5 mb-14">${project.blurb}</p>
            <div class="w-10/12 flex justify-center text-xl">
                <button data-id="${project.id}" data-name="${project.name}" data-pic="${project.img}" data-alt="${project.imgAlt}" data-description="${project.description}" data-url="${project.github}" class="m-2 p-2 rounded-xl modal-toggle">More Info</button>
                <a class=" m-2 p-2 rounded-xl" href="${project.github}" target="_blank">Github<i class="fa-brands fa-github"></i></a>
            </div>
        </div> `

        document.querySelector('.modal').innerHTML = `
        <header class="w-full flex justify-end">
            <i class="fa-solid fa-xmark text-2xl modal-toggle"></i>
        </header>
        <div class="flex flex-col md:flex-row items-center justify-center h-5/6 w-5/6">
            <div class="hidden md:flex md:w-2/4 md:m-5">
                <img src="" alt="" class="w-full" id="pic">
            </div>
            <div class="px-5 py-10 w-full md:w-2/4 md:m-5">
                <h2 class=" text-2xl md:text-4xl text-center my-5" id="name"></h2>
                <p id="description"></p>
            </div>
        </div>
        <a class="p-2 rounded-xl text-3xl" href="" target="_blank" id="url">Github<i class="fa-brands fa-github"></i></a>`
    }

    document.querySelectorAll('.modal-toggle').forEach(button => {
        button.addEventListener('click', toggleModal)
    })
    
    function toggleModal(e) {
        e.preventDefault();
        document.querySelector('.modal').classList.toggle('open')
        document.querySelector('#name').innerHTML = String(this.dataset.name)
        document.querySelector('#pic').src = String(this.dataset.pic)
        document.querySelector('#pic').alt = String(this.dataset.alt)
        document.querySelector('#description').innerHTML = String(this.dataset.description)
        document.querySelector('#url').href = String(this.dataset.url)
    }
});