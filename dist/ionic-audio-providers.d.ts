import { IAudioProvider, ITrackConstraint, IAudioTrack } from './ionic-audio-interfaces';
import { WebAudioTrack } from './ionic-audio-web-track';
import { CordovaAudioTrack } from './ionic-audio-cordova-track';
/**
 * Creates an audio provider based on the environment.
 * If running from within a browser, then defaults to HTML5 Audio. If running on a device, it will check for Cordova and Media plugins and use
 * a native audio player, otherwise falls back to HTML5 audio.
 *
 * @method factory
 * @static
 * @return {IAudioProvider} An IAudioProvider instance
 */
export declare function defaultAudioProviderFactory(): CordovaMediaProvider | WebAudioProvider;
/**
 * Base class for audio providers
 *
 * @export
 * @abstract
 * @class AudioProvider
 * @implements {IAudioProvider}
 */
export declare abstract class AudioProvider implements IAudioProvider {
    protected static tracks: IAudioTrack[];
    protected _current: number;
    public static _currentTrack:any;
    constructor();
    /**
     * Creates an IAudioTrack instance from a JSON object.
     * Not implemented in base class.
     *
     * @method create
     * @param {ITrackConstraint} track A JSON object containing at least a src property
     * @return null
     */
    create(track: ITrackConstraint): any;
    /**
     * Replaces track with a new one
     * @param oldAudioTrack
     * @param newTrack
     */
    replace(oldAudioTrack: IAudioTrack, newTrack: ITrackConstraint): IAudioTrack;
    /**
     * Adds an existing IAudioTrack instance to the array of managed tracks.
     *
     * @method add
     * @param {IAudioTrack} audioTrack An instance of IAudioTrack
     */
    add(audioTrack: IAudioTrack): void;
    /**
     * Plays a given track.
     *
     * @method play
     * @param {number} index The track id
     */
    play(index: number): void;
    /**
     * Pauses a given track.
     *
     * @method pause
     * @param {number} [index] The track id, or if undefined it will pause whichever track currently playing
     */
    pause(index?: number): void;
    /**
     * Stops a given track.
     *
     * @method stop
     * @param {number} [index] The track id, or if undefined it will stop whichever track currently playing
     */
    stop(index?: number): void;
    /**
     * Gets an array of tracks managed by this provider
     *
     * @property tracks
     * @readonly
     * @type {IAudioTrack[]}
     */
    readonly tracks: IAudioTrack[];
    /**
     * Gets current track id
     *
     * @property current
     * @type {number}
     */
    /**
     * Sets current track id
     *
     * @property current
     */
    current: number;
}
/**
 * Creates an HTML5 audio provider
 *
 * @export
 * @class WebAudioProvider
 * @constructor
 * @extends {AudioProvider}
 */
export declare class WebAudioProvider extends AudioProvider {
    constructor();
    create(track: ITrackConstraint): WebAudioTrack;
    replace(oldAudioTrack: IAudioTrack, newTrack: ITrackConstraint): IAudioTrack;
}
/**
 * Creates a Cordova audio provider
 *
 * @export
 * @class CordovaMediaProvider
 * @constructor
 * @extends {AudioProvider}
 */
export declare class CordovaMediaProvider extends AudioProvider {
    constructor();
    create(track: ITrackConstraint): CordovaAudioTrack;
    replace(oldTrack: IAudioTrack, newTrack: ITrackConstraint): IAudioTrack;
}
