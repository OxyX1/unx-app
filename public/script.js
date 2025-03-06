if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registration");
        console.log(registration);
    }).catch(error => {
        console.log("SM REGISTRATION FAILED");
        console.log(error)
    });
}