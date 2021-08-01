import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,Form} from '@angular/forms';
import { Segment } from '../Segment';
import { Isegment } from '../Isegment';
import { Imanufacturer } from '../Imanufacturer';
import { Ivariant } from '../Ivariant';
import { SegmentService } from '../segment.service';




@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css'],
})
export class SegmentComponent implements OnInit {
  

  segForm:FormGroup;
  segment:Isegment;
  manufacturers:any[];
  variant:any[];
  segName:string;
  manufactName : string;
  min_qtyO :number;
  seg : Isegment[];
  flag : string;
  flagBool : boolean = true;
  
  constructor
  (
    public fb:FormBuilder,
    //private regService: RegisterService,
    private segService : SegmentService,
    private router:Router
  ) { }

  ngOnInit() {
    //this.regService.islogined().subscribe(data => {this.flag = data; console.log(data+" session")});
    //console.log(this.flag.toString() === "false");
    // console.log(localStorage.getItem('user'))
    // if(localStorage.getItem('loginFlag')!="false")
    // {
    //   this.router.navigate(['/segment']);
    //   localStorage.setItem('loginError',"Please Login")
    // }
    
   this.buildSegForm();
    this.segService.getSegment().subscribe(
    data => 
    {
      console.log(data);
      this.seg = data;
    }
   );
  
  }

  buildSegForm()
  {
    this.segForm = this.fb.group({
      segment: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      variant: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });
  }
  // segForm : FormGroup= new FormGroup(
  //   {
  //     segment : new FormControl,
  //     manufacturer : new FormControl,
  //     variant : new FormControl,
  //     ContactNumber : new FormControl,
  //   }
  // );

  onSubmit(segForm:FormGroup)
  {
    if(!segForm.valid)
    {
     // window.alert("");
      this.flagBool=false;
      console.log(segForm.value);
      this.router.navigate(['/segment']);
    }
    else{
      console.log(this.flagBool)
      if(this.flagBool)
      {
        let variant_Name=localStorage.getItem('variant_Name');//sent to config
      this.router.navigate(['/configure']);
       
      }
      else{
         window.alert("please enter minimum quantity as mentioned");//sent to segment if info is not given properly
        this.router.navigate(['/segment']);
      }
    
    //window.alert(variant_Name);
   };
   
    
  }

  onChangeSegment(segname)
  {
    //console.log(JSON.stringify(seg_obj.SegmentName));
    localStorage.setItem('SegmentName',segname);
    this.segName =segname.trim();
    for(var segObj of this.seg)
    {
      if(segObj.SegmentName === this.segName)
      {
        this.segment = segObj;
        break;
      }
    }
    
    //console.log(JSON.stringify(this.segment.SegmentId));
    this.min_qtyO = this.segment.MinQty;
    this.segService.getManufacturer(this.segName).subscribe(
      data=> 
      { 
        this.manufacturers = data;
        console.log(this.manufacturers);
      }
      
    );

  }

  onChangeManufact(manufact_name)
  {
    
    localStorage.setItem('manufactureName',manufact_name);
    //var segment_id = this.segment.SegmentId;
    this.manufactName = manufact_name.trim();
    this.segService.getVariant(this.segName,this.manufactName).
    subscribe(data=>this.variant=data,error=>console.log(error));
    console.log(this.variant);
  }

  onChangeVariant(variant_name)
  {

    localStorage.setItem('variant_Name',variant_name.trim());
  } 
 
  onChangeMaxQty(minQty)
  {

    
    localStorage.setItem('qty',minQty);
    minQty = parseInt(minQty)
    //console.log(minQty >= this.segment.minQty );
    if(minQty >= this.segment.MinQty )
    {
      this.flagBool = true;
    }
    else
    {
      this.flagBool = false;
    }
  };
}



//   selectedSegment: String = '--Choose Segment--';

//   Segments: Array<any> = [
//     {
//       name: 'Small Car',
//       manufacturers: [
//         {
//           name: 'Maruti Suzuki',
//           variants: ['Alto 800', 'Celerio', 'Swift'],
//         },
//         {
//           name: 'Hyundai',
//           variants: ['Grand i10', 'Elite i20', 'Creta'],
//         },
//         { 
//           name: 'Tata',
//           variants: ['Altros', 'Nexon', 'Tiago'],
//         },
//       ],
//     },
//     {
//       name: 'Compact Car',
//       manufacturers: [
//         {
//           name: 'Nissan',
//           variants: ['Versa', 'Sentra', 'Magnite'],
//         },
//         {
//           name: 'Honda',
//           variants: ['Civic', 'CR-V', 'City'],
//         },
//         {
//           name: 'Ford',
//           variants: ['Fiesta', 'Eco-Sports', 'Focus'],
//         },
//       ],
//     },
//     {
//       name: 'Sedan',
//       manufacturers: [
//         {
//           name: 'Toyota',
//           variants: ['Yaris', 'Camri', 'Crown'],
//         },
//         {
//           name: 'Rolls Royce',
//           variants: ['Phantom', 'Ghost', 'Wraith'],
//         },
//         {
//           name: 'Kia',
//           variants: ['Sonet', 'Seltos', 'Carnival'],
//         },
//       ],
//     },
//     {
//       name: 'SUVs',
//       manufacturers: [
//         {
//           name: 'Audi',
//           variants: ['Q7', 'TT', 'e-tron'],
//         },
//         {
//           name: 'BMW',
//           variants: ['X1', 'ZX', 'M8'],
//         },
//         {
//           name: 'Mahindra',
//           variants: ['XUV500', 'Scorpio', 'Alturas'],
//         },
//       ],
//     },
//     {
//       name: 'Luxury Car',
//       manufacturers: [
//         {
//           name: 'Ferrari',
//           variants: ['Roma', 'Portofino', 'Tributo'],
//         },
//         {
//           name: 'Porche',
//           variants: ['Macan', 'Panamera', 'Cayenne'],
//         },
//         {
//           name: 'Tesla',
//           variants: ['3', 'X', 'H'],
//         },
//       ],
//     },
//   ];

//   manufacturers: Array<any>;

//   variants: Array<any>;

//   changeSegment(Segment) {
//     this.manufacturers = this.Segments.find(
//       (s) => s.name == Segment
//     ).manufacturers;
//   }

//   changemanufacturer(manufacturer) {
//     this.variants = this.Segments.find(
//       (v) => v.name == this.selectedSegment
//     ).manufacturers.find((v) => v.name == manufacturer).variants;
//   }
// }