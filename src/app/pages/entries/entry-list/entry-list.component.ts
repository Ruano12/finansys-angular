import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries:Entry[] = []

  constructor(private entryService:EntryService) { }

  ngOnInit() {
    this.entryService.getAll().subscribe(data => {
      this.entries = data.sort((a,b) => {
        return b.id - a.id
      }),
      error => alert('Erro ao carregar a lista')
    })
  }

  deleteEntry(entry){
    const mustDelete = confirm('Deseja realmente excluir o lançamento?')

    if(mustDelete){
      this.entryService.delete(entry).subscribe(() => {
        this.entries = this.entries.filter(
          element => element != entry
        ),
        error => alert("Erro ao tentar excluir.")
      })
    }
  }

}
