import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';

import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart-service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from '../order/order.service';

@NgModule({

    declarations: [InputComponent, RatingComponent, RadioComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RatingComponent, RadioComponent,
        CommonModule, FormsModule, ReactiveFormsModule]

})
export class SharedModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantsService, OrderService ]
        }
    }
};