import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
	constructor(public data: Number[]) {
		super()
	}

	get length(): number {
		return this.data.length
	}

	public compare(leftIndex: number): boolean {
		return this.data[leftIndex] > this.data[leftIndex + 1]
	}

	public swap(leftIndex: number): void {
		const leftHand = this.data[leftIndex]
		this.data[leftIndex] = this.data[leftIndex + 1]
		this.data[leftIndex + 1] = leftHand
	}
}
