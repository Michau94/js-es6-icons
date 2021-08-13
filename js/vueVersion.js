console.log(Vue);

const root = new Vue({
    el: '#root',
    data: {
        optionsArr: [],
        searchField: '',
        filterOpt: 'all',
        filteredIcons: [],
        icons: [
            {
                name: 'cat',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'crow',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'dog',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'dove',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'dragon',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'horse',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'hippo',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'fish',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'carrot',
                prefix: 'fa-',
                type: 'vegetable',
                family: 'fas',
            },
            {
                name: 'apple-alt',
                prefix: 'fa-',
                type: 'vegetable',
                family: 'fas',
            },
            {
                name: 'lemon',
                prefix: 'fa-',
                type: 'vegetable',
                family: 'fas',
            },
            {
                name: 'pepper-hot',
                prefix: 'fa-',
                type: 'vegetable',
                family: 'fas',
            },
            {
                name: 'user-astronaut',
                prefix: 'fa-',
                type: 'user',
                family: 'fas',
            },
            {
                name: 'user-graduate',
                prefix: 'fa-',
                type: 'user',
                family: 'fas',
            },
            {
                name: 'user-ninja',
                prefix: 'fa-',
                type: 'user',
                family: 'fas',
            },
            {
                name: 'user-secret',
                prefix: 'fa-',
                type: 'user',
                family: 'fas',
            },
            {
                name: 'facebook',
                prefix: 'fa-',
                type: 'company',
                family: 'fab',
            },
            {
                name: 'twitter',
                prefix: 'fa-',
                type: 'company',
                family: 'fab',
            },
            {
                name: 'linkedin',
                prefix: 'fa-',
                type: 'company',
                family: 'fab',
            }
        ]
    },
    methods: {

        renderOptions() {
            this.icons.forEach(element => {
                if (!this.optionsArr.includes(element.type)) {
                    this.optionsArr.push(element.type);
                }


            });

            console.log(this.optionsArr);
        }

    },

    created() {

        this.renderOptions();

    },

    computed: {

        filtered: function () {

            return this.icons.filter((icon) => {

                if (this.filterOpt === 'all' && icon.name.includes(this.searchField.toLowerCase())) {
                    return icon;
                }


                if (icon.type === this.filterOpt && icon.name.includes(this.searchField.toLowerCase())) {
                    return icon;
                }

            })
        }

    }
})