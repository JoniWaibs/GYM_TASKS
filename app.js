const vm = new Vue({
    el: '#app',
    data: {
        title: 'Gym:App',
        inputTask : "",
        tasks : JSON.parse(localStorage.getItem('Tasks')) || []//obtener de ls
    },
    methods:{
        handleInput: function(){
            const task = {
                id:Date.now() + Math.random(),
                name : this.inputTask,
                state: false,
            };
            this.tasks.push(task);
            this.inputTask = "";
            //Save to LS
            this.setLocal();
        },
        updateItem: function( id ){
            this.tasks.filter( task =>{
                if( task.id === id ){
                    if( task.state === true ){
                        task.state = false
                    }else if( task.state === false ){
                        task.state = true
                    };
                };
            });
            //Save to LS
            this.setLocal();
            console.log('this item was updated');
        },
        deleteItem: function( id ){
            if( this.tasks.length > 0 ){
                this.tasks = this.tasks.filter( task => task.id != id )
            };
            //Save to LS
            this.setLocal();
            console.log('this item was deleted');
        },
        setLocal:function(){ localStorage.setItem('Tasks' , JSON.stringify(this.tasks)) }
    }
})