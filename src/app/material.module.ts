import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatGridListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule,
        MDBBootstrapModule.forRoot(),
        MatCardModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule,
        MDBBootstrapModule,
        MatCardModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatGridListModule
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class MaterialModule { }
