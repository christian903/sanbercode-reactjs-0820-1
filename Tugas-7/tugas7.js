class Animal{
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }

    get animal_name(){
        return this.name;
    }

    get jumlah_kaki(){
        return this.legs;
    }

    get xcold_blooded(){
        return this.cold_blooded;
    }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Frog extends Animal{
    constructor(name){
        super(name);
    }
    jump(){
        return "hop hop " + super.animal_name + " " + super.jumlah_kaki + " " + super.xcold_blooded;
    }
}

class Ape extends Animal{
    constructor(name){
        super(name);
    }
    yell(){
        return "Auooo " + super.animal_name + " " + super.xcold_blooded;
    }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong.yell()) // "Auooo"
 
var kodok = new Frog("buduk")
console.log(kodok.jump()) // "hop hop" 

class Clock {
    constructor({template}){
        this.template = template;
        this.timer = null;
    }
    
    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template.replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

      console.log(output);
    }
  
    stop() {
      clearInterval(timer);
    }
  
    start() {
      this.render();
      var timer = setInterval(this.render.bind(this), 1000);
    }  
}
  
var clock = new Clock({template: 'h:m:s'});
clock.start(); 