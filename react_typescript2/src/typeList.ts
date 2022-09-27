export {

};

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "A";

// Array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];

// any なるべく使わない
let any1: any = false;

// void 戻り値がない関数 記述しなくても暗黙的に処理される
const funcA = (): void => {
    const test = "TEST";
}

// null
let null1: null = null;

// undefind
let underfind1: undefined = undefined;

// object あまり使わない
let obj1: object = {};
let obj2: { id: number, name: string } = { id: 0, name: "AAA" };