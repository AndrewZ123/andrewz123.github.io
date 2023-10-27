function generateBibleHubLink() {
    const verseAddress = document.getElementById('verseAddress').value;
    const [book, chapter, verse] = verseAddress.split(' ');

    if (book && chapter && verse) {
        const formattedBook = book.toLowerCase();
        const bibleHubLink = `https://biblehub.com/commentaries/${formattedBook}/${chapter}-${verse}.htm`;
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<a href="${bibleHubLink}" target="_blank">${bibleHubLink}</a>`;
    } else {
        alert("Please enter a valid verse address.");
    }
}
