import { Component, OnInit } from '@angular/core';
import { Role } from './role-component';
import { Roles, RoleCategoryTypes } from './role-category-constants';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'role-categories',
    templateUrl: './role-categories.html'
})
export class RoleCategoriesComponent implements OnInit {
  selectedRole: Role;
  roles: Role[];
  links: any[];
  selectedCategory: Role;

  isHidden = true;

    constructor(private router: Router, private authService: AuthService) {

    }
    ngOnInit() { this.getRoles(); }

    onSelect(role: Role): void {

        this.selectedRole = role;

    }
    OnSelectCategory(roleCategory: Role): void {
        this.selectedCategory = roleCategory;

    }

    getRoles(): void {
        this.authService.getRoles('getAllRoles')
            .subscribe(roles => {

                this.roles = roles.collection;
                console.log(this.roles);
            });
    }

}
