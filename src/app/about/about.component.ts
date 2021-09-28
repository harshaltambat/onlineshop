import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import  { NgbModalConfig, NgbModal }  from  '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[NgbModal,NgbModalConfig]
})
export class AboutComponent implements OnInit {

  public  products:any=[];
  
  imgModal:any;  


  constructor(public dialog:MatDialog ,config:NgbModalConfig, private productService:NgbModal,) {
    
    this.products=[
      {
        id:1,
        p_name:'Kalash',
        p_price:500,
        img:'./assets/Images/Kalash/7.jpeg',
        status:'Top Seller',
        title:"Copper Kalash for the Pooja. Pure copper utensils.",
        p_details:"According to Ayurveda, water stored in a copper vessel has the ability to balance all the three doshas in your body (vata, kapha and pitta) and it does so by positively charging the water. The water stored in a copper vessel is known as 'tamara jal' and is supposed to be consumed after storing the water in a copper vessel for at least eight hours. Care Tips: a) Clean your copperware by hand and avoid dishwasher as the detergent can cause oxidation leading to permanent damage. b) Use a solution of equal quantities of vinegar or lemon juice and salt diluted with some water at such times but don't use it regularly. c) Avoid scratchy cleaners like steel wool. d) A simple, soft cleaning liquid on the soap base, hot water, and a soft washing cloth is best for daily use. e) Use Copper Shining Powder for cleaning the copper utensils. Completely safe and gentle on hands. f) Copper Utensils Tarnish from time to time "
      },
      {
        id:2,
        p_name:'JUG',
        p_price:1200,
        img:'./assets/Images/Copper Jug/images13.jpeg',
        status:'Top Viwed',
        title:"100% PURE COPPER Handmade Copper Jug Pitcher"
      },
      {
        id:3,
        p_name:'Mug',
        p_price:600,
        img:'./assets/Images/Copper Mug/22.jpeg' ,
        status:'Top Purchased',
        title:"Handmade Copper Mug for Male and Female"
      },
      {
        id:4,
        p_name:'Water Pot',
        p_price:2000,
        img:'./assets/Images/Copper Water Pot/8.jpeg',
        status:'Top Seller',
        title:"Handmade Copper Water Storage Tank  Ayurveda Healing Water Storage Tank Copper Bottle "
      },
      {
        id:5,
        p_name:'Glass',
        p_price:900,
        img:'./assets/Images/Copper Glass/38.jpeg',
        status:'Top Seller',
        title:'Copper Glass | Housewarming Gift | Health Benefits | Indian Hammered Handmade Copper Glass',
        p_details:'100% Pure Copper Handmade Flask Tumbler Jug Pitcher Ayurveda Yoga health benefits Water Bottle Mug Handmade In India'
    },
      {
        id:6,
        p_name:'Glass',
        p_price:600,
        img:'./assets/Images/Copper Glass/39.jpeg',
        status:'',
        title:'Copper Glass | Housewarming Gift | Health Benefits | Indian Hammered Handmade Copper Glass',
        p_details:'100% Pure Copper Handmade Flask Tumbler Jug Pitcher Ayurveda Yoga health benefits Water Bottle Mug Handmade In India'
    },
      {
        id:7,
        p_name:'Glass',
        p_price:500,
        img:'./assets/Images/Copper Glass/37.jpeg',
        status:'Top Seller',
        title:'Copper Glass | Housewarming Gift | Health Benefits | Indian Hammered Handmade Copper Glass',
        p_details:'100% Pure Copper Handmade Flask Tumbler Jug Pitcher Ayurveda Yoga health benefits Water Bottle Mug Handmade In India'
    },
      {
        id:8,
        p_name:'Glass',
        p_price:600,
        img:'./assets/Images/Copper Glass/images4.jpeg',
        status:'Top Seller',
        title:'Copper Glass | Housewarming Gift | Health Benefits | Indian Hammered Handmade Copper Glass',
        p_details:'100% Pure Copper Handmade Flask Tumbler Jug Pitcher Ayurveda Yoga health benefits Water Bottle Mug Handmade In India'
    },
      {
        id:9,
        p_name:'Glass',
        p_price:1600,
        img:'./assets/Images/Copper Glass/images16.jpeg',
        status:'',
        title:'Copper Glass | Housewarming Gift | Health Benefits | Indian Hammered Handmade Copper Glass',
        p_details:'100% Pure Copper Handmade Flask Tumbler Jug Pitcher Ayurveda Yoga health benefits Water Bottle Mug Handmade In India'
      },
        {
          id:10,
          p_name:'Glass',
          p_price:400,
          img:'./assets/Images/Copper Glass/images6.jpeg',
          status:'',
          title:'Copper Glass | Housewarming Gift | Health Benefits | Indian Hammered Handmade Copper Glass',
          p_details:'100% Pure Copper Handmade Flask Tumbler Jug Pitcher Ayurveda Yoga health benefits Water Bottle Mug Handmade In India'
      },
        {
          id:11,
          p_name:'Jug',
          p_price:1200,
          img:'./assets/Images/Copper Jug/images6.jpeg',
          status:'',
          title:'Copper Jug | Housewarming Gift | Health Benefits | Indian Hammered Handmade Copper Glass',
          p_details:'100% Pure Copper Handmade Flask Tumbler Jug Pitcher Ayurveda Yoga health benefits Water Bottle Mug Handmade In India'
      },
        {
          id:12,
          p_name:'Mug',
          p_price:600,
          img:'./assets/Images/Copper Mug/6.jpeg',
          status:'',
          title:'Copper Mug | Housewarming Gift | Health Benefits | Indian Hammered Handmade Copper Glass',
          p_details:'100% Pure Copper Handmade Flask Tumbler Jug Pitcher Ayurveda Yoga health benefits Water Bottle Mug Handmade In India'
      },
      
      ];
  }
  
  content:any;

  
  openDialog(){
    const dialogRef=this.dialog.open(this.products);
    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog result: ${result}`);
    });
  }


  open(content:any){
    this.productService.open(content,{size:'md',backdrop:'static'});
  }


  show(){
      this.imgModal=true;
  }
  hide(){
    this.imgModal=false;
  }

  ngOnInit(): void {
  }

}
