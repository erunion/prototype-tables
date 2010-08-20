/*
 *	prototype-tables, version 0.1
 *	(c) 2007 Jon Ursenbach <jon@ursenba.ch>
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:
 *
 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *	SOFTWARE.
 */

var prototypeTables = Class.create();
prototypeTables.prototype = {
	initialize: function(tag, option, parent_id) {
		this.tag = tag;
 		this.element = this.create('element', this.tag);

		if (option != null) {
			this.option = option;

			if (this.option.classes && this.option.classes != undefined) {
				this.processClasses(this.element, this.option.classes);
			}

			if (this.option.styles && this.option.styles != undefined) {
				this.processStyles(this.element, this.option.styles);
			}

			if (this.option.attributes && this.option.attributes != undefined) {
				this.processAttributes(this.element, this.option.attributes);
			}

			if (this.option.add_text && this.option.add_text != undefined) {
				this.addText(this.option.add_text, null);
			}
		}

		if (parent_id != null) {
			this.parent_id = parent_id;

			if (this.parent_id != null) {
				this.appendElement(this.parent_id, this.element);
			}
		}

		return this.element;
	},

	create: function(elementType, insert) {
		if (elementType == 'element') {
			return document.createElement(insert);
		} else if (elementType == 'text') {
			return document.createTextNode(insert);
		}
	},

	appendElement: function(element, append) {
		if (append == null) {
			element = this.element;
		}

		var elementType = typeof(element);

		element = $(element);
		element.appendChild(append);

		return element;
	},

	processStyles: function(element, styles) {
 		if (styles != null) {
			element.setStyle(styles);
			return element;
 		}
	},

	processClasses: function(element, classes) {
		if (classes != null) {
			element.addClassName(classes);
			return element;
		}
	},

	processAttributes: function(element, attributes) {
		if (attributes != null) {
			for (var attr in attributes) {
				element.setAttribute(attr, attributes[attr]);
			}

			return element;
		}
	},

  addText: function(textToAdd, option) {
    this.element.innerHTML = textToAdd;
    return this.element;
  }
}
