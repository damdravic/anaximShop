import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  
  public slug : string | null = null;

 

  constructor(private route : ActivatedRoute, private router : Router) { 
   this.route.params.subscribe(
    params => {
      this.slug = params['slug'] ? params['slug'] : 'default';
      console.log(this.slug)
      this.router.navigate([`/themes/${this.slug}`])

     
    }
      
   )
  }
 
  ngOnInit(): void {
  
  }
   
  





}
