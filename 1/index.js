class AClass{
    Numbers = [];
    
    constructor(n){
        if (this.constructor.name === 'AClass') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
        this.arrayLength = n;
    }

    #fill() {
        for(let i = 0; i < this.arrayLength; i++){
            this.Numbers.push(Math.floor(Math.random() * (10 - 1) + 1));
        }
        console.log(this.Numbers);
    }

    factorial(){
        this.#fill();
        const getFactorial = (n) => {
            return (n !== 1) ? n * getFactorial(n - 1) : n; 
        }
        return this.Numbers.map(item => getFactorial(item));
    }
    sort() {}
}

class Class1 extends AClass{
    constructor(n){
        super(n);        
    }

    sort(){
        for(let i = 0; i < this.Numbers.length; i++){
            for(let j = 0; j < this.Numbers.length; j++){
                if(i > j){
                    [this.Number[i], this.Number[j]] = [this.Number[j], this.Number[i]];
                }
            }
        }
        console.log(this.Numbers);
    }
}

class Class2 extends AClass{
    constructor(n){
        super(n);
        super.fill();
    }

}


const obj = new Class1(3);
obj.sort();


