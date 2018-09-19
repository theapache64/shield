import { materialColors } from './res/MaterialColors';

type Theme = 'light' | 'dark';

export class Guerilla {

  private static instance: Guerilla;

  // vars with default values
  private colorPrimary: string;
  private colorPrimaryDark: string;
  private headerTitleColor: string;
  private headerIconColor: string;
  private headerIconSize: number;

  public static getInstance(): Guerilla {
    if (this.instance == null) {
      this.instance = new Guerilla();
      this.instance.setHeaderTheme('light');
      this.instance.colorPrimary = materialColors.BLUE[500];
      this.instance.colorPrimaryDark = materialColors.BLUE[700];
      this.instance.headerIconSize = 20;
    }
    return this.instance;
  }
  getHeaderIconSize(): number {
    return this.headerIconSize;
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

  setHeaderTheme(theme: Theme): any {
    const color = theme === 'light' ? materialColors.GREY[50] : materialColors.GREY[900];
    this.headerTitleColor = color;
    this.headerIconColor = color;
    return this;
  }

  getHeaderIconColor(): string {
    return this.headerIconColor;
  }
}
