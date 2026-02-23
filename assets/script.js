// Create empty array
let interviewList = [];
let rejectedList = [];

// For counting card value
let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

let currentStatus = 'all';

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCards = document.getElementById('allCards');
const allJobsCount = document.getElementById('allJobsCount');

const mainContainer = document.querySelector('main');

const filterCard = document.getElementById('filtered-card');

// Count card value
function calculateCount() {
    totalCount.innerText = allCards.children.length;
    allJobsCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// Toggle Button
function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

    allFilterBtn.classList.add('bg-white');
    interviewFilterBtn.classList.add('bg-white');
    rejectedFilterBtn.classList.add('bg-white');

    const selected = document.getElementById(id);

    currentStatus = id;

    selected.classList.remove('bg-white');
    selected.classList.add('bg-blue-500', 'text-white');

    if (id == 'interview-filter-btn') {
        allCards.classList.add('hidden');
        filterCard.classList.remove('hidden');
        renderInterview();
    } else if (id == 'all-filter-btn') {
        allCards.classList.remove('hidden');
        filterCard.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allCards.classList.add('hidden');
        filterCard.classList.remove('hidden');
        renderRejected();
    }
}

//Event Delegation
mainContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const cardNode = event.target.parentNode.parentNode;

        const companyName = cardNode.querySelector('.companyName').innerText;
        const position = cardNode.querySelector('.position').innerText;
        const location = cardNode.querySelector('.location').innerText;
        const type = cardNode.querySelector('.type').innerText;
        const salary = cardNode.querySelector('.salary').innerText;
        const status = cardNode.querySelector('.status').innerText;
        const description = cardNode.querySelector('.description').innerText;

        cardNode.querySelector('.status').innerText = "Interviewed";

        const cardInfo = {
            companyName,
            position,
            location,
            type,
            salary,
            status: 'Interviewed',
            description
        }

        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!companyExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }

        calculateCount();

    } else if (event.target.classList.contains('rejected-btn')) {
        const cardNode = event.target.parentNode.parentNode;

        const companyName = cardNode.querySelector('.companyName').innerText;
        const position = cardNode.querySelector('.position').innerText;
        const location = cardNode.querySelector('.location').innerText;
        const type = cardNode.querySelector('.type').innerText;
        const salary = cardNode.querySelector('.salary').innerText;
        const status = cardNode.querySelector('.status').innerText;
        const description = cardNode.querySelector('.description').innerText;

        cardNode.querySelector('.status').innerText = "Rejected";

        const cardInfo = {
            companyName,
            position,
            location,
            type,
            salary,
            status: 'Rejected',
            description
        }

        const companyExist = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if (!companyExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }
        calculateCount();
    }

});

// Render Interviews
function renderInterview() {
    filterCard.innerHTML = '';

    for (let interview of interviewList) {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card flex justify-between bg-white p-5 rounded-md my-5';
        cardDiv.innerHTML = `
        <div class="parentDiv">
            <div class="my-2">
                <h3 class="companyName text-xl font-bold">${interview.companyName}</h3>
                <p class="position">${interview.position}</p>
            </div>
            <ul class="flex gap-10 text-gray-700 my-2">
                <li class="location">${interview.location}</li>
                <li class="type list-disc">${interview.type}</li>
                <li class="salary list-disc">${interview.salary}</li>
            </ul>
            <span class="status bg-gray-300 my-2 py-1 px-2">${interview.status}</span>
            <p class="description my-2 text-sm">${interview.description}</p>
            <div class="mt-3 flex gap-2">
                <button class="interview-btn text-sm font-bold text-green-500 border border-green-500 px-3 py-1 cursor-pointer rounded-sm">INTERVIEW</button>
                <button class="rejected-btn text-sm font-bold text-red-500 border border-red-500 px-3 py-1 cursor-pointer rounded-sm">REJECTED</button>
            </div>
        </div>
        <!-- card delete btn -->
        <div>
            <button class="cursor-pointer w-8 h-8 rounded-full border border-gray-300">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
        `
        filterCard.appendChild(cardDiv);
    }
}

// Render Rejected
function renderRejected() {
    filterCard.innerHTML = '';

    for (let rejected of rejectedList) {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card flex justify-between bg-white p-5 rounded-md my-5';
        cardDiv.innerHTML = `
        <div class="parentDiv">
            <div class="my-2">
                <h3 class="companyName text-xl font-bold">${rejected.companyName}</h3>
                <p class="position">${rejected.position}</p>
            </div>
            <ul class="flex gap-10 text-gray-700 my-2">
                <li class="location">${rejected.location}</li>
                <li class="type list-disc">${rejected.type}</li>
                <li class="salary list-disc">${rejected.salary}</li>
            </ul>
            <span class="status bg-gray-300 my-2 py-1 px-2">${rejected.status}</span>
            <p class="description my-2 text-sm">${rejected.description}</p>
            <div class="mt-3 flex gap-2">
                <button class="interview-btn text-sm font-bold text-green-500 border border-green-500 px-3 py-1 cursor-pointer rounded-sm">INTERVIEW</button>
                <button class="rejected-btn text-sm font-bold text-red-500 border border-red-500 px-3 py-1 cursor-pointer rounded-sm">REJECTED</button>
            </div>
        </div>
        <!-- card delete btn -->
        <div>
            <button class="cursor-pointer w-8 h-8 rounded-full border border-gray-300">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
        `
        filterCard.appendChild(cardDiv);
    }
}