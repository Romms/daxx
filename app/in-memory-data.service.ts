export class InMemoryDataService {
  createDb() {
    let products = [
      { id: 1, name: 'Mac', description: 'Explore the world of Mac. Check out the new MacBook Pro, MacBook, iMac, and more. Visit the Apple site to learn, buy, and get support.' },
      { id: 2, name: 'iPad', description: 'iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS mobile operating system.' },
      { id: 3, name: 'iPhone', description: 'Explore iPhone, the world\'s most powerful personal device' },
      { id: 4, name: 'Watch', description: 'The new Apple Watch is the ultimate device for your healthy life.' },
      { id: 5, name: 'TV', description: '' },
      { id: 6, name: 'Music', description: '' },
      { id: 6, name: 'Support', description: 'Apple support is here to help. Learn more about popular topics and find resources that will help you with all of your Apple products.' },
    ];
    return { products };
  }
}
