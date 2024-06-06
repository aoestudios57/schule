document.getElementById('createH1Button').addEventListener('click', function() {
    const h1 = document.createElement('h1');
    h1.textContent = 'stark jetzt hast mich geklickt';
    document.body.appendChild(h1);
});

