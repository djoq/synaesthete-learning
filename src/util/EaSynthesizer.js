/* eslint-disable */
export default class EaSynthesizer {
  /**
   * Generate audioContext required
   * Key detune range to set all tone eyboard values
   * @param {[String]} oscType [type of wave It can be sine, triangle, square, sawtooth]
   */
  constructor(oscType) {
    /**
     * C1 note herzios value
     * @type {Number}
     */
    this.C1_HZ_VALUE = 32.7;

    /**
     * The audio stream output
     * @type {Object}
     */
    this.audioContext = new AudioContext();

    /**
     * Oscillator
     * @type {[Object]}
     */
    this.oscillator = undefined;

    /**
     * The volume control
     * @type {[Object]}
     */
    this.gainNode = undefined;

    /**
     * Type of wave
     * @type {[String]}
     */
    this.oscillatorType = oscType;

    /**
     * All name keys of the keyboard
     * @type {Array}
     */
    this.keyRange = [
      "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1",
      "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
      "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
      "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
      "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5"
    ];

    /**
     * Detune value in cents to match with Hz value
     * @type {[Array]}
     */
    this.detuneRange = this.keyRange.reduce(function(result, item, index) {
      result[item] = index * 100;
      return result;
    }, {});
  }

  /**
   * [playTone description]
   * @param  {[type]} tone [description]
   * @return {[type]}      [description]
   */
  playTone(tone) {
    this.createDevices();
    this.setTone(tone);
    this.setOscillatorType(this.oscillatorType);
    this.connectDevices();
    this.setGainNode(1);
    this.oscillator.start(this.audioContext.currentTime);
    this.fxFadeOut(2);
  }

  /**
   * [stopTone description]
   * @param  {[type]} tone [description]
   * @return {[type]}      [description]
   */
  stopTone() {
    console.log(this.oscillator);
    this.oscillator.stop(this.audioContext.currentTime);
  }

  /**
   * Api audio needs to create entities every plays in order to maintain performance
   */
  createDevices() {
    this.gainNode = this.audioContext.createGain();
    this.oscillator = this.audioContext.createOscillator();
  }

  /**
   * Connect devices  OSC => GAIN(VOL) => AUDIO OUTPUT (AUDIO CONTEXT)
   */
  connectDevices() {
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
  }

  /**
   * Set the tone/frequency of osc
   * C1 herzios http://pages.mtu.edu/~suits/notefreqs.html
   */
  setTone(tone) {
    this.oscillator.frequency.value = this.C1_HZ_VALUE;
    this.oscillator.detune.value = this.detuneRange[tone];
  }

  /**
   * [setOscillatorType description]
   * @param {[String]} oscType [It can be sine, triangle, square, sawtooth]]
   */
  setOscillatorType(oscType) {
    this.oscillator.type = oscType;
  }

  /**
   * [setGainNode description]
   * @param {[Number]} value [from 0 to 1]
   */
  setGainNode(value) {
    this.gainNode.gain.setValueAtTime(value, this.audioContext.currentTime);
  }

  /**
   * Set fade out release sound properties from 1 to 0 and finally stop it
   * @param  {[Number]} length [number of seconds]
   */
  fxFadeOut(length) {
    this.gainNode.gain.linearRampToValueAtTime(
      0,
      this.audioContext.currentTime + length
    );
    this.oscillator.stop(this.audioContext.currentTime + length);
  }
}
