async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const refreshButton = document.querySelector('#refresh-button');
    const decrementButton = document.querySelector('#decrement-button');


        let response = await fetch('http://localhost:9001/counter');
        let result = await response.json()
        console.log(result)
    

    let countValue = 0;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        console.log(countContainer.textContent)

        fetch('http://localhost:9001/counter'), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        }
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        console.log(countContainer.textContent)

        fetch('http://localhost:9001/counter'), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        }
    }

    function refresh(){
        countValue = 0;
        countContainer.textContent = countValue;
        console.log(countContainer.textContent)

        fetch('http://localhost:9001/counter'), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        }
    }

    incrementButton.addEventListener('click', increment);
    refreshButton.addEventListener('click', refresh);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()