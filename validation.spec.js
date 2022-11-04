// validation.spec.js

import val from "./validation.js";

test('입력한 이메일 주소에는 "@" 문자가 1개만 있어야 이메일 형식이다.', () => {
    expect(val.isEmail("test@email.com")).toEqual(true);
    expect(val.isEmail("test@@@email.com")).toEqual(false);
    expect(val.isEmail("testemail.com")).toEqual(false);
});

test("입력한 이메일 주소에 공백(스페이스)이 존재하면 이메일 형식이 아니다.", () => {
    expect(val.isEmail("test@email.com")).toEqual(true);
    expect(val.isEmail("te st@email.com")).toEqual(false);
});

test("입력한 이메일 주소 맨 앞에 하이픈(-)이 있으면 이메일 형식이 아니다.", () => {
    expect(val.isEmail("test@email.com")).toEqual(true);
    expect(val.isEmail("-test@email.com")).toEqual(false);
});

test("로컬파트 검사", ()=>{
    expect(val.isEmail("test@email.com")).toEqual(true);
    expect(val.isEmail("te+st@email.com")).toEqual(true);
    expect(val.isEmail("tes!t@email.com")).toEqual(false);
});

test("도메인 검사", ()=>{
    expect(val.isEmail("test@email.com")).toEqual(true);
    expect(val.isEmail("test@ema-il.com")).toEqual(true);
    expect(val.isEmail("tes!t@ema+il.com")).toEqual(false);
});