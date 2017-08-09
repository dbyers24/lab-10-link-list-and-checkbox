'use strict';

const expect = require('expect');
const SLL = require('../index.js');

describe('Testing linkedlist', () => {
  describe('testing appendNode', () => {
    it('should return 3 as the value of the head', () => {
      let nodeHead = new SLL(3);
      nodeHead.appendNode(new SLL(23));
      expect(nodeHead.value).toEqual(3);
    });
    it('should return 112 as the value of the last node', () => {
      let nodeHead = new SLL(3);
      nodeHead.appendNode(new SLL(12));
      nodeHead.appendNode(new SLL(56));
      nodeHead.appendNode(new SLL(112));
      expect(nodeHead.next.next.next.value).toEqual(112);
    });
    it('should return null', () => {
      let nodeHead = new SLL(3);
      nodeHead.appendNode(new SLL(12));
      expect(nodeHead.next.next).toEqual(null);
    });
  });

  describe('testing remove', () => {
    it('should return 22 as the value of the new head', () => {
      let nodeHead = new SLL(11);
      nodeHead.appendNode(new SLL(22));
      nodeHead.appendNode(new SLL(33));
      nodeHead.remove(nodeHead);
      expect(nodeHead.value).toEqual(22);
    });
    it('should return 33', () => {
      let nodeHead = new SLL(32);
      nodeHead.appendNode(new SLL(12));
      nodeHead.appendNode(new SLL(33));
      nodeHead.remove(nodeHead);
      expect(nodeHead.next.value).toEqual(33);
    });
    it('should return null', () => {
      let nodeHead = new SLL(3);
      nodeHead.appendNode(new SLL(33));
      nodeHead.appendNode(new SLL(12));
      nodeHead.remove(nodeHead);
      expect(nodeHead.next.next.next).toEqual(null);
    });
  });
});
