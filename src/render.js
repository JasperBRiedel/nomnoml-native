window.addEventListener('load', function() {
  const nomnoml = require('nomnoml')
  const fs = require('fs')
  const { remote } = require('electron')

  let diagram_source_path = remote.process.argv[remote.process.argv.length - 1]
  let canvas = document.getElementById('target')

  function render_diagram() {
    fs.readFile(diagram_source_path, (err, source) => {
      if (!err) {
        nomnoml.draw(canvas, source.toString())
      } else {
        console.log(`Failed to read source: ${err}`)
      }
    })
  }

  fs.watch(diagram_source_path, (event_type, filename) => {
    if (event_type === 'change') {
      console.log(`File change detected, updating "${filename}"`)
      render_diagram()
    }
  })

  render_diagram()
})
