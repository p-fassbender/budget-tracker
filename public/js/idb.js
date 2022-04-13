const DB_NAME = 'budget_tracker_IDB'

let db;
const request = indexedDB.open(DB_NAME, 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore('new_budget_entry', { autoIncrement: true });
};

request.onsuccess = function (event) {
    db = event.target.result;
    if (navigator.onLine) {
        uploadTransaction();
    }
};

request.onerror = function (event) {
    console.log(event.target.errorCode);
};

function saveRecord(record) {
    const transaction = db.transaction(['new_budget_entry'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('new_budget_entry');
    budgetObjectStore.add(record);
}

function uploadBudgetEntry() {
    const transaction = db.transaction(['new_budget_entry'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('new_budget_entry');
    const getAll = budgetObjectStore.getAll();

    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            fetch('/api/transaction', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(serverResponse => {
                    if (serverResponse.message) {
                        throw new Error(serverResponse);
                    }
                    const transaction = db.transaction(['new_budget_entry'], 'readwrite');
                    const budgetObjectStore = transaction.objectStore('new_budget_entry');
                    budgetObjectStore.clear();
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };
}

window.addEventListener('online', uploadBudgetEntry);
