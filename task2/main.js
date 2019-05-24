    function sortParametrs(a, b) {
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
    }


    function sortString(inputString) {
        const result = [];
        const arr = inputString.split(' ');
        const mapping = arr.map((word, index) => {
        const num = word.match(/\d+/);
            return {
                word: word,
                value: +num[0]
            }
        })
        
        mapping.sort(sortParametrs).map((word) => {
            result.push(word.word);
        });

    return result.join(' ')
    }