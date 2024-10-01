let app = new Vue({
    el: '#App',
    data: { newTask: ''},
    methods: {
    addItem: function() {
    let newItem = document.createElement('li');
    newItem.innerText = app.newTask;
    document.getElementById('tasklist').appendChild(newItem)
    app.newTask = '';
    }
    }
    })