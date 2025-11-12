export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  color: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Leather Jacket',
    price: 12999,
    image: '/placeholder.svg',
    category: 'Jackets',
    description: 'Premium genuine leather jacket with a timeless design. Features multiple pockets, YKK zippers, and a comfortable cotton lining.',
    color: '#1a1a1a',
  },
  {
    id: '2',
    name: 'Denim Slim Fit Jeans',
    price: 2499,
    image: '/placeholder.svg',
    category: 'Jeans',
    description: 'Comfortable slim-fit denim jeans with stretch fabric. Perfect for casual and semi-formal occasions.',
    color: '#2c5aa0',
  },
  {
    id: '3',
    name: 'Premium Cotton Shirt',
    price: 1899,
    image: '/placeholder.svg',
    category: 'Shirts',
    description: 'Elegant cotton formal shirt with a modern fit. Wrinkle-resistant and breathable fabric.',
    color: '#ffffff',
  },
  {
    id: '4',
    name: 'Running Sneakers',
    price: 4999,
    image: '/placeholder.svg',
    category: 'Shoes',
    description: 'Lightweight running shoes with advanced cushioning technology and breathable mesh upper.',
    color: '#3498db',
  },
  {
    id: '5',
    name: 'Casual Polo T-Shirt',
    price: 1299,
    image: '/placeholder.svg',
    category: 'T-Shirts',
    description: 'Comfortable polo t-shirt in premium cotton blend. Perfect for casual outings.',
    color: '#27ae60',
  },
  {
    id: '6',
    name: 'Smart Watch',
    price: 8999,
    image: '/placeholder.svg',
    category: 'Accessories',
    description: 'Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications.',
    color: '#34495e',
  },
  {
    id: '7',
    name: 'Winter Hoodie',
    price: 2999,
    image: '/placeholder.svg',
    category: 'Hoodies',
    description: 'Warm and comfortable hoodie with fleece lining. Perfect for cold weather.',
    color: '#e74c3c',
  },
  {
    id: '8',
    name: 'Formal Blazer',
    price: 7999,
    image: '/placeholder.svg',
    category: 'Blazers',
    description: 'Sophisticated blazer tailored for formal occasions. Made from premium wool blend.',
    color: '#2c3e50',
  },
];
