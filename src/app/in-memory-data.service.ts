import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books: Book[] = [
      {
        id: 11,
        name: 'Python编程 从入门到实践 Python3.5编程',
        price: 62.00,
        thumb: 'https://img14.360buyimg.com/n7/jfs/t17953/201/1450663539/451183/3262b8de/5acb3627N8191c867.jpg'
      },
      {
        id: 12,
        name: 'Python基础教程（第3版） Python3.5编',
        price: 66.50,
        thumb: 'https://img14.360buyimg.com/n7/jfs/t16000/280/1739586023/148652/7169502e/5a5c6d05N0f2172f9.jpg'
      },
      {
        id: 13,
        name: '零基础学Python（全彩版） 入门自学教',
        price: 57.90,
        thumb: 'https://img10.360buyimg.com/n7/jfs/t27436/45/2228204343/305352/7f29038c/5bfcf7d1Nc2676c7c.jpg'
      },
      {
        id: 14,
        name: 'Python从入门到项目实践（全彩版） ',
        price: 72.40,
        thumb: 'https://img14.360buyimg.com/n7/jfs/t29893/68/694402919/268085/f421abb2/5bfba74bNc730174e.jpg'
      },
      {
        id: 15,
        name: '利用Python进行数据分析（原书第2版）',
        price: 94.00,
        thumb: 'https://img10.360buyimg.com/n7/jfs/t20551/357/2418763027/223698/9ba75f4b/5b56d10eNdf8ae612.jpg'
      },
      {
        id: 16,
        name: 'Java编程思想（第4版） ',
        price: 86.90,
        thumb: 'https://img14.360buyimg.com/n7/jfs/t2191/111/699154754/198998/32d7bfe0/5624b582Nbc01af5b.jpg'
      },
      {
        id: 17,
        name: '算法导论（原书第3版）/计算机科学丛书',
        price: 102.5,
        thumb: 'https://img10.360buyimg.com/n7/g9/M03/10/0C/rBEHalDFX10IAAAAAAMtdd_bKwEAADM6gOC6NoAAy2N265.jpg'
      },
      {
        id: 18,
        name: 'Python核心编程（第3版） 畅销经典的Python',
        price: 78.3,
        thumb: 'https://img13.360buyimg.com/n7/jfs/t2872/264/1116083011/454335/559bf2e/573541a7N88b32916.jpg'
      }
    ];

    return {books};
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}
