import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, Form, ControlValueAccessor} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Option} from '@angular/cli/models/interface';
import {MatAutocompleteModule, MatAutocomplete} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-form-option',
  templateUrl: './form-option.component.html',
  styleUrls: ['./form-option.component.css']
})
export class FormOptionComponent implements OnInit, OnChanges {

  myControl = new FormControl('');
  @ViewChild(MatAutocomplete) MatAutocomplete: MatAutocomplete;
  @Input() options: any;
  @Input() label: string;
  @Output() selected = new EventEmitter <any>();
  @Output() input = new EventEmitter <any>();
  filteredOptions: Observable<any>;
  active: any;

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options ? this.options.filter(option => option.name.toLowerCase().includes(filterValue)) : [];
  }

  public clearValue(): void{
    this.myControl.setValue('');
    this.selected.emit(0);
  }

  setActive(option: Option): void{
    this.active = option;
    this.selected.emit(this.active);
  }

  setInput(event: Event): void{
    console.log(this.options);
    this.active = event;
    this.input.emit(this.active);
  }

}
