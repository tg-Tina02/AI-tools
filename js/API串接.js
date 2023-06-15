
//資料串接
const apiPath = "https://2023-engineer-camp.zeabur.app";
const list = document.querySelector('#tools-card-list');
// console.log(list)

const data = {
    type: '',
    sort: 0,
    page: 1,
    search:'',
};
let worksData = [];
let pagesData = {};

function getData({ type, sort, page, search }){
    const apiUrl = `${apiPath}/api/v1/works?sort=${sort}&page=${page}&${type ? `type=${type}&` : ''}${search ? `search=${search}` : ''}`;
    // console.log(apiUrl); //確認網址

    axios.get(apiUrl)
        .then(function(res){
            // console.log(res.data) //確認有沒有抓到資料
            worksData = res.data.ai_works.data;
            pagesDate = res.data.ai_works.page;

            // console.log(worksData); //確認抓出來的資料
            // console.log(pagesData);

            renderWorks(); //渲染到畫面的動作
        })
}

getData(data); //

//作品渲染至畫面 //或是不寫function直接把動作寫在上面renderWorks()的位置
function renderWorks(){
    let works = ''; //一開始是空的

    // worksData 去跑迴圈
    worksData.forEach((item) => {
        works +=/*html*/`<li class="col">
        <div class="card h-100">
            <img src="${item.imageUrl}" alt="ai img" class="card-img-top">
            <div class="card-body">
                <h4 class="card-title">${item.title}</h4>
                <p class="card-text">${item.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="fw-bold">Al模型</div>
                    <p>${item.model}</p>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <a class="text-black" href="javascript:void(0)">#${item.type}</a>
                    <a class="text-black" href="${item.link}" target="_blank">
                        <span class="material-icons">
                            share
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </li>`
    });

    list.innerHTML = works;
}

