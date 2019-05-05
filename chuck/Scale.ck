public class Scale {
  ScaleData data;
  string _current;  

  int root;
  string adjacent[0];

  int chordObj[0][0];
  int chordArr[0][0];

  fun void set(string name) {
    name => _current;
    data.scales[_current].root => root;
    data.scales[_current].adjacent @=> adjacent;
    0 => chordArr.size;
    data.scales[_current].chords.size() => chordArr.size;
    for ( int i; i < data.scales[_current].chords.size(); i++ ) {
      data.scales[_current].chords[i] => string name;
      data.chordsByName[name] @=> chordObj[name]; 
      data.chordsByName[name] @=> chordArr[i];
    }
  }


  set("c_diatonic");
  
}
