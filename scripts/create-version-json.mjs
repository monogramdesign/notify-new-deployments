import { writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

export async function createVersionJson() {
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)

	try {
		const versionJson = {
			timestamp: Date.now()
		}

		console.log('⏳ Creating version timestamp at public/version.json ...')

		const filepath = join(__dirname, '../public/version.json')

		await writeFile(filepath, JSON.stringify(versionJson), {
			encoding: 'utf8',
			flag: 'w+' //  open the file for reading and writing, positioning the
			//             stream at the beginning of the file. The file is
			//             created if it does not exist.
		})

		console.log(`✅ Version timestamp is now ${versionJson.timestamp}`)
	} catch (error) {
		console.error('❌ Error creating file:\n', error)
	}
}

createVersionJson()
