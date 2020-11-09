import { HomeComponent } from '../Home/Home.component';
export const MainRoutes=[
    {path: '', component: HomeComponent },
    {path: 'supplier', loadChildren: ()=>import('../SupplierModule/supplier.module').then(m => m.SupplierModule ) },
    {path: 'customer', loadChildren: ()=>import('../CustomerModule/customer.module').then(m => m.CustomerModule ) },
    {path: 'customer/:id', loadChildren: ()=>import('../CustomerModule/customer.module').then(m => m.CustomerModule ) },
    {path: '**', loadChildren: ()=>import('../CustomerModule/customer.module').then(m => m.CustomerModule ) },
];
