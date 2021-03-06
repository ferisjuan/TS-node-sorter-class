import { LinkedList } from './LinkedList'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([3, 2, 5, -2, 0])
const characterCollection = new CharactersCollection('JakslemrTjskale')

const linkedListCollection = new LinkedList()
linkedListCollection.add(500)
linkedListCollection.add(200)
linkedListCollection.add(-29)
linkedListCollection.add(5)

numbersCollection.sort()
console.log(numbersCollection.data)

characterCollection.sort()
console.log(characterCollection.data)

linkedListCollection.sort()
linkedListCollection.print()
