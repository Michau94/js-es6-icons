

const display = document.querySelector('.container > .row');


//# FUNZIONI


// stampa template icone

const renderIcons = (arr, targetElement) => {

    let itemTemplate = '';
    arr.forEach((item) => {


        itemTemplate +=
            ` <div class="col-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="${item.family} ${item.prefix}${item.name} fa-2x ${item.type}"></i>
                                <h2>${item.name.toLocaleUpperCase()}</h2>
                            </div>
                        </div>
                    </div>`;


        targetElement.innerHTML = itemTemplate;


    });

}



// #Filtro


const selectField = document.getElementById('filter');

selectField.addEventListener('change', () => {

    let selectValue = selectField.value;

    if (selectValue === 'all') {

        renderIcons(icons, display);
        return;
    }


    const filtered = icons.filter((item) => {
        return selectValue === item.type ? true : false;
    });

    renderIcons(filtered, display)

})


