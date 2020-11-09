import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { RouterModule } from '@angular/router';
import { SupplierRoutes } from '../RoutingModule/supplierRoutes.routes';

@NgModule({
    declarations:[SupplierComponent],
    imports: [CommonModule, RouterModule.forChild(SupplierRoutes)],
    providers:[]
})

export class SupplierModule {}