
fetch('projects.json').then ((response) => {
    return response.json()
}).then((data) => {
    console.log(data)

    for(const project of data.data) {
        document.querySelector('.card-container').innerHTML += `
        <div class="card w-1/5 m-4 px-3 pt-3 pb-1 rounded-xl flex flex-col items-center text-center">
            <h2 class="text-2xl my-5">${project.name}</h2>
            <img src="${project.img}" alt="${project.imgAlt}" class="w-11/12 h-2/4">
            <p class="text-xl mt-5 mb-14">${project.blurb}</p>
            <div class="w-10/12 flex justify-between text-xl">
                <button data-id="${project.id}" class="p-2 rounded-xl modal-toggle">More Info</button>
                <a class="p-2 rounded-xl" href="${project.github}" target="_blank">Github<i class="fa-brands fa-github"></i></a>
            </div>
        </div> `
    }

    document.querySelectorAll('.modal-toggle').forEach(button => {
        button.addEventListener('click', toggleModal)
    })
    
    function toggleModal(e) {
        e.preventDefault();
        document.querySelector('.modal').classList.toggle('open')
    }
});