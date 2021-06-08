import Context from './Context';
import ConcreteStateA from './ConcreteStateA ';
/**
 * state 模式
 * 
 * 首先要求在client code要有一个context，这个context要有一个state；
 * client code 要context做一些操作，然后具体操作的下面是有state进行处理
 * 有因为state里会有context和其他的state，那么state在处理state过度的时候
 * 重新设置了context的state。
 */
const context = new Context(new ConcreteStateA());
context.request1()
context.request2()

