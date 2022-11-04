import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scissors',
  templateUrl: './scissors.component.html',
  styleUrls: ['./scissors.component.css'],
})
export class ScissorsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onKrypto() {
    this.router.navigate(['kryptonite'], { relativeTo: this.route });
  }
}
