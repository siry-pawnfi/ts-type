import { readdir, rename } from 'fs/promises';

function updateIndex(data) {
  let partten = /(\d+)(\-.+)/
  let temp = data.map(val => {
    return val.replace(partten, (match, p1, p2) => {
      console.log(match)
      if (p1.length < 5) {
        return '0'.repeat(5 - p1.length) + p1 + p2
      } else {
        return match
      }
    })

  })

  temp.forEach((val, idx) => {
    createNewName('./src/' + data[idx], './src/' + val);
  })
}

async function createNewName(oldPath, newPath) {
  try {
    const status = await rename(oldPath, newPath)
  } catch (err) {
    console.error(err);
  }
}


async function readFiles() {

  try {
    const files = await readdir('./src');
    // for (const file of files)
    //   console.log(file);
    updateIndex(files)
  } catch (err) {
    console.error(err);
  }
}

readFiles()