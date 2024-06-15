class Iphone4{

    constructor(ASIN,color,display,camera,Bluetooth){
        
    this.ASIN=ASIN;
    this.color=color;
    this.display=display;
    this.camera=camera;
    this.Bluetooth=Bluetooth
    }

    
    dial(){
        return 'tring.. tring...'
    }
    sendMessage(){
        return "Sending message..."
    }
    cameraClick(){
        return "Camera clicked" 
    }
    connectBluetooth(){
        return "Bluetooth connected successfully..."
    } 

}
let data = new Iphone4(44537,'blue','5.7','108','5.3')
console.log(data);
console.log(data.dial());
console.log(data.sendMessage());
console.log(data.cameraClick());
console.log(data.connectBluetooth());