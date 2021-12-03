class AClass{
    Numbers = [];

    constructor(n){
        if (this.constructor.name === 'AClass') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
        this.numbersLength = n;
        this.#fill();
    }

    #fill() {
        for(let i = 0; i < this.numbersLength; i++){
            this.Numbers.push(Math.floor(Math.random() * (10 - 1) + 1));
        }
    }

    factorial(){
        const getFactorial = (n) => {
            return (n !== 1) ? getFactorial(n - 1) * n : n;
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
        let arr = this.Numbers;
        let index;
        for (let i = 0; i < this.numbersLength - 1; i++) {
            index = i;
            for (let j = i; j < this.numbersLength; j++) {
                if (arr[index] > arr[j]) {
                    index = j;
                }
            }
            if (i !== index) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
            }
        }
        this.Numbers = arr;
        return this.factorial();
    }
}

class Class2 extends AClass{
    constructor(n){
        super(n);
    }

    sort(){
        let arr = this.Numbers;
        for(let i = 0; i < this.numbersLength; i++){
            for(let j = 0; j < this.numbersLength; j++){
                if(arr[j] > arr[j + 1]){
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        this.Numbers = arr;
        return this.factorial();
    }
}


