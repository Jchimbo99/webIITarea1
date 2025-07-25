import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Producto } from './Producto';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Producto[]>('assets/productos.json').subscribe(data => {
      this.productos = data;
    });
  }
}
