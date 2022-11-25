class Parent {

    constructor (name, place) {
        this.name = name;
        this.place = place;
    }

    m1(){
        console.log(this.name + "has" + this.place)

        return 1;
    }
}