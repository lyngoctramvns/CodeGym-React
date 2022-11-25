//Class Child inherited all elment from class Parent
class Child extends Parent {


    //overriding the method of class Parent in class Child
    m1(){
        console.log(this.name + "was inherited" + this.place)

        //If not return, will not be able to call with object
        return 2;
    }

}

let newVari = new Parent("Peter", "Amsterdam");

alert(newVari.m1());

let son = new Child("Edwin","York");

alert(son.m1());