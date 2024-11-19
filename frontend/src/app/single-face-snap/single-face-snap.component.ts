import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink, CommonModule],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  ButtonText!: string;
  

  constructor(private faceSnapsService: FaceSnapsService, 
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.ButtonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(): void {
  /*  if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    } */
  }

}

