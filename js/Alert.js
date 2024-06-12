window.alert = function(message, type = 'info', timeout = null) {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.classList.add(type); 
    alert.setAttribute('style', `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 5px 0 #00000022;
        z-index: 1000;
    `);
    if (timeout !== null) {
        setTimeout(() => {
            alert.remove();
        }, Number(timeout));
    }
    alert.innerText = message;
    document.body.appendChild(alert);
}
