import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * # ```<audio-track-progress>```
 *
 * Renders a timer component displaying track progress and duration
 *
 * ## Usage
 * ````
 * <audio-track-progress [audioTrack]="track"></audio-track-progress>
 * ````
 *
 * @element audio-track-progress
 * @parents audio-track
 * @export
 * @class AudioTrackProgressComponent
 */
var AudioTrackProgressComponent = (function () {
    function AudioTrackProgressComponent() {
    }
    return AudioTrackProgressComponent;
}());
export { AudioTrackProgressComponent };
AudioTrackProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'audio-track-progress',
                template: '<em *ngIf="audioTrack.duration > 0">{{audioTrack.progress | audioTime}} / </em><em>{{audioTrack.duration | audioTime}}</em>'
            },] },
];
/** @nocollapse */
AudioTrackProgressComponent.ctorParameters = function () { return []; };
AudioTrackProgressComponent.propDecorators = {
    'audioTrack': [{ type: Input },],
};
/**
 * # ```<audio-track-progress-bar>```
 *
 * Renders a progress bar with optional timer, duration and progress indicator
 *
 * ## Usage
 * ````
 *  <audio-track-progress-bar duration progress [audioTrack]="audio"></audio-track-progress-bar>
 * ````
 *
 * @element audio-track-progress-bar
 * @parents audio-track
 * @export
 * @class AudioTrackProgressBarComponent
 */
var AudioTrackProgressBarComponent = (function () {
    function AudioTrackProgressBarComponent() {
        this.onFinish = new EventEmitter();
    }
    Object.defineProperty(AudioTrackProgressBarComponent.prototype, "progress", {
        get: function () {
            return this._showProgress;
        },
        /**
         * Input property indicating whether to display track progress
         *
         * @property @Input() progress
         * @type {boolean}
         */
        set: function (value) {
            this._showProgress = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackProgressBarComponent.prototype, "duration", {
        get: function () {
            return this._showDuration;
        },
        /**
         * Input property indicating whether to display track duration
         *
         * @property @Input() duration
         * @type {boolean}
         */
        set: function (value) {
            this._showDuration = true;
        },
        enumerable: true,
        configurable: true
    });
    AudioTrackProgressBarComponent.prototype.seekTo = function (value) {
        console.log("Seeking to", value);
        if (!Number.isNaN(value))
            this.audioTrack.seekTo(value);
    };
    AudioTrackProgressBarComponent.prototype.ngOnChanges = function (changes) {
        console.log("ngOnChanges", changes);
        if (changes.audioTrack.firstChange)
            return;
        // stop old track just in case
        var oldTrack = changes.audioTrack.previousValue;
        if (oldTrack)
            oldTrack.stop();
    };
    AudioTrackProgressBarComponent.prototype.ngDoCheck = function () {
        if (this.audioTrack && this.audioTrack.isFinished) {
            this.onFinish.emit(this.audioTrack);
        }
    };
    return AudioTrackProgressBarComponent;
}());
export { AudioTrackProgressBarComponent };
AudioTrackProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'audio-track-progress-bar',
                template: "\n    <time *ngIf=\"_showProgress\"><span *ngIf=\"audioTrack\" [style.opacity]=\"audioTrack.duration > 0 ? 1 : 0\">{{audioTrack.progress | audioTime}}</span></time>\n    <input type=\"range\" #seeker min=\"0\" [max]=\"audioTrack ? audioTrack.duration : 0\" step=\"any\" [value]=\"audioTrack ? audioTrack.progress : 0\" (change)=\"seekTo(seeker.value)\">\n    <time *ngIf=\"_showDuration\"><span *ngIf=\"audioTrack\" [style.opacity]=\"audioTrack.duration > 0 ? 1 : 0\">{{audioTrack.duration | audioTime}}</span></time>\n    "
            },] },
];
/** @nocollapse */
AudioTrackProgressBarComponent.ctorParameters = function () { return []; };
AudioTrackProgressBarComponent.propDecorators = {
    'audioTrack': [{ type: Input },],
    'onFinish': [{ type: Output },],
    'progress': [{ type: Input },],
    'duration': [{ type: Input },],
};
//# sourceMappingURL=ionic-audio-track-progress-component.js.map