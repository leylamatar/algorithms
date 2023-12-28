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
  reelkok: string = '';
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
    this.reelkok = ' ';

    if (delta < 0) {
      this.reelkok = 'reel kök yoktur';
    } else if (delta === 0) {
      let kok = -this.y / (2 * this.x);
      kokler.push(kok);
    } else {
      let kok1 = (-this.y + Math.sqrt(delta)) / (2 * this.x);
      let kok2 = (-this.y - Math.sqrt(delta)) / (2 * this.x);
      kokler.push(kok1, kok2);
    }
    console.log('Kökler:', kokler);
    return kokler;
  }
  denklembuton(): void {
    this.denklemCozme();
    this.kokler = this.denklemCozme();
  }

  //----5----doğum gününe kalan ay
  birthday: string = '';
  currentDate: Date = new Date();
  remainingMonths: number | undefined;
  nextBirthdayMonths: number | undefined;

  calculateRemainingMonths(): void {
    const birthdayDate: Date = new Date(this.birthday);
    const monthsDiff: number =
      (birthdayDate.getFullYear() - this.currentDate.getFullYear()) * 12 +
      birthdayDate.getMonth() -
      this.currentDate.getMonth();
    this.remainingMonths = monthsDiff;

    if (this.remainingMonths < 0) {
      birthdayDate.setFullYear(this.currentDate.getFullYear() + 1);
      const nextMonthsDiff: number =
        (birthdayDate.getFullYear() - this.currentDate.getFullYear()) * 12 +
        birthdayDate.getMonth() -
        this.currentDate.getMonth();
      this.nextBirthdayMonths = nextMonthsDiff;
    }
  }

  //---6----faktöryel hesaplama
  userInput: number | undefined;
  factorialResult: number | undefined;

  calculateFactorial() {
    if (this.userInput === undefined || this.userInput < 0) {
      this.factorialResult = undefined;
      return;
    }

    let result = 1;
    for (let i = 2; i <= this.userInput; i++) {
      result *= i;
    }
    this.factorialResult = result;
  }

  //---7---vize ve final sınavın ortalamasını hesaplayıp ekrana sınıf geçme kalma durumunu ekrana yazan program . (vize = %40,final=%60)
  vize: number | undefined;
  final: number | undefined;
  ortalama: number | undefined;
  durum: string | undefined;

  calculateAverage() {
    if (this.vize === undefined || this.final === undefined) {
      this.ortalama = undefined;
      this.durum = undefined;
      return;
    }
    this.ortalama = this.vize * 0.4 + this.final * 0.6;
    this.durum = this.ortalama >= 50 ? 'Geçti' : 'Kaldı';
  }
  //----8----Dairenin alanı ve çevresi hesaplama

  yaricap: number | undefined;
  alan: number | undefined;
  cevre: number | undefined;

  calculateAreaAndPerimeter() {
    if (this.yaricap === undefined || this.yaricap <= 0) {
      this.alan = undefined;
      this.cevre = undefined;
      return;
    }
    this.alan = Math.PI * this.yaricap * this.yaricap;
    this.cevre = 2 * Math.PI * this.yaricap;
  }

  //--9---Kdv hesaplama
  fiyat: number | undefined;
  kdvOrani: number | undefined;
  kdv: number | undefined;
  yeniFiyat: number | undefined;

  calculateKdv() {
    if (this.fiyat === undefined || this.kdvOrani === undefined) {
      this.kdv = undefined;
      this.yeniFiyat = undefined;
      return;
    }

    this.kdv = this.fiyat * (this.kdvOrani / 100);
    this.yeniFiyat = this.fiyat + this.kdv;
  }
  //---10--- yapılan Zam miktarına göre yeni maaşları hesaplama. çalışma süresine göre extra zam
  maas: number | undefined;
  zamOrani: number | undefined;
  zam: number | undefined;
  yeniMaas: number | undefined;
  calismaSuresi: number | undefined;
  calculateSalary() {
    if (
      this.maas === undefined ||
      this.zamOrani === undefined ||
      this.calismaSuresi === undefined
    ) {
      this.zam = undefined;
      this.yeniMaas = undefined;
      this.calismaSuresi = undefined;
      return;
    }

    this.zam = this.maas * (this.zamOrani / 100);

    // Eğer çalışma süresi 3 yıldan fazlaysa +%5 zam yap
    if (this.calismaSuresi >= 3 && this.calismaSuresi < 8) {
      this.zam = this.zam + this.maas * 0.5;
    } else if (this.calismaSuresi >= 8) {
      this.zam = this.zam + this.maas * 0.8;
    }

    this.yeniMaas = this.maas + this.zam;
  }
  //---11--- girilen sayıya göre ağaç çizen algoritma
  height: number | undefined;
  tree: string[] = [];

  drawTree() {
    this.tree = [];

    if (this.height !== undefined) {
      const height = this.height;

      for (let i = 1; i <= height; i++) {
        let spaces = height - i;
        let stars = 2 * i - 1;

        let row = '';
        for (let j = 0; j < spaces; j++) {
          row += ' ';
        }

        for (let j = 0; j < stars; j++) {
          row += '*';
        }

        this.tree.push(row);
      }
    }
  }
  //---12---eğitim seviyesine göre burs ücreti belirleme algoritması
  egitimDurumu: number | undefined;
  sonuc: string | undefined;
  bursArtis: number | undefined;
  scholarship() {
    let burs = 1000;

    if (this.egitimDurumu !== undefined) {
      let bursMiktari;

      switch (this.egitimDurumu) {
        case 1: // Lise durumu: burs * %30
          bursMiktari = burs * 0.3;
          burs += bursMiktari;
          break;
        case 2: // Lisans durumu: burs * %50
          bursMiktari = burs * 0.5;
          burs += bursMiktari;
          break;
        case 3: // Yüksek Lisans durumu: burs * %70
          bursMiktari = burs * 0.7;
          burs += bursMiktari;
          break;
        default:
          this.sonuc = 'Eğitim durumu geçerli değil. Lütfen 1, 2 veya 3 girin.';
          return;
      }

      this.sonuc = `Burs miktarı: ${burs}`;
    }
  }
  //---13---Girilen sayi mükemmel sayi olup olmadığını ekrana yazan algoritma

  girilenSayi: number | undefined;
  sayininTipi: string | undefined;

  perfectNum() {
    if (this.girilenSayi !== undefined) {
      const sayi = this.girilenSayi;

      const bolenToplaminiBul = (sayi: number): number => {
        let toplam = 0;

        for (let i = 1; i <= sayi / 2; i++) {
          if (sayi % i === 0) {
            toplam += i;
          }
        }

        return toplam;
      };

      const toplam = bolenToplaminiBul(sayi);

      if (toplam === sayi) {
        this.sayininTipi = `${sayi} mükemmel bir sayıdır.`;
      } else {
        this.sayininTipi = `${sayi} mükemmel bir sayı değildir.`;
      }
    }
  }
  //---14--- Girilen Texti Ters Çeviren algoritma
  girilenMetin: string | undefined;
  textsonuc: string | undefined;

  reverseText() {
    if (this.girilenMetin !== undefined) {
      this.textsonuc = this.girilenMetin.split('').reverse().join('');
    }
  }

  //--15---karakök hesaplama
  num: number | undefined;
  karakoksonuc: string | undefined;

  karekokHesapla() {
    if (this.num !== undefined && this.num >= 0) {
      const tahmin = this.num / 2;
      const epsilon = 0.0001;
      let yaklasikKarekok = tahmin;

      while (Math.abs(yaklasikKarekok * yaklasikKarekok - this.num) > epsilon) {
        yaklasikKarekok = (yaklasikKarekok + this.num / yaklasikKarekok) / 2;
      }

      this.karakoksonuc = `Girilen sayının yaklaşık karekökü: ${yaklasikKarekok.toFixed(
        2
      )}`;
    } else {
      this.karakoksonuc = 'Geçerli bir sayı girmelisiniz.';
    }
  }
  //---16---1’den N’e kadar olan çift tamsayıların toplamını hesaplayan algoritma
  inputSayi: number | undefined;
  toplamsonuc: number | undefined;

  toplamHesapla() {
    if (this.inputSayi !== undefined && this.inputSayi >= 0) {
      this.toplamsonuc = this.toplamBul(this.inputSayi);
    } else {
      this.toplamsonuc = undefined;
    }
  }

  private toplamBul(sayi: number): number {
    let toplam = 0;

    for (let i = 2; i <= sayi; i += 2) {
      toplam += i;
    }

    return toplam;
  }
//----17---.Bir sayı dizisinin en büyük elemanını bulan programın algoritma
sayilar: number[] = [0, 0, 0, 0, 0];
  enBuyukSayi: { sayi: number, indeks: number } | undefined;

  enBuyukElemaniBul() {
    this.enBuyukSayi = this.bulEnBuyukSayi(this.sayilar);
  }

  private bulEnBuyukSayi(dizi: number[]): { sayi: number, indeks: number } | undefined {
    if (dizi.length === 0) {
      return undefined;
    }

    let enBuyuk = dizi[0];
    let indeks = 0;

    for (let i = 1; i < dizi.length; i++) {
      if (dizi[i] > enBuyuk) {
        enBuyuk = dizi[i];
        indeks = i+1;
      }
    }

    return { sayi: enBuyuk, indeks: indeks };
  }
  //--18--Kullanıcının girdiği başlangıç ve bitiş değerleri arasında kalan tek sayıların toplamını bulan algoritma
  baslangicDeger: number | undefined;
  bitisDeger: number | undefined;
  toplam: number | undefined;

  tekSayilarToplam() {
    if (this.baslangicDeger !== undefined && this.bitisDeger !== undefined) {
      this.toplam = this.hesaplaTekSayilarToplam(this.baslangicDeger, this.bitisDeger);
    } else {
      this.toplam = undefined;
    }
  }

  private hesaplaTekSayilarToplam(baslangic: number, bitis: number): number {
    let toplam = 0;
    for (let i = baslangic; i <= bitis; i++) {
      if (i % 2 !== 0) {
        toplam += i;
      }
    }
    return toplam;
  }

}
