let interviewList = [{name:'ferdows'}, {name:'samsu'}];
let rejectedList = [{name:'ferdows'}];

let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCards = document.getElementById('allCards');
const allJobsCount = document.getElementById('allJobsCount');

const mainContainer = document.querySelector('main');

function calculateCount(){
    totalCount.innerText = allCards.children.length;
    allJobsCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500','text-white');
    interviewFilterBtn.classList.remove('bg-blue-500','text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500','text-white');

    allFilterBtn.classList.add('bg-white');
    interviewFilterBtn.classList.add('bg-white');
    rejectedFilterBtn.classList.add('bg-white');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white');
    selected.classList.add('bg-blue-500','text-white');
}