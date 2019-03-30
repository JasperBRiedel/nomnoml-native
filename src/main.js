const { app, BrowserWindow, ipcMain } = require('electron')
const nomnoml = require('nomnoml')
const fs = require('fs')
const process = require('process')

app.on('ready', function() {
  let source_path = process.argv[2]

  if (typeof source_path !== 'string') {
    console.error('Usage: nomnoml-native PATH')
    process.exit(1)
  }

  fs.stat(source_path, (err, stats) => {
    if (!err && stats.isFile()) {
      let window = new BrowserWindow({ width: 800, height: 600 })
      window.setMenuBarVisibility(false)

      window.loadFile('src/index.html')
    } else {
      console.error('Failed to load file:', err)
    }
  })
})
