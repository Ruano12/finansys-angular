import { Injectable } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

import { Injector } from "@angular/core";

import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseResourceService<Category> {
  constructor(protected injector:Injector) { 
    super("api/categories", injector, Category.fromJson);
  }  
}
