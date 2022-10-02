import * as $ from 'jquery';

$('.box').css({
    backgroundColor : "green",
    width : "100px",
    height : "100px"
});


interface Hewan {
    myInfo () : void;
}

class Kucing implements Hewan{
    private _habitat : string;


    public set habitat(_habitat : string){
        this._habitat = _habitat;
    }
    public get habitat () : string {
        return this._habitat;
    }
    myInfo(): void {
        console.log(
            `
                Habitat : ${this.habitat}
            `
        )
    }
    
}

let kucing = new Kucing();
kucing.habitat = "KKKK1111";
$(document).ready(function() { 
 	$('.box').css({
    backgroundColor : "red"
    }); 
	kucing.myInfo();
});
