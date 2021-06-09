import Caretaker from "./Caretaker";
import Originator from "./Originator";

/**
 * 客户端使用originator和Caretaker
 * Caretaker会内置originator
 * originator做一些逻辑改变了状态
 * client调用Caretaker进行备份
 * 在必要的时候Caretaker进行恢复
 */
const originator = new Originator('superrrrrrrrrr');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomeThing();
caretaker.backup();
originator.doSomeThing();
caretaker.backup();
originator.doSomeThing();
console.log('');
caretaker.showHistory();

console.log('\nClient: Now, let\'s rollback!\n');
caretaker.undo();

console.log('\nClient: Once more!\n');
caretaker.undo();
