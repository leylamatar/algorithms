import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'algorithms';
  searchTerm: string = '';
  //en kucuk eleman
  dizi: number[] = [];
  enKucuk: number | undefined;
  //asalsayi
  asalSayi!: number;
  asalN: string = '';
  //bubble sort alg
  orjinalDizi: number[] = [];
  siralanmisdizi: number[] = [];
  //ikinci dereceden denklem
  x: number = 0;
  y: number = 0;
  z: number = 0;
  kokler: number[] = [];

  //----1-----En Kucuk Elemanı Bulan algoritma
  enKucukEleman(): void {
    this.dizi = [];

    for (let i = 0; i < 10; i++) {
      this.dizi[i] = Math.floor(Math.random() * 100);
    }

    this.enKucuk = this.dizi[0];

    for (let i = 1; i < this.dizi.length; i++) {
      if (this.dizi[i] < this.enKucuk) {
        this.enKucuk = this.dizi[i];
      }
    }
  }

  onButtonClick(): void {
    this.enKucukEleman();
  }

  //---2---asal sayi bulma algoritması
  asalSayiBulma(): void {
    let sayac = 0;

    this.asalN = '';
    for (let i = 2; i < this.asalSayi; i++) {
      if (this.asalSayi % i == 0) {
        sayac++;
        break;
      }
    }
    if (sayac > 0) {
      this.asalN = 'Asal Sayi değildir';
    } else {
      this.asalN = 'Asal Sayidir ';
    }
  }
  clickAsalSayi(): void {
    this.asalSayi = parseInt(this.searchTerm, 10);
    this.asalSayiBulma();
  }

  //------3----bubbleSort algortiması
  bubbleSort(): void {
    for (let i = 0; i < 10; i++) {
      this.orjinalDizi[i] = Math.floor(Math.random() * 100);
    }

    this.siralanmisdizi = [...this.orjinalDizi];

    let len = this.siralanmisdizi.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (this.siralanmisdizi[j] > this.siralanmisdizi[j + 1]) {
          let tmp = this.siralanmisdizi[j];
          this.siralanmisdizi[j] = this.siralanmisdizi[j + 1];
          this.siralanmisdizi[j + 1] = tmp;
        }
      }
    }
  }
  buttonClick(): void {
    this.bubbleSort();
  }

  //----4----ax2+ bx +c = 0 tipindeki bir denklemin köklerini bulan algoritma

  denklemCozme(): number[] {
   
    let delta = this.y * this.y - 4 * this.x * this.z;
    let kokler: number[] = [];

    if (delta < 0) {
    } else if (delta === 0) {
      let kok = -this.y / (2 * this.x);
      kokler.push(kok);
    } else {
      let kok1 = (-this.y + Math.sqrt(delta)) / (2 * this.x);
      let kok2 = (-this.y - Math.sqrt(delta)) / (2 * this.x);
      kokler.push(kok1, kok2);
    }

    return kokler;
  }
}
