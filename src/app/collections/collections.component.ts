import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  @Input() uname:String;
  constructor() { }

  ngOnInit() {
  }

}
