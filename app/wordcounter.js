module.exports = {
	words: function(sentence)
	{
		var output = {};
		splitedWords = sentence.split(/\s+/);
		for(index = 0; index < splitedWords.length; index++)
		{
			var word = splitedWords[index];
			var wordOccurence = output[word];
			if (wordOccurence == null || typeof wordOccurence == "function")
				wordOccurence = 1;
			else
				wordOccurence +=1;
			output[word] = wordOccurence;
		}
		return output;
	}
}