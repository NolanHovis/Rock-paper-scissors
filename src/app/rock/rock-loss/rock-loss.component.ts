import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rock-loss',
  templateUrl: './rock-loss.component.html',
  styleUrls: ['./rock-loss.component.css'],
})
export class RockLossComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onKrypto() {
    this.router.navigate(['kryptonite'], { relativeTo: this.route });
  }
}
