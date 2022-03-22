import {Builder} from 'github://kwruntime/std@1.1.18/package/compiler/build.ts'
import Path from 'path'

export class Program{
	static async main(){
		let builder = new Builder({
			target:'node'
		})
		await builder.compile(Path.join(__dirname, "mod.ts"))
		await builder.writeTo(Path.join(__dirname, "..", "transpiled", "mod.js"))
	}
}