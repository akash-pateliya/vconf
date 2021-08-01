import {Ivariant} from './ivariant'

export class Variant implements Ivariant{

    constructor (
    public variantid : number,
    public variantname : string,
    public segmentname : string,
	public manufacturername : string,
	public price : number ,
    public imagepath : string 
    ){}
}
