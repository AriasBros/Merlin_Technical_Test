interface ColorProperties {
  readonly code: string;
  readonly image: string;
  readonly name: string;
}

export interface ColorInterface extends ColorProperties {
  readonly id: string;
}

export class ColorModel implements ColorInterface {
  readonly code: string;
  readonly image: string;
  readonly name: string;

  get id() {
    return this.code;
  }

  constructor({ code, name, image }: ColorProperties) {
    this.code = code;
    this.name = name;
    this.image = image;
  }
}
