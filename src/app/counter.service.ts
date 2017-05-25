export class CounterService {
    actToIn = 0;
    inToAct = 0;

    incrementActToIn(){
        this.actToIn++;
        console.log('the counter of Active to Inactive is:'+this.actToIn);
    }
    
    incrementInToAct(){
        this.inToAct++;
        console.log('the counter of Inactive to Active is:'+this.inToAct);
    }
}