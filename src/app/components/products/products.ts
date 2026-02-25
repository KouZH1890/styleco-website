import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  // Added 'category' property to your existing data
  products = [
    { name: 'Basic Tee', price: 'RM39', image: 'assets/t1.jpg', category: 'Tops' },
    { name: 'Oversized Shirt', price: 'RM59', image: 'assets/t2.jpg', category: 'Tops' },
    { name: 'Ribbed Tank Top', price: 'RM59', image: 'assets/t5.avif', category: 'Tops' },
    { name: 'Heavyweight Tee', price: 'RM59', image: 'assets/t6.avif', category: 'Tops' },
    { name: 'Pointelle Knit Top', price: 'RM59', image: 'assets/t7.avif', category: 'Tops' },
    { name: 'Hoodie', price: 'RM89', image: 'assets/t3.png', category: 'Outerwear' },
    { name: 'Jacket', price: 'RM129', image: 'assets/t4.jpg', category: 'Outerwear' },
    { name: 'Cropped Faux Leather Jacket', price: 'RM129', image: 'assets/t8.avif', category: 'Outerwear' },
    { name: 'Technical Trench Coat', price: 'RM129', image: 'assets/t9.avif', category: 'Outerwear' },
    { name: 'Quilted Puffer Bomber', price: 'RM129', image: 'assets/t10.jpg', category: 'Outerwear' },
  ];

  selectedCategory: string = 'All';

  // This logic filters the items for the @for loop
  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(item => item.category === this.selectedCategory);
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }
}