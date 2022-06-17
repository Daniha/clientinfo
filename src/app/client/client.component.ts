import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  QueryList,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild, ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {FormOptionComponent} from '../form-option/form-option.component';

class ChildComponent {
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit, AfterViewInit {

  clientLevels: any[] = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Gold'},
    {id: 1, name: 'Sapphire'},
    {id: 2, name: 'Pearl'},
  ];

  componentsReferences = Array<ComponentRef<ChildComponent>>();
  public clientName = '';
  public clientSurname;
 // public levelClientSelected: clientLevels = new LevelType();
  public levelClientSelected ;
  // @ViewChild(FormOptionComponent)  childForm: FormOptionComponent;
  // @ViewChild('viewContainerRef', { read: ViewContainerRef })
  // VCR: ViewContainerRef;
  @ViewChildren('cmp') components: QueryList<FormOptionComponent>;
  // constructor(private CFR: ComponentFactoryResolver, private cdref: ChangeDetectorRef ) {}

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    console.log(this.components.toArray());

  }


  // ngAfterViewInit(): void {
  //   const componentFactory = this.CFR.resolveComponentFactory(FormOptionComponent);
  //
  //   const nameComponentRef = this.VCR.createComponent(componentFactory);
  //   const surnameComponentRef = this.VCR.createComponent(componentFactory);
  //   const levelComponentRef = this.VCR.createComponent(componentFactory);
  //   const nameComponent = nameComponentRef.instance;
  //   const surnameComponent = surnameComponentRef.instance;
  //   const levelComponent = levelComponentRef.instance;
  //   nameComponent.label = 'Name';
  //   nameComponent.input.subscribe(that => this.nameSelected(that));
  //   surnameComponent.label = 'Surname';
  //   surnameComponent.input.subscribe(that => this.surnameSelected(that));
  //
  //   levelComponent.label = 'Level';
  //   levelComponent.options = this.clientLevels;
  //   levelComponent.selected.subscribe(that => this.levelSelected(that));
  //
  //   // add reference for newly created component
  //   this.componentsReferences.push(nameComponentRef);
  //   this.componentsReferences.push(surnameComponentRef);
  //   this.componentsReferences.push(levelComponentRef);
  //   this.cdref.detectChanges();
  // }


  public nameSelected(event): void {
    console.log(this.clientName);
    this.clientName = event.target.value;
  }

  surnameSelected(event): void {
    console.log(this.clientSurname);
    this.clientSurname = event.target.value;
  }

  levelSelected(clientLevels): void {
    this.levelClientSelected = clientLevels;
  }

  isReady(): boolean {
    if ( this.clientName && this.clientSurname && this.levelClientSelected ) {
      return false;
    }
  }

  submit(): void {
    return;
  }

  reset(): void {
    console.log(this.clientName);
    const a = this.components.toArray()[0] as FormOptionComponent;
    console.log(a);
    a.myControl.reset();
    const b = this.components.toArray()[1] as FormOptionComponent;
    console.log(b);
    b.myControl.reset();
    const c = this.components.toArray()[2] as FormOptionComponent;
    console.log(c);
    c.myControl.reset();
    // let a = this.componentsReferences[0].instance as FormOptionComponent;
    // a.myControl.reset();
    // let b = this.componentsReferences[1].instance as FormOptionComponent;
    // b.myControl.reset();
  }
}
