import {Isegment} from './isegment'
import {Variant} from './variant'


    export class Segment implements Isegment {

        constructor
        (
            public SegmentId  : number, 
            public SegmentName : string,
            public MinQty : number,
            //public variantses  : Set<Variant>
            ){}
    }

