import { materialColors } from './res/MaterialColors';

type Theme = 'light' | 'dark';

export class Guerilla {
  
  // vars with default values
  private colorPrimary: string = materialColors.BLUE[500];
  private colorPrimaryDark: string = materialColors.BLUE[700];
  private headerTitleColor: string = materialColors.GREY[50];

  private static instance: Guerilla;

  public static getInstance(): Guerilla {
    if (this.instance == null) {
      this.instance = new Guerilla();
    }
    return this.instance;
  }

  setColorPrimary(colorPrimary: string): Guerilla {
    this.colorPrimary = colorPrimary;
    return this;
  }

  setColorPrimaryDark(colorPrimaryDark: string): Guerilla {
    this.colorPrimaryDark = colorPrimaryDark;
    return this;
  }

  getColorPrimary(): string {
    return this.colorPrimary;
  }

  getColorPrimaryDark(): string {
    return this.colorPrimaryDark;
  }

  setHeaderTitleColor(headerTitleColor: string): Guerilla {
    this.headerTitleColor = headerTitleColor;
    return this;
  }

  getHeaderTitleColor(): string {
    return this.headerTitleColor;
  }



}
