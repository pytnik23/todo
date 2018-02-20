const removeSpaces = str => str.replace(/\s+$/g, '');

export const getParsedText = str => {
    let text = '';
    let tags = '';

    const index = str.indexOf(' #');

    if (index !== -1) {
        text = str.slice(0, index);
        tags = str.split(' #').slice(1);
    } else {
        text = str;
    }

    return {
        text: removeSpaces(text),
        tags: tags ? tags.map(t => removeSpaces(t)) : tags
    };
}
