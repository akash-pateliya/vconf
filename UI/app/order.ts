import {Iorder} from './iorder'

export class Orders implements Iorder {

    constructor
    (
        public orderid : number,
        public quantity : number,
        public amount : number,
        public variantname : string,
        public name : string,
    ){}
}
