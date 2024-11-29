import { Injectable } from '@angular/core';
import { Books } from './books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  private booklist: Books[] = [
    {
      bookID: 1,
      bookTitle: 'Hell University Part I ',
      genre: 'Mystery/thriller',
      author: 'KnightInBlack',
      image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1503028304i/36061202.jpg',  
    },

    {
      bookID: 2,
      bookTitle: 'Hell University Part II',
      genre: 'Mystery/thriller',
      author: 'KnightInBlack',
      image:
        'https://images.gr-assets.com/books/1516656793l/38125030.jpg',
    },
    {
      bookID: 3,
      bookTitle: 'Hello, Love, Goodbye.',
      genre: 'Romance',
      author: 'Charmaine Lasar',
      image:
        'https://th.bing.com/th/id/OIP.it1-Jomu56p5832cZe27gAAAAA?rs=1&pid=ImgDetMain ',
    },
    {
      bookID: 4,
      bookTitle: 'Hello, Love, Again.',
      genre: 'Romance',
      author: 'Cathy Garcia-Sampana',
      image:
        'https://a.ltrbxd.com/resized/film-poster/1/1/7/5/2/7/9/1175279-hello-love-again-0-230-0-345-crop.jpg?v=2c587fafb4',
    },
    {
      bookID: 5,
      bookTitle: '2012',
      genre: 'Action/Adventure',
      author: 'Roland Emmerich',
      image:
        'https://picfiles.alphacoders.com/357/thumb-1920-357869.jpg',
    },
    {
      bookID: 6,
      bookTitle: 'The Purge (2013)',
      genre: 'Horror/Tragic',
      author: 'James Demonaco',
      image:
        'https://image.tmdb.org/t/p/original/qRNA7Kzo9GyjVfT33yuoa6bFfYj.jpg',
    },
    {
      bookID: 7,
      bookTitle: 'The Purge: The Election Year (2016) ',
      genre: 'Horror/Tragic',
      author: 'James DeMonaco',
      image:
        'https://th.bing.com/th/id/R.912b0d3eaa68d37da44e702b579102ac?rik=HWd7NXmmy6kK1g&riu=http%3a%2f%2fwww.blackfilm.com%2fread%2fwp-content%2fuploads%2f2016%2f05%2fThe-Purge-Election-Year-poster-2.jpg&ehk=vA9Opc0NZKNKxvZEB5bqOzSRyX1x%2bxzkYLnDnNjrT9I%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      bookID: 8,
      bookTitle: 'The Wrong Turn',
      genre: 'Horror/Tragic',
      author: ' Rob Schmidt',
      image:
        'https://productimages.worldofbooks.com/B008B50WKE.jpg',
    },
    {
      bookID: 9,
      bookTitle: 'Wrong Turn 2: Dead End',
      genre: 'Horror/Tragic',
      author: 'Joe Lynch',
      image:
        'https://coopersbeckett.com/wp-content/uploads/2021/01/44067-wrong-turn-2-dead-end-0-500-0-750-crop-q94yMg.jpeg',
    },
    {
      bookID: 10,
      bookTitle: 'Wrong Turn 3: Left for Dead',
      genre: 'Television Series',
      author: "Declan O'Brien",
      image:
        'https://th.bing.com/th/id/OIP.HAd2AxFnPGDZi6SOJ_V3_QHaKY?rs=1&pid=ImgDetMain',
    },
  ];

  getBooks(): Books[] {
    return this.booklist;
  }
}
