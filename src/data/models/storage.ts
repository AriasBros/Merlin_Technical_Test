interface StorageProps {
  readonly capacity: string;
  readonly price: number;
}

export interface StorageInterface extends StorageProps {
  readonly id: string;
}

export class StorageModel implements StorageInterface {
  readonly capacity: string;
  readonly price: number;

  get id() {
    return this.capacity;
  }

  constructor({ capacity, price }: StorageProps) {
    this.capacity = capacity;
    this.price = price;
  }
}
