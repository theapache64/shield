export class NumberUtils {

  // To prevent repetition
  private static readonly NUMBERS_GENERATED: number[] = [];

  /**
   * Generates 100% random number
   * @param {number} length
   * @returns {number}
   */
  public static getRandomNo = (length: number): number => {

    const lowerLimit: number = parseInt(`1${NumberUtils.repeat('0', length - 1)}`, 10);
    const upperLimit: number = parseInt(NumberUtils.repeat('9', length), 10);

    const number = Math.floor(Math.random() * upperLimit) + lowerLimit;

    if (NumberUtils.NUMBERS_GENERATED.indexOf(number) !== -1) {
      console.log('UnRandomFound: ', number);
      return NumberUtils.getRandomNo(length);
    }

    // Adding to gen list
    NumberUtils.NUMBERS_GENERATED.push(number);

    return number;
  }

  public static getRandomId = () => NumberUtils.getRandomNo(10);

  /**
   * Repeats given string
   * @param {string} string
   * @param {number} length
   * @returns {string}
   */
  private static repeat(string: string, length: number): string {
    const arr: string[] = [];
    for (let i = 0; i < length; i = i + 1) {
      arr.push(string);
    }
    return arr.join('');
  }
}
