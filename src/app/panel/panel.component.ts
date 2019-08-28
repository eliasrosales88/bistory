import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  panelInfo: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.panelInfo = {
      id: this.route.snapshot.params['id']
    };
    this.route.params.subscribe((params: Params) => {
      this.panelInfo.id = params['id'];
      console.log(this.panelInfo.id);
    });
  }

}
