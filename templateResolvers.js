const chords = require('./chords.json')
const scales = require('./scales.json')

module.exports = {
  chords_by_name() {
    return Object.keys(chords).map((key) => {
      const notes = chords[key].root_transposed_to_zero.join(', ')

      return `[${notes}] @=> chordsByName["${key}"];`
    }).join('\n')
  },
  scales_by_name() {
    return Object.keys(scales).map((key) => {
      const scale = scales[key]
      const adjacent = scale.adjacent_scales.
        map(s => `"${s}"`).join(', ')
      const chordSubsets = scale.chord_subsets.
        map(s => `"${s}"`).join(', ')
      const pitches = scale.pitch_classes.join(', ')
      return `
      new ScaleObject @=> scales["${key}"];
      "${key}" => scales["${key}"].name;
      ${scale.root} => scales["${key}"].root;
      [${adjacent}] @=> scales["${key}"].adjacent;
      [${chordSubsets}] @=> scales["${key}"].chords;
      [${pitches}] @=> scales["${key}"].pitches;
      "${scale.scale_class}" @=> scales["${key}"].scaleClass;
    `
    }).join('\n')
    return `
      new ScaleObject @=> scales[]
    `
  }
}

