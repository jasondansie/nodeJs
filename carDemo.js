'use strict';

(function(){
    document.addEventListener('DOMContentLoaded', init);

    async function init(){
        try{
            const data = await fetch('http://localhost:3000/cars',{mode:'cors'});
            const carsData = await data.json();
            console.log(carsData);
            const resultset = document.querySelector('#resultset');

            for(const car of carsData){
                const tr = document.createElement('tr');
                tr.appendChild(createCell(car.model));
                tr.appendChild(createCell(car.licence));
                resultset.appendChild(tr);
            }
        }
        catch(error){

        }
    }

    function createCell(text){
        const td = document.createElement('td');
        td.textContent= text;
        return td;
    }

})();