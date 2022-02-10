const resBtn = document.querySelector('.residents')

const getAllPlanets = () =>{
    event.preventDefault()
   
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')

    .then(res =>{
        const residents = res.data.results[0].residents
        for(let i = 0; i< residents.length; i++){
            console.log(residents[i])

            axios.get(residents[i]).
            then(res1 =>{
                let name = res1.data.name
                console.log(name)
                let elem = document.createElement('h2')
                elem.textContent = name
                document.body.appendChild(elem)
            })        
        }
    })
   
    .catch(err => console.log(err))
}

resBtn.addEventListener('click', getAllPlanets)

