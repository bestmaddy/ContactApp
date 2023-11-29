import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Contact } from './contact';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InTouch';
  data: any;
  searchText!: '';
  searchData: any;
  SortBy!: string;
  isedit: boolean = true;
  isSelect: boolean = true;
  formData: Contact = new Contact;

  constructor(private service: ServiceService, private http: HttpClient) {

    service.getContact().subscribe(item => {
      console.log("Data", item)
      this.data = item;
      this.searchData = this.data;

    })

  }
  SortByFun(val: string) {
    console.log("val", val)
    this.isSelect = false
  }
  search(value: string): void {
    console.log(value, this.SortBy)
    if (this.SortBy != " ") {
      this.data = this.searchData.filter((val: any) =>
        val[this.SortBy].toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  contack_click(val: Contact) {
    console.log(val)
    this.formData = val
  }

}
