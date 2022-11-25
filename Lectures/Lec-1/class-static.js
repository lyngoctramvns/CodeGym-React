//Calling method directly through static method
//WARNING: Do not use static randomly
//-> Didn't create object but call directly through class
//-> Can break the method of OOP(Object Oriented PRograming)
//-> restrict use

class Test {
    static warning(){
        alert("Test!")
    }
}

Test.warning();