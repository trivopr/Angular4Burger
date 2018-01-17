
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) { }

  ngOnInit() {

  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((res: Response) => {
      console.log('Response:', res);
    })
  }

  fetchRecipes() {
    this.dataStorageService.getFsRecipes();
  }

  onSignOut() {
    this.authService.signOut();
  }

}
