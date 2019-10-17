import { Component } from '@angular/core';
import { Role } from '../app/role-categories/role-component';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    constructor(private router: Router, private authService: AuthService) {
    }
    name = 'Angular';
    // roles: Role[];
    // roles = Roles;
    selectedRole: Role;
    roles: Role[];
    links: any[];
    selectedCategory: Role;

    isHidden = true;
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {  this.getLinks();
                  console.log(this.links); }

    onSelect(role: Role): void {

        this.selectedRole = role;
    }
    OnSelectCategory(roleCategory: Role): void {
        this.selectedCategory = roleCategory;

    }
    getLinks(): void {
        this.authService.getLinks('getAllLinks').subscribe(links => { this.links = links.collection; });
    }
    onNavigate() {
      this.router.navigate(['jumpstart/:id/:name']);
    }
}
