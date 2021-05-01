import { Injectable, Injector } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';

import { Entry } from './entry.model';
import { CategoryService } from '../../categories/shared/category.service';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector:Injector, private categoryService:CategoryService) {
    super("api/entries", injector, Entry.fromJson);
  }

  public create(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.create.bind(this));
  }

  public update(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.update.bind(this));  
  }

  private setCategoryAndSendToServer(entry: Entry, sendFn: any) : Observable<Entry>{
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;

        return sendFn(entry);
      }),
      catchError(this.handleError)
    ) 
  }
}
