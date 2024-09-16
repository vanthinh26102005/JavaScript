// ## Create pattern with preserved characters
const str2 = 'I am a ^spe(ial $tring.'
console.log(str2.replace(/\^sp/, '***')) // I am a ***e(ial $tring.
console.log(str2.replace(/\(ial/, '****')) // I am a ^spe**** $tring.
console.log(str2.replace(/\$tr/, '***')) // I am a ^spe(ial ***ing.
console.log(str2.replace(/ing\./, '****')) // I am a ^spe(ial $tr****