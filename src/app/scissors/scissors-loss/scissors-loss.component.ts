import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scissors-loss',
  templateUrl: './scissors-loss.component.html',
  styleUrls: ['./scissors-loss.component.css'],
})
export class ScissorsLossComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onKrypto() {
    this.router.navigate(['kryptonite'], { relativeTo: this.route });
  }
}
