Synth instanceof AudioSynth;

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth;

testInstance === Synth;

var piano = Synth.createInstrument('piano');
piano.play('C', 4, 30);