"use strict";

class TypingEffect {
    constructor(elementId, textToType, baseString, typingSpeed, iterations_offset, domDocument, windowElement) {
        this.elementId = elementId;
        this.textToType = textToType;
        this.baseString = baseString;
        this.originalBaseString = baseString;
        this.typingSpeed = typingSpeed;
        this.domDocument = domDocument;
        this.windowElement = windowElement;
        this.timeoutMethod = null;
        this.iteration = 0;
        this.iterations_offset = iterations_offset;
        this.pause = ms => new Promise(resolve => setTimeout(resolve, ms));
    }


    async typeWriter() {
        if(this.textToType){
            console.log(this.textToType.length);
            console.log(this.iteration);
            if(this.iteration < this.textToType.length) {
                this.domDocument.getElementById(this.elementId).innerHTML = this.baseString = this.setCharAt(
                    this.baseString,
                    this.iteration,
                    this.textToType.charAt(this.iteration)
                );
                this.iteration++;
            }
            if( this.iteration >= this.textToType.length && this.iteration < this.textToType.length + this.iterations_offset){
                this.iteration++;
            }           
            if(this.iteration >= this.textToType.length + this.iterations_offset){
                await this.pause(10);
                this.domDocument.getElementById(this.elementId).innerHTML = this.originalBaseString;
                this.baseString = this.originalBaseString;
                this.iteration = 0;
            }
            setTimeout(()=>{this.typeWriter()}, this.typingSpeed);
        }
    }

    setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }
}

export {TypingEffect}