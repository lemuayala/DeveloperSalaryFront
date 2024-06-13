import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SalaryService } from '../../services/salary.service';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-salary',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.css',
})
export class SalaryComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'position', 'salary'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private salaryService: SalaryService) {
    this.getSalaries();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getSalaries() {
    this.salaryService.getSalaries().subscribe(
      (r) => {
        console.log(r);
        this.dataSource.data = r.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
