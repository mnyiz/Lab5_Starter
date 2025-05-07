// unit.test.js


import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


// TODO - Part 2
//isPhoneNumber
test('area code in paranthesis', () =>{
  expect(isPhoneNumber("(111)222-3333")).toBe(true);
})

test('correct length', () =>{
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
})

test('no dash', () =>{
  expect(isPhoneNumber("1112223333")).toBe(false);
})
 
test('incorrect length', () =>{
  expect(isPhoneNumber("1234")).toBe(false);
})

//isEmail
test('there is @ in the email address', () =>{
  expect(isEmail("1234@email.com")).toBe(true);
})

test('there is top level domain in the email address', ()=>{
  expect(isEmail("1234@email.com")).toBe(true);
})
 
test('there is no @ in the email address', () =>{
  expect(isEmail("12345678.com")).toBe(false);
})

test('there is no domain', () =>{
  expect(isEmail("1234")).toBe(false);
})

//isStrongPassword
test('valid password within length 15 chars', () =>{
  expect(isStrongPassword("HappyDay111")).toBe(true);
})

test('valid password using underscore', () =>{
  expect(isStrongPassword("A123_456")).toBe(true);
})

test('invalid password not beginning with letter', () =>{
  expect(isStrongPassword("5201314ILY")).toBe(false);
})
 
test('invlaid password length', () =>{
  expect(isStrongPassword("abc")).toBe(false);
})
 
//isDate
test('the day and month are 1 digit', () =>{
  expect(isDate("1/1/2025")).toBe(true);
})

test('the year is 4 digits', () =>{
  expect(isDate("5/10/2025")).toBe(true);
})
 
test('there is no dash', () =>{
  expect(isDate("01052000")).toBe(false);
})
 
test('the date is not in numbers', () =>{
  expect(isDate("1st June, 2025")).toBe(false);
})
 
//isHexColor
test('valid Hex format in 3 chars', () =>{
  expect(isHexColor("#aaa")).toBe(true);
})
 
test('valid Hex format in 6 chars', () =>{
  expect(isHexColor("00000f")).toBe(true);
})
 
test('invalid hex length', () =>{
  expect(isHexColor("1234")).toBe(false);
})
 
test('invalid characters', () =>{
  expect(isHexColor("!@#")).toBe(false);
})
 
 
 
 
 
 