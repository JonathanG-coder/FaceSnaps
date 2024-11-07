import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;


  ngOnInit(): void {
      this.mySnap = new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        10
      );

      this.myOtherSnap = new FaceSnap(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1280px-Three_Rock_Mountain_Southern_Tor.jpg',
        new Date(),
        6
      );

      this.myLastSnap = new FaceSnap(
        'Un bon repas',
        'Mmmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        10
      );

      this.myOtherSnap.setLocation('A la montagne');

  }
}
