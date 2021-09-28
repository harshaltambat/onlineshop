import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import  { NgbModalConfig, NgbModal }  from  '@ng-bootstrap/ng-bootstrap';
import { transpile } from 'typescript';
import { Product } from '../Model/Model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[NgbModal,NgbModalConfig]
})
export class HomeComponent implements OnInit {

   public  products:any=[];

  imgModal:any;  


  constructor(config:NgbModalConfig, private productService:NgbModal) {

    config.backdrop='static';
    config.keyboard=false;
 
    this.products=[
      {
        id:1,
        p_name:'Kalash',
        p_price:500,
        img:'./assets/Images/Kalash/7.jpeg',
        p_desc:"Copper Kalash for the Pooja. Pure copper utensils.",
        p_details:"According to Ayurveda, water stored in a copper vessel has the ability to balance all the three doshas in your body (vata, kapha and pitta) and it does so by positively charging the water. The water stored in a copper vessel is known as 'tamara jal' and is supposed to be consumed after storing the water in a copper vessel for at least eight hours. Care Tips: a) Clean your copperware by hand and avoid dishwasher as the detergent can cause oxidation leading to permanent damage. b) Use a solution of equal quantities of vinegar or lemon juice and salt diluted with some water at such times but don't use it regularly. c) Avoid scratchy cleaners like steel wool. d) A simple, soft cleaning liquid on the soap base, hot water, and a soft washing cloth is best for daily use. e) Use Copper Shining Powder for cleaning the copper utensils. Completely safe and gentle on hands. f) Copper Utensils Tarnish from time to time "
      },
      {
        id:2,
        p_name:'JUG',
        p_price:300,
        img:'./assets/Images/Copper Jug/images13.jpeg',
        p_desc:"100% PURE COPPER Handmade Copper Jug Pitcher"
      },
      {
        id:3,
        p_name:'Mug',
        p_price:1000,
        img:'./assets/Images/Copper Mug/22.jpeg' ,
        p_desc:"Handmade Copper Mug for Male and Female"
      },
      {
        id:4,
        p_name:'Water Pot',
        p_price:200,
        img:'./assets/Images/Copper Water Pot/8.jpeg',
        p_desc:"Handmade Copper Water Storage Tank  Ayurveda Healing Water Storage Tank Copper Bottle "
      },
      {
        id:5,
        p_name:'Glass',
        p_price:200,
        img:'./assets/Images/Copper Glass/38.jpeg',
        p_desc:'Copper Glass | Housewarming Gift | Health Benefits | Indian Hammered Handmade Copper Glass',
        p_details:'100% Pure Copper Handmade Flask Tumbler Jug Pitcher Ayurveda Yoga health benefits Water Bottle Mug Handmade In India'
    }
    
    ];
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
