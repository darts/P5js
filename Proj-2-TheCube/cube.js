let LOSS_OVER_DISTANCE = 0.5; //ratio of how much something shrinks as it gets further away
let NUM_POINTS = 8;

class Cube{
    constructor(length, angle, center){
        this.length = length;
        this.angle = angle;
        this.center = center;
        this.pointPairs = getPointPairs();
        this.points = getPointLocs();
    }

    draw(){
        
    }
    
    getRot(){

    }

    getPointPairs(){
        let pairs = [];
        pairs.push([1,3,4]);
        pairs.push([2,5]);
        pairs.push([3,6]);
        pairs.push([7]);
        pairs.push([5]);
        pairs.push([6]);
        pairs.push([7]);
        pairs.push([8]);
        return pairs;
    }

    getPointLocs(){
        let pS = [];
        pS.push([this.center - length/2, this.center + length/2]);
        pS.push([this.center - length/2, this.center + length/2]);
        pS.push([this.center - length/2, this.center + length/2]);
        pS.push([this.center - length/2, this.center + length/2]);
        pS.push([this.center - length/2, this.center + length/2]);
        pS.push([this.center - length/2, this.center + length/2]);
        

        for(let i = 0; i < NUM_POINTS/2; i++){
            let y = this.center + length/2;
            let x = this.center + length/2;
        }

        for(let i = 0; i < NUM_POINTS/2; i++){
            
        }
    }
}