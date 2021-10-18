/*
	@target MZ
	@plugindesc Enable pixelated image rendering mode for pixel perfect scaling
	@author Galenmereth / TDD
	@help No configuration necessary
	@url https://github.com/TorD/mz-plugins
*/

/*
MIT License

Copyright (c) 2021 Tor Damian Design

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function($) {
	_Graphics = {};
	_Graphics._createCanvas = Graphics._createCanvas;
	Graphics._createCanvas = function() {
		_Graphics._createCanvas.call(this);
		this._canvas.style.imageRendering = 'pixelated';
	}

	_Graphics._updateCanvas = Graphics._updateCanvas;
	Graphics._updateCanvas = function() {
		_Graphics._updateCanvas.call(this);
		this._canvas.style.imageRendering = 'pixelated';
	};
})();