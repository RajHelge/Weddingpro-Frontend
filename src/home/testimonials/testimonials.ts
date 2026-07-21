import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials implements OnInit,OnDestroy {
  currentIndex = 0;

  intervalId!: any;

  images = [
    {feedback:'"WeddingPro made our wedding planning completely stress-free. We found our photographer, decorator, and caterer in just a few days. Every vendor was professional, responsive, and exceeded our expectations. Our wedding day was absolutely magical,',image:'/Images/testimonials/T1.png',name:'Rahul & Sneha, Indore'},
    {feedback:'As a busy couple, we had very little time to search for reliable wedding vendors. WeddingPro brought everything together in one place. Comparing reviews, contacting vendors, and booking services was incredibly easy. We highly recommend it to every couple planning their dream wedding.',image:'/Images/testimonials/T2.png',name:'Amit & Priya, Pune'},
    {feedback:'From finding the perfect wedding venue to choosing an amazing makeup artist, WeddingPro helped us at every step. The vendors were genuine, affordable, and delivered exactly what they promised. Our guests are still talking about how beautiful everything looked.',image:'/Images/testimonials/T3.png',name:'Karan & Nisha, Jaipur'},
    {feedback:'We were initially overwhelmed by the number of wedding decisions we had to make. WeddingPro simplified the entire process with trusted vendors and authentic reviews. Thanks to the platform, our wedding was perfectly organized, and we enjoyed every moment without worrying about the arrangements.',image:'/Images/testimonials/T4.png',name:'Arjun & Meera, Hyderabad'},
    
  ];
  ngOnInit(): void {
  this.intervalId = setInterval(() => {
      this.next();
    }, 1000);
  }
   ngOnDestroy() {
    setTimeout(() => {
     this.currentIndex = 1;
    clearInterval(this.intervalId);
  });
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goTo(index:number){
    this.currentIndex=index;
  }
}
