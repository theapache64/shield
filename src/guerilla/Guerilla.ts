export class Guerilla {
  private static instance: Guerilla;

  public static getInstance(): Guerilla {
    if (this.instance == null) {
      this.instance = new Guerilla();
    }
    return this.instance;
  }
  
}
