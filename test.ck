<<<"Running test program">>>;

Scale scale;
scale.set("a_harmonic_minor");
SinOsc s => Envelope e => dac;
0.9 => s.gain;

50 => int offset;

for( int i; i < scale.chordArr.size(); i++ )  {
  for( int j; j < scale.chordArr[i].size(); j++ ) {
    Std.mtof(scale.chordArr[i][j] + offset) => s.freq;
    e.keyOn();
    50::ms => now;
    e.keyOff();
    50::ms => now;
  }
}

