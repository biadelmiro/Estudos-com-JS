(() => {
    this.name = 'Arrow Function onde o this.name chama fora da function';
    const getNameArrowFn = () => this.name;

    function getName(){
        return this.name;
    }

    const user = {
        name: 'Nome do objeto de execução',
        //getNameArrowFn: getNameArrowFn exemplo
        getNameArrowFn,
        getName
    }
    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();