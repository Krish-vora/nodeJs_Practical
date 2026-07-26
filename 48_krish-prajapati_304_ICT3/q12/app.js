function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 read the data :");
            resolve("Data");
        }, 1000);
    });
}

function task2(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 : Processing the data : " + data);
            resolve("Processed Data");
        }, 1000);
    });
}

function task3(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3: Finalizing the Data :" + data);
            resolve("Final Data");
        }, 1000);
    })
}

task1()
    .then(task2)
    .then(task3)
    .then((result) => {
        console.log("final Result : " + result);
    })
    .catch((error) => {
        console.error("Error: " + error);
    });