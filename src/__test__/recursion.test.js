'use strict';

const LinkedList = require('../lib/linked-list');

const testList = new LinkedList();
const emptyTestList = new LinkedList();

for (let i = 0; i < 5; i++) {
  testList.addNode(i);
}

describe('Testing the removeOffset method from linked-list.js', () => {
  test('Testing successful removal of two nodes', () => {
    testList.removeOffset(testList.head, 2);
    expect(testList.head.next.next.value).toEqual(2);
  });
  test('Testing error when linked list is empty', () => {
    const emptyTry = emptyTestList.removeOffset(emptyTestList.head, 2);
    expect(emptyTry).toEqual(undefined);
  });
  test('Testing error when offset is less than 0', () => {
    const negativeOffsetTry = testList.removeOffset(testList.head, -2);
    expect(negativeOffsetTry).toEqual(undefined);
  });
});
