import { materialColors } from './res/MaterialColors';

export class Guerilla {

  // vars with default values
  private colorPrimary: string = materialColors.BLUE[500];
  private colorPrimaryDark: string = materialColors.BLUE[700];

  private static instance: Guerilla;

  public static getInstance(): Guerilla {
    if (this.instance == null) {
      this.instance = new Guerilla();
    }
    return this.instance;
  }

  setColorPrimary(colorPrimary: string): any {
    this.colorPrimary = colorPrimary;
  }

  setColorPrimaryDark(colorPrimaryDark: string): any {
    this.colorPrimaryDark = colorPrimaryDark;
  }

  getColorPrimary(): string {
    return this.colorPrimary;
  }

  getColorPrimaryDark(): string {
    return this.colorPrimaryDark;
  }

}
