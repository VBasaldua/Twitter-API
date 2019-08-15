import { Component, OnInit } from '@angular/core';
import { TwitterServiceService } from 'src/app/twitter-service.service';


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor(private twitterSrevice: TwitterServiceService) { }

  ngOnInit()
  {
    console.log("Twitter API");
    let gg: OnInit;
    // gg['name'] = 'Annie Lavandier';
    // gg['screen_name'] = 'amlavandier';
    // gg['id'] = 0;
    // gg['time_zone'] = null;
    // gg['profile_location']=null;
  }
  onClickMe() {
    this.twitterSrevice.createUser('slamchez').subscribe(user => {
      console.log(user);
    })
  }

  

}
