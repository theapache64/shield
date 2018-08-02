export class GrammarUtils {
  static getProper(count: number, singular: string): any {
    return count > 1 ? `${singular}s` : singular;
  }

}
