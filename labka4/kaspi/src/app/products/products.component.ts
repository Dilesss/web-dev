import { Component } from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';

interface Product {
  images: string[];
  name: string;
  description: string;
  rating: number;
  kaspiLink: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [
    NgClass,
    NgForOf,
    NgOptimizedImage
  ],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      images: ['https://picsum.photos/100/150?random=1', 'https://picsum.photos/100/150?random=2', 'https://picsum.photos/100/150?random=3'],
      name: 'Google Pixel 7 Pro 12/512 White',
      description: 'Flagship smartphone with Tensor G2 chip and 120Hz display',
      rating: 4.7,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-512-gb-belyi-107402585/?c=750000000'
    },
    {
      images: ['https://picsum.photos/100/150?random=4', 'https://picsum.photos/100/150?random=5', 'https://picsum.photos/100/150?random=6'],
      name: 'Google Pixel 7 Pro 12/512 Gray',
      description: 'Premium Android phone with 50MP camera system',
      rating: 4.6,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-512-gb-seryi-110050273/?c=750000000'
    },
    {
      images: ['https://picsum.photos/100/150?random=7', 'https://picsum.photos/100/150?random=8', 'https://picsum.photos/100/150?random=9'],
      name: 'Google Pixel 7 Pro 12/128 Gray',
      description: 'Powerful mobile device with LTPO OLED display',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-seryi-107066184/?c=750000000'
    },
    {
      images: ['https://picsum.photos/100/150?random=10', 'https://picsum.photos/100/150?random=11', 'https://picsum.photos/100/150?random=12'],
      name: 'Google Pixel 7 8/128 White',
      description: 'Compact flagship with advanced AI features',
      rating: 4.4,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-belyi-106971867/?c=750000000'
    },
    {
      images: ['https://picsum.photos/100/150?random=13', 'https://picsum.photos/100/150?random=14', 'https://picsum.photos/100/150?random=15'],
      name: 'Google Pixel 9 12/256 Black',
      description: 'Latest model with Tensor G4 processor',
      rating: 4.9,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-9-12-gb-256-gb-chernyi-122384541/?c=750000000'
    },
    {
      images: ['https://picsum.photos/100/150?random=16', 'https://picsum.photos/100/150?random=17', 'https://picsum.photos/100/150?random=18'],
      name: 'Google Pixel 7 8/128 Green',
      description: 'Eco-friendly smartphone with IP68 rating',
      rating: 4.3,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-zelenyi-106971462/?c=750000000'
    },
    {
      images: ['https://picsum.photos/100/150?random=19', 'https://picsum.photos/100/150?random=20', 'https://picsum.photos/100/150?random=21'],
      name: 'Google Pixel 9 12/128 Gold',
      description: 'Luxury edition with ceramic back panel',
      rating: 4.8,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-9-12-gb-128-gb-zolotistyi-122709533/?c=750000000'
    },
    {
      images: ['https://picsum.photos/100/150?random=22', 'https://picsum.photos/100/150?random=23', 'https://picsum.photos/100/150?random=24'],
      name: 'Google Pixel 8a 8/128 Black',
      description: 'Affordable flagship with 120Hz OLED',
      rating: 4.6,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-8a-8-gb-128-gb-chernyi-119270938/?c=750000000'
    },
    {
      images: ['https://picsum.photos/100/150?random=25', 'https://picsum.photos/100/150?random=26', 'https://picsum.photos/100/150?random=27'],
      name: 'Google Pixel 9 Pro XL 16/256',
      description: 'Ultra-premium phablet with 6.8" display',
      rating: 4.9,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-9-pro-xl-16-gb-256-gb-chernyi-122710862/?c=750000000'
    },
    {
      images: ['https://picsum.photos/100/150?random=28', 'https://picsum.photos/100/150?random=29', 'https://picsum.photos/100/150?random=30'],
      name: 'Google Pixel 7a 8/128 White',
      description: 'Mid-range champion with flagship camera',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7a-8-gb-128-gb-belyi-110489778/?c=750000000'
    }
  ];

  shareViaWhatsApp(link: string) {
    window.open(`https://api.whatsapp.com/send?text=Check this Google Pixel: ${encodeURIComponent(link)}`, '_blank');
  }

  shareViaTelegram(link: string) {
    window.open(`https://telegram.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }

  onChange(event: any) {
    this.products = this.products.filter((el) => el.name.includes(event?.target?.value))
  }

  getStars(rating: number) {
    return Array(5).fill(0).map((_, i) => i < rating);
  }
}
