const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchInput = document.querySelector('input');
const resultList = document.querySelector('ul');

let array = [];

//1000개의 cities 배열 가져오기 -> array에 할당
const getAllCites= async () => {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const data = await fetch(endpoint)
        .then(res=>res.json())
        .then(data=> {return data});
    array = data.slice();
}

const inputHandler = (e) => {
    resultList.innerHTML='';
    const searchText = e.target.value;
    if(searchText){
        searchHandler(searchText);
    }
    
}

const searchHandler = (searchText)=>{
    //search값을 포함하고 있는 array 
    const resArray = array.filter(arr=>{
        const regex = new RegExp(searchText, "gi");
        return arr.city.match(regex) || arr.state.match(regex)
    })
    //highlight 처리 & resultlist 만들기
    resArray.map(res=>{
        const li = document.createElement('li');
        const city = highlight(searchText, res.city);
        const state = highlight(searchText, res.state);
        const population = res.population.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        li.innerHTML = `
        <div class="citystate">${city}, ${state}</div>
        <div class="population">${population}</div>
        `
        resultList.appendChild(li);
    }).join('');
}
const highlight = (searchText, word)=>{
    const regex = new RegExp(searchText, "gi");
    const matchWord = word.match(regex);
    if(matchWord){
        return word.replace(regex,`<span class="searchword">${matchWord}</span>`)
    } else{
        return word;
    }
}


getAllCites();
searchInput.addEventListener('input',(e)=>inputHandler(e));






// 전역객체 array를 하나 선언한 후, data 1000개를 불러와 넣어준다.
// search값이 바뀔때마다 이 array를 이용해 보여주는 list값을 변경해준다.
// 전역객체를 안쓰려고 했는데, 그럼 input값이 변경될때마다 계속 fetch를 해주어야한다
