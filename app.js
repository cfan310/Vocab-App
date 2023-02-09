// Input word of the day calendar words
// construct learning game
// pull words from data structure and implement API to add sentences uses 

/*
sample object

const jan1 = {
    word: '',
    partOfSpeech '',
    definition: '',
    sentence: ''       
}*/

const jan1 = {
    word: 'abinito',
    partOfSpeech: 'adverb',
    definition: 'from the beginning',
    sentence: 'Since relatives of current students were barred from serving on the school board of directors. the nomination of Mrs. Jiang was rendered void ab inito'
}

const jan2 = {
    word: 'shard',
    partOfSpeech: 'noun',
    definition: 'a sharp piece or fragment (as of glass or pottery)',
    sentence: 'There were shards of glass on the floor where the burglars had broken into the building'
}

const jan3 = {
    word: 'abdominable',
    partOfSpeech: 'adjective',
    definition: 'Worthy of or causing disgust or hatred; Detestable; Very bad or unpleasant',
    sentence: 'The children were punished for their abdominable treatment of the babysitter'       
}


console.log(JSON.stringify(jan3));

console.log(jan1.entries());